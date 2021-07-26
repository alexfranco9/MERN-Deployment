import { Router } from '@reach/router';
import './App.css';
import Home from './views/Home';
import Add from './views/Add';
import One from './views/One';
import Update from './views/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <h1 className="jumbotron"> Pet Shelter </h1>
      <Router>
        <Home path="/" />
        <Add path="/pet/new" />
        <One path="/pet/:_id" />
        <Update path="/pet/update/:_id" />
      </Router>
    </div>
  );
}

export default App;
