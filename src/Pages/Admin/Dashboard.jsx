import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { StorageContext } from "../../Contexts/StorageContext";
import CardPredict from "../../Components/CardPredict";

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

      <CardPredict />
      {/* <ListSkeleton /> */}
    </div>
  );
}
export default Dashboard;
