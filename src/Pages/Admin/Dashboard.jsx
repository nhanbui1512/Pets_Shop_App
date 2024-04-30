import Typewriter from "typewriter-effect";

function Dashboard() {
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
    </div>
  );
}
export default Dashboard;
