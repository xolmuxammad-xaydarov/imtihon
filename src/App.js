import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Books from './books/Books';
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
      <div className="line">
        <Header />
      </div>
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
