import "./styles/styles.scss";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Contact from "./components/Contact";
import SideBar from "./components/SideBar";
import Loader from "./components/Loader";
import { useState } from "react";
import { useEffect } from "react";

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
    <main id="home">
      <Header />
      <SideBar />
      <Intro />
      <AboutMe />
      <Projects />

      <WorkExperience />
      <Contact />
    </main>
  );
}

export default App;
