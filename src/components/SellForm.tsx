import { FC, useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import CoinGeckoApi from '@crypto-coffee/coingecko-api';
import { auth } from "../../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ConfirmationModal from "./ConfirmationModal";
import { createTransaction, getTransaction } from "../services/TransactionService";

const SellForm: FC<{ name?: string; color?: string; title?: string }> = ({
  name,
  color,
  title
}) => {
  const [show, setShow] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [coin, setCoin] = useState<any>();
  const [btcAmount, setBtcAmount] = useState<any>(1);
  const [coinAmount, setCoinAmount] = useState<any>();
  const [altCoins, setAltCoins] = useState<any>();
  const [usBtcAmount, setUsBtcAmount] = useState<any>();
  const [currency, setCurrency] = useState<any>("jmd");
  const [user, loading] = useAuthState(auth);
  const [formData, setFormData] = useState({
    usd: "",
    btc: ""
  });
  const { usd, btc } = formData;

  useEffect(() => {
    if (currency === "jmd") {
      setFormData({ ...formData, usd: ((parseFloat(formData.btc) * 148 * btcAmount) - ((parseFloat(formData.btc) * 148 * btcAmount) * 0.15)).toString() });
    } else {
      setFormData({ ...formData, usd: ((parseFloat(formData.btc) * btcAmount) - ((parseFloat(formData.btc) * btcAmount) * 0.15)).toString() });
    }
    if (formData.btc === "") {
      setFormData({ ...formData, usd: ""})
    }
  }, [currency, formData, btcAmount])

  const onChange = (e: any) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const quickBuy = (wallet: any) => {
    if (user) {
      createTransaction(user?.uid, {
        "coinCurrency": "btc",
        "coinAmount": formData.btc,
        "currency": currency,
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

  const generateCoin = async() => {
    try {
      const coinGeckoApi = new CoinGeckoApi()
      const results = await coinGeckoApi.simple({
        ids: ['Bitcoin', 'Ethereum', 'Litecoin'],
        vs_currencies: 'usd'
      })
      console.log(results)
      const res = parseFloat(results.bitcoin.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      setCoin(res)
      setBtcAmount(results.bitcoin.usd);
      setAltCoins({
        bitcoin: results.bitcoin.usd,
        ethereum: results.ethereum.usd,
        litecoin: results.litecoin.usd,
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
        case "litecoin":
        setCoinAmount(altCoins?.litecoin * 148)
        setBtcAmount(altCoins?.litecoin);
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

  const val = {coinAmount: formData.btc, dollarAmount: formData.usd, type: name}

  return (
    <div className="card">
      <Toaster/>
      <ConfirmationModal show={show} close={setShow} purchase={quickBuy} values={val} />
      <div className="card-header">
        <h4 className="card-title">{!title && name}</h4>
      </div>
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (formData.btc !== ""){
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
          <div className="col-12">
            <label className="form-label">Receive</label>
            <div className="input-group">
              <select className="form-control" name="method" onChange={(e) => changeCurrency(e)}>
                <option value="jmd">JMD</option>
                <option value="usd">USD</option>
              </select>
              <input
                disabled
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



          <p className="mb-0">
          {`1 BTC ~ $${coin} USD `}
            <a href="#">
              Estimated rate <br />
            </a>
          </p>

          <input
            type="submit"
            className={`btn btn-${color ? color : "success"} btn-block`}
            value={`${name} Now`}
          />
        </form>
      </div>
    </div>
  );
};

export default SellForm;
