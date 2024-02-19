import './App.css';
import Nav from './components/Nav.js'
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import Create from './components/Create.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Blog />} ></Route>
          <Route path='/Contact' element={<Contact />} ></Route>
          <Route path='/Create' element={<Create />} ></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
