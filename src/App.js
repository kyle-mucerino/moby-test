import "./App.css";
import Home from "./components/Home/Home";
import IntroSection from "./components/IntroSection/IntroSection";
import LegalDisclaimer from "./components/LegalDisclaimer";
import MobyShotSection from "./components/MobyShot/MobyShotSection";

function App() {
  return (
    <div className="App">
      <Home />
      <LegalDisclaimer />
      <IntroSection />
      <MobyShotSection />
    </div>
  );
}

export default App;
