import { NextPage } from "next";
import { useState, useEffect } from "react";
import { auth } from "../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import AddBankAccountModal from "../src/components/AddBankAccountModal";
import AddBankCardModal from "../src/components/AddBankCardModal";
import SettingsLayouts from "../src/layouts/dashboard/SettingsLayouts";
import { deleteWallet, getWallet } from "../src/services/WalletService";

const SettingsPaymentMethod: NextPage = () => {
  const [user, loading] = useAuthState(auth);
  const [bankModal, setBankModal] = useState(false);
  const [wallet, setWallet] = useState([]);
  const [card, setCard] = useState(false);



  const showWallet = () => {
    if(user){
      getWallet(user.uid)
      .then(res => setWallet(res.data))
      .catch(err => console.log(err))
    }
  }

  const removeWallet = (wall: any) => {
    deleteWallet(wall)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    showWallet();
  }, [Date.now()])

  return (
    <SettingsLayouts name="Wallet">
      <AddBankAccountModal show={bankModal} close={setBankModal} />
      <AddBankCardModal show={card} close={setCard} />
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="card mb-0">
              <div className="card-header px-0">
                <h4 className="card-title">Wallet Addresses</h4>
              </div>
              <div className="card-body px-0">
                  {wallet.map((wall: any) => {
                    return (
                      <>
                        <div className="verify-content">
                        <div className="d-flex align-items-center">
                          <span className="me-3 icon-circle bg-primary text-white">
                            <i className="icofont-wallet"></i>
                          </span>
                          <div className="primary-number">
                            <p className="mb-0">{wall.name}</p>
                            <small>{wall.address}</small>
                            {/* <br />
                            <span className="text-success">Verified</span> */}
                          </div>
                        </div>
                        <button className="btn btn-outline-primary" onClick={() => removeWallet(wall?.address)}>Remove</button>
                      </div>
                      <hr className="dropdown-divider my-4" />
                    </>
                    )
                  })}
                {/* <div className="verify-content">
                  <div className="d-flex align-items-center">
                    <span className="me-3 icon-circle bg-primary text-white">
                      <i className="icofont-wallet"></i>
                    </span>
                    <div className="primary-number">
                      <p className="mb-0">Master Card</p>
                      <small>9opq99kkdiasikwejqj35478</small>
               
                    </div>
                  </div>
                  <button className="btn btn-outline-primary">Remove</button>
                </div> */}

                <div className="mt-5">
                  {/* <button
                    type="button"
                    className="btn btn-primary me-3"
                    data-toggle="modal"
                    data-target="#addBank"
                    onClick={() => setBankModal(true)}
                  >
                    Add New Bank
                  </button> */}
                  <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#addCard"
                    onClick={() => setCard(true)}
                  >
                    Add New Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayouts>
  );
};

export default SettingsPaymentMethod;
