import React, { Component } from 'react';

class Country extends Component {
    state = {
    Country: 'USA',
    value: 0,
    }
      handleClick = () => {
        this.setState({ value: this.state.value + 1})
      }
      render() { 
        return (
            <div>
            <div className='Country' >
                 { this.state.Country } 
            </div>
            <div>
            {this.state.value}
            </div>
            <button onClick={ this.handleClick } className='Country'>+</button>
            
            </div>
          );
      }
}

export default Country