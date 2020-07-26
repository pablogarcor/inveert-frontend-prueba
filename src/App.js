import React from 'react';
//Internal exports
import PrimeraVista from "./screens/primeraVista/PrimeraVista";
import SegundaVista from "./screens/segundaVista/SegundaVista";
//External exports
import {Layout} from "antd";
import {Switch,Route} from "react-router-dom";

//Import styles
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
          <Route
              path='/userDetail/:userNumber'
              component={SegundaVista}
          />
        <Route
          path='/'
          component={PrimeraVista}
        />
      </Switch>
    </Layout>
  );
}

export default App;
