import { FC, Fragment, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Select from 'react-select';
import { auth } from "../../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SuccessModal from "./SuccessModal";
import { getWallet } from "../services/WalletService";
import { convertMoney } from "../helper";

const ConfirmationModal: FC<{ show?: boolean; close?: any, purchase: any, values: any }> = ({
  show,
  close,
  purchase,
  values
}) => {
  const [successModal, setSuccessModal] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [wallet, setWallet] = useState([]);
  const [selectedWallet, setSelectedWallet] = useState<any>();

  const [formData, setFormData] = useState({
    bank_name: "",
    branch_name: "",
    account_type: "",
    account_number: ""
  });
  const { bank_name, branch_name, account_type, account_number } = formData;

  const onChange = (e: any) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });

  const onWalletChange = (e: any) => 
  setSelectedWallet(e?.value);

  const showWallet = () => {
    const wallet:any = []
    if (user) {
      getWallet(user.uid)
      .then(res => {res.data.map((wall: any) => {
        wallet.push({
          "label": wall?.name,
          "value": wall
        })
      });
      setWallet(wallet);
    })
      .catch(error => console.log(error))
    }
  }


  useEffect(() => {
    showWallet();
  }, [user, showWallet])

  return (
    <Fragment>
      <SuccessModal show={successModal} close={setSuccessModal} />
      <Modal
        className="modal fade"
        id="BuyModal"
        show={show}
        onHide={() => close(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Confirmation</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  {/* <tr>
                    <td>
                      <span className="text-primary">Buyer Email</span>
                    </td>
                    <td>
                      <span className="text-primary">buyer@example.com</span>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>
                      <span className="text-primary">Seller Email</span>
                    </td>
                    <td>
                      <span className="text-primary">seller@example.com</span>
                    </td>
                  </tr> */}
                  <tr>
                    <td>Coin Amount</td>
                    <td>{`${values.coinAmount} BTC`}</td>
                  </tr>
                  <tr>
                    <td>Fee</td>
                    <td>15%</td>
                  </tr>
                  <tr>
                    <td>Dollar Amount</td>
                    <td>{`$ ${convertMoney(values.dollarAmount)} USD`}</td>
                  </tr>
                  {values.type === "Buy" ?
                  <>
                  <tr>
                    {/* <td> */}
                    <div className="col-xl-12">
                      <label className="form-label">Wallets Available</label>
                          <Select name="coinType" options={wallet} onChange={(value) => onWalletChange(value)} />
                        {/* <div className="col-12">
                          <div className="form-check form-check-inline">
                          </div>
                        </div> */}
                    </div>
                    {/* </td> */}
                  </tr>

                  </>
                  :
                  <>
                  <tr>
                    <div className="row g-3">
                  <label className="form-label">Banking Information</label>
                    <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control"
                    name="bank_name"
                    placeholder="Bank Name"
                    value={bank_name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control"
                    name="branch_name"
                    placeholder="Branch Name"
                    value={branch_name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col-xl-12">
                  <input
                    type="text"
                    className="form-control"
                    name="account_type"
                    placeholder="Account Type"
                    value={account_type}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="col-xl-12">
                  <input
                    type="number"
                    className="form-control"
                    name="account_number"
                    placeholder="Account Number"
                    value={account_number}
                    minLength={9}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                </div>
                
                  </tr>
                  {/* <tr>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bank Name"
                    />
                  </tr>
                  <tr>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Branch Name"
                    />
                  </tr>
                  <tr>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Type"
                    />
                  </tr>
                  <tr>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Number"
                    />
                  </tr> */}
                  <br/>
                  </>
                }
                  {/* <tr>
                    <td>Vat</td>
                    <td>
                      <div className="text-danger">$25.00 USD</div>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>Sub Total</td>
                    <td>$1232.00 USD</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className="text-right">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#buySuccessleModal"
                onClick={() => {
                  setSuccessModal(true);
                  close(false);
                  if (values?.type === "Buy") {
                    purchase(selectedWallet);
                  } else {
                    purchase(formData)
                  }
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ConfirmationModal;
