import React, { useState, useEffect } from "react";
import "./App.scss";
import DashBoardPage from "./Components/DashBoardPage";
import RegisterStudent from "./Components/RegisterStudent";
import SearchByRollNo from "./Components/SearchByRollNo";
import SumOfThreeSubjects from "./Components/SumOfThreeSubjects";
import ViewStudentRecord from "./Components/ViewStudentRecord";   
import AverageOfCollege from "./Components/AverageOfCollege";
import { Button, Input, Table, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Switch, Route, Link, Redirect } from "react-router-dom";
const App = () => {
  const [loading, setLoading] = useState(false);
  const antIcon = <LoadingOutlined spin />;
  return (
    <div className="App">
      <Spin spinning={loading} indicator={antIcon} style={{}} size="large" />
      <h1 className="Unversity_h1">Unversity of the HarshaVardhan Rao </h1>

      <Switch>
        <Route path="/" exact={true}>
          <DashBoardPage />
        </Route>
        <Route path="/RegisterStudent">
          <RegisterStudent />
        </Route>
        <Route path="/SearchByRollNo">
          <SearchByRollNo />
        </Route>
        <Route path="/AverageOfCollege">
          <AverageOfCollege />
        </Route>
        <Route path="/ViewStudentRecord">
          <ViewStudentRecord />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
