import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pagesComponents/__homePage/HomePage';
import SignUp from './pagesComponents/__auth/__signup/SignUp';
import SignIn from './pagesComponents/__auth/__signin/SignIn';
import Profile from './pagesComponents/__profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home></Home>}></Route>
        <Route path='/register' index element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<SignIn></SignIn>}></Route>
        <Route path='profile' element={<Profile></Profile>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
