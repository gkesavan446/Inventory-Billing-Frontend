import React from "react";
import BarChart from "../components/BarChart";
import NavBar from "../components/NavBar";

const Home = () => {
  const styles = {
    background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%)",
    height: "100vh"
  }

  return (
    <>
      <NavBar />
      <div style={styles}>
        <BarChart />
      </div>
    </>
  );
};

export default Home;
