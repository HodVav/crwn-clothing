import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';
import {Switch , Route , Link} from 'react-router-dom';

const HatsPage = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route  exact path='/' component={HomePage}/>
      <Route   path='/shop' component={ShopPage}/>
      </Switch>     
    </div>
  );
}

export default App;
