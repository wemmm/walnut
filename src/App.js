import React, { Component } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import customers from './customers.json';
import { FaUser, FaBriefcase, FaChild, FaSmileO, FaMoney, FaCheck, FaExpand, FaCompress, FaCubes, FaPagelines } from 'react-icons/lib/fa';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import Chart from './Chart';

function colorOpenness(trait) {
    // if (trait == "high openness") {
    //   return <span className="high-openness">high openness</span>
    // } else {
      return trait
    // }
}

const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.title} {customer.first_name} {customer.last_name}</td>
    <td>{customer.profession ? customer.profession : "Unknown"}</td>
    <td className="children">{customer.has_children ? <FaCheck/> : ""}</td>
    <td>
      {colorOpenness(`${customer.dominant_traits[0].level} ${customer.dominant_traits[0].primary_trait}`)}, {customer.dominant_traits[1].level} {customer.dominant_traits[1].secondary_trait}
    </td>
    <td>{customer.wealth ? `£${customer.wealth}` : "Unknown"}</td>
    <td>
      {customer.high_propensity_products[0] && customer.high_propensity_products[1] ? `${customer.high_propensity_products[0]}, ${customer.high_propensity_products[1]}` : "None found" }
    </td>
  </tr>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      recordsShown: 10,
      customerList: customers
    }
  }

  incrementRecords = () => {
    this.setState({
      recordsShown: this.state.recordsShown + 10,
    });
  }

  decrementRecords = () => {
    this.setState({
      recordsShown: this.state.recordsShown - 10,
    });
  }

  sortCustomersByWealth = () => {
    this.setState({
      customerList: customers.sort(function (a, b) {
        return a.wealth - b.wealth;
      })
    })
  }

  sortCustomersByAge = () => {
    this.setState({
      customerList: customers.sort(function (a, b) {
        return a.age - b.age;
      })
    })
  }

  render() {
    return (

      <div className="app">
        <header>
          <h1><FaPagelines color='#8FC9BD'/> Walnut</h1>
        </header>
        <Chart></Chart>
        <Table striped>
          <thead>
            <tr>
              <th><FaUser color='#8FC9BD'/> Name</th>
              <th><FaBriefcase color='#8FC9BD'/> Profession</th>
              <th><FaChild color='#8FC9BD'/> Children</th>
              <th><FaSmileO color='#8FC9BD'/> Traits</th>
              <th><FaMoney color='#8FC9BD'/> Wealth</th>
              <th><FaCubes color='#8FC9BD'/> Potential Products</th>
            </tr>
          </thead>
          <tbody>
          {
            customers.slice(0, this.state.recordsShown).map(c => <CustomerRow customer={c}/>)
          }
          </tbody>
        </Table>

        <ButtonGroup>
          <Button bsStyle="primary" onClick={this.incrementRecords}>
            <FaExpand/>
          </Button>

          <Button bsStyle="primary" onClick={this.decrementRecords}>
            <FaCompress/>
          </Button>
        </ButtonGroup><br/><br/>

        <ButtonGroup>
          <Button bsStyle="primary">
            SORT
          </Button>
          <Button bsStyle="primary" onClick={this.sortCustomersByWealth}>
            <FaMoney color='#FFFFFF'/> Wealth
          </Button>
          <Button bsStyle="primary" onClick={this.sortCustomersByAge}>
            <FaUser color='#FFFFFF'/> Age
          </Button>
        </ButtonGroup>

      </div>
    );
  }
}

export default App;

// console.log(customers.sort(function (a, b) {
//   return a.wealth - b.wealth;
// }))
