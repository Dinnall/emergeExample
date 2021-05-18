import React from "react";
import BigResult from "./BigResult";
import BigResultsSaved from "./BigResultsSaved";
import Report from "./Report";
import SingleCard from "./SingleCard.jsx";
import TwinPies from "./TwinPies.jsx";
import EmptyInstruction from "./EmptyInstruction";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		let defaultCards = [
			{
				balance: "0",
				rate: "0",
				minimum: "0",
				extra: "0",
			},
		];
		let currentCards = localStorage.getItem("current-cards")
			? JSON.parse(localStorage.getItem("current-cards"))
			: defaultCards;
		this.state = {
			cards: currentCards,
			report: 0,
			calculated:false,
		};
		this.reset = this.reset.bind(this);
	}
	render() {
		
		let showAdditional = false;
		this.state.cards.forEach(SingleCard => {
			if (SingleCard.extra > 0) {
				showAdditional = true;
			}
		})
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
								reset={() => this.reset()}
								remove={
									this.state.cards.length > 1 ? () => this.remove(i) : false
								}
								onCalculate={
									() => this.setState({calculated: true})
								}
							/>
						);
					})}
					{/* moved add new card button to SingleCard  */}
					{/* <button className="add-card" onClick={() => this.add()}>
						Add new card
					</button> */}
				</div>
					{this.state.calculated ?
				<div className="right-column bordered">
					<div className="twin-results">
						<BigResult
							cards={this.state.cards}
							report={() => this.setState({ report: false })}
							addExtra={false}
						/>
						{showAdditional &&
							<BigResultsSaved
								cards={this.state.cards}
								report={() => this.setState({ report: true })}
								addExtra={true}
							/>
						}
					</div>
					<TwinPies cards={this.state.cards}/>
				</div>
				: <div className="right-column"> <EmptyInstruction /> </div>}
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
	reset(){

		this.setState({
			calculated: false
		});
		return this.updateCards(
			[
				{
				balance: 0,
				rate: 0,
				minimum: 0,
				extra: 0,
				},
			]
		)
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
		localStorage.setItem("current-cards", JSON.stringify(cards));
		return new Promise(resolve => {
			this.setState({ cards }, () => {
				resolve(true);
			});
		})
	}
}
export default Calculator;
