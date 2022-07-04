import { NextPage } from "next";
import Link from "next/dist/client/link";
import CoinGeckoApi from '@crypto-coffee/coingecko-api';
import dynamic from "next/dynamic";
import DataTable from 'react-data-table-component';
import {useState, useEffect} from "react";
import moment from "moment";
import ConfirmationModal from "../src/components/ConfirmationModal";
import { auth } from "../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from 'react-hot-toast';
import PerfectScrollbar from "react-perfect-scrollbar";
import Balance from "../src/components/Balance";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import { copyText } from "../src/utils/utils";
import { getUser } from "../src/services/UserService";
import PreLoader from "../src/components/PreLoader";
import { createTransaction, getTransaction, getTransactions } from "../src/services/TransactionService";
import BuySellForm from "../src/components/BuySellForm";
import QuickBuySell from "../src/components/QuickBuySell";
const PriceChart = dynamic(() => import("../src/components/PriceChart"), {
  ssr: false,
});
const AnalyticChart = dynamic(
  () => import("../src/components/AnalyticsChart"),
  {
    ssr: false,
  }
);

const Dashboard: NextPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [show, setShow] = useState(false);
  const [pending, setPending] = useState(true);
  const [formData, setFormData] = useState({
    usd: "",
    btc: ""
  });
  const { usd, btc } = formData;
  const [user, loading] = useAuthState(auth);
  const [userDetails, setUserDetails] = useState<any>();
  const [coin, setCoin] = useState<any>();
  const [currency, setCurrency] = useState<any>();
  const [altCoins, setAltCoins] = useState<any>();
  const [btcAmount, setBtcAmount] = useState<any>(1);
  const [eth, setEth] = useState<any>();

  const columns = [
    {
        name: 'Trans ID',
        selector: row => row.transactionId,
    },
    {
        name: 'Date',
        selector: row => moment(new Date(row?.createdAt?._seconds * 1000)).fromNow(),
    },
    {
      name: 'Type',
      selector: row => <>
      <span className={row?.type === "Sell" ? "danger-arrow" : "success-arrow"}>
        <i className={row?.type === "Sell" ? "icofont-arrow-down" : "icofont-arrow-up"}></i> {row.type}
      </span>
      </>,
    },
    {
      name: 'Currency',
      selector: row => <>
        <span className="coin-name">
          <i className={`cc ${row?.coinCurrency}`}></i> {row?.coinCurrency}
        </span>
      </>,
    },
    {
      name: 'Coin Amount',
      selector: row => <span className="text-danger">{row?.coinAmount}</span>,
    },
    {
      name: 'Dollar Amount',
      selector: row => <div title={`$${convertMoney(row?.amount)} ${(row?.currency)?.toUpperCase()}`} style={{overflow:"initial"}}>{`$${convertMoney(row?.amount)} ${(row?.currency)?.toUpperCase()}`}</div>,
    },
];


  // useEffect(() => {
  //   setFormData({ ...formData, btc: (parseFloat(formData.usd) / btcAmount).toString() });
  //   if (formData.usd === "") {
  //     setFormData({ ...formData, btc: "0"})
  //   }
  // }, [formData.usd, btcAmount])

  // const onChange = (e: any) =>
  // setFormData({ ...formData, [e.target.name]: e.target.value });

  const quickBuy = () => {
    if (user) {
      createTransaction(user?.uid, {
        "coinCurrency": "btc",
        "coinAmount": formData.btc,
        "amount": formData.usd,
        "type": "Buy",
        "wallet": "test",
      })
      .then( res => {
        console.log(res);
        toast.success("Purchase Successful!");
      })
      .catch(err => {
        console.log(err);
        toast.error("Purchase Failed!")
      })
    }
  }

  const convertMoney = (money: any) => {
    return parseFloat(money).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const showTransactions = () => {
    if (user) {
      getTransaction(user.uid)
      .then(res => {
        console.log(res);
        setTransactions(res.data)
      })
      .catch(err => console.log(err))
      .finally(() => setPending(false))
    }
  }

  const showAllTransactions = () => {
    if (user) {
      getTransactions()
      .then(res => {
        console.log(res);
        setTransactions(res.data)
      })
      .catch(err => console.log(err))
      .finally(() => setPending(false))
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    // quickBuy();
    if (formData.btc !== "" && formData.usd !== ""){
      setShow(true);
    } else {
      toast.error("Please enter an amount")
    }
    // if (name && email && password && phone && address) {
    //   router.push("/verify-email");
    // }
  };



  const showUserDetails = () => {
    if (user) {
      getUser(user.uid)
      .then(res => setUserDetails(res.data))
      .catch(error => console.log(error))
    }
  }



  const generateCoin = async() => {
    try {
      const coinGeckoApi = new CoinGeckoApi()
      const results = await coinGeckoApi.simple({
        ids: ['Bitcoin', 'Ethereum', 'Tether'],
        vs_currencies: 'usd'
      })
      console.log(results)
      const res = parseFloat(results.bitcoin.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      setCoin(res)
      setBtcAmount(results.bitcoin.usd);
      const resEth = parseFloat(results.ethereum.usd).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      setEth(resEth)
      setAltCoins({
        bitcoin: results.bitcoin.usd,
        ethereum: results.ethereum.usd
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    generateCoin();
    showUserDetails();
  },[user])

  const reloadCustomerTransactions = () => {
    showTransactions();
  }

  const reloadAdminTransactions = () => {
    showAllTransactions();
  }

  useEffect(() => {
    if(userDetails?.role === "admin") {
      showAllTransactions();
    } else {
      showTransactions();
    }
  }, [userDetails])

  const calculcateAmount = parseFloat(formData.usd)+(parseFloat(formData.usd) * 0.15)
  const val = {coinAmount: formData.btc, dollarAmount: calculcateAmount.toString(), type: "Buy"}

  return (
    <>
    {!userDetails || !coin || !eth || !transactions ?
    
      <PreLoader/>
      :
      <DashboardLayout>
        <Toaster/>
        <ConfirmationModal show={show} close={setShow} purchase={quickBuy} values={val} reload={reloadCustomerTransactions} />
        <div className="content-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="page-title-content">
                  <p>
                    Welcome Back,
                    <strong>{`${userDetails?.name}`}</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3">
                <div className="row">
                  {/* <div className="col-xxl-12 col-xl-12 col-lg-6">
                    <div className="card welcome-profile">
                      <div className="card-body">
                        <img src="/images/profile/2.png" alt="" />
                        <h4>Hi, Jannatul Maowa!</h4>
                        <p>
                          Looks like you are not verified yet. Verify yourself to
                          use the full potential of Tendex.
                        </p>

                        <ul>
                          <li>
                            <a href="#">
                              <span className="verified">
                                <i className="icofont-check"></i>
                              </span>
                              Verify account
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="not-verified">
                                <i className="icofont-close-line"></i>
                              </span>
                              Two-factor authentication (2FA)
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="not-verified">
                                <i className="icofont-close-line"></i>
                              </span>
                              Deposit money
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-xxl-12 col-xl-12 col-lg-6">
                    <QuickBuySell/>
                    {/* <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Quick Buy</h4>
                        /
                        <h4 className="card-title">Quick Sell</h4>
                      </div>
                      <div className="card-body">
                        <form
                          name="myform"
                          className="currency_validate trade-form row g-3"
                          onSubmit={(e) => onSubmit(e)}
                        >
                          <div className="col-12">
                            <label className="form-label">You Send</label>
                            <div className="input-group">
                              <select className="form-control" name="method" onChange={(e) => changeCurrency(e)}>
                                <option value="usd">USD</option>
                                <option value="jmd">JMD</option>
                              </select>
                              <input
                                type="text"
                                name="usd"
                                className="form-control"
                                // placeholder="1 USD"
                                value={currency}
                                onChange={(e) => onChange(e)}
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <label className="form-label">You get</label>
                            <div className="input-group">
                              <select className="form-control" name="method" onChange={(e) => changeCoins(e)}>
                                <option value="bitcoin">BTC</option>
                                <option value="ethereum">ETH</option>
                              </select>
                              <input
                                type="text"
                                name="btc"
                                className="form-control"
                                // placeholder="0.0214 BTC"
                                value={btc}
                              />
                            </div>
                          </div>

                          <p className="mb-0">
                            {`1 BTC ~ $${coin} USD `}
                            <a href="#">
                              Expected rate
                              No extra fees
                            </a>
                          </p>

                          <button
                            type="submit"
                            name="submit"
                            className="btn btn-success btn-block"
                          >
                            Buy Now
                          </button>
                        </form>
                      </div>
                    </div> */}
                  </div>
                  {userDetails?.role !== "admin" && 
                    <div className="col-xxl-12 col-xl-12 col-lg-6">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title">Bank Information</h4>
                        </div>
                        <div className="card-body">
                          <form
                            name="myform"
                            className="currency_validate trade-form row g-3"
                            onSubmit={(e) => onSubmit(e)}
                          >
                            <div className="col-12">
                              <label className="form-label">Bank Name</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="usd"
                                  className="form-control"
                                  // placeholder="1 USD"
                                  value={"bank name"}
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <label className="form-label">Account Type</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="usd"
                                  className="form-control"
                                  // placeholder="1 USD"
                                  value={"savings"}
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <label className="form-label">Branch</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="btc"
                                  className="form-control"
                                  // placeholder="0.0214 BTC"
                                  value={"branch"}
                                />
                              </div>
                            </div>

                            <div className="col-12">
                              <label className="form-label">Account Number</label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  name="usd"
                                  className="form-control"
                                  // placeholder="1 USD"
                                  value={"008788766"}
                                />
                              </div>
                            </div>

                            {/* <p className="mb-0">
                              {`1 BTC ~ $${coin} USD `}
                              <a href="#">
                                Expected rate
                                No extra fees
                              </a>
                            </p> */}

                            {/* <button
                              type="submit"
                              name="submit"
                              className="btn btn-primary btn-block"
                            >
                              Buy Now
                            </button> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  }
                  {/* <div className="col-xxl-12 col-xl-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Position Valuation</h4>
                      </div>
                      <div className="card-body">
                        <PerfectScrollbar className="balance-widget position-value">
                          <div className="li">
                            <h5>Opening Cost</h5>
                            <div className="text-end">
                              <h5>$0.0000</h5>
                              <span>Original cost of all open positions.</span>
                            </div>
                          </div>
                          <div className="li">
                            <h5>Current Valuation</h5>
                            <div className="text-end">
                              <h5>$0.0000</h5>
                              <span>Paper valuation of all open positions.</span>
                            </div>
                          </div>
                          <div className="li">
                            <h5>Profit</h5>
                            <div className="text-end">
                              <h5>$0.0000 (0,00%)</h5>
                              <span>Paper profit of all open positions..</span>
                            </div>
                          </div>
                          <div className="li">
                            <h5>Loss</h5>
                            <div className="text-end">
                              <h5>$0.0000 (0,00%)</h5>
                              <span>Paper loss of all open positions.</span>
                            </div>
                          </div>
                          <div className="li">
                            <h5>Fees</h5>
                            <div className="text-end">
                              <h5>$0.0000</h5>
                              <span>Current Fee</span>
                            </div>
                          </div>
                        </PerfectScrollbar>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-xxl-12 col-xl-12 col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="invite-content">
                          <h4>Invite a friend and get $30</h4>
                          <p>
                            You will receive up to $30 when they： 1.Buy Crypto 2.
                            Deposit 3. Finish Trading Tasks <br />
                            <a href="#">Learn more</a>
                          </p>

                          <div className="copy-link">
                            <form action="#">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="myInput"
                                  value="https://www.Tendex.io/join/12345"
                                  readOnly
                                />
                                <span
                                  className="input-group-text c-pointer"
                                  onClick={() => copyText()}
                                >
                                  Copy
                                </span>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="col-xl-9">
                <div className="row">
                  {/* <div className="col-xxl-8 col-xl-8">
                    <div className="card home-chart">
                      <div className="card-header">
                        <h4 className="card-title home-chart">Analytics</h4>
                        <select
                          className="form-select d-none"
                          name="report-type"
                          id="report-select"
                        >
                          <option value="1">Bitcoin</option>
                          <option value="2">Litecoin</option>
                        </select>
                      </div>
                      <div className="card-body p-0">
                        <div className="home-chart-height">
                          <div className="row px-3 pt-3">
                            <div
                              className="
                                col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6
                              "
                            >
                              <div className="chart-price-value">
                                <span>24hr Volume</span>
                                <h5>$236,368.00</h5>
                              </div>
                            </div>
                            <div
                              className="
                                col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6
                              "
                            >
                              <div className="chart-price-value">
                                <span>Marketcap</span>
                                <h5>$236.025B USD</h5>
                              </div>
                            </div>
                            <div
                              className="
                                col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6
                              "
                            >
                              <div className="chart-price-value">
                                <span>24hr Volume</span>
                                <h5>56.3 BTC</h5>
                              </div>
                            </div>
                            <div
                              className="
                                col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6
                              "
                            >
                              <div className="chart-price-value">
                                <span>All Time High</span>
                                <h5>$236,368.00</h5>
                              </div>
                            </div>
                          </div>
                          <AnalyticChart />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-4 col-xl-4">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Trade Balances</h4>
                      </div>
                      <div className="card-body">
                        <PerfectScrollbar className="balance-widget trade-balance">
                          <div className="li">
                            <h5>Trade Balance</h5>
                            <div className="text-end">
                              <h5>$0.0000</h5>
                              <span>Total margin currency balance.</span>
                            </div>
                          </div>
                          <div className="li">
                            <h5>Equity</h5>
                            <div className="text-end">
                              <h5>$0.0000</h5>
                              <span>
                                Trade balance combined with unrealized profit/loss
                              </span>
                            </div>
                          </div>
                          <div className="li">
                            <h5>Used Margin</h5>
                            <div className="text-end">
                              <h5>$0.0000</h5>
                              <span>
                                Total margin amount used in open positions.
                              </span>
                            </div>
                          </div>
                          <div className="li">
                            <h5>Free Margin</h5>
                            <div className="text-end">
                              <h5>$0.0000</h5>
                              <span>
                                Usable margin balance. Equal to equity minus.
                              </span>
                            </div>
                          </div>
                          <div className="li">
                            <h5>Margin Level</h5>
                            <div className="text-end">
                              <h5>$0.0000</h5>
                              <span>
                                Percentage ratio of equity to used margin.
                              </span>
                            </div>
                          </div>
                        </PerfectScrollbar>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-xxl-8">
                    <Balance />
                  </div> */}

                  <div className="col-xxl-4 col-xl-12">
                    <div className="row">
                      <div className="col-xxl-12 col-xl-4 col-lg-6">
                        <div className="price-widget">
                          <Link href="/price-details">
                            <a>
                              <div className="price-content">
                                <div className="icon-title">
                                  <i className="cc BTC"></i>
                                  <span>Bitcoin</span>
                                </div>
                                <h5>${coin}</h5>
                              </div>
                              <PriceChart />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-12 col-xl-4 col-lg-6">
                        <div className="price-widget">
                          <Link href="/price-details">
                            <a>
                              <div className="price-content">
                                <div className="icon-title">
                                  <i className="cc ETH"></i>
                                  <span>Ethereum</span>
                                </div>
                                <h5>${eth}</h5>
                              </div>
                              <PriceChart />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-xxl-12 col-xl-4 col-lg-6">
                        <div className="price-widget">
                          <Link href="/price-details">
                            <a>
                              <div className="price-content">
                                <div className="icon-title">
                                  <i className="cc USDT"></i>
                                  <span>Tether</span>
                                </div>
                                <h5>$1.00</h5>
                              </div>
                              <PriceChart />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-12 col-xl-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Transaction</h4>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive transaction-table">
                          <DataTable
                              columns={columns}
                              data={transactions}
                              pagination
                              progressPending={pending}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    }
    </>
  );
};

export default Dashboard;
