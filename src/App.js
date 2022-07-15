import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';


function Nav() {
  return (
    <h1>I am nav</h1>
  )
}


function Header() {
  return (
    <ul>
      <Nav/>
      <li>main page</li>
      <li>about</li>
      <li>contact</li>
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs/>
      <h1>hello world</h1>    
    </div>
  );
}

export default App;
