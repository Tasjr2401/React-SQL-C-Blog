import LogIn from './Components/LogIn';
import Home from './Components/Home';
import CreateAccount from './Components/CreateAccount';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LogIn />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/CreateAccount' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
