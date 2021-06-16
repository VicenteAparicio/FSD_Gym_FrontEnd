
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './containers/Home/home';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Topjungle from './components/Topjungle/topjungle';
import Quienessomos from './containers/Quienessomos/quienessomos';
import Esparami from './containers/Esparami/esparami';
import Horarios from './containers/Horarios/horarios';
import Tarifas from './containers/Tarifas/tarifas';
import Contacto from './containers/Contacto/contacto';

import Login from './containers/Login/login';
import Register from './containers/Register/register';

import Logcoach from './containers/Logroles/Logcoach/logcoach';
import Logadmin from './containers/Logroles/Logadmin/logadmin';
import Loguser from './containers/Logroles/Loguser/loguser';
import Userlessons from './containers/Logroles/userlessons/userlessons';

import Coach from './containers/Coach/coach';
import Who from './containers/Who/who';
import Newcoach from './containers/Newcoach/newcoach';
import Alllessons from './containers/Alllessons/alllessons';




function App() {
  return (

    <div className="master">
      <BrowserRouter>

        <Header/>
        <Topjungle/>

        <Switch>
          <div className="switchContainer">
            <Route path="/" exact component={Home}></Route>
            <Route path="/quienessomos" exact component={Quienessomos}></Route>
            <Route path="/esparami" exact component={Esparami}></Route>
            <Route path="/horarios" exact component={Horarios}></Route>
            <Route path="/tarifas" exact component={Tarifas}></Route>
            <Route path="/contacto" exact component={Contacto}></Route>

            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route>

            <Route path="/logcoach" exact component={Logcoach}></Route>
            <Route path="/logadmin" exact component={Logadmin}></Route>
            <Route path="/loguser" exact component={Loguser}></Route>
            <Route path="/userlessons" exact component={Userlessons}></Route>

            <Route path="/newcoach" exact component={Newcoach}></Route>
            <Route path="/alllessons" exact component={Alllessons}></Route>

            <Route path="/coach" exact component={Coach}></Route>
            <Route path="/who" exact component={Who}></Route>
          </div>
        </Switch>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
