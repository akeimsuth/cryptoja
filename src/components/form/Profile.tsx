import { FC, useState, useEffect } from "react";
import { auth, updateUserEmail, updateUserPassword } from "../../../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUser } from "../../services/UserService";

const Profile: FC = () => {
  const [error, setError] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e: any) => {
    e.preventDefault();
    if(email && password) {
      updateUserEmail(email)
      updateUserPassword(password)
    }
    setError(true);
  };


  const classNameChange = (value: string, extClassName?: string) =>
    `${extClassName ? extClassName : "form-control"} ${
      error && !value ? "is-invalid" : ""
    }`;
  return (
    <div className="col-xxl-6 col-xl-6 col-lg-6">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">User Profile</h4>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row g-3">
              <div className="col-xxl-12">
                <label className="form-label">New Email</label>
                <input
                  required
                  type="email"
                  className={classNameChange(email)}
                  value={email}
                  name="email"
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="col-xxl-12">
                <label className="form-label">New Password</label>
                <input
                  required
                  type="password"
                  className={classNameChange(password)}
                  value={password}
                  name="password"
                  onChange={(e) => onChange(e)}
                />
                {/* <small className="mt-2 mb-0 d-block">
                  Enable two factor authencation on the security page
                </small> */}
              </div>
              <div className="col-12">
                <button disabled={!email && !password} className="btn btn-success waves-effect">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
