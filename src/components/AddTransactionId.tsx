import { FC, Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import { updateTransaction } from "../services/TransactionService";
import SuccessModal from "./SuccessModal";

const AddTransactionId: FC<{ show?: boolean; close?: any, values?: any, onComplete?: any }> = ({
  show,
  close,
  values,
  onComplete
}) => {
  const [successModal, setSuccessModal] = useState(false);

  const addTransactionID = () => {
      updateTransaction
  }

  return (
    <Fragment>
      <SuccessModal
        show={successModal}
        close={setSuccessModal}
        footerOff
        text="Transaction ID successfully added!"
      />
      <Modal
        className="modal fade"
        id="BuyModal"
        show={show}
        onHide={() => close(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Add Transaction ID</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close(false)}
            ></button>
          </div>
          <div className="modal-body">
              <form
              onSubmit={(e) => e.preventDefault()}
              className="identity-upload"
            >
              <div className="row g-3">
                    <div className="col-xl-12">
                    <label className="form-label">Transaction ID </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="25487"
                        value={values?.passportName}
                    />
                    </div>
                </div>
            </form>


          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#successBankAccount"
              onClick={() => {
                close(false);
                setSuccessModal(true);
                onComplete();
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

export default AddTransactionId;
