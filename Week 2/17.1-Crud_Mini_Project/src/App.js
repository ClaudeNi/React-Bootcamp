import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import GamesPage from "./components/GamesPage";
import GameDetailsPage from "./components/GameDetailsPage";
import ManagerPage from "./components/ManagerPage";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import "./components/components.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/manager" exact component={ManagerPage} />
                        <Route path="/games" exact component={GamesPage} />
                        <Route
                            path="/games/:id"
                            exact
                            component={GameDetailsPage}
                        />
                        <Route component={PageNotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
