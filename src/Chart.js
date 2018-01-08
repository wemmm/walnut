import React, { Component } from 'react';
import customers from './customers.json';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const data01 = [{name: 'Divorced', value: (customers.filter(c => c.marital_status == "Divorced").length)},
                {name: 'Married', value: (customers.filter(c => c.marital_status == "Married").length)},
                {name: 'Single', value: (customers.filter(c => c.marital_status == "Single").length)},
                {name: 'Widowed', value: (customers.filter(c => c.marital_status == "Widowed").length)},
                {name: 'Other', value: (customers.filter(c => c.marital_status == "Other").length)},
                {name: 'Unknown', value: (customers.filter(c => c.marital_status == null).length)}]

const data02 = [{name: 'Red Bank', value: (customers.filter(c => c.company == "Red Bank").length)},
                {name: 'Blue Bank', value: (customers.filter(c => c.company == "Blue Bank").length)},
                {name: 'Purple Bank', value: (customers.filter(c => c.company == "Purple Bank").length)},
                {name: 'Green Bank', value: (customers.filter(c => c.company == "Green Bank").length)}];

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
