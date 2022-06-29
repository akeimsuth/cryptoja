import { FC, Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import Select from 'react-select';
import { auth } from "../../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SuccessModal from "./SuccessModal";
import { createWallet } from "../services/WalletService";

const AddBankCardModal: FC<{ show?: boolean; close?: any }> = ({
  show,
  close,
}) => {
  const [successModal, setSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    coinType: ""
  });
  const options = [
    { value: 'bitcoin', label: <span className="coin-name">
    <i className="cc BTC"></i> Bitcoin
  </span> },
    { value: 'ethereum', label:<span className="coin-name">
    <i className="cc ETH"></i> Ethereum
  </span> },
    { value: 'litecoin', label: <span className="coin-name">
    <i className="cc LTC"></i> Litecoin
  </span> }
  ]
  const { name, address } = formData;
  const onChange = (e: any) => 
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const onCoinChange = (e: any) => 
  setFormData({ ...formData, coinType: e.value });

  const onSubmit = (e: any) => {
    e.preventDefault();
    addWallet();
  };

  const addWallet = () => {
    if(user){
      createWallet(user.uid, {
        name,
        address
      })
      .then( res => {
        console.log(res);
        close(false);
        setSuccessModal(true);
      })
      .catch(err => console.log(err))
    }
  }

  const [user, loading] = useAuthState(auth);
  return (
    <Fragment>
      <SuccessModal
        show={successModal}
        close={setSuccessModal}
        footerOff
        text="Congratulations. Your Wallet has added"
      />
      <Modal
        className="modal fade"
        id="BuyModal"
        show={show}
        onHide={() => close(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Add Wallet</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form className="identity-upload"
             onSubmit={(e) => onSubmit(e)}
            >
              <div className="row g-3">
                <div className="col-xl-12">
                  <label className="form-label">Nickname of Wallet </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="eg. Heyo"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col-xl-12">
                  <label className="form-label">Wallet Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    // placeholder="76wejhwejhjhweuuwe823"
                    value={address}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col-xl-12">
                  <label className="form-label">Type of Coin</label>
                  <Select name="coinType" options={options} onChange={(value) => onCoinChange(value)} />
                </div>
                {/* <div className="col-xl-4">
                  <label className="form-label">Expiration </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="10/22"
                  />
                </div>
                <div className="col-xl-4">
                  <label className="form-label">CVC </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="125"
                  />
                </div>
                <div className="col-xl-4">
                  <label className="form-label">Postal code </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="2368"
                  />
                </div> */}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#successBankAccount"
              onClick={() => {
                // close(false);
                // setSuccessModal(true);
                addWallet();
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default AddBankCardModal;
