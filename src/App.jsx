import React from "react";
import "./css/bootstrap.css";
import "./css/styles.css";

import Header from "./components/Header/Header";
import Section from "./components/sectionOne/section";
import SectionTwo from "./components/sectionTwo/sectionTwo";
import Sectionn from "./components/Sectionn/Sectionn";
import Three from "./components/SectionThree/Three";
import Four from "./components/SectionFour/Four";
import Six from "./components/SectionSix/Six";
import Footer from "./components/Footer/Footer";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="home">
          <Section />
        </section>

        <section id="mac">
          <Four />
        </section>

        <section id="iphone">
          <Three />
        </section>

        <section id="ipad">
          <Sectionn />
        </section>

        <section id="watch">
          <SectionTwo />
        </section>

        <section id="tv">
          <Six />
        </section>

        <section id="music">
          <Alert />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
