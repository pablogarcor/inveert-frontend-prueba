import React from 'react';
//Import UI Framework components
import {Layout} from "antd";
import HeaderMain from "./components/header/HeaderMain";
import PrimeraVista from "./screens/primeraVista/PrimeraVista";
import SegundaVista from "./screens/segundaVista/SegundaVista";
import {Switch,Route} from "react-router-dom";
//Import Screens for the router configuration

//Import styles
import './styles/inveert-antd.css';
import './App.css';

function App() {
  return (
    <Layout>
      <HeaderMain/>
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
