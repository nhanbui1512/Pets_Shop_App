import Typewriter from "typewriter-effect";

function Dashboard() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Welcome to Dashboard!"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
export default Dashboard;
