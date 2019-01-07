import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import InventoryPage from "../components/InventoryPage";
import AddInventoryItem from "../components/AddInventoryItem";
import EditInventoryPage from "../components/EditInventoryPage";
import NotFoundPage from "../components/NotFoundPage";
import StorePage from "../components/StorePage";
import ReportPage from "../components/ReportPage";
import RecordsPage from "../components/RecordsPage";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={StorePage} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/create" component={AddInventoryItem} />
        <Route path="/edit/:id" component={EditInventoryPage} />
        <Route path="/report" component={ReportPage} />
        <Route path="/records" component={RecordsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
