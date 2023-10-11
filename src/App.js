import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/*
      step-01:

      <header></header>
      <nav></nav>
      <main></main>
      <footer></footer>

      step-02:
      */}
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
