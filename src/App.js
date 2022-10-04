import "./styles/styles.scss";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Contact from "./components/Contact";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="App" id="home">
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
