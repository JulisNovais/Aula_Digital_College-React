import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import { ModalTemplate } from "./components/ModalTemplate";
import { CardTemplate } from "./components/CardTemplate";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [livro, setLivro] = useState({nome: 'o mundo de sofia', autor: 'Josefin Guarder'});

  return (
    <div className="App">
      <ModalTemplate data={livro} />
      
    </div>
  );
}

export default App;
