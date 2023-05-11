import "./App.css";
import Nav from "./components/Navigation";
import AboutMe from "./components/About";
import ContactForm from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import {useState} from "react";
import Footer from "./components/Footer";

function App() {
  var [currentPage, setCurrentPage] = useState("About");

  function renderPage() {
    if (currentPage === "About") {
      return <AboutMe />;
    }

    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }

    if (currentPage === "Contact") {
      return <ContactForm />;
    }

    if (currentPage === "Resume") {
      return <Resume />;
    }
  }

  return (
    <div className="App">
      <header>
        <Nav setPage={setCurrentPage} />
      </header>

      {renderPage()}
      
      <Footer setPage={setCurrentPage}/>
    </div>
  );
}

export default App;
