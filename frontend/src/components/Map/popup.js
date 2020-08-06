import React from 'react';
import './map.css';


export default class Popup extends React.Component {
  render() {
      
      let self = this;
      //отдельно показываем какие компании отдают выбранной компании данные, а какие от нее наоборот принимают
      
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.node}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        <ul style={{overflowY:'auto',height: '90%',fontSize:20}}>
        <li style={{fontSize: 20, fontWeight: 600, marginTop: 10}}> Отдает данные компаниям:</li>
        {this.props.sData.map(function(item,index){
            
        return (<li key={'s'+index} style={{paddingTop: 3}} onClick={(e)=>self.props.selectItem(item)} >{item}</li>) 
        
        })}
        <li style={{fontSize: 20, fontWeight: 600, marginTop: 10}}> Получает данные от компаний:</li>
        {this.props.tData.map(function(item,index){
        
        return (<li key={'t'+index} style={{paddingTop: 3}} onClick={(e)=>self.props.selectItem(item)} >{item}</li>) 
        
        })}
        
        </ul>
        </div>
      </div>
    );
  }
}