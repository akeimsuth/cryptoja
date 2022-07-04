import { NextPage } from "next";
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import moment from "moment";
import { auth } from "../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Balance from "../src/components/Balance";
import DashboardLayout from "../src/layouts/dashboard/DashboardLayout";
import { getUsers, updateKYCUser } from "../src/services/UserService";
import { Button, Modal } from "react-bootstrap";
import ApproveDocuments from "../src/components/ApproveDocuments";
import PreLoader from "../src/components/PreLoader";
const Wallet: NextPage = () => {

  const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Phone',
        selector: row => row.phone,
    },
    {
      name: 'Email',
      selector: row => row.email,
  },
    {
      name: 'Address',
      selector: row => row.address
    },
    {
      name: 'KYC Documents',
      selector: row => <>
   
        {row.kyc === 'required' &&
        <a style={{color: 'white'}} 
        type="button"
        className={'btn btn-danger'}
        onClick={()=> {
          if (row.kyc === 'pending'){
            setSingleUser(row)
            handleShow();
          }
        }}
        >{row?.kyc?.toUpperCase()}</a>
      }
        {row.kyc === 'pending' &&
        <a style={{color: 'white'}} 
        type="button"
        className={'btn btn-warning'}
        onClick={()=> {
          if (row.kyc === 'pending'){
            setSingleUser(row)
            handleShow();
          }
        }}
        >{row?.kyc?.toUpperCase()}</a>
      }
      {row.kyc === 'approved' &&
        <a style={{color: 'white'}} 
        type="button"
        className={'btn btn-success'}
        onClick={()=> {
          if (row.kyc === 'pending'){
            setSingleUser(row)
            handleShow();
          }
        }}
        >{row?.kyc?.toUpperCase()}</a>
      }
      </>,
    }
];

  const [users, setUsers] = useState();
  const [singleUser, setSingleUser] = useState<any>();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [user, loading] = useAuthState(auth);
  const showUsers = () => {
      getUsers()
      .then(res => setUsers(res.data))
      .catch(error => console.log(error))
  }

  const updateSingleUser = () => {
    updateKYCUser(singleUser?.userId, {
      kyc: 'approved'
    })
    .then( res => console.log(res))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    showUsers();
  },[])
  return (
    <>
    {!users ?
      <PreLoader/>
        :  
      <DashboardLayout>
        <ApproveDocuments 
        show={show} 
        close={handleClose} 
        values={singleUser}
        onComplete={updateSingleUser}
        />
        <div className="content-body">
          <div className="container-fluid">
            {/* <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="wallet-widget card">
                  <h5>Estimated Balance</h5>
                  <h2>
                    <span className="text-primary">0.000</span> <sub>USD</sub>
                  </h2>
                  <p>= 0.000000 BTC</p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="wallet-widget card">
                  <h5>Available Balance</h5>
                  <h2>
                    <span className="text-success">0.000</span> <sub>USD</sub>
                  </h2>
                  <p>= 0.000000 BTC</p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="wallet-widget card">
                  <h5>Pending Balance</h5>
                  <h2>
                    <span className="text-warning">0.000</span> <sub>USD</sub>
                  </h2>
                  <p>= 0.000000 BTC</p>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="wallet-widget card">
                  <h5>Locked Balance</h5>
                  <h2>
                    <span className="text-danger">0.000</span> <sub>USD</sub>
                  </h2>
                  <p>= 0.000000 BTC</p>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-xxl-6">
                {/* <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Wallet Addresses</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped responsive-table">
                        <thead>
                          <tr>
                            <th>Coin Name</th>
                            <th>Address</th>
                            <th>QR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="coin-name">
                                <i className="cc BTC" />
                                <span>Bitcoin</span>
                              </div>
                            </td>
                            <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                            <td>
                              <img
                                className="qr-img"
                                src="/images/qr.svg"
                                alt=""
                                width="40"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="coin-name">
                                <i className="cc BTC" />
                                <span>Bitcoin</span>
                              </div>
                            </td>
                            <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                            <td>
                              <img
                                className="qr-img"
                                src="/images/qr.svg"
                                alt=""
                                width="40"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="coin-name">
                                <i className="cc BTC" />
                                <span>Bitcoin</span>
                              </div>
                            </td>
                            <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                            <td>
                              <img
                                className="qr-img"
                                src="/images/qr.svg"
                                alt=""
                                width="40"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="coin-name">
                                <i className="cc BTC" />
                                <span>Bitcoin</span>
                              </div>
                            </td>
                            <td>35Hb5B6qJa5ntYaNFN3hGYXdAjh919g2VH</td>
                            <td>
                              <img
                                className="qr-img"
                                src="/images/qr.svg"
                                alt=""
                                width="40"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* <div className="col-xxl-6">
                <Balance />
              </div> */}

              <div className="col-xxl-6">
                {/* <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Balance</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped responsive-table">
                        <thead>
                          <tr>
                            <th>Asset</th>
                            <th>Balance</th>
                            <th>Available</th>
                            <th>Locked</th>
                            <th>% Gain</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="coin-name">
                              <i className="cc BTC" />
                              <span>Bitcoin</span>
                            </td>
                            <td>0</td>
                            <td>{`>0`}</td>
                            <td>0</td>
                            <td className="success-arrow">
                              <strong>0.005%</strong>
                              <i className="bi bi-arrow-up-short ms-2" />
                            </td>
                          </tr>
                          <tr>
                            <td className="coin-name">
                              <i className="cc BTC" />
                              <span>Bitcoin</span>
                            </td>
                            <td>0</td>
                            <td>{`>0`}</td>
                            <td>0</td>
                            <td className="success-arrow">
                              <strong>0.005%</strong>
                              <i className="bi bi-arrow-up-short ms-2" />
                            </td>
                          </tr>
                          <tr>
                            <td className="coin-name">
                              <i className="cc BTC" />
                              <span>Bitcoin</span>
                            </td>
                            <td>0</td>
                            <td>{`>0`}</td>
                            <td>0</td>
                            <td className="success-arrow">
                              <strong>0.005%</strong>
                              <i className="bi bi-arrow-up-short ms-2" />
                            </td>
                          </tr>
                          <tr>
                            <td className="coin-name">
                              <i className="cc BTC" />
                              <span>Bitcoin</span>
                            </td>
                            <td>0</td>
                            <td>{`>0`}</td>
                            <td>0</td>
                            <td className="success-arrow">
                              <strong>0.005%</strong>
                              <i className="bi bi-arrow-up-short ms-2" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-xxl-6">
                {console.log("USERS: ", users)}
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Users</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                    <DataTable
                        columns={columns}
                        data={users}
                        pagination
                    />
                    </div>
                  </div>
                </div>
              </div>
              {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{`${singleUser?.name} Information`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {singleUser?.idType === 'passport' ?
            <>
              <div className="row justify-content-between align-items-center">
                <p>Name on Passport</p>
                <strong>{singleUser.passportName}</strong>
              </div>
              <div className="row justify-content-between align-items-center">
                <p>Date of Issue</p>
                <strong>{singleUser.passportDate}</strong>
                </div>
                <div className="row justify-content-between align-items-center">
                <p>Passport Number</p>
                <strong>{singleUser.passportNumber}</strong>
                </div>
            </>
            :
            <div></div>  
          }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
              </Modal> */}
              <div className="col-xxl-12">
                {/* <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Withdrawals</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped responsive-table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Fee</th>
                            <th>Date</th>
                            <th>Hash</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>12345</td>
                            <td className="coin-name">
                              <i className="cc BTC" />
                              <span>Bitcoin</span>
                            </td>
                            <td>0</td>
                            <td>0.02%</td>
                            <td>Jan 01</td>
                            <td>#1236598745565</td>
                            <td>Pending</td>
                          </tr>
                          <tr>
                            <td>12345</td>
                            <td className="coin-name">
                              <i className="cc BTC" />
                              <span>Bitcoin</span>
                            </td>
                            <td>0</td>
                            <td>0.02%</td>
                            <td>Jan 01</td>
                            <td>#1236598745565</td>
                            <td>Pending</td>
                          </tr>
                          <tr>
                            <td>12345</td>
                            <td className="coin-name">
                              <i className="cc BTC" />
                              <span>Bitcoin</span>
                            </td>
                            <td>0</td>
                            <td>0.02%</td>
                            <td>Jan 01</td>
                            <td>#1236598745565</td>
                            <td>Pending</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    }
    </>
  );
};

export default Wallet;
