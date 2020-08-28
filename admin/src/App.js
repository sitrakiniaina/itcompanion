import React from 'react';
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import './App.css';
import ApplicationBar from './routes/ApplicationBar';
import history from './history';
import Home from './screens/HomeScreen';
import CreateEvenement from './screens/Evenement/CreateScreen';
import ListEvenement from './screens/Evenement/ListScreen';
import Promotion from './screens/Promotion/ListScreen';
import CreatePromotion from './screens/Promotion/CreateScreen';
import UpdatePromotion from './screens/Promotion/DetailsScreen';
import Etudiant from './screens/Etudiant/ListScreen';
import CreateEtudiant from './screens/Etudiant/CreateScreen';
import UpdateEtutiant from './screens/Etudiant/DetailsScreen';
function App() {
  return (
    <div className="App">
      <ApplicationBar></ApplicationBar>
      <Router history={history}>
        <Route exact path="/" component={Home}></Route> 
        <Route exact path="/evenement/" component={ListEvenement}></Route>          
        <Route exact path="/evenement/create" component={CreateEvenement}></Route>     
        <Route exact path="/promotion" component={Promotion}></Route>   
        <Route exact path="/promotion/create" component={CreatePromotion}></Route>    
        <Route exact path="/promotion/update" component={UpdatePromotion}></Route>   
        <Route exact path="/etudiant" component={Etudiant}></Route>   
        <Route exact path="/etudiant/create" component={CreateEtudiant}></Route>    
        <Route exact path="/etudiant/update" component={UpdateEtutiant}></Route>  
      </Router>
    </div>
  );
}
export default App;
