import logo from './logo.svg';
import './App.css';
import BasicTable from './componentes/BasicTable'; 
import Formulario from './componentes/Formulario';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
     
     <Routes>
       <Route exact path="/" element={<BasicTable/>} />
       <Route exact path="/form/:id" element={<Formulario/>} />
       <Route path = "*" element={<BasicTable/>} />
     </Routes>
   </Router>
        

      </header>
    </div>
  );
}

export default App;
