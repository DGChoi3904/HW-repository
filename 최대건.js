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
  //배열의 매 인덱스마다 해당하는 val 값을 value에 합친다
  array.forEach(val=>{ value += val });
  return value;
}

function exampleFour(object) {
  let value = true;
  for(let key in object){
    //만일 프로퍼티가 배열일 경우
    if(Array.isArray(object[key])){
      //forEach로 매 인덱스마다 확인
      object[key].forEach(val=>{
        //너는 숫자인가?
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
  //basicData가 들어온다는 가정하에, 모든 키의 값은 숫자인것으로 가정한 for-in문 사용
  for(let key in objectOne){
    //있는 key수만큼 해당 값을 value에 저장
    value += objectOne[key];
  }
  //exampleOne의 결과 객체를 사용하는것을 가정하여, exampleThree문을 써서 총함을 value에 더함.
  for(let keytwo in objectTwo){
    //
    value += exampleThree(objectTwo[keytwo]);
  }
  return value;
}
//실행 구문
console.log(exampleFive(basicData, exampleTwo(exampleOne(basicData.count,basicData.min, basicData.max), basicData.divideNumber)))
