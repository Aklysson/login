import { Routes } from './routes/Mainroutes';
import { GlobalStyle } from './global';
import { Header } from './components/header';


function App() {

  return (
    <div>
      <Header /> 
      <hr />
        <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
