import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Messenger from './pages/Messenger';
import Login from './pages/Login';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Messenger />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
