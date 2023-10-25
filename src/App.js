import './App.css';
import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/*
      version-01:
      <header></header>
      <nav></nav>
      <main></main>
      <footer></footer>

      version-02:
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>

      version-03:
      */}
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
