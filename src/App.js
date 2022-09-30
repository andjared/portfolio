import "./styles/styles.scss";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="App" id="home">
      <Header />
      <Intro />
      <AboutMe />
      <Projects />
      <WorkExperience />
      <Contact />
    </main>
  );
}

export default App;
