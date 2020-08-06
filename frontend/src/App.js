import React from 'react';
import Map from './components/Map';
import Header from './components/Header';

export default class extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    
    return (
      <div className="App">
        <Header />
        <div className="flex">
          <Map/>
        </div>
        </div>
    );
  }
}
//asdasda 