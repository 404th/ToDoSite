import { observable, action } from "mobx";

export const globalState = observable([[], [], [], []]);

export const changerState =  action( props => {
  let { value, name } = props;

  if (name === "a") {
    globalState[0].push(value);
  } else if (name === "b") {
    globalState[1].push(value);
  } else if (name === "c") {
    globalState[2].push(value);
  } else {
    globalState[3].push(value);
  }

});

export const deleterStateItem = action( e => {

  // let k = props.split("")
  // let n = k.length-1
  
  console.log( e )

  // if( k[n] === 'a' ){
  //   globalState[0] = globalState[0].filter( (item) => (item !== globalState[props]) )
  // } else if( k[n] === 'b' ){
  //   globalState[1] = globalState[1].filter( (item) => (item !== globalState[props]) )
  // } else if( k[n] === 'c' ){
  //   globalState[2] = globalState[2].filter( (item) => (item !== globalState[props]) )
  // } else if( k[n] === 'd' ){
  //   globalState[3] = globalState[3].filter( (item) => (item !== globalState[props]) )
  // }

})