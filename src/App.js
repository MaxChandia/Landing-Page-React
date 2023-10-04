import logo from './logo.svg';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
    <div className='container mx-auto' style={{width: "800px"}}>
        <Jumbotron />
        <div className='card-group' style={{display:"flex"}}>
          <Card />
          <Card />
          <Card />
          <Card/ >
        </div>
      </div>
      <Footer />
      </header>
    </div>
  );
}

export default App;
