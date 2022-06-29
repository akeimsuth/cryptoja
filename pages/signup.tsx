import { NextPage } from "next";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { auth, registerWithEmailAndPassword } from "../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Signup: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    phone: "",
    address: ""
  });
  const [error, setError] = useState(false);
  const [user, loading] = useAuthState(auth);
  const { firstName, lastName, email, password, phone, address } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    setError(true);
    registerWithEmailAndPassword(`${firstName} ${lastName}`, email, password, phone, address);
    // if (name && email && password && phone && address) {
    //   router.push("/verify-email");
    // }
  };
  
  useEffect(() => {
    if (loading) {
      console.log('Loading: ', loading)
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      router.push("/verify-email");
    }
  }, [user, loading]);

  return (
    <div className="authincation section-padding">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-5 col-md-6">
            <div className="mini-logo text-center my-4">
              <Link href="/">
                <a>
                  <img src="/images/logo.png" alt="" />
                </a>
              </Link>
              <h4 className="card-title mt-5">Create your account</h4>
            </div>
            <div className="auth-form card">
              <div className="card-body">
                <form
                  name="myform"
                  className="signin_validate row g-3"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div className="col-12">
                  <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        error && !firstName ? "is-invalid" : ""
                      }`}
                      // placeholder="Full Name"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
                  <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className={`form-control ${
                        error && !lastName ? "is-invalid" : ""
                      }`}
                      // placeholder="Full Name"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
                  <label className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${
                        error && !email ? "is-invalid" : ""
                      }`}
                      // placeholder="hello@example.com"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
                  <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className={`form-control ${
                        error && !phone ? "is-invalid" : ""
                      }`}
                      // placeholder="(876)678-9087"
                      name="phone"
                      value={phone}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
                  <label className="form-label">Address</label>
                    <input
                      type="text"
                      className={`form-control ${
                        error && !address ? "is-invalid" : ""
                      }`}
                      // placeholder="eg. 12 Ruthven Road, Kingston 5"
                      name="address"
                      value={address}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
                  <label className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${
                        error && !password ? "is-invalid" : ""
                      }`}
                      // placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="col-12">
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
                          <a className="text-success"> User Agreement</a>
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy">
                          <a className="text-success">Privacy Policy</a>
                        </Link>
                        .
                      </label>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-success">
                      Create account
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  <p className="mt-3 mb-0">
                    <Link href="/signin">
                      <a className="text-primary"> Sign in</a>
                    </Link>{" "}
                    to your account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
