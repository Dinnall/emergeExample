import React from 'react';
import Calc from './helpers/calc.js';
import Format from './helpers/format.js';
import BalanceChart from './BalanceChart.jsx';
import { FaRegQuestionCircle } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';
import Coin from './img/coin.gif';
class BigResultsSaved extends React.Component {
    render() {
        let Result = Calc.all(this.props.cards, this.props.addExtra);
        let amountWithoutMonthlyAdditional = Calc.all(this.props.cards).total;
        let amountWithExtra = Result.total;
        let savedInterest = amountWithoutMonthlyAdditional - amountWithExtra;

        return (<div className="big-result">
            <div className="result-main single-result">
                <label>Your interest when you pay over the minimum payment</label>
                <label style={{ fontSize: "x-large" }}>Interest Paid</label>
                <span>{Format.usd(Result.interestPaid * 100)}</span>
                
                <label style={{ fontSize: "1.2em", fontWeight:"bold", display: "flex", alignItems: "center", marginBottom: -60 }}>
                    <img className="coin" src={Coin} />
                    Saving You <span style={{ color: "#FF6200", marginLeft: 8 }}>{Format.usd(savedInterest * 100)}</span> <FaRegQuestionCircle data-tip data-for='interestSavedTooltip' />
                    <ReactTooltip id='interestSavedTooltip' multiline={true}>
                        <span>Paying over your monthly minimum payment <br />
                        reduces the total interest paid on the debt.
                        <br /> This means you can use the money saved towards other goals.</span>
                    </ReactTooltip>
                </label>
            </div>
            <div className="result-secondary">
                <div className="single-result">
                    <label>You will pay off your debt by</label>
                    <span>{Format.relativeMonth(Result.payoff)}</span>
                    <label>(Or {Format.years(Result.payoff)})</label>
                </div>
                <div className="single-result">
                    <label>Total Payment:</label>
                    <span>{Format.usd(Result.total * 100, false)}</span>
                </div>
            </div>
            <button className="view-report" onClick={() => this.props.report()}>Payoff Report</button>
            {/* <div className="result-chart single-result">
                <label>Debt payoff is estimated at {Format.months(Result.payoff)}</label>
                <BalanceChart schedule={Result.schedule} />
            </div> */}
        </div>);
    }
}
export default BigResultsSaved;