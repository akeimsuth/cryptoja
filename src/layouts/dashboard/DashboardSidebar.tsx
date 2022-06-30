import Link from "next/dist/client/link";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { auth, logout } from "../../../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { dashboardMenuActive } from "../../utils/utils";
import { getUser } from "../../services/UserService";

const DashboardSidebar: FC = () => {
  const [user, loading] = useAuthState(auth);
  const [userDetails, setUserDetails] = useState<any>();

  const getUserInfo = () => {
    if(user){
      getUser(user.uid)
      .then(res => setUserDetails(res.data))
      .catch(error => console.log(error))
    }
  }

  useEffect(() => {
    dashboardMenuActive();
    getUserInfo();
  }, []);
  return (
    <div className="sidebar">
      <div className="brand-logo">
        <Link href="/dashboard">
          <a>
            <img src="/images/logoi.png" alt="" width="30" />
          </a>
        </Link>
      </div>
      <div className="menu" id="d_menu">
        <ul>
          <li>
            <Link href="/dashboard">
              <a>
                <span>
                  <i className="bi bi-house"></i>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/trade">
              <a>
                <span>
                  <i className="bi bi-globe2"></i>
                </span>
              </a>
            </Link>
          </li>
          {userDetails?.role === 'admin' && 
            <li>
              <Link href="/wallet">
                <a>
                  <span>
                    <i className="bi bi-wallet2"></i>
                  </span>
                </a>
              </Link>
            </li>
          }
          <li>
            <Link href="/settings-profile">
              <a id="settings__mainMenu">
                <span>
                  <i className="bi bi-gear"></i>
                </span>
              </a>
            </Link>
          </li>
          <li className="logout" onClick={() => logout()}>
            {/* <Link href="/signin"> */}
              <a>
                <span>
                  <i className="bi bi-power"></i>
                </span>
              </a>
            {/* </Link> */}
          </li>
        </ul>

        <p className="copyright">
          &#169; <a href="#">Qkit</a>
        </p>
      </div>
    </div>
  );
};

export default DashboardSidebar;
