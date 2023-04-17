function examOne(first,second) {
  // 매개변수가 문자열일 경우 ,다음과 같은 문자열이 나타나도록 작성하시오.
  // "문자열 데이터를 입력하셨습니다."
  // 매개변수들이 number일 경우.
  if(typeof(first) === 'number' && typeof(second) === 'number'){
    //값만 리턴하지 않고, 텍스트 형태로 출력.
    return `${first}와 ${second}의 합은 ${first + second}입니다.`;
  // 만일 매개변수에 문자열이 들어왔을 경우
  }else if(typeof(first) === 'string' || typeof(second) === 'string'){
    return "문자열 데이터를 입력하셨습니다.";
  }
};

function examTwo(first, second, third) {
  // 숫자여야만 실행되도록 타입을 확인하는 로직을 작성하시오
  // 매개변수들이 숫자일경우에만 true인 if문.
  if(typeof(first) === 'number' && typeof(second) === 'number' && typeof(third) === 'number'){
    //값만 리턴하지 않고, 텍스트 형태로 출력.
    return `${first}, ${second}, ${third}의 곱셈값은 ${first * second * third}입니다.`;
  } else {
    return "숫자여야만 실행할 수 있습니다. 숫자를 넣어주세요.";
  }
};

function examThree(str) {
  // 문자열만 실행되도록 타입을 확인하는 로직을 작성하시오.
  // length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  // 문자열일 경우에만 true, 그 이외 false
  if(typeof(str) === 'string'){
    let count = 0;
    //복합형태로 사용항 구문. Array.from()으로 str를 배열화, 그리고 forEach문으로 인덱스당 카운트에 1을 더함
    Array.from(str).forEach(()=>{count++});
    //출력의 경우, 인덱스가 0에서부터 시작하기에 1을 더하여 기본 length의 길이를 표기하게 함.
    return `${str}의 길이(length)는 ${count+1}입니다.`;

  //문자열이 아닐경우 출력되는 구문
  } else {
    return "해당 함수는 문자열만 받습니다.";
  }
};

function examFour(array) {
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  // 배열과 객체는 둘다 object로 판정되기에, 이를 구분하기위해 toString으로 문자열화, 그리고 해당 문자열의 첫글자를 확인하여 '['인지 확인한다.
  // 배열의 경우 []로 둘러쌓여 있고, 객체의 경우 {}로 둘러쌓여있기에 쓸 수 있는 비교 구문.
  if(typeof(array) === 'object' && toString(array).startsWith(('['))){
    //최소값 저장용 변수
    let lowest = 0;
    //forEach로 매 인덱스마다 비교
    array.forEach(value=>{
      if(lowest === 0){ // 기본, 0일경우 저장
        lowest = value;
      } else if(lowest > value){ // 만일 value가 lowest보다 작을경우.
        lowest = value;
      }
    })
    return `배열 ${array}에서 최소값인 수는 ${lowest}입니다.`;
  } else {
    return '배열을 입력하셔야 합니다.';
  }
}

function examFive(array) {
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  // 위와 동일. 해당 객체가 배열인지를 시작 단어로 구분.
  if(typeof(array) === 'object' && toString(array).startsWith(('['))){
    let sum = 0;
    array.forEach(value=>{
      sum += value;
    })
    return `배열 ${array} 의 총합은 ${sum}입니다.`;
  } else {
    return '배열을 입력하셔야 합니다.';
  }
}

console.log(examOne(2,3)); //Question1 덧셈 로직 만들기
console.log(examTwo(2,3,4)); //Question 2 곱셈 로직 만들기
console.log(examThree("hello")); //Question 3 문자열 길이 구하기.
console.log(examFour([3,1,4,2])); //Question 4 최솟값 판별하기.
console.log(examFive([1,2,3])); //Question 5 배열값 누산(총합)하기.