import React from 'react';
import Calc from './helpers/calc.js';
import Format from './helpers/format.js';
import BalanceChart from './BalanceChart.jsx';
import { FaRegQuestionCircle } from "react-icons/fa";


class BigResultsSaved extends React.Component {
    render() {
        let Result = Calc.all(this.props.cards, this.props.addExtra);
        let amountWithoutMonthlyAdditional = Calc.all(this.props.cards).total;
        let amountWithExtra = Result.total;
        let savedInterest = amountWithoutMonthlyAdditional - amountWithExtra;

        return (<div className="big-result">
            <div className="result-main single-result">
                <label>Paying a little more than required minimum</label>
                <label style={{ color: "#FF6200", fontSize: "x-large" }}>Interest Saved <FaRegQuestionCircle /></label>
                <span style={{ color: "#FF6200" }}>{Format.usd(savedInterest * 100)}</span>
            </div>
            <div className="result-secondary">
                <div className="single-result">
                    <label style={{ fontSize: "x-large" }}>Time to Payoff</label>
                    <span>{Format.months(Result.payoff)}</span>
                </div>
                <div className="single-result">              
                    <label style={{ fontSize: "x-large" }} >Total Payment:</label>
                    <span>{Format.usd(Result.total * 100, false)}</span>
                </div>
                <button className="view-report" onClick={() => this.props.report()}>Payoff Report</button>
            </div>
            <div className="result-chart single-result">
                {/* <label>Debt payoff is estimated at {Format.months(Result.payoff)}</label> */}
                <BalanceChart schedule={Result.schedule} />
            </div>
        </div>);
    }
}
export default BigResultsSaved;