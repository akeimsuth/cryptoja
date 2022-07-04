import { FC, useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import CoinGeckoApi from '@crypto-coffee/coingecko-api';
import { auth } from "../../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ConfirmationModal from "./ConfirmationModal";
import { createTransaction, getTransaction } from "../services/TransactionService";
import { getUser } from "../services/UserService";

const QuickBuySell: FC<{ name?: string; color?: string; }> = ({
  name,
  color
}) => {
  const [show, setShow] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [userDetails, setUserDetails] = useState<any>();
  const [coin, setCoin] = useState<any>();
  const [coinSymbol, setCoinSymbol] = useState<any>('BTC');
  const [coinAmount, setCoinAmount] = useState<any>();
  const [altCoins, setAltCoins] = useState<any>();
  const [title, setTitle] = useState<any>('Buy');
  const [activeTab, setActiveTab] = useState<any>({
      tab1: 'active',
      tabContent1: 'show active',
      tab2: '',
      tabContent2: ''
  });
  const [btcAmount, setBtcAmount] = useState<any>(1);
  const [usBtcAmount, setUsBtcAmount] = useState<any>();
  const [currency, setCurrency] = useState<any>("jmd");
  const [user, loading] = useAuthState(auth);
  const [formData, setFormData] = useState<any>({
    usd: "",
    btc: ""
  });
  const { usd, btc } = formData;


  const onChange = (e: any) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const quickBuy = (wallet: any) => {
    if (user) {
      createTransaction(user?.uid, {
        "coinCurrency": coinSymbol,
        "coinAmount": formData.btc,
        "currency": currency,
        "amount": formData.usd,
        "type": title,
        "user": userDetails,
        "wallet": wallet,
      })
      .then( res => {
        console.log(res);
        // toast.success("Purchase Successful!");
      })
      .catch(err => {
        console.log(err);
        // toast.error("Purchase Failed!")
      })
    }
  }

  const showTransactions = () => {
    if (user) {
      getTransaction(user.uid)
      .then(res => {
        console.log(res);
        setTransactions(res.data)
      })
      .catch(err => console.log(err))
    }
  }

  const switchTab = (e: any) => {
      e.preventDefault();
      console.log(e.target.id);
      if (e.target.id === "tab1"){
          setActiveTab({
              tab1: 'active',
              tabContent1: 'show active',
              tab2: '',
              tabContent2: ''
          })
      } else {
        setActiveTab({
            tab1: '',
            tabContent1: '',
            tab2: 'active',
            tabContent2: 'show active'
        })
      }
      console.log(activeTab);
  }

  useEffect(() => {
    if (currency === "jmd" && title === "Buy") {
      setFormData({ ...formData, btc: ((parseFloat(formData.usd) / (coinAmount)) - ((parseFloat(formData.usd) / (coinAmount)) * 0.15)).toString() });
      console.log(formData)
    } else if (currency === "jmd" && title === "Sell") {
      setFormData({ ...formData, usd: ((parseFloat(formData.btc) * coinAmount) - ((parseFloat(formData.btc) * coinAmount) * 0.15)).toString() })
    } else if (currency === "usd" && title === "Sell") {
      setFormData({ ...formData, usd: ((parseFloat(formData.btc) * btcAmount) - ((parseFloat(formData.btc) * btcAmount) * 0.15)).toString() })
    } else if (currency === "usd" && title === "Buy") {
      setFormData({ ...formData, btc: ((parseFloat(formData.usd) / (btcAmount)) - ((parseFloat(formData.usd) / (btcAmount)) * 0.15)).toString() });
    } 
    // else {
    //   setFormData({ ...formData, btc: (parseFloat(formData.usd) / btcAmount).toString() });
    // }
    else if (formData.usd === "") {
      setFormData({ ...formData, btc: ""})
    }
    else if (formData.btc === ""  && title === "Sell") {
      setFormData({ ...formData, usd: ""})
    }
  }, [currency, usd, btc, coinSymbol])

  const generateCoin = async() => {
    try {
      const coinGeckoApi = new CoinGeckoApi()
      const results = await coinGeckoApi.simple({
        ids: ['Bitcoin', 'Ethereum', 'Dogecoin', 'Litecoin', 'Cardano', 'BNB'],
        vs_currencies: 'usd'
      })
      console.log(results)
      const calCost = parseFloat(results.bitcoin.usd) * 148;
      const resUSD = parseFloat(results.bitcoin.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      const res = calCost.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      setCoin(res)
      setCoinAmount(calCost);
      setUsBtcAmount(resUSD);
      setBtcAmount(results.bitcoin.usd);
      setAltCoins({
        bitcoin: results.bitcoin.usd,
        ethereum: results.ethereum.usd,
        litecoin: results.litecoin.usd,
        cardano: results.cardano.usd,
        dogecoin: results.dogecoin.usd
      })
    } catch (err) {
      // do something with the error
    }
  }

  const changeCoins = (e: any) => {
    switch (e.target.value) {
      case "bitcoin":
        setCoinSymbol('BTC')
        setCoinAmount(altCoins?.bitcoin * 148)
        setBtcAmount(altCoins?.bitcoin);
        break;
        case "ethereum":
          setCoinSymbol('ETH')
          setCoinAmount(altCoins?.ethereum * 148)
          setBtcAmount(altCoins?.ethereum);
          break;
        case "dogecoin":
          setCoinSymbol('DOGE')
          setCoinAmount(altCoins?.dogecoin * 148)
          setBtcAmount(altCoins?.dogecoin);
          break;
        case "litecoin":
          setCoinSymbol('LTC')
          setCoinAmount(altCoins?.litecoin * 148)
          setBtcAmount(altCoins?.litecoin);
          break;
        case "cardano":
          setCoinSymbol('ADA')
          setCoinAmount(altCoins?.cardano * 148)
          setBtcAmount(altCoins?.cardano);
          break;
      default:
        break;
    }
  }

  const changeCurrency = (e: any) => {
    switch (e.target.value) {
      case "jmd":
        setCurrency("jmd");
        break;
        case "usd":
          setCurrency("usd");
          break;
      default:
        break;
    }
  }

  const showUserDetails = () => {
    if (user) {
      getUser(user.uid)
      .then(res => setUserDetails(res.data))
      .catch(error => console.log(error))
    }
  }

  useEffect(() => {
    showTransactions();
    showUserDetails();
  },[user])

  useEffect(() => {
    generateCoin();
  },[user])

  useEffect(() => {
    setFormData({
      usd:"",
      btc:""
    })
  },[title])

  const val = {coinAmount: formData.btc, dollarAmount: formData.usd, type: title, symbol: coinSymbol, currency: currency}

  return (
    <div className="card">
      <Toaster/>
      <ConfirmationModal show={show} close={setShow} purchase={quickBuy} values={val} reload={showTransactions} />
      <div className="card-header">
        {/* <h4 className="card-title">Quick Buy</h4>
        <h4 className="card-title">/</h4>
        <h4 className="card-title">Quick Sell</h4> */}
        <ul  className="nav nav-pills nav-fill" role="tablist">
			<li className="nav-item" onClick={(e) => {
                setTitle("Buy");
                switchTab(e);
                }}>
            <a id="tab1" className={`nav-link ${activeTab?.tab1}`} href="#1a" data-bs-toggle="pill" data-bs-target="#1a" type="button" role="tab">Quick Buy</a>
			</li>
			<li className="nav-item" onClick={(e) => {
                setTitle("Sell");
                switchTab(e);
                }}>
                <a id="tab2" className={`nav-link ${activeTab?.tab2}`} href="#2a" data-bs-toggle="pill" data-bs-target="#2a" type="button" role="tab">Quick Sell</a>
			</li>
		</ul>
      </div>
      
      <div className="tab-content">
        <div className={`card-body tab-pane fade ${activeTab?.tabContent1}`} id="1a" role="tabpanel">
            <form
            onSubmit={(e) => {
                e.preventDefault();
                if (formData.btc !== "" && formData.usd !== ""){
                setShow(true);
                } else {
                toast.error("Please enter an amount")
                }
                // quickBuy();
            }}
            className="currency_validate trade-form row g-3"
            >
            <div className="col-12">
                <label className="form-label">Send</label>
                <div className="input-group">
                <select className="form-control" name="method" onChange={(e) => changeCurrency(e)}>
                    <option value="jmd">JMD</option>
                    <option value="usd">USD</option>
                </select>
                <input
                    type="number"
                    name="usd"
                    min="100"
                    className="form-control"
                    // placeholder={`${coin} USD`}
                    value={usd}
                    onChange={(e) => onChange(e)}
                />
                </div>
            </div>

            <div className="col-12">
                <label className="form-label">Receive</label>
                <div className="input-group">
                <select className="form-control" name="method" onChange={(e) => changeCoins(e)}>
                    <option value="bitcoin">BTC</option>
                    <option value="ethereum">ETH</option>
                    <option value="litecoin">LTC</option>
                    <option value="cardano">ADA</option>
                    <option value="dogecoin">DOGE</option>
                </select>
                <input
                    disabled
                    type="number"
                    name="btc"
                    className="form-control"
                    // placeholder="1 BTC"
                    value={btc}
                    onChange={(e) => onChange(e)}
                />
                </div>
            </div>

            <p className="mb-0">
            <strong>{`1 BTC ~ $${coin} JMD `}</strong><br/>
            {`1 BTC ~ $${usBtcAmount} USD `}
                <a href="#">
                Estimated rate <br />
                </a>
            </p>

            <input
                type="submit"
                className={`btn btn-${color ? color : "success"} btn-block`}
                value={`${title} Now`}
            />
            </form>
        </div>
      <div className={`card-body tab-pane fade ${activeTab?.tabContent2}`} id="2a" role="tabpanel">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (formData.btc !== "" && formData.usd !== ""){
              setShow(true);
            } else {
              toast.error("Please enter an amount")
            }
            // quickBuy();
          }}
          className="currency_validate trade-form row g-3"
        >
        <div className="col-12">
            <label className="form-label">Send</label>
            <div className="input-group">
              <select className="form-control" name="method" onChange={(e) => changeCoins(e)}>
                <option value="bitcoin">BTC</option>
                <option value="ethereum">ETH</option>
                <option value="litecoin">LTC</option>
                <option value="cardano">ADA</option>
                <option value="dogecoin">DOGE</option>
              </select>
              <input
                type="number"
                name="btc"
                className="form-control"
                // placeholder="1 BTC"
                value={btc}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="col-12">
            <label className="form-label">Receive</label>
            <div className="input-group">
              <select className="form-control" name="method" onChange={(e) => changeCurrency(e)}>
                <option value="jmd">JMD</option>
                <option value="usd">USD</option>
              </select>
              <input
                type="number"
                name="usd"
                min="100"
                disabled
                className="form-control"
                // placeholder={`${coin} USD`}
                value={usd}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>



          <p className="mb-0">
          {`1 BTC ~ $${coin} JMD `}
            <a href="#">
              Estimated rate <br />
            </a>
          </p>

          <input
            type="submit"
            className={`btn btn-${color ? color : "success"} btn-block`}
            value={`${title} Now`}
          />
        </form>
      </div>
      </div>
    </div>
  );
};

export default QuickBuySell;
