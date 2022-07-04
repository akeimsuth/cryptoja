import { NextPage } from "next";
import Image from "next/image";
import styled from '@emotion/styled';
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { auth } from "../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { updateUser } from "../src/services/UserService";

const UploadContainer = styled.div`
    width: 100%;
    height: 15rem;
    border: 1px dashed #D3D3D3;
    border-radius: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 2rem;
`;
const KYC: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    password: "",
    phone: "",
    passportNumber: "",
    id: ""
  });
  const [error, setError] = useState(false);
  const [docsFront, setFrontDocs] = useState<any>([]);
  const [docsBack, setBackDocs] = useState<any>([]);
  const [selfie, setSelfie] = useState<any>([]);
  const [user, loading] = useAuthState(auth);
  const customFrontDocs: any = [];
  const customBackDocs: any = [];
  const customSelfie: any = [];
  const { name, dob, password, phone, passportNumber, id } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
    const addStuff = addDocuments();
    toast.promise(addStuff, {
        loading: 'Uploading documents...',
        success: <b>Documents Uploaded!</b>,
        error: <b>Could not upload documents</b>,
    })
    // if (name && dob && password && phone && passportNumber) {
    //   router.push("/verify-email");
    // }
  };

  // const filledOut = () => {
  //     if ((docs.length > 1 && selfie.length > 0) || (name !== "" && dob !== "" && passportNumber !== "")) {
  //         return true;
  //     } else {
  //         return false;
  //     }
  // }
  const addDocuments: any = async() => {
      if (user) {
          await updateUser(user?.uid, {
              idType: id,
              idFront: docsFront.length > 0 ? docsFront : "",
              idBack: docsBack.length > 0 ? docsBack : "",
              passportName: name,
              passportDate: dob,
              passportNumber,
              selfie
          })
          .then(res => {
              console.log(res);
              router.push("/");
          }).catch(error => console.log(error))
      }
  }
  const addFrontDocs = (value: any) => {
    console.log(value);
    value.map((inf: any) => customFrontDocs.push(inf?.fileUrl));
    setFrontDocs(value[0]?.fileUrl);
    console.log("Custom Docs: ",customFrontDocs)
  };
  const addBackDocs = (value: any) => {
    console.log(value);
    value.map((inf: any) => customBackDocs.push(inf?.fileUrl));
    setBackDocs(value[0]?.fileUrl);
    console.log("Custom Docs: ",customBackDocs)
  };
  const addSelfie = (value: any) => {
    console.log(value);
    value.map((inf: any) => customSelfie.push(inf?.fileUrl));
    setSelfie(value[0]?.fileUrl);
  };


  const uploader = new Uploader({
    // Get production API keys from Upload.io
    apiKey: "public_kW15asXEPzdw8MmQUwtuPugqv4Gw"
  });
  return (
    <div className="authincation section-padding">
        <Toaster/>
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-6 col-md-6">
            <div className="mini-logo text-center my-4">
              <Link href="/">
                <a>
                  <img src="/images/logo.png" alt="" width="45"/>
                  <strong className="text-dark">Tokenomyja</strong>
                </a>
              </Link>
              <h4 className="card-title mt-5">Add KYC Documents</h4>
            </div>
            <div className="auth-form card">
              <div className="card-body">
                <form
                  name="myform"
                  className="signin_validate row g-3"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div className="col-12">
                      <p>Please select ID type</p>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" 
                        type="radio" 
                        name="id" 
                        id="inlineRadio1" 
                        value="National ID" 
                        onChange={(e) => onChange(e) }/>
                        <label className="form-check-label" 
                        htmlFor="inlineRadio1">National ID</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                         type="radio"
                         name="id" 
                         id="inlineRadio2" 
                         value="Drivers License" 
                         onChange={(e) => onChange(e) }/>
                        <label className="form-check-label" 
                        htmlFor="inlineRadio2">Drivers License</label>
                    </div>
                   
                    <div className="form-check form-check-inline pb-4">
                        <input className="form-check-input"
                         type="radio"
                         name="id" 
                         id="inlineRadio3" 
                         value="passport" 
                         onChange={(e) => onChange(e) }
                         />
                        <label className="form-check-label" 
                        htmlFor="inlineRadio2">Passport</label>
                    </div>
                    
                    {/* <img src="https://upcdn.io/W142hJkFJceYtDPhqQaACVF/thumbnail"/> */}
                    {(formData.id === 'Drivers License' || formData.id === 'National ID') &&
                    <>
                        {docsFront.length < 1 ?
                        
                            <UploadButton uploader={uploader}
                                // options={{multi: true}}
                                onComplete={files => addFrontDocs(files)}>
                                {({onClick}) =>
                                <UploadContainer onClick={onClick}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} size={"4x"} />
                                    
                                    <p>{`Upload front of ${formData.id}`}</p>
                                </UploadContainer>
                                }
                            </UploadButton>

                            :
                            <UploadContainer style={{justifyContent: 'space-evenly'}}>
                                {/* {docs.map((doc: any) => { */}
                                {console.log("Front: ", docsFront)}
                                 <img style={{objectFit:'contain', width: '30%', height: '30%'}} src={docsFront}/>
                             
                   
                            </UploadContainer>
                        }
                  {docsBack.length < 1 ?
                        
                        <UploadButton uploader={uploader}
                            // options={{multi: true}}
                            onComplete={files => addBackDocs(files)}>
                            {({onClick}) =>
                            <UploadContainer onClick={onClick}>
                                <FontAwesomeIcon icon={faCloudArrowUp} size={"4x"} />
                                
                                <p>{`Upload back of ${formData.id}`}</p>
                            </UploadContainer>
                            }
                        </UploadButton>

                        :
                        <UploadContainer style={{justifyContent: 'space-evenly'}}>
                            {/* {docs.map((doc: any) => { */}
                                <img style={{objectFit:'contain', width: '30%', height: '30%'}} src={docsBack}/>
                           
               
                        </UploadContainer>
                    }
                        {selfie.length < 1 ?
                        
                        <UploadButton uploader={uploader}
                            // options={{multi: true}}
                            onComplete={files => addSelfie(files)}>
                            {({onClick}) =>
                            <UploadContainer onClick={onClick}>
                                <FontAwesomeIcon icon={faCloudArrowUp} size={"4x"} />
                                
                                <p>{`Upload selfie with ${formData.id}`}</p>
                            </UploadContainer>
                            }
                        </UploadButton>
                        :
                        <UploadContainer>
                        {/* {selfie.map((doc: any, index: number) => { */}
                            <img style={{objectFit:'contain', width: '50%', height: '50%'}} src={selfie}/>
                        {/* })} */}
           
                    </UploadContainer>
                    }
                    </>
                    }
                    {formData.id === 'passport' &&
                    
                        <>
                  {docsFront.length < 1 ?
                        
                        <UploadButton uploader={uploader}
                            // options={{multi: true}}
                            onComplete={files => addFrontDocs(files)}>
                            {({onClick}) =>
                            <UploadContainer onClick={onClick}>
                                <FontAwesomeIcon icon={faCloudArrowUp} size={"4x"} />
                                
                                <p>{`Upload ${formData.id} info page`}</p>
                            </UploadContainer>
                            }
                        </UploadButton>

                        :
                        <UploadContainer style={{justifyContent: 'space-evenly'}}>
                            {/* {docs.map((doc: any) => { */}
                               <img style={{objectFit:'contain', width: '30%', height: '30%'}} src={docsFront[0]}/>
                        
               
                        </UploadContainer>
                    }
                             {selfie.length < 1 ?
                        
                        <UploadButton uploader={uploader}
                            options={{multi: true}}
                            onComplete={files => addSelfie(files)}>
                            {({onClick}) =>
                            <UploadContainer onClick={onClick}>
                                <FontAwesomeIcon icon={faCloudArrowUp} size={"4x"} />
                                
                                <p>{`Upload selfie with ${formData.id}`}</p>
                            </UploadContainer>
                            }
                        </UploadButton>
                        :
                        <UploadContainer>
                        {/* {selfie.map((doc: any, index: number) => { */}
                            <img style={{objectFit:'contain', width: '50%', height: '50%'}} src={selfie}/>
                        {/* })} */}
           
                    </UploadContainer>
                    }
                        </>
                    }
                    {/* <input
                      type="text"
                      className={`form-control ${
                        error && !name ? "is-invalid" : ""
                      }`}
                      placeholder="Full Name"
                      name="name"
                      value={name}
                      onChange={(e) => onChange(e)}
                    /> */}
                  </div>
                  {/* <div className="col-12">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        I certify that I am 18 years of age or older, and agree
                        to the
                        <Link href="/helpdesk">
                          <a className="text-primary"> User Agreement</a>
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy">
                          <a className="text-primary">Privacy Policy</a>
                        </Link>
                        .
                      </label>
                    </div>
                  </div> */}

                  <div className="d-grid gap-2">
                    <button disabled={selfie.length === 0 || docsFront.length === 0} type="submit" className="btn btn-success">
                      Send Documents
                    </button>
                  </div>
                </form>
                {/* <div className="text-center">
                  <p className="mt-3 mb-0">
                    <Link href="/signin">
                      <a className="text-primary"> Sign in</a>
                    </Link>{" "}
                    to your account
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYC;
