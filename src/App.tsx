import { Routes } from './routes/Mainroutes';
import { GlobalStyle } from './global';
import { Header } from './components/header';


function App() {

  return (
    <div>
      <Header /> 
      <div className="content">
        <Routes />
        </div>
      <GlobalStyle />
    </div>
  );
}

export default App;
