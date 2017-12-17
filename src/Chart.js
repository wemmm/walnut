import React, { Component } from 'react';
import customers from './customers.json';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const data01 = [{name: 'Divorced', value: 52}, {name: 'Married', value: 98},
                  {name: 'Separated', value: 20}, {name: 'Single', value: 30},
                  {name: 'Widowed', value: 35}, {name: 'Other', value: 15}]

const data02 = [{name: 'Agreeable', value: 62}, {name: 'Conscientious', value: 38},
                  {name: 'Extroverted', value: 27}, {name: 'Open', value: 73},
                  {name: 'Neurotic', value: 50}];

class Chart extends Component {
  render() {
    return (
      <PieChart width={800} height={400}>
        <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8ED1CC" label/>
        <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#B2CE88"/>
        <Tooltip/>
     </PieChart>
    );
  }
}

export default Chart;
