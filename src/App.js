import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserData from './components/UserData';
import home from './components/home';
import image from './components/image';
import Header from './components/Header';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/form" component={UserData} />
        <Route path="/image" component={image} />
      </Switch>
    </Router>
  )
}




function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
