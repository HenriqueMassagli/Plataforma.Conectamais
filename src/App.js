import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  CadastroEmpresas,
  CadastroUsuario1,
  CadastroUsuario2,
  CadastroUsuario3,
  CadastroUsuario4,
  CadastroUsuario5,
  Comunidade,
  Configs,
  ConfigsAcessibilidade,
  ConfigsNotificacoes,
  ConfigsPersonalizacao,
  EscolhaDeConta,
  MensagensNotificacoes,
  MeuPerfil,
  Premium,
  TelaDeLogin,
  Vagas,
} from "./ui-components";
import Home from "./ui-components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Comunidade" element={<Comunidade />} />
          <Route path="/Vagas" element={<Vagas />} />
          <Route path="/TelaDeLogin" element={<TelaDeLogin />} />
          <Route path="/Premium" element={<Premium />} />
          <Route
            path="/MensagensNotificacoes"
            element={<MensagensNotificacoes />}
          />
          <Route path="/EscolhaDeConta" element={<EscolhaDeConta />} />
          <Route
            path="/ConfigsPersonalizacao"
            element={<ConfigsPersonalizacao />}
          />
          <Route
            path="/ConfigsNotificacoes"
            element={<ConfigsNotificacoes />}
          />
          <Route path="/Configs" element={<Configs />} />
          <Route
            path="/ConfigsAcessibilidade"
            element={<ConfigsAcessibilidade />}
          />
          <Route path="/CadastroUsuario5" element={<CadastroUsuario5 />} />
          <Route path="/CadastroUsuario4" element={<CadastroUsuario4 />} />
          <Route path="/CadastroUsuario3" element={<CadastroUsuario3 />} />
          <Route path="/CadastroUsuario2" element={<CadastroUsuario2 />} />
          <Route path="/CadastroUsuario1" element={<CadastroUsuario1 />} />
          <Route path="/CadastroEmpresas" element={<CadastroEmpresas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
