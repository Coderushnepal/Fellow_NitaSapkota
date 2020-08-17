import React from "react";

import Header from "../commons/header/Header";
import Beer from "../main/beers/Beer";
import { dummyBeersData } from "../../constants/dummyData";

class Favourites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFor: "",
    };
  }

  setSearchText = (SearchText) => {
    this.setState({
      searchFor: SearchText,
    });
  };

  render() {
    let favourites = dummyBeersData;

    if (this.state.searchFor) {
      favourites = favourites.filter((beer) =>
        beer.name
          .toLowerCase()
          .includes(this.state.searchFor.toLocaleLowerCase())
      );
    }

    return (
      <div className="wrapper">
        <Header setSearchText={this.setSearchText} />

        <main>
          <div className="container">
            {!!favourites.length &&
              favourites.map((beer) => <Beer key={beer.id} info={beer} />)}
          </div>
        </main>
      </div>
    );
  }
}

export default Favourites;