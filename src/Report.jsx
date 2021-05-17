import React from 'react';
import Calc from './helpers/calc.js';
import Format from './helpers/format.js';
import BalanceChart from './BalanceChart.jsx';
import BalancePie from './BalancePie.jsx';
import DebtSummary from './DebtSummary.jsx';
import './css/report-print.css';
import Accordion from "./accordion/Accordion";


import ReactToPrint from 'react-to-print';
import { jsPDF } from "jspdf";


const ref = React.createRef();

class Report extends React.Component {
	render() {
		let Result = Calc.all(this.props.cards, this.props.addExtra);
		let totalBalance = 0;
		this.props.cards.forEach(singleCard => {
			totalBalance += parseFloat(singleCard.balance);
		});

		return (<div className="report">
			<div className="report-inner" ref={ref}>
				<ReactToPrint
					trigger={() => {
						// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
						// to the root node of the returned component as it will be overwritten.
						return <span className="print-report">Print this report</span>;
					}}
					content={() => ref}
				/>
				<span onClick={this.toPDF} className="print-report">Download this report</span>
				<span className="close-report" onClick={() => this.props.report()}>Close report</span>
				{
					this.props.addExtra ?
						<h4>Paying a little more than required minimum total will take {Format.months(Result.payoff)} to payoff your debt.</h4>
						:
						<h4>Minimum payments will take {Format.months(Result.payoff)} to payoff your debt.</h4>
				}
				{
					this.props.addExtra ?
						<p>
						Your current total of {Format.usd(totalBalance)} will take you {Format.months(Result.payoff)} to payoff, if you continue to make a monthly payment of {Format.usd(Result.monthly * 100)}.
						If you continue to make this same amount of additional payments it will take you {Format.months(Result.payoff)} to payoff this debt.
						Your total interest paid will now be {Format.usd(Result.interestPaid * 100)}.
					</p>
						:
						<p>
						Your current total of {Format.usd(totalBalance)} will take you {Format.months(Result.payoff)} to payoff, if you continue to make a monthly payment of {Format.usd(Result.monthly * 100)}.
						The total interest paid will be {Format.usd(Result.interestPaid * 100)}.
					</p>
				}

				<DebtSummary cards={this.props.cards} addExtra={this.props.addExtra} />
				<h3>Estimated payoff will by {Format.relativeMonth(Result.payoff)}</h3>
				<BalancePie interest={Result.interestPaid} principal={Result.totalPrincipal} />

				<Accordion
					title="View your credit card payment schedule"
					schedule={Result.schedule}
				/>

			</div>
		</div>);
	}
	toPDF(){
		var pdf = new jsPDF('p', 'px', [800, 1280]);
		pdf.html(document.querySelector('.report-inner'), {
			callback: (pdf) => {
				pdf.save('report.pdf');
			},
			format: 'PNG',
			pagesplit: true,
		});
	}
}
export default Report;