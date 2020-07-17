import React from 'react';
import './App.css';
import {Route} from "react-router";
import TrackingContainer from "./components/Tracking/TrackingContainer";
import NearestDepartmentsContainer from "./components/NearestDepartments/NearestDepartmentsContainer";
import DefaultContent from "./components/DefaultContent/DefaultContent";
import Footer from "./components/Footer/Footer";
import NavigationContainer from "./components/Navigation/NavigationContainer";

function App () {
  return (
      <div className="App">
        <NavigationContainer />
        <Route exact path={"/"}
               render={() => <DefaultContent />}
        />
        <Route path={'/tracking'}
               render={() => <TrackingContainer />}
        />
        <Route path={'/theNearestDepartments'}
               render={() => <NearestDepartmentsContainer />}
        />
        <Footer/>
      </div>
  );
}

export default App;

