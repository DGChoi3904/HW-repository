function exampleOne(first, second, dataType) {
  if(typeof(first) !== dataType && typeof(second) !== dataType) {
    return new Error(`매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`)
  }
}

function arrayLengthEven(array) {
  if(array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
  
  
}

function isExampleTwo(first, second) {

  // Guide : exampleOne() 함수를 호출하여 타입검사를 따로 합니다.
  // Guide : 타입검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조치합니다.

  // 타입테스트를 추가. 만일 변수가 Error를 할당받았을 경우, 에러 throw하고 함수에서 빠져나옴.
  const typeTest = exampleOne(first,second,"number")
  if(typeTest instanceof Error){
    throw typeTest;
  }



  let booleanResult;

  if(first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }


  if(typeof(booleanResult) === 'boolean'){
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니어서 리턴하지 못했습니다.")
  }
}

let basicData = [4,6,23,5,94,35,44,66]

function exampleThree(array, functionOne, functionTwo){

  // 타입체커 추가. 기본은 false.
  let typeCheck = false;

  // 매개변수 인자로 들어오는 함수 두개는 데이터타입이 모두 함수 여야 함
  // 매개변수 array의 모든 원소는 숫자 정수여야 함
  // 매개변수 array의 배열 길이(length)는 짝수여야 함, 홀수라면 10을 추가하여 짝수로 만듦

  //타입체크 구문. 만일 여기를 통과 못할시 아래 구문은 실행되지 않는다.
  // 나며지 매개변수 2개는 함수인가?
  if(functionOne instanceof Function && functionTwo instanceof Function){
    // 모든 배열에 할당된 값은 정수인가?
    if(array.every(val=>{return Number.isInteger(val)})){
      // 통과!
      typeCheck = true;
      // 통과했는데 배열의 길이가 홀수라면?
      if(arrayLengthEven(array) !== true){
        // 10을 추가하여 길이를 짝수로!
        array.push(10);
      }
    }
  }
// 타입체크가 true일시 실행.
if(typeCheck){
  // 빈 배열 arrayResult 리터럴 선언.
  let arrayResult = [[null, null], [null, null], [null, null], [null, null]];
  // 매개변수 array는 배열의 순서 한쌍씩 값의 크기를 비교하여
  // 비교한 작은 값은 arrayResult의 원소배열의 0번째
  // 큰값은 arrayResult의 원소배열의 1번째에 넣어준다.
  //카운터를 선언 및 0을 할당하여 숫자로 정의한다.
  let count = 0;
  //ArrayResult의 내부 배열 갯수만큼, array의 인덱스 1과 2, 3과 4 식으로 짝을 지어 비교후 정해진 규칙대로 넣음.
  arrayResult.forEach((arr)=>{
    //선택한 array의 인덱스의 값은 숫자인가? 그리고 둘중 어느것이 큰가? true이면 2번째 수가 큰 것이다.
    if(functionOne(array[count], array[count+1], "number") && functionTwo(array[count], array[count+1])){
      // 0번 첫번쨰 , 1번 두번쨰
      arr[0] = array[count];
      arr[1] = array[count+1];
    } else {
      // 0번 두번쨰, 2번 첫번째
      arr[0] = array[count+1];
      arr[1] = array[count];
    }
    //숫자를 2개씩 비교하기에 2씩 더함.
    count += 2;
  })
  //완성된 arrayResult을 반환한다.
  return arrayResult;
  }

}


console.log(exampleThree(basicData, exampleOne, isExampleTwo))
// Q 위 콘솔을 확인하여
// 함수 exampleThree()의 리턴값을 통해 재조립된 배열을 만드시오.

