import React from 'react';
import '../node_modules/react-vis/dist/style.css';
import Format from './helpers/format.js';
import Calc from './helpers/calc.js';
import AutoSizer from 'react-virtualized-auto-sizer'

import {
	RadialChart
} from 'react-vis';
class BalancePie extends React.Component {
	render() {
		let total = this.props.principal + this.props.interest;
		let principalPercent = (this.props.principal * 100) / total;
		let interestPercent = (this.props.interest * 100) / total;
		principalPercent = Calc.round( principalPercent );
		interestPercent = Calc.round( interestPercent );
		let data = [
			{angle: this.props.principal, label: '', color: '#091C5A', 'subLabel':`${principalPercent}%`},
			{angle: this.props.interest, label: 'Interest Paid', color: '#FF6600', 'subLabel':`${interestPercent}%`},
		];
		return (
			<div className="BalancePie">
				{this.props.title && <h3>{this.props.title}</h3>}
				<AutoSizer>
					{({ width, height }) => (
						<RadialChart
							colorType="literal"
							data={data}
							width={width}
							height={height}
							showLabels={true}
							innerRadius={80}
							radius={140}
							labelsStyle={
								{
									textAnchor: 'middle',
									fontSize: 12,
									fontWeight: 500,
									fill: 'white',
									stroke: 'black',
									strokeWidth: '3px',
									strokeLinecap: 'butt',
									strokeLinejoin: 'miter',
									paintOrder: 'stroke'
								}
							}
							labelsRadiusMultiplier={.9}
						/>
					)}
				</AutoSizer>
			</div>
		);
	}
}
export default BalancePie;

