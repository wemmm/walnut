import React, { Component } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import customers from './customers.json';
import { FaUser, FaBriefcase, FaChild, FaSmileO, FaMoney, FaCheck, FaArrowUp, FaArrowDown } from 'react-icons/lib/fa';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import Chart from './Chart'

const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.title} {customer.first_name} {customer.last_name}</td>
    <td>{customer.profession}</td>
    <td className="children">{customer.has_children ? <FaCheck/> : ""}</td>
    <td>
      {customer.dominant_traits[0].level} {customer.dominant_traits[0].primary_trait}, {customer.dominant_traits[1].level} {customer.dominant_traits[1].secondary_trait}
    </td>
    <td>£{customer.wealth}</td>
  </tr>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      recordsShown: 10,
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

  render() {
    return (

      <div className="app">
        <header>
          <h1>Walnut</h1>
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
          <FaArrowDown/>
        </Button>

        <Button bsStyle="primary" onClick={this.decrementRecords}>
          <FaArrowUp/>
        </Button>
        </ButtonGroup>

      </div>
    );
  }
}

export default App;
