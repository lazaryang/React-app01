import React from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      
    }
   
  }
  add = () => {
    this.setState({
      count: this.state.count + 1,
    })
 
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    })
 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='glavni'>
            <img src ='https://i.ya-webdesign.com/images/plus-image-png-7.png' width='100px' height='100px'  onClick={this.add}/>
            <div className='esiminch'>
            <div className='number'> {this.state.count}</div>
            <img src='https://lh3.googleusercontent.com/proxy/xfB9pT4ccY1AMGasZVlN7ehIwgD7UzWwaUle47Pvv2TzdJX2AdLLPV0FctyadqNHLa-PqKum3auymwd7iAUVJsO1SpPVibePJoqVB_pcarCfTBi5SQ' className="App-logo" alt="logo" /> 
            </div>
            <img src='https://cdn3.iconfinder.com/data/icons/complete-common-version-5-3/1024/minus10-512.png'  width='100px' height='100px' onClick={this.decrement}/>
          </div>
              <h1>MY React Project</h1>
        </header>
           </div>
    )
  }
}
export default Header;
