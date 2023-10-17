// import About from './About';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./Alert";
// import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom"; // Import BrowserRouter and related components

function App() {
  const [Mode, setMode] = useState("light");
  const[DarkModeText,SetDarkModeText] = useState("Enable DarkMode")
  const[alert,SetAlert]= useState(null);

  const showAlert=(message,type)=>{
  SetAlert({
  message: message,
  type: type
  })
  setTimeout(() => {
    SetAlert(null);
  }, 1500);
}
  const ToggleButton = () => {
    if (Mode === "light") {
      setMode("dark");
      SetDarkModeText("Disable DarkMode")
      document.body.style.backgroundColor = "rgb(36 36 36)"
     
        showAlert("DarkMode has been enabled", "success")
   
    } else {
      setMode("light");
      SetDarkModeText("Enable DarkMode")
      document.body.style.backgroundColor = "white"
        
        showAlert("LightMode has been enabled", "success")
      
     
    }

  };

  
  return (
  <>
      {/* <BrowserRouter> */}
        {/* Navbar with a Link to the About page */}
        <Navbar
          title="TextMaster"
          aboutPage="About" // Use Link to navigate to the About page
          mode={Mode}
          btn={ToggleButton}
          DarkModeText={DarkModeText}
        />
         <Alert alert={alert} />
        
        {/* Use Routes to define your routes */}
        {/* <Routes> */}
          {/* Home Route */}
          <TextForm mode={Mode} showAlert={showAlert} />

          {/* About Route */}
          {/* <Route path="/About" element={<About mode={Mode}/>} /> */}

          {/* Handle 404 (Not Found) */}
          {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}

      {/* Alert component */}
     
    </>
  );
}


export default App;
