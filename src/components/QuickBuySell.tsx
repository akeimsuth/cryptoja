import { FC, useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import CoinGeckoApi from '@crypto-coffee/coingecko-api';
import { auth } from "../../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ConfirmationModal from "./ConfirmationModal";
import { createTransaction, getTransaction } from "../services/TransactionService";

const QuickBuySell: FC<{ name?: string; color?: string; }> = ({
  name,
  color
}) => {
  const [show, setShow] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [coin, setCoin] = useState<any>();
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
  const [formData, setFormData] = useState({
    usd: "",
    btc: ""
  });
  const { usd, btc } = formData;

  // useEffect(() => {
  //   setFormData({ ...formData, btc: calculatePercent().toString() });
  //   if (formData.usd === "") {
  //     setFormData({ ...formData, btc: ""})
  //   }
  // }, [formData.usd])

  const calculatePercent = () => {
    if (title === 'Buy'){
      return (parseFloat(formData.usd) / (btcAmount*148)) - ((parseFloat(formData.usd) / (btcAmount*148)) * 0.15)
    }
    return parseFloat(formData.usd) / btcAmount
  }

  const onChange = (e: any) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const quickBuy = (wallet: any) => {
    if (user) {
      createTransaction(user?.uid, {
        "coinCurrency": "btc",
        "coinAmount": formData.btc,
        "amount": formData.usd,
        "type": name,
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
    if (currency === "jmd") {
      setFormData({ ...formData, btc: (parseFloat(formData.usd) / coinAmount).toString() });
    } else {
      setFormData({ ...formData, btc: (parseFloat(formData.usd) / btcAmount).toString() });
    }
    if (formData.usd === "") {
      setFormData({ ...formData, btc: ""})
    }
  }, [currency, formData.usd, btcAmount])

  const generateCoin = async() => {
    try {
      const coinGeckoApi = new CoinGeckoApi()
      const results = await coinGeckoApi.simple({
        ids: ['Bitcoin', 'Ethereum', 'Binance Coin', 'XRP'],
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
        // binance: results.binance.usd,
        // xrp: results.xrp.usd
      })
    } catch (err) {
      // do something with the error
    }
  }

  const changeCoins = (e: any) => {
    switch (e.target.value) {
      case "bitcoin":
        setCoinAmount(altCoins?.bitcoin * 148)
        setBtcAmount(altCoins?.bitcoin);
        break;
        case "ethereum":
          setCoinAmount(altCoins?.ethereum * 148)
          setBtcAmount(altCoins?.ethereum);
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

  useEffect(() => {
    generateCoin();
    showTransactions();
  },[user])

  const val = {coinAmount: formData.btc, dollarAmount: formData.usd, type: title}

  return (
    <div className="card">
      <Toaster/>
      <ConfirmationModal show={show} close={setShow} purchase={quickBuy} values={val} />
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
                </select>
                <input
                    type="text"
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
            <label className="form-label">Receive</label>
            <div className="input-group">
              <select className="form-control" name="method">
                <option value="bank">USD</option>
                <option value="master">JMD</option>
              </select>
              <input
                type="number"
                name="usd"
                min="100"
                className="form-control"
                placeholder={`${coin} USD`}
                value={usd}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">Send</label>
            <div className="input-group">
              <select className="form-control" name="method">
                <option value="bank">BTC</option>
                <option value="master">ETH</option>
              </select>
              <input
                type="text"
                name="btc"
                className="form-control"
                placeholder="1 BTC"
                value={btc}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <p className="mb-0">
          {`1 BTC ~ $${coin} USD `}
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