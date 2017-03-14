import React from "react";
import ReactDOM from 'react-dom';

export default class AppHandler extends React.Component {
  render() {
    return (
        <form>
          <label>Name</label>
          <input
          />
          <br/>
          <label>Amount</label>
          <input
          />
          <br/>
          <label >Currency</label>
          <select
          >
            <option value="DKK">DKK</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
          <button>Save</button>
        </form>
    )
  }
}