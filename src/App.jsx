import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" style={{ height: "100vh", padding: "2rem" }}>
          <h1>Welcome to Chrome UI</h1>
        </section>
        <section id="features" style={{ height: "100vh", padding: "2rem" }}>
          <h1>Features</h1>
        </section>
      </main>
    </>
  );
};

export default App;
