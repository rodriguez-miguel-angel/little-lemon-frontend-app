import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import AboutPage from './components/AboutPage/AboutPage';
import Menu from './components/MenuPage/MenuPage';
import BookingPage from './components/BookingPage/BookingPage';
import Order from './components/Order/Order';
import Login from './components/Login/Login';

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
      <Header/>
      <Main/>
      <Footer/>

      version-04:
      <Header/>
      <Home />
      <Footer/>
      */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
