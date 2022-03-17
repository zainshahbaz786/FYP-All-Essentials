
import './App.css';
 import { TopBar } from './Components/TopBar';
 import { HSecondBar } from './Components/Home/HSecondBar';
 import {ThirdBar} from './Components/Home/ThirdBar';
 import {Whybar} from './Components/Home/Whybar';
 import ContactUsFull from "./Components/ContactUsFull";
 import WorkWithUs from "./Components/WorkWithUs";
 import ContactUs from './Components/Home/ContactUs';
 import BottomBar from './Components/Home/BottomBar';
import HomePage from './Components/HomePage';
import AboutOurServ from "./Components/AboutOurServ";
 import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
 import WhyPage from './Components/WhyPage';

function App() {
  return (
   <>
   {/* <HomePage/> */}


   
		<Router>
		<Switch >
		<Route path = "/WhyPage" > { /* Why PAge COntents */ }
		<TopBar/><WhyPage/>
		</Route> 
		<Route path = "/WorkWithUs" > { /* Work with us Page Contents */ }
		<TopBar/><WorkWithUs />
		</Route>
		 <Route path = "/ContactUs" > { /* Only Contact Us Proper Page Contents will be shown here */ } 
		 <TopBar/><ContactUsFull/>
		</Route> 
		<Route path = "/AboutOurServ" > <TopBar/><AboutOurServ/> 
		</Route>
		 <Route path = "/"> { /* main page contents */ } <TopBar/><HSecondBar/> <ThirdBar/> < Whybar/> <ContactUs/> <BottomBar/>

		</Route> 
		</Switch> 
		</Router> 
   
   </>
   );
}

export default App;
