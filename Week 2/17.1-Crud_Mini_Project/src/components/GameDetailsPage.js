import React from "react";
import { withRouter } from "react-router-dom";
import Btn from "./Btn";
import niStore from "../api/niStore";

class GameDetailsPage extends React.Component {
    state = { id: this.props.match.params.id, gameData: {} };

    componentDidMount() {
        this.fetchGame();
    }

    fetchGame = async () => {
        try {
            const game = await niStore.get(`games/${this.state.id}`);
            this.setState({ gameData: game.data });
        } catch (e) {
            console.log(e);
        }
    };

    addToCart = () => {
        const myStorage = window.localStorage;
        if (myStorage.cart === undefined) {
            myStorage.cart = [];
        }
        const newCart = [...myStorage.getItem("cart").split(",")];
        if (newCart[0] === "") {
            newCart.shift();
        }
        newCart.push(this.state.gameData.name);
        myStorage.setItem("cart", newCart);
    };

    render() {
        return (
            <div className="game-details-page">
                <div className="game-details-page-left">
                    <span className="game-name">
                        {this.state.gameData.name}
                    </span>
                    <span className="game-rating">
                        Rating: {this.state.gameData.rating}
                    </span>
                    <span className="game-price">
                        {this.state.gameData.price} &#8362;
                    </span>
                    <Btn text="Add to Cart" clickHandle={this.addToCart} />
                </div>
                <div className="game-details-page-right">
                    <img
                        src={this.state.gameData.imgUrl}
                        alt={this.state.gameData.name}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(GameDetailsPage);
