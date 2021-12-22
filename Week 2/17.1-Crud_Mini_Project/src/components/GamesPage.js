import React from "react";
import { Link } from "react-router-dom";
import GameDetails from "./GameDetails";
import niStore from "../api/niStore";

class GamesPage extends React.Component {
    state = { gamesList: [] };

    componentDidMount() {
        this.fetchGames();
    }

    fetchGames = async () => {
        try {
            const gamesList = await niStore.get("games");
            this.setState({ gamesList: gamesList.data });
        } catch (e) {
            console.log(e);
        }
    };

    displayGames = () => {
        return this.state.gamesList.map((game) => {
            return (
                <Link
                    key={game.id}
                    to={`${this.props.location.pathname}/${game.id}`}
                >
                    <GameDetails
                        name={game.name}
                        imgUrl={game.imgUrl}
                        price={game.price}
                    />
                </Link>
            );
        });
    };

    render() {
        return (
            <div className="games-page-container">
                <div className="games-pages-items-container">
                    {this.displayGames()}
                </div>
            </div>
        );
    }
}

export default GamesPage;
