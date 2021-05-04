import React from "react";
import BigResult from "./BigResult";
import BigResultsSaved from "./BigResultsSaved";
import Report from "./Report";
import SingleCard from "./SingleCard.jsx";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    let defaultCards = [
      {
        balance: "000000",
        rate: "0.0%",
        minimum: "00",
        extra: "0",
      },
    ];
    let currentCards = localStorage.getItem("current-cards")
      ? JSON.parse(localStorage.getItem("current-cards"))
      : defaultCards;
    this.state = {
      cards: currentCards,
      report: 0,
    };
    console.log("state:", this.state.cards)
  }
  render() {
    return (
      <div className="calculator">
        <div className="cards-container">
          {this.state.cards.map((cardData, i) => {
            return (
              <SingleCard
                key={i}
                data={cardData}
                update={(newData) => this.update(i, newData)}
                clone={() => this.clone(i)}
                add={() => this.add()}
                remove={
                  this.state.cards.length > 1 ? () => this.remove(i) : false
                }
              />
            );
          })}
          {/* moved add new card button to SingleCard  */}
          {/* <button className="add-card" onClick={() => this.add()}>
            Add new card
          </button> */}
        </div>
        <div className="twin-results">
          <BigResult
            cards={this.state.cards}
            report={() => this.setState({ report: false })}
            addExtra={false}
          />
          <BigResultsSaved
            cards={this.state.cards}
            report={() => this.setState({ report: true })}
            addExtra={true}
          />
        </div>
        {this.state.report !== 0 && (
          <Report
            cards={this.state.cards}
            report={() => this.setState({ report: 0 })}
            addExtra={this.state.report}
          />
        )}
      </div>
    );
  }
  update(key, newData) {
    let cards = [...this.state.cards];
    cards[key] = newData;
    this.updateCards(cards);
  }
  remove(key) {
    let cards = [...this.state.cards];
    if (cards.length <= 1) return;
    cards.splice(key, 1);
    this.updateCards(cards);
  }
  clone(key) {
    let cards = [...this.state.cards];
    if (!cards[key]) return;
    let newCard = {};
    Object.assign(newCard, cards[key]);
    cards.push(newCard);
    this.updateCards(cards);
  }
  add() {
    let cards = [...this.state.cards];
    cards.push({
      balance: 0,
      rate: 0,
      minimum: 0,
      extra: 0,
    });
    this.updateCards(cards);
  }
  updateCards(cards) {
    this.setState({ cards });
    localStorage.setItem("current-cards", JSON.stringify(cards));
  }
}
export default Calculator;
