import "./App.css";
import Home from "./components/Home/Home";
import IntroSection from "./components/IntroSection/IntroSection";
import LegalDisclaimer from "./components/LegalDisclaimer";
import MobyMax from "./components/MobyMax/MobyMax";
import MobyShotSection from "./components/MobyShot/MobyShotSection";
import MobyWave from "./components/MobyWave/MobyWave";
import MoreMoby from "./components/MoreMoby/MoreMoby";

function App() {
  return (
    <div className="App">
      <Home />
      <LegalDisclaimer />
      <IntroSection />
      <MobyShotSection />
      <MobyWave />
      <MoreMoby />
      <MobyMax />
    </div>
  );
}

export default App;
