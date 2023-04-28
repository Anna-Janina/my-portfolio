// import logo from './logo.svg';
import "./App.css";
// import Dropdown from './components/dropdown';
import Nav from "./components/Navigation";
import Header from "./components/Header";
import AboutMe from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import {useState} from "react";

function App() {
  // var currentPage = "About"
  var [currentPage, setCurrentPage] = useState("Portfolio");

  function renderPage() {
    if (currentPage == "About") {
      return <AboutMe />;
    }

    if (currentPage == "Portfolio") {
      return <Portfolio />;
    }

    if (currentPage == "Contact") {
      return <ContactForm />;
    }

    if (currentPage == "Resume") {
      return <Resume />;
    }
  }

  return (
    <div className="App">
      {/* <header className="bg-green-500"> */}
      {/* <Dropdown/> */}
      <Header />
      <Nav setPage={setCurrentPage} />
      {/* <button onClick={() => {setCurrentPage("Contact")}}>Click</button> */}

      {renderPage()}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      {/* </header> */}
    </div>
  );
}

export default App;
