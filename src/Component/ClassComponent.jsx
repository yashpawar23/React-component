import React from 'react'
import { Component } from 'react';
import './Component.css';

class ClassComponent extends Component{
  render(){
    return (
          <div className='onclickdiv'>
              <h1>This is created using class component</h1>
              <p>This is done using exrernal css</p>
              <p>This is done using internal css</p>
          </div>
        )
  }
}

export default ClassComponent

