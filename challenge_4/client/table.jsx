import React from 'react';
import ReactDOM from 'react-dom';
import Placement from './placement.jsx';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: true,
      class: ''
    }

    // <div className="red"></div>;
    //true = red, false = blue;
    
    this.onConnect = this.onConnect.bind(this);
  }
  
  createPlacement(value) {
    return (<Placement id={value} player={this.state.player} click={this.onConnect} />)
  }

  onConnect(event) {
    let spot = document.getElementById(event.target.id);
    if (this.state.player) {
      this.setState({
        player: false,
        class: "red"
      })
    } else {
      document.getElementById(event.target.id).appendChild = this.blueCircle;
      this.setState({
        player: true,
        class: 'blue'
      })
    }
  }


  render() {
   return (<table className="table">
      <tbody>
        <tr>
          {this.createPlacement('A1')}
          {this.createPlacement('A2')}
          {this.createPlacement('A3')}
          {this.createPlacement('A4')}
          {this.createPlacement('A5')} 
        </tr>
        <tr>
          {this.createPlacement('B1')}
          {this.createPlacement('B2')}
          {this.createPlacement('B3')}
          {this.createPlacement('B4')}
          {this.createPlacement('B5')} 
        </tr>
        <tr>
          {this.createPlacement('C1')}
          {this.createPlacement('C2')}
          {this.createPlacement('C3')}
          {this.createPlacement('C4')}
          {this.createPlacement('C5')} 
        </tr>
        <tr>
          {this.createPlacement('D1')}
          {this.createPlacement('D2')}
          {this.createPlacement('D3')}
          {this.createPlacement('D4')}
          {this.createPlacement('D5')} 
        </tr>
        <tr>
          {this.createPlacement('E1')}
          {this.createPlacement('E2')}
          {this.createPlacement('E3')}
          {this.createPlacement('E4')}
          {this.createPlacement('E5')} 
        </tr>
      </tbody>
    </table>)
  }
}

export default Table