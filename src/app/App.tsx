import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { MusicPlayer } from "./components/MusicPlayer";

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <MusicPlayer />
    </div>
  );
}
