import './App.scss';
import { Routes, Route } from 'react-router-dom';

// Components
import Layout from './Components/Layout/layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}/>
    </Routes>
  );
}

export default App;
