import './App.css';
import CardDetails from './components/CardDetails.tsx';
import  Cards  from './components/Cards.tsx';
import { Header } from './components/Header.tsx';
import { Route, Routes } from 'react-router-dom';
function App() {

  return <>
    <Header ></Header>
    <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardDetails></CardDetails>} />
        <Route path="card-details" element={<CardDetails></CardDetails>}></Route>
      </Routes>
    </>;
}

export default App;
