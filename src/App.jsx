import CanvasBackground from './components/CanvasBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useGitHub from './hooks/useGitHub';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const { user, repos, loading, error, username } = useGitHub();
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <CanvasBackground />
      <Navbar />
      <Hero user={user} />
      <About />
      <Skills />
      <Projects repos={repos} loading={loading} error={error} username={username} />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
