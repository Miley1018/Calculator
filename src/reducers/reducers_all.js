import {CLEAR_ALL,CHANGE_A,CHANGE_B,ADD_A,ADD_B,CHANGE_OPERATOR,CHANGE_PERCENT,ADD_OPERATOR,REVISE_B} from '../actions';

export default function (state={a:'0',isNum:true,beforePlus:true},action){
  console.log(state)
  switch(action.type){
    case CLEAR_ALL:
      return {...state,a:'0',b:null,operator:null,isNum:true,beforePlus:true,result:null}
    case CHANGE_A:
      if(!state.a){
        return{...state,a:'0'}
      }
      if(state.a>0){
        return {...state,a:'-'+Math.abs(state.a)}
      }else if (state.a<0){
        return {...state,a:Math.abs(state.a)}
      }else{
        return{...state,a:'0'}
      }
    case CHANGE_B:
      if(!state.b){
        return{...state,b:'0'}
      }
      if(state.b>0){
        return {...state,b:'-'+Math.abs(state.b)}
      }else if (state.b<0){
        return {...state,b:Math.abs(state.b)}
      }else{
        return{...state,b:'0'}
      }
    case ADD_A:
      if(action.payload=='.'){
        if(state.a.indexOf('.')==-1){
          return{...state,a:state.a+''+action.payload}
        }else{
          return state
        }
      }else{
        if (state.a==0){
          if(state.a.indexOf('.')==-1){
            return{...state,a:action.payload}
          }else{
            return{...state,a:state.a+''+action.payload}
          }     
        }else{
          return{...state,a:state.a+''+action.payload}
        }
      }
    case ADD_OPERATOR:
      if(state.a=='Not a Number'){
        return{...state,a:'Not a Number',operator:action.payload,b:null,isNum:false}
      }
      if(state.b){
        if(action.payload=='='){
          if(state.operator=='/'&&state.b=='0'){
            return{...state,a:'Not a Number',b:null,isNum:false}
          }else{
            const t = eval(state.a+state.operator+state.b)
            return{...state,a:t,b:null,isNum:true}
          }
        }else{
          if(state.operator=='/'&&state.b==0){
            return{...state,a:'Not a Number',b:null,isNum:false}
          }
          const t = eval(state.a+state.operator+state.b)
          return{...state,a:t,operator:action.payload,b:null,isNum:false}
        }
      }else{
        if(action.payload=='='){
          if(state.operator){
            if(state.operator=='/'&&state.a=='0'){
              return{...state,a:'Not a Number',operator:null,b:null,isNum:true}
            }else{
              const t = eval(state.a+state.operator+state.a)
              return{...state,a:t,isNum:false}
            }
          }else{
            return state
          }
        }else{
          return{...state,operator:action.payload,isNum:false}
        }
      }
    case ADD_B:
      if(action.payload=='.'){
        if(!state.b){
          return{...state,b:'0.',isNum:true,result:null}
        }
        if(state.b.indexOf('.')==-1){
          return{...state,b:state.b+''+action.payload}
        }else{
          return state
        }
      }else{
        if(!state.b){
          return{...state,b:action.payload,isNum:true,result:null}
        }
        if (state.b==0){
          if(state.b.indexOf('.')==-1){
            return{...state,b:action.payload}
          }else{
            return{...state,b:state.b+''+action.payload}
          }      
        }else{
          return{...state,b:state.b+''+action.payload}
        }
      }
    case CHANGE_OPERATOR:
      return {...state,operator:action.payload}
    case CHANGE_PERCENT:
      return{...state,a:state.a/100}
    case REVISE_B:
      return{...state,b:action.payload}
  }
  return state
}