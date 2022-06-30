import { FC, Fragment, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import SuccessModal from "./SuccessModal";

const ApproveDocuments: FC<{ show?: boolean; close?: any, values?: any, onComplete?: any }> = ({
  show,
  close,
  values,
  onComplete
}) => {
  const [successModal, setSuccessModal] = useState(false);
  return (
    <Fragment>
      <SuccessModal
        show={successModal}
        close={setSuccessModal}
        footerOff
        text="KYC documents have been approved!"
      />
      <Modal
        className="modal fade"
        id="BuyModal"
        show={show}
        onHide={() => close(false)}
      >
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title">Approve details for User</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => close(false)}
            ></button>
          </div>
          <div className="modal-body">
              {values?.idType === "passport" ?
              
              <form
              onSubmit={(e) => e.preventDefault()}
              className="identity-upload"
            >
              <div className="row g-3">
                <div className="col-xl-12">
                  <label className="form-label">Name on Passport </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="25487"
                    value={values?.passportName}
                  />
                </div>
                <div className="col-xl-12">
                  <label className="form-label">Date of Passport </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="36475"
                    value={values?.passportDate}
                  />
                </div>
                <div className="col-xl-12">
                  <label className="form-label">Passport Number </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Jannatul Maowa"
                    value={values?.passportNumber}
                  />
                </div>
                <div className="col-xl-12">
                  <img src="/images/routing.png" alt="" className="img-fluid" />
                </div>
              </div>
            </form>

            :

            <form
            onSubmit={(e) => e.preventDefault()}
            className="identity-upload"
          >
            <div className="row g-3">
              <div className="col-xl-12">
                <label className="form-label">{`${values?.idType} front image`} </label>
                <img src={values?.idFront} alt="" className="img-fluid" />
              </div>
              <div className="col-xl-12">
              <label className="form-label">{`${values?.idType} back image`} </label>
                <img src={values?.idBack} alt="" className="img-fluid" />
              </div>
              <div className="col-xl-12">
              <label className="form-label">{`${values?.idType} selfie`} </label>
                <img src={values?.selfie} alt="" className="img-fluid" />
              </div>
            </div>
          </form>
            
}
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

export default ApproveDocuments;
