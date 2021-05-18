import React from 'react';
import Format from './helpers/format.js';
import Chevron from "./accordion/Chevron";
class Schedule extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showAll: false
		};
	}
	render() {
		return (
			<div className="debt-summary">
				<table>
					<thead>
						<tr>
							<th colSpan="100">Payment Schedule</th>
						</tr>
						<tr>
							<th>Month</th>
							<th>Payment</th>
							<th>Interest</th>
							<th>Total Principal</th>
							<th>Balance</th>
						</tr>
					</thead>
					<tbody>
						{this.props.schedule.map((singleSchedule, i) => {
							if(!this.state.showAll && i>=10) return;
							return (<tr key={i}>
								<th>{i ? i : ''}</th>
								<td>{Format.usd(singleSchedule.payment * 100, false)}</td>
								<td>{Format.usd(singleSchedule.interest, false)}</td>
								<td>{Format.usd(singleSchedule.principal, false)}</td>
								<td>{Format.usd(singleSchedule.balance * 100, false)}</td>
							</tr>);
						})}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="15" className="showMore" onClick={
								() =>{
									this.setState({showAll: !(this.state.showAll)}, () => {
										this.props.onMore();
									});
								}
							}>
								{this.state.showAll ? "Show less" : "Show more"}
								<Chevron className={this.state.showAll ? "less" : ""} width={10} fill={"#fff"} />
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}
export default Schedule;