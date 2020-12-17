import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 },
    ],
  };

  handleDelete = (counterid) => {
      console.log("clicked"+ counterid);
      const counters= this.state.counters.filter(c => c.id!==counterid);
      this.setState({counters});
  }
  render() {
    return (
      <div>
        <h1></h1>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} onDelete={this.handleDelete} id={counter.id}>
            <h4>Counter No. {counter.id} </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
