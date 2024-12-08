import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { StorageContext } from "../../Contexts/StorageContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const storageContext = useContext(StorageContext);
  const socket = storageContext.socket;
  useEffect(() => {
    // socket.connect();
  }, [socket]);
  return (
    <div>
      <div className="row page-titles mx-0">
        <div className="col p-md-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin">Dashboard</Link>
            </li>
          </ol>
        </div>
      </div>
      <Typewriter
        options={{
          strings: ["Welcome to Dashboard!"],
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />

      {/* <ListSkeleton /> */}
    </div>
  );
}
export default Dashboard;
