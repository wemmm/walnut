import React, { Component } from 'react';
import customers from './customers.json';
import './styles.scss';

const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.title} {customer.first_name} {customer.last_name}</td>
    <td>{customer.profession}</td>
    <td>{customer.has_children ? "Y" : "N"}</td>
    <td>
      {customer.dominant_traits[0].level} {customer.dominant_traits[0].primary_trait}, {customer.dominant_traits[1].level} {customer.dominant_traits[1].secondary_trait}
    </td>
    <td>{customer.wealth}</td>
  </tr>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Walnut</h1>
        </header>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Profession</th>
              <th>Children</th>
              <th>Traits</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
          {
            customers.slice(0, 10).map(c => <CustomerRow customer={c}/>)
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
