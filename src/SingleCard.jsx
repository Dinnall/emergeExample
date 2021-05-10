import React from "react";
import { FiPlus } from "react-icons/fi";
import CardInput from "./CardInput.jsx";
import Calc from "./helpers/calc.js";

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      calculated: false,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  render() {
    let Result = Calc.single(this.state.data);
    return (
      <div className="single-card">
        <div
          className="card-header"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <CardInput
            name="balance"
            value={this.state.data.balance}
            type="big"
            onChange={this.handleChange}
            label="What is your current credit card balance?"
          />
          <CardInput
            name="rate"
            value={this.state.data.rate}
            type="bubble"
            onChange={this.handleChange}
            label="Interest Rate (APR)"
          />
          <CardInput
            name="minimum"
            value={this.state.data.minimum}
            type="big"
            onChange={this.handleChange}
            label="What is your minimum payment due this each month?"
          />
          <button className="calculate" onClick={this.calculate}>Calculate</button>
          {this.state.error &&
            <span className="card-error">{this.state.error}</span>
          }
        </div>
        {/* <div className="card-summary" ref={el => (this.componentRef = el)}>
					<CardResult label="Monthly payment" value={Format.usd(Result.monthly * 100)} />
					<CardResult label="Balance payoff" value={Format.months(Result.payoff)} />
					<CardResult label="Total payments" value={Format.usd(Result.total * 100)} />
				</div> */}

        <div className="card-footer">
          {/* {this.props.clone && (
            <div
              className="card-clone pointer"
              onClick={() => this.props.clone()}
            >
              Copy Card
              <FiCopy />
            </div>
          )} */}

          {/* moved add new card button to SingleCard  */}
          {/* <button
            className="add-new-card pointer"
            onClick={() => this.props.add()}
            style={{ fontSize: "x-large" }}
          >
            <FiPlus />
            Add new card
          </button> */}

          {this.props.remove && (
            <div
              className="card-remove pointer"
              onClick={() => this.props.remove()}
              style={{ fontSize: "x-large" }}
            >
              Remove
            </div>
          )}
        </div>
        <div className="card-additional" style={{ display: this.state.calculated ? '' : 'none', fontSize: "x-large", color: "#FF6200", fontWeight: "bold" }}>
          <CardInput
            name="extra"
            value={this.state.data.extra}
            type="bubble"
            onChange={this.handleChange}
            label="Can you pay a little more per month? Enter any additional amount to see how this might effect your total."
            slider={true}
          />
        </div>
      </div>
    );
  }
  handleChange(e) {

    let value = e.target.value;
    value = value.replaceAll(/[^0-9]/g, "");
    let name = e.target.name;
    let current = this.state.data;
    if (value > 3600 && name === "rate") value = 3600;
    if (name === "minimum") value = value;
    if (value > 25000 && name === "extra") value = 25000;
    if (typeof current[name] !== "undefined") {
      current[name] = value;
      this.setState({ data: current });
      if (name === "extra")
        this.props.update(current);
      this.setState({ error: false });
    }
  }
  calculate(data = false) {
    console.log(this.state.data);
    if (parseInt(this.state.data.minimum) === 0) {
      this.setState({ error: "Minimum payment cant be zero" });
      return;
    }
    if (parseInt(this.state.data.balance) === 0) {
      this.setState({ error: "Card balance cant be zero" });
      return;
    }
    this.setState({ calculated: true });
    this.props.update(this.state.data);
  }
}
export default SingleCard;
