function examOne(first,second) {
  // 매개변수가 문자열일 경우 ,다음과 같은 문자열이 나타나도록 작성하시오.
  // "문자열 데이터를 입력하셨습니다."
  if(typeof(first) === 'number' && typeof(second) === 'number'){
    return `${first}와 ${second}의 합은 ${first + second}입니다.`;
  }else if(typeof(first) === 'string' || typeof(second) === 'string'){
    console.log("문자열 데이터를 입력하셨습니다.")
  }
};

function examTwo(first, second, third) {
  // 숫자여야만 실행되도록 타입을 확인하는 로직을 작성하시오/
  if(typeof(first) === 'number' && typeof(second) === 'number' && typeof(third) === 'number'){
    return `${first}, ${second}, ${third}의 곱셈값은 ${first * second * third}입니다.`;
  } else {
    console.log("숫자여야만 실행할 수 있습니다. 숫자를 넣어주세요.")
  }
};

function examThree(str) {
  // 문자열만 실행되도록 타입을 확인하는 로직을 작성하시오.
  // length 프로퍼티를 사용하지 않고 길이값을 구하시오.
  if(typeof(str) === 'string'){
    let count = 0;
    Array.from(str).forEach(()=>{count++});
    return `${str}의 길이(length)는 ${count+1}입니다.`;
  } else {
    console.log("해당 함수는 문자열만 받습니다.")
  }
};

function examFour(array) {
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if(typeof(array) === 'object' && toString(array).startsWith(('['))){
    let lowest = 0;
    array.forEach(value=>{
      if(lowest === 0){
        lowest = value;
      } else if(lowest > value){
        lowest = value;
      }
    })
    return `배열 ${array}에서 최소값인 수는 ${lowest}입니다.`;
  }
}

function examFive(array) {
  // 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
  if(typeof(array) === 'object' && toString(array).startsWith(('['))){
    let sum = 0;
    array.forEach(value=>{
      sum += value;
    })
    return `배열 ${array} 의 총합은 ${sum}입니다.`;
  }
}

console.log(examOne(2,3)); //Question1 덧셈 로직 만들기
console.log(examTwo(2,3,4)); //Question 2 곱셈 로직 만들기
console.log(examThree("hello")); //Question 3 문자열 길이 구하기.
console.log(examFour([3,1,4,2])); //Question 4 최솟값 판별하기.
console.log(examFive([1,2,3])); //Question 5 배열값 누산(총합)하기.