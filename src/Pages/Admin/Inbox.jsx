import { useEffect } from "react";
import { Link } from "react-router-dom";

function Inbox() {
  useEffect(() => {
    // call api get conversatioins
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="email-list m-t-15">
                    <div className="message">
                      <Link to={"/admin/inbox/2"}>
                        <div className="col-mail col-mail-1">
                          <div className="email-checkbox">
                            <input type="checkbox" id="chk2" />
                            <label className="toggle" htmlFor="chk2"></label>
                          </div>
                          <span className="star-toggle ti-star"></span>
                        </div>
                        <div className="col-mail col-mail-2">
                          <div className="subject">
                            Ingredia Nutrisha, A collection of textile samples
                            lay spread out on the table - Samsa was a travelling
                            salesman - and above it there hung a picture
                          </div>
                          <div className="date">11:49 am</div>
                        </div>
                      </Link>
                    </div>
                    <div className="message">
                      <Link to={"/admin/inbox/1"}>
                        <div className="col-mail col-mail-1">
                          <div className="email-checkbox">
                            <input type="checkbox" id="chk2" />
                            <label className="toggle" htmlFor="chk2"></label>
                          </div>
                          <span className="star-toggle ti-star"></span>
                        </div>
                        <div className="col-mail col-mail-2">
                          <div className="subject">
                            Ingredia Nutrisha, A collection of textile samples
                            lay spread out on the table - Samsa was a travelling
                            salesman - and above it there hung a picture
                          </div>
                          <div className="date">11:49 am</div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-7">
                      <div className="text-left">1 - 20 of 568</div>
                    </div>
                    <div className="col-5">
                      <div className="btn-group float-right">
                        <button className="btn btn-gradient" type="button">
                          <i className="fa fa-angle-left"></i>
                        </button>
                        <button className="btn btn-dark" type="button">
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
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

export default Inbox;
