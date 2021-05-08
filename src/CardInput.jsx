import React from "react";
import Format from "./helpers/format.js";
import { FaRegQuestionCircle } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';
class CardInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editing: false, drag: false };
		// this.handleFocus = this.handleFocus.bind(this);
	}
	render() {
		let value = this.props.value;
		switch (this.props.type) {
			case "big":
				value = this.state.editing
					? (value / 100).toFixed(2)
					: Format.usd(value);
				break;
			case "bubble":
				if (this.props.name === "extra")
					value = this.state.editing
						? (value / 100).toFixed(2)
						: Format.usd(value, false);
				else if (this.props.name === "rate")
					value = this.state.editing
						? (value / 100).toFixed(2)
						: Format.percent(value, "rate");
				else value = this.state.editing ? value : Format.usd(value); // change the format to usd
				break;
			default:
				break;
		}
		let min = 0,
			max = 0,
			step = 1;
		switch (this.props.name) {
			case "extra":
				max = 100000;
				step = 1;
				break;
			case "rate":
				max = 36;
				break;
			case "minimum":
				max = 20;
				break;
			default:
				break;
		}

		return (
			<div className={"card-header-input " + "bubble"}>
				<label>
					{this.props.label}
					{this.props.name == "rate" &&
						<span style={{ color: "#FF6200" }}>
							<FaRegQuestionCircle data-tip data-for='APRTooltip' />
							<ReactTooltip id='APRTooltip'>
							<span>Interest is essentially a charge to the borrower for the use of an asset</span>
							</ReactTooltip>
						</span>
					}
				</label>
				<div className="input-wrapper">
					<input
						type="text"
						name={this.props.name}
						value={value}
						onChange={this.props.onChange}
						onFocus={() => this.setState({ editing: true })}
						onBlur={() => this.setState({ editing: false })}
					/>
					{this.props.type === "bubble" && this.props.slider === true && (
						<input
							type="range"
							step={step}
							min={min}
							max={max}
							value={this.props.value}
							name={this.props.name}
							onChange={this.props.onChange}
						/>
					)}
				</div>
			</div>
		);
	}
	// handleFocus(e){
	// 	this.props.onChange({
	// 		target:{
	// 			value: "0",
	// 			name: this.props.name
	// 		}
	// 	});
	// 	setTimeout(function(){
	// 		e.target.setSelectionRange(10, 10);
	// 	}, 1);
	// }
}
export default CardInput;
