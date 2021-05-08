import React from 'react';
import '../node_modules/react-vis/dist/style.css';
import Calc from './helpers/calc.js';
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
class BalanceChartTwin extends React.Component {
    render() {

        let showAdditional = false;
        this.props.cards.forEach(SingleCard => {
            if (SingleCard.extra > 0) {
                showAdditional = true;
            }
        })

        let Result = Calc.all(this.props.cards, false);
        let ResultExtra = Calc.all(this.props.cards, true);

        let totalBalance = 0;
        this.props.cards.forEach(singleCard => {
            totalBalance += parseFloat(singleCard.balance);
        });

        let D = new Date();
        let data = [
            {
                x: D.getFullYear(),
                y: totalBalance
            }
        ];
        let data2 = [
            {
                x: D.getFullYear(),
                y: totalBalance
            }
        ];
        Result.schedule.forEach((singleSchedule, i) => {
            D.setMonth(D.getMonth() + 1);
            if (D.getMonth() > 0) return;
            let tick = D.getFullYear();
            data.push({
                x: tick,
                y: singleSchedule.balance * 100
            });
            data2.push({
                x: tick,
                y: ResultExtra.schedule[i] ? ResultExtra.schedule[i].balance * 100 : 0
            })
        });
        if (D.getMonth() > 0) {
            let diff = 12 - D.getMonth();
            D.setMonth(D.getMonth() + diff);
            let tick = D.getFullYear();
            data.push({
                x: tick,
                y: 0
            });
            data2.push({
                x: tick,
                y: 0
            });
        }

        return (
            <div className="BalanceChartTwin">
                <div className="legend">
                    <div className="min">Minimum</div>
                    {showAdditional && <div className="add">w/ Additional</div>}
                </div>
                <AutoSizer>
                    {({ width, height }) => (

                        <XYPlot margin={{ left: 100 }} height={height} width={width} xType="ordinal">
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis
                                title="Years to payoff"
                            />
                            <YAxis
                                tickFormat={v => Format.usd(v)}
                                title="Cards balance"
                            />
                            <VerticalBarSeries
                                data={data}
                                color={"#434343"}
                                barWidth={0.35}
                                style={{ rx: 3, ry: 3 }}
                            />
                            {showAdditional &&
                                <VerticalBarSeries
                                    data={data2}
                                    color={"#ff6f31"}
                                    barWidth={0.35}
                                    style={{ rx: 3, ry: 3 }}
                                />
                            }
                        </XYPlot>
                    )}
                </AutoSizer>
            </div>
        );
    }
}
export default BalanceChartTwin;