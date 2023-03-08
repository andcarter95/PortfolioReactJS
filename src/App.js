import './App.scss';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './Components/Layout/layout';
import Home from './Components/Home/home';
import About from './Components/About/about';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Route>
    </Routes>
  );
}

export default App;
