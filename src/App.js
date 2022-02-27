import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
