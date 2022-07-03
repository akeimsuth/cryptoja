import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { auth, logout } from "../../../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { activeLandingHeaderMenu } from "../../utils/utils";
import { getUser } from "../../services/UserService";
const LandingHeader: NextPage = () => {
  useEffect(() => {
    activeLandingHeaderMenu();
  }, []);
  const [dropDown, setDropDown] = useState("");
  const [toggle, setToggle] = useState(false);
  const [details, setDetails] = useState<any>()
  const [user, loading] = useAuthState(auth);
  const setValue = (value: string) =>
      setDropDown(value === dropDown ? "" : value),
    classNameChange = (value: string) => (value === dropDown ? "show" : "");

  const showUserDetails = () => {
    if (user) {
      getUser(user!.uid)
      .then(res => setDetails(res.data))
      .catch(error => console.log(error))
    }
  }

  useEffect(() => {
    showUserDetails();
  }, [user])

  return (
    <div className="header landing ">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="navigation">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="brand-logo">
                  <Link href="/">
                    <a>
                      <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="logo-primary"
                        width="45"
                        height="45"
                      />
                      {/* <img
                        src="/images/logow.png"
                        alt="Logo"
                        className="logo-white"
                      /> */}
                      <strong className="text-dark">Tokenomyja</strong>
                    </a>
                  </Link>
                </div>
                <button
                  className="navbar-toggler"
                  onClick={() => setToggle(!toggle)}
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className={`collapse navbar-collapse ${toggle ? "show" : ""}`}
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav ms-auto" id="navMenu_____">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${classNameChange("home")}`}
                        href="/"
                        // data-toggle="dropdown"
                        // onClick={() => setValue("home")}
                      >
                        Home
                      </a>
                      {/* <div
                        className={`dropdown-menu ${classNameChange("home")}`}
                      >
                        <Link href="/">
                          <a className="dropdown-item">Home 1</a>
                        </Link>
                        <Link href="/index-2">
                          <a className="dropdown-item">Home 2</a>
                        </Link>
                        <Link href="/index-3">
                          <a className="dropdown-item">Home 3</a>
                        </Link>
                      </div> */}
                    </li>
                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        onClick={() => setValue("Pages")}
                      >
                        Pages
                      </a>
                      <div
                        className={`dropdown-menu ${classNameChange("Pages")}`}
                      >
                        <Link href="/about">
                          <a className="dropdown-item">About us</a>
                        </Link>
                        <Link href="/app">
                          <a className="dropdown-item">App</a>
                        </Link>
                        <Link href="/price">
                          <a className="dropdown-item">Price</a>
                        </Link>
                        <Link href="/price-details">
                          <a className="dropdown-item">Price Details</a>
                        </Link>
                        <Link href="/team">
                          <a className="dropdown-item">Team</a>
                        </Link>
                        <Link href="/blog">
                          <a className="dropdown-item">Blog</a>
                        </Link>
                        <Link href="/blog-details">
                          <a className="dropdown-item">Blog Details</a>
                        </Link>
                        <Link href="/career">
                          <a className="dropdown-item">Career</a>
                        </Link>
                      </div>
                    </li> */}
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/contact"
                        data-toggle="dropdown"
                        // onClick={() => setValue("Support")}
                      >
                        Contact
                      </a>
                      {/* <div
                        className={`dropdown-menu ${classNameChange(
                          "Support"
                        )}`}
                      >
                        <Link href="/contact">
                          <a className="dropdown-item">Contact us</a>
                        </Link>
                        <Link href="/helpdesk">
                          <a className="dropdown-item">Help Desk</a>
                        </Link>
                        <Link href="/privacy-policy">
                          <a className="dropdown-item">Privacy</a>
                        </Link>
                        <Link href="/faq">
                          <a className="dropdown-item">FAQ</a>
                        </Link>
                      </div> */}
                    </li>
                    {/* {((user && details?.kyc === 'required') && details?.role !== "admin") &&
                        <li className="nav-item">
                        <Link href="/kyc">
                          <a style={{whiteSpace: 'nowrap', color: 'white'}} className="btn btn-danger">Upload Documents</a>
                        </Link>
                      </li>
                    } */}
                    {/* {((user && details?.kyc === 'pending') && details?.role !== "admin") &&
                        <li className="nav-item">
                          <a style={{whiteSpace: 'nowrap', color: 'white'}} className="btn btn-success">Pending Approval</a>
                      </li>
                    } */}
                    {((user && details?.kyc === 'approved') || details?.role === "admin") && 
                    
                    <li className="nav-item">
                      <Link href="/dashboard">
                        <a className="nav-link">Dashboard</a>
                      </Link>
                    </li>
                    }
                  </ul>
                </div>
                {!user ?
                
                <div className="signin-btn d-none d-lg-block">
                  <Link href="/signin">
                    <a className="btn btn-success">Sign in</a>
                  </Link>
                </div>
                :
                <div className="signin-btn d-none d-lg-block">
                    <a className="btn btn-success" onClick={() => logout()}>Sign Out</a>
                </div>
              }
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
