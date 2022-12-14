import "./styles/styles.scss";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Contact from "./components/Contact";
import SideBar from "./components/SideBar";
import Loader from "./components/Loader";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <SideBar />
      <main id="home">
        <Header />
        <Intro />
        <AboutMe />
        <Projects />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
