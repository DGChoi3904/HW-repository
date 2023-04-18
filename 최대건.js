let basicData = {
  count: 10,
  min : 1,
  max : 10,
  divideNumber : 5
}

function exampleOne(count, min, max) {
  let exampleArr = [];
  // 처리순서, max - min = result -> result * random = result2 -> result2 + min = resultFinal.
  for(let i = 0; i < count; i++){
    let temp = Math.random() * (max - min) + min; 
    //라운드 실수(float)을 정수(0)까지 라운드 한다. 하지만 소숫점 두자리수까지 표기하기 위해 먼저 100을 곱하여 2자리를 올린 후, round()처리가 된 수를 다시 100 나누어 소숫점 2자리의 형태로 되돌린다.
    temp = Math.round((temp * 100)) / 100;
    exampleArr.push(temp);
  }
  return exampleArr;
}

function exampleTwo(array, divideNumber) {
  let exampleObject = {
    a: [],
    b: []
  }
  //정수만 true를 반환하는 isInteger() 함수.
  if(Number.isInteger(divideNumber)){
    //배열의 인덱스마다 실행, 콜백 매개변수로 val을 가짐.
    array.forEach(val=>{
      //만일 val이 divideNumber보다 작을경우, 5 미만.
      if(val < divideNumber){
        exampleObject.a.push(val);
      //만일 val이 divideNumber보다 클 경우, 5 초과.
      }else if(val > divideNumber) {
        exampleObject.b.push(val);
      }
      //5와 동일한 수에 대한 설명은 없었기에 만일 5가 나왔을경우, 그 어디에도 push되지 않는다.
    })
  }
  return exampleObject;
}

function exampleThree(array) {
  
  let value = 0;
  array.forEach(val=>{ value += val });
  return value;
}

function exampleFour(object) {
  let value = true;
  for(let key in object){

    if(Array.isArray(object[key])){

      object[key].forEach(val=>{
        if(typeof(val) !== "number" ){
          value = false;
        }
      })

    }

  }

  return value;
}

function exampleFive(objectOne, objectTwo) {
  let value = new Number;
  for(let key in objectOne){
    value += objectOne[key];
  }
  for(let keytwo in objectTwo){
    value += exampleThree(objectTwo[keytwo]);
  }
  return value;
}

console.log(exampleFive(basicData, exampleTwo(exampleOne(basicData.count,basicData.min, basicData.max), basicData.divideNumber)))
