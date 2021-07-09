import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage  from '../src/pages/homepage/homepage.component.jsx';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
