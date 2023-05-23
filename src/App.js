import FirstSection from "./seactions/first-section/FirstSection";
import Header from "./seactions/header/Header";
import MobileHeaderMenu from "./seactions/header/mobile-header/MobileHeaderMenu";
import LastSection from "./seactions/last-section/LastSection";
import MiddleSection from "./seactions/second-section/MiddleSection";


function App() {
  return (
    <div className="App">
  <Header/>
  <MobileHeaderMenu/>
  <FirstSection/>
  <MiddleSection/>
  <LastSection/>
    </div>
  );
}

export default App;
