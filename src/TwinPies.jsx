import React from 'react';
import Calc from './helpers/calc.js';
import BalancePie from './BalancePie.jsx';
class TwinPies extends React.Component {
	render() {
		let Result = Calc.all(this.props.cards, 0);
		let ResultExtra = Calc.all(this.props.cards, 1);
		return (
			<div className="TwinPies">
				<div className="single-pie">
					<BalancePie interest={Result.interestPaid} principal={Result.totalPrincipal} title="Interest Paid vs Principal (%) with minimum payments"/>
				</div>
				{ Result.interestPaid !== ResultExtra.interestPaid && <div className="single-pie">
					<BalancePie interest={ResultExtra.interestPaid} principal={ResultExtra.totalPrincipal} title="Interest Paid vs Principal (%) with paying over the minimum payment" />
				</div>
				}
			</div>
		);
	}
}
export default TwinPies;

