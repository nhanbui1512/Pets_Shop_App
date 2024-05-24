import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { StorageContext } from "../../Contexts/StorageContext";

function Dashboard() {
  const storageContext = useContext(StorageContext);
  const socket = storageContext.socket;
  useEffect(() => {
    socket.connect();
  }, [socket]);
  return (
    <div>
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
