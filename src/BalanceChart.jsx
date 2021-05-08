import React from 'react';
import '../node_modules/react-vis/dist/style.css';
import Format from './helpers/format.js';
import AutoSizer from 'react-virtualized-auto-sizer'

import {
	XYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	VerticalBarSeries
} from 'react-vis';
class BalanceChart extends React.Component {
	render() {
		let D = new Date();
		let data = [
			{
				x: D.getFullYear(),
				y: this.props.totalBalance
			}
		];
		let ticks = [D.getFullYear()];
		this.props.schedule.forEach((singleSchedule, i) => {
			D.setMonth(D.getMonth() + 1);
			if (D.getMonth() > 0) return;
			let tick = D.getFullYear();
			ticks.push(tick);
			data.push({
				x: tick,
				y: singleSchedule.balance * 100
			});
		});
		if (D.getMonth() > 0) {
			let diff = 12 - D.getMonth();
			D.setMonth(D.getMonth() + diff);
			let tick = D.getFullYear();
			ticks.push(tick);
			data.push({
				x: tick,
				y: 0
			});
		}
		return (
			<div className="BalanceChart">
				<AutoSizer>
					{({ width, height }) => (
						<XYPlot margin={{ left: 100 }} height={height} width={width} xType="ordinal">
							<VerticalGridLines />
							<HorizontalGridLines />
							<XAxis title="Years to payoff" />
							<YAxis
								tickFormat={v => Format.usd(v)}
								title="Cards balance"
							/>
							<VerticalBarSeries
								data={data}
								color={this.props.color || "#434343"}
								barWidth={0.25}
								style={{ rx: 3, ry: 3 }}
							/>
						</XYPlot>
					)}
				</AutoSizer>
			</div>
		);
	}
}
export default BalanceChart;