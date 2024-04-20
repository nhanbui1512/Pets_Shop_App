import Button from "@mui/material/Button";
import { useState } from "react";

// import { toast } from "react-toastify";

function Password() {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className="container-fluid">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="form-validation">
              <div className="form-valide">
                <div className="form-group row">
                  <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-username"
                  >
                    Current Password <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <input
                      value={currentPass}
                      onChange={(e) => {
                        setCurrentPass(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                      id="val-username"
                      name="val-username"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-confirm-password"
                  >
                    New Password <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <input
                      value={newPass}
                      onChange={(e) => {
                        setNewPass(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                      id="val-confirm-password"
                      name="val-confirm-password"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    className="col-lg-4 col-form-label"
                    htmlFor="val-confirm-password"
                  >
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-6">
                    <input
                      value={confirmPass}
                      onChange={(e) => {
                        setConfirmPass(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                      id="val-confirm-password"
                      name="val-confirm-password"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-8 ml-auto">
                    <Button variant="contained">Change Password</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
