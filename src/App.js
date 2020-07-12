import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router";
import TrackingContainer from "./components/Tracking/TrackingContainer";
import TheNearestDepartmentsContainer from "./components/TheNearestDepartments/TheNearestDepartmentsContainer";
import DefaultContent from "./components/DefaultContent/DefaultContent";
import Footer from "./components/Footer/Footer";



function App () {
  return (
      <div className="App">
        <Navigation />
        <Route exact path={"/"}
               render={() => <DefaultContent />}
        />
        <Route path={'/tracking'}
               render={() => <TrackingContainer />}
        />
        <Route path={'/theNearestDepartments'}
               render={() => <TheNearestDepartmentsContainer />}
        />
        <Footer/>
      </div>
  );
}

export default App;

