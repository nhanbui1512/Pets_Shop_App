import { Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div id="main-wrapper">
        <div className="nav-header">
          <div className="brand-logo">
            <Link href="/">
              <b className="logo-abbr">
                <img src="/template/images/logo.png" alt="" />{" "}
              </b>
              <span className="logo-compact">
                <img src="/template/images/logo-compact.png" alt="" />
              </span>
              <span className="brand-title">
                <img src="/template/images/logo-text.png" alt="" />
              </span>
            </Link>
          </div>
        </div>

        <div className="header">
          <div className="header-content clearfix">
            <div className="nav-control">
              <div className="hamburger">
                <span className="toggle-icon">
                  <i className="icon-menu"></i>
                </span>
              </div>
            </div>
            <div className="header-left">
              <div className="input-group icons">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text bg-transparent border-0 pr-2 pr-sm-3"
                    id="basic-addon1"
                  >
                    <i className="mdi mdi-magnify"></i>
                  </span>
                </div>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Dashboard"
                  aria-label="Search Dashboard"
                />
                <div className="drop-down   d-md-none">
                  <form action="#">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="header-right">
              <ul className="clearfix">
                <li className="icons dropdown">
                  <Link href="/" data-toggle="dropdown">
                    <i className="mdi mdi-email-outline"></i>
                    <span className="badge gradient-1 badge-pill badge-primary">
                      3
                    </span>
                  </Link>
                  <div className="drop-down animated fadeIn dropdown-menu">
                    <div className="dropdown-content-heading d-flex justify-content-between">
                      <span className="">3 New Messages</span>
                    </div>
                    <div className="dropdown-content-body">
                      <ul>
                        <li className="notification-unread">
                          <Link href="/">
                            <img
                              className="float-left mr-3 avatar-img"
                              src="/template/images/avatar/1.jpg"
                              alt=""
                            />
                            <div className="notification-content">
                              <div className="notification-heading">
                                Saiful Islam
                              </div>
                              <div className="notification-timestamp">
                                08 Hours ago
                              </div>
                              <div className="notification-text">
                                Hi Teddy, Just wanted to let you ...
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="notification-unread">
                          <Link href="/">
                            <img
                              className="float-left mr-3 avatar-img"
                              src="/template/images/avatar/2.jpg"
                              alt=""
                            />
                            <div className="notification-content">
                              <div className="notification-heading">
                                Adam Smith
                              </div>
                              <div className="notification-timestamp">
                                08 Hours ago
                              </div>
                              <div className="notification-text">
                                Can you do me a favour?
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <img
                              className="float-left mr-3 avatar-img"
                              src="images/avatar/3.jpg"
                              alt=""
                            />
                            <div className="notification-content">
                              <div className="notification-heading">
                                Barak Obama
                              </div>
                              <div className="notification-timestamp">
                                08 Hours ago
                              </div>
                              <div className="notification-text">
                                Hi Teddy, Just wanted to let you ...
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <img
                              className="float-left mr-3 avatar-img"
                              src="images/avatar/4.jpg"
                              alt=""
                            />
                            <div className="notification-content">
                              <div className="notification-heading">
                                Hilari Clinton
                              </div>
                              <div className="notification-timestamp">
                                08 Hours ago
                              </div>
                              <div className="notification-text">Hello</div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="icons dropdown">
                  <Link href="/" data-toggle="dropdown">
                    <i className="mdi mdi-bell-outline"></i>
                    <span className="badge badge-pill gradient-2 badge-primary">
                      3
                    </span>
                  </Link>
                  <div className="drop-down animated fadeIn dropdown-menu dropdown-notfication">
                    <div className="dropdown-content-heading d-flex justify-content-between">
                      <span className="">2 New Notifications</span>
                    </div>
                    <div className="dropdown-content-body">
                      <ul>
                        <li>
                          <Link href="/">
                            <span className="mr-3 avatar-icon bg-success-lighten-2">
                              <i className="icon-present"></i>
                            </span>
                            <div className="notification-content">
                              <h6 className="notification-heading">
                                Events near you
                              </h6>
                              <span className="notification-text">
                                Within next 5 days
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <span className="mr-3 avatar-icon bg-danger-lighten-2">
                              <i className="icon-present"></i>
                            </span>
                            <div className="notification-content">
                              <h6 className="notification-heading">
                                Event Started
                              </h6>
                              <span className="notification-text">
                                One hour ago
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <span className="mr-3 avatar-icon bg-success-lighten-2">
                              <i className="icon-present"></i>
                            </span>
                            <div className="notification-content">
                              <h6 className="notification-heading">
                                Event Ended Successfully
                              </h6>
                              <span className="notification-text">
                                One hour ago
                              </span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <span className="mr-3 avatar-icon bg-danger-lighten-2">
                              <i className="icon-present"></i>
                            </span>
                            <div className="notification-content">
                              <h6 className="notification-heading">
                                Events to Join
                              </h6>
                              <span className="notification-text">
                                After two days
                              </span>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="icons dropdown d-none d-md-flex">
                  <Link href="/" className="log-user" data-toggle="dropdown">
                    <span>English</span>{" "}
                    <i
                      className="fa fa-angle-down f-s-14"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
                    <div className="dropdown-content-body">
                      <ul>
                        <li>
                          <Link href="/">English</Link>
                        </li>
                        <li>
                          <Link href="/">Dutch</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="icons dropdown">
                  <div
                    className="user-img c-pointer position-relative"
                    data-toggle="dropdown"
                  >
                    <span className="activity active"></span>
                    <img
                      src="images/user/1.png"
                      height="40"
                      width="40"
                      alt=""
                    />
                  </div>
                  <div className="drop-down dropdown-profile   dropdown-menu">
                    <div className="dropdown-content-body">
                      <ul>
                        <li>
                          <Link href="/">
                            <i className="icon-user"></i> <span>Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-envelope-open"></i>{" "}
                            <span>Inbox</span>{" "}
                            <div className="badge gradient-3 badge-pill badge-primary">
                              3
                            </div>
                          </Link>
                        </li>

                        <hr className="my-2" />
                        <li>
                          <Link href="/">
                            <i className="icon-lock"></i>{" "}
                            <span>Lock Screen</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <i className="icon-key"></i> <span>Logout</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nk-sidebar">
          <div className="nk-nav-scroll">
            <ul className="metismenu" id="menu">
              <li className="nav-label">Dashboard</li>
              <li>
                <Link href="/" className="has-arrow">
                  <i className="icon-speedometer menu-icon"></i>
                  <span className="nav-text">Dashboard</span>
                </Link>
                <ul>
                  <li>
                    <Link href="/">Home 1</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ height: 1000 }} className="content-body">
          <div className="row page-titles mx-0">
            <div className="col p-md-0">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">
                  <Link href="/">Home</Link>
                </li>
              </ol>
            </div>
          </div>

          <div className="container-fluid"></div>
        </div>
        <div className="footer">
          <div className="copyright">
            <p>
              Copyright &copy; Designed & Developed by{" "}
              <Link href="https://themeforest.net/user/quixlab">Quixlab</Link>{" "}
              2018
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminLayout;
