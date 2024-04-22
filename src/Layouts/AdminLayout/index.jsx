import { useContext, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import DropdownMenu from "../../Components/DropdownMenu";
import { StorageContext } from "../../Contexts/StorageContext";
import Cookies from "js-cookie";

function AdminLayout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(true);
  const storage = useContext(StorageContext);

  if (!storage.userData || storage.userData.UserRoles !== "admin") {
    return <Navigate to="/login" />;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        id="main-wrapper"
        className={openSidebar ? "show" : "show menu-toggle"}
      >
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
            <div
              onClick={() => {
                setOpenSidebar(!openSidebar);
              }}
              className="nav-control"
            >
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
                              src={storage.userData.profileImage}
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
                      src={storage.userData.profileImage}
                      height="40"
                      width="40"
                      alt=""
                    />
                  </div>
                  <div className="drop-down dropdown-profile   dropdown-menu">
                    <div className="dropdown-content-body">
                      <ul>
                        <li>
                          <Link to={`/${storage.userData?.UserRoles}/profile`}>
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
                          <Link to="/admin/password">
                            <i className="icon-lock"></i> <span>Password</span>
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              Cookies.remove("token");
                              window.location.reload();
                            }}
                          >
                            <i className="icon-key"></i> <span>Logout</span>
                          </button>
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
              <DropdownMenu title={"Category"}>
                <li>
                  <Link to={"/admin/products"}>List Category</Link>
                </li>
              </DropdownMenu>
              <DropdownMenu title={"Breeds"}>
                <li>
                  <Link to={"/admin/breeds"}>List Breed</Link>
                </li>
                <li>
                  <Link to={"/admin/addbreed"}>Add Breed</Link>
                </li>
              </DropdownMenu>
              <DropdownMenu title={"Product"}>
                <li>
                  <Link to={"/admin/products"}>List Product</Link>
                </li>
                <li>
                  <Link to={"/admin/addproduct"}>Add Product</Link>
                </li>
              </DropdownMenu>

              <DropdownMenu title={"Users"}>
                <li>
                  <Link to={"/admin/users"}>List User</Link>
                </li>
                <li>
                  <Link>Add User</Link>
                </li>
              </DropdownMenu>

              <DropdownMenu title={"Blogs"}>
                <li>
                  <Link to={"/admin/blogs"}>List Blog</Link>
                </li>
                <li>
                  <Link to={"/admin/addblog"}>Add Blog</Link>
                </li>
              </DropdownMenu>

              <DropdownMenu title={"Orders"}>
                <li>
                  <Link to={"/admin/orders"}>List Order</Link>
                </li>
              </DropdownMenu>
            </ul>
          </div>
        </div>

        <div className="content-body">
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

          <div
            style={{
              minHeight: "100vh",
            }}
            className="container-fluid"
          >
            <Outlet />
          </div>
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
