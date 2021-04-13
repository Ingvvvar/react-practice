import './style.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">

      <Header />

      <main className="main">
		    <div className="container">
          <Router>
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/:id" component={ProductList}/>
              <Route render={ () => <h2>Error page</h2>}/>
            </Switch>
          </Router>

        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
