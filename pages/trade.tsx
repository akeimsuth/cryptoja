import { NextPage } from "next";
import {useState, useEffect} from "react";
import moment from "moment";
import DataTable from 'react-data-table-component';
import { auth } from "../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import BuySellForm from "../src/components/BuySellForm";
import SellForm from "../src/components/SellForm";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import { getTransaction, getTransactions, updateTransaction } from "../src/services/TransactionService";
import { getUser } from "../src/services/UserService";
import toast, { Toaster } from "react-hot-toast";
const Trade: NextPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [userDetails, setUserDetails] = useState<any>();

  const [formData, setFormData] = useState({
    transId: "",
  });

  const { transId } = formData;

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
      <span className={row?.type === "sell" ? "danger-arrow" : "success-arrow"}>
        <i className={row?.type === "sell" ? "icofont-arrow-down" : "icofont-arrow-up"}></i> {row.type}
      </span>
      </>,
    },
    {
      name: 'Currency',
      selector: row => <>
        <span className="coin-name">
          <i className="cc BTC"></i> {row?.coinCurrency}
        </span>
      </>,
    },
    {
      name: 'Coin Amount',
      selector: row => <span className="text-danger">{row?.coinAmount}</span>,
    },
    {
      name: 'Dollar Amount',
      selector: row => `$${convertMoney(row?.amount)}`,
    },
];

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
    if (userDetails?.role === "admin"){
      showAllTransactions();
    } else {
      showTransactions();
    }
  },[userDetails])

  const onChange = (e: any) => 
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const updateTransID = (id: any) => {
    updateTransaction(id, {
      transactionId: transId
    })
    .then(res => toast.success('Transaction ID added'))
    .catch(err => toast.error("Failed to add Transaction ID"))
  }

  const onSubmit = (e: any, id: any) => {
    e.preventDefault();
    updateTransID(id)
    setFormData({
      transId: ""
    });
  };

  const ExpandedComponent = ({ data }) =>  <div style={{paddingTop:"1rem"}} className="col-xl-12">
      <label className="form-label">Wallet Address: </label>
      <span>{data?.wallet?.address}</span> <br/>
      {/* <label className="form-label">Transaction ID</label> */}
      <form className="identity-upload"
             onSubmit={(e) => onSubmit(e, data?.id)}
            >
      <input
        type="text"
        className="form-control"
        name="transId"
        placeholder="Enter Transaction ID"
        value={transId}
        onChange={(e) => onChange(e)}
      />
      {console.log(data)}
      <button
          type="submit"
          className="btn btn-primary"
        >
          Confirm
        </button>
    </form>
    </div>;

  return (
    <DashboardLayout>
      <Toaster/>
      <div className="content-body">
        <div className="container-fluid">
          {userDetails?.role !== "admin" && 
            <div className="row">
              <div className="col-xxl-3 col-xl-6">
                <BuySellForm name="Buy" />
              </div>
              <div className="col-xxl-3 col-xl-6">
                <SellForm name="Sell" />
              </div>
            </div>
          }
          <div className="row">
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Past Transactions</h4>
                </div>
                <div className="card-body">
                        <div className="table-responsive transaction-table">
                          {userDetails?.role === "admin" ? 
                          
                          <DataTable
                            columns={columns}
                            data={transactions}
                            pagination
                            expandableRows
                            expandOnRowClicked
                            expandableRowsComponent={ExpandedComponent}
                            pointerOnHover
                          />
                          :
                          <DataTable
                            columns={columns}
                            data={transactions}
                            pagination
                          />
                        }
                          {/* <table className="table table-striped responsive-table">
                            <thead>
                              <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Currency</th>
                                <th>Coin Amount</th>
                                <th>Dollar Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {transactions.map((transaction: any) => {
                                return (

                                <tr>
                                  <td>{moment(new Date(transaction?.createdAt?._seconds * 1000)).format("MMM DD, YYYY")}</td>
                                  <td>
                                    <span className={transaction.type === "sell" ? "danger-arrow" : "success-arrow"}>
                                      <i className={transaction.type === "sell" ? "icofont-arrow-down" : "icofont-arrow-up"}></i> {transaction.type}
                                    </span>
                                  </td>
                                  <td className="coin-name">
                                    <i className="cc BTC"></i> {transaction.coinCurrency}
                                  </td>
                                  <td className="text-danger">{transaction.coinAmount}</td>
                                  <td>${convertMoney(transaction.amount)}USD</td>
                                </tr>
                                )
                              })}
                            </tbody>
                          </table> */}
                        </div>
                      </div>
              </div>
            </div>
            {/* <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Sell Transaction</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Coin Name</th>
                          <th>Wallet</th>
                          <th>Amount</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Bank *******5264</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc LTC" /> Litecoin
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc XRP" /> Ripple
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc DASH" /> Dash
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Transfer Transaction</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Coin Name</th>
                          <th>Wallet</th>
                          <th>Amount</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Bank *******5264</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc LTC" /> Litecoin
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc XRP" /> Ripple
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc DASH" /> Dash
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Convert Transaction</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped responsive-table">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Coin Name</th>
                          <th>Wallet</th>
                          <th>Amount</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Bank *******5264</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc LTC" /> Litecoin
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc XRP" /> Ripple
                          </td>
                          <td>Using - Card *******8475</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="success-arrow">
                              <i className="bi bi-arrow-up-short" /> Buy
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc DASH" /> Dash
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-success">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="danger-arrow">
                              <i className="bi bi-arrow-down-short" /> Sold
                            </span>
                          </td>
                          <td className="coin-name">
                            <i className="cc BTC" /> Bitcoin
                          </td>
                          <td>Using - Card *******2321</td>
                          <td className="text-danger">-0.000242 BTC</td>
                          <td>-0.125 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Trade;
