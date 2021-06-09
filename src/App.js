
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home/home';
import Coach from './containers/Coach/coach';
import Header from './componentes/Header/header';
import Footer from './componentes/Footer/footer';

function App() {
  return (

    <div>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/coach" exact component={Coach}></Route>
        </Switch>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
