export const CLEAR_ALL = 'clear_all'
export const CHANGE_B = 'changeb'
export const CHANGE_A = 'changea'
export const ADD_A = 'adda'
export const ADD_B = 'addb'
export const ADD_OPERATOR = 'addoperator'
export const CHANGE_OPERATOR = 'changeoperator'
export const CHANGE_PERCENT = 'change_percent'

export function clearAll(){
  return{
    type:CLEAR_ALL
  }
}

export function changea(){
  return{
    type:CHANGE_A
  }
}

export function changeb(){
  return{
    type:CHANGE_B
  }
}

export function adda(num){
  return{
    type:ADD_A,
    payload:num
  }
}

export function addb(num){
  return{
    type:ADD_B,
    payload:num
  }
}

export function addOperator(operator){
  return{
    type:ADD_OPERATOR,
    payload:operator
  }
}

export function changeOperator(operator){
  return{
    type:CHANGE_OPERATOR,
    payload:operator
  }
}

export function changePercent(){
  return{
    type:CHANGE_PERCENT
  }
}
export const REVISE_B = 'revise_b'

export function reviseb(newB){
  return{
    type:REVISE_B,
    payload:newB  
  }
}