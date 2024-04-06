function CartProfile() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="media align-items-center mb-4">
          <img
            className="mr-3"
            src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
            width="80"
            height="80"
            alt=""
          />
          <div className="media-body">
            <h3 className="mb-0">Pikamy Cha</h3>
            <p className="text-muted mb-0">Canada</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col">
            <div className="card card-profile text-center">
              <span className="mb-1 text-primary">
                <i className="icon-people"></i>
              </span>
              <h3 className="mb-0">263</h3>
              <p className="text-muted px-4">Following</p>
            </div>
          </div>
          <div className="col">
            <div className="card card-profile text-center">
              <span className="mb-1 text-warning">
                <i className="icon-user-follow"></i>
              </span>
              <h3 className="mb-0">263</h3>
              <p className="text-muted">Followers</p>
            </div>
          </div>
        </div>

        <h4>About Me</h4>
        <p className="text-muted">
          Hi, I'm Pikamy, has been the industry standard dummy text ever since
          the 1500s.
        </p>
        <ul className="card-profile__info">
          <li className="mb-1">
            <strong className="text-dark mr-4">Mobile</strong>{" "}
            <span>01793931609</span>
          </li>
          <li>
            <strong className="text-dark mr-4">Email</strong>{" "}
            <span>name@domain.com</span>
          </li>
        </ul>
        <div className="col-12 text-center">
          <button className="btn mb-1 btn-flat btn-secondary">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartProfile;
