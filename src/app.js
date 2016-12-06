import "./css/main.scss";
import React, { Component } from 'react';

console.log("Hello Folks!");

class App extends Component {
  constructor(){
    super();
    console.log(this.getArray(10));
    this.state = {
      sidebarItems: this.getArray(10)
    }
  }
  getArray = (num) =>{
    var array = [];
    for (var i = 0; i < num; i++) {
      array[i] = i;
    }
    return array;
  }
  render(){
    return(
      <div>
        <div className="header">
          <div className="logo">
            <div className="placeholder"></div>
            <span>LOGO</span>
          </div>
        </div>
        <div className="body">
          <div className="sidebar">
            {
              this.state.sidebarItems.map(function(item, i){
                return <SidebarItem key={i}/>
              })
            }
          </div>
          <div className="content">
            <h3>Main Title</h3>
            <button className="success">Success</button>
            <button className="warn">Warning</button>
            <button className="danger">Failure</button>
          </div>
        </div>
      </div>
    )
  }
}

const SidebarItem = () => {
  return(
    <div className="item"></div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
