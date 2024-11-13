import "./App.css";
import Home from "./components/Home/Home";
import IntroSection from "./components/IntroSection/IntroSection";
import LegalDisclaimer from "./components/LegalDisclaimer";

function App() {
  return (
    <div className="App">
      <Home />
      <LegalDisclaimer />
      <IntroSection />
    </div>
  );
}

export default App;
