// import logo from './logo.svg';
import './App.css';
// import Dropdown from './components/dropdown';
import Card from './components/card';
import Nav from './components/Navigation';
import Header from './components/Header';
import AboutMe from './components/About';



const projects = [
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
]

function App() {
  return (
    <div className="App">
      {/* <header className="bg-green-500"> */}
        {/* <Dropdown/> */}
        <Header />
        <Nav />
        <AboutMe />
        {projects.map((project, index) => (
          <div key={index}>
            <Card project={project} />
          </div>
        ))}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {/* </header> */}
    </div>
  );
}

export default App;
