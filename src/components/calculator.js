import React, { Component } from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'

class Calculator extends Component {
  onButton(type,value){
    if(this.props.result){
      if(this.props.result.length>9){
        return
      }
    }
    if (value=='ac'){
      this.props.clearAll()
      return
    }
    if(value=='%'){
      this.props.changePercent()
      return
    }
    if (value=='+/-'){
      if(!this.props.a){
        this.props.changea()
        return
      }
      if (this.props.b){
        this.props.changeb()
      }else if (this.props.a){
        this.props.changea()
      }
      return
    }

   /* if(this.props.ac){  
      console.log('aa')
      if(type=='operator'){
        if(value=='+'||value=='-'){
          this.props.adda('0')//
          this.props.addOperator(value)//
        }else if (value=='.'){
          this.props.adda('0.')
        }
      }else{
        this.props.adda(value)
      }
    }else{*/
    
        if (this.props.isNum){
          if(type=='num'){
            if(!this.props.operator){
              this.props.adda(value)
            }else{
              this.props.addb(value)//
            }
          }else{
            this.props.addOperator(value)
          }
        }else{
          if(type=='num'){
            this.props.addb(value)
          }else{
            if(value=='='){
              this.props.addOperator(value)
            }else{
              this.props.changeOperator(value)//
            }
          }
        }
       
      
  }
  
  renderNow(){
      if(this.props.b){
        return this.props.b
      }else if(this.props.a){
        return this.props.a
      }else{
        return '0'
      }
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr><td colSpan='4' className='resultShown'>{this.renderNow()}</td></tr>
            <tr>
              <td><button onClick={(()=>this.onButton('operator','ac')).bind(this)}>AC</button></td>
              <td><button onClick={(()=>this.onButton('operator','+/-')).bind(this)}>+/-</button></td>
              <td><button onClick={(()=>this.onButton('operator','%')).bind(this)}>%</button></td>
              <td className='rightOperator'><button onClick={(()=>this.onButton('operator','/')).bind(this)}>÷</button></td>
            </tr>
            <tr>
              <td><button onClick={(()=>this.onButton('num','7')).bind(this)}>7</button></td>
              <td><button onClick={(()=>this.onButton('num','8')).bind(this)}>8</button></td>
              <td><button onClick={(()=>this.onButton('num','9')).bind(this)}>9</button></td>
              <td className='rightOperator'><button onClick={(()=>this.onButton('operator','*')).bind(this)}>×</button></td>
            </tr>
            <tr>
              <td><button onClick={(()=>this.onButton('num','4')).bind(this)}>4</button></td>
              <td><button onClick={(()=>this.onButton('num','5')).bind(this)}>5</button></td>
              <td><button onClick={(()=>this.onButton('num','6')).bind(this)}>6</button></td>
              <td className='rightOperator'><button onClick={(()=>this.onButton('operator','-')).bind(this)}>—</button></td>
            </tr>
            <tr>
              <td><button onClick={(()=>this.onButton('num','1')).bind(this)}>1</button></td>
              <td><button onClick={(()=>this.onButton('num','2')).bind(this)}>2</button></td>
              <td><button onClick={(()=>this.onButton('num','3')).bind(this)}>3</button></td>
              <td className='rightOperator'><button onClick={(()=>this.onButton('operator','+')).bind(this)}>+</button></td>
            </tr>
            <tr>
              <td colSpan='2'><button style={{width:'150px'}} onClick={(()=>this.onButton('num','0')).bind(this)}>0</button></td>
              <td><button onClick={(()=>this.onButton('num','.')).bind(this)}>.</button></td>
              <td className='rightOperator'><button onClick={(()=>this.onButton('operator','=')).bind(this)}>=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    a:state.stateAll.a,
    b:state.stateAll.b,
    operator:state.stateAll.operator,
    isNum:state.stateAll.isNum,
    ac:state.stateAll.ac,
    beforePlus:state.stateAll.beforePlus,
    result:state.stateAll.result
  }
}//--------------

export default connect(mapStateToProps,actions)(Calculator)
