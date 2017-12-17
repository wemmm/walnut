import React, { Component } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import customers from './customers.json';
import { FaUser, FaBriefcase, FaChild, FaSmileO, FaMoney, FaCheck, FaArrowUp, FaArrowDown } from 'react-icons/lib/fa';

const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.title} {customer.first_name} {customer.last_name}</td>
    <td>{customer.profession}</td>
    <td>{customer.has_children ? <FaCheck/> : ""}</td>
    <td>
      {customer.dominant_traits[0].level} {customer.dominant_traits[0].primary_trait}, {customer.dominant_traits[1].level} {customer.dominant_traits[1].secondary_trait}
    </td>
    <td>{customer.wealth}</td>
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
        <Table striped>
          <thead>
            <tr>
              <th><FaUser/> Name</th>
              <th><FaBriefcase/> Profession</th>
              <th><FaChild/> Children</th>
              <th><FaSmileO/> Traits</th>
              <th><FaMoney/> Income</th>
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
