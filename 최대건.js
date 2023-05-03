function exampleOne(numberValue) {
  // sequence .1
  // 매개변수가 정수인지 확인하는 함수 integerCheck()
  function integerCheck(data) {
    if (Number.isInteger(data) === true) {
      return data;
    } else {
      return new Error('이 함수는 정수가 필요합니다.');
    }
  }
  // sequence .2
  function innerOne(one) {
    return one + 1;
  }
  // sequence .3
  function innerTwo(two) {
    return two + 2;
  }
  // sequence .4
  function innerThree(three) {
    return three + 3;
  }
  // sequence .5
  function innerFour(four) {
    return four + 4;
  }
  // sequence(시퀀스가) 1 -> 2-> 3 -> 4 -> 5 형태로 실행되어야 합니다.
  // 내부함수 inner시리즈를 순서대로 실행시켜 리턴된 값을 다음 함수에 인자로 넘겨주는 형태가
  // 아래에 작성되어있습니다.
  // 작동에는 전혀 이상이 없지만,
  // 아무래도 도출되는 것흔 하나의 목적일 뿐인데,
  // 변수가 낭비되는 것 같습니다.

  // 난이도 중급 : Q.1 해당 코드를 콜백 지옥으로 처리하면 어떻게 작성될까요? 결과값은 20입니다.
  // 난이도 고급 : Q.2 해당 코드를 Promise로 처리하면 어떻게 작성될까요?
  // 난이도 고급 : Q.3 해당 코드를 async/await로 처리하면 어떻게 작성될까요?
  // 배운적 없음 : Q.4 부모 함수를 클래스로 만들고, 인스턴스에 '동적'으로 4개의 inner 함수를 메서드로 추가할 수 있을까요?

  // ---- 호출부분 ----
  integerCheck(numberValue)
  const first = innerOne(numberValue);
  const second = innerTwo(first);
  const third = innerThree(second);
  const fourth = innerFour(third)
  return fourth;

}

const result1 = exampleOne(10);
console.log(result1);

// Q.1 콜백지옥 형태 코드
function callbackHell(numberValue) {
  // sequence .1
  // 매개변수가 정수인지 확인하는 함수 integerCheck()
  function integerCheck(data, callback) {
    if (Number.isInteger(data) === true) {
      return callback(null, data);
    } else {
      return new Error('이 함수는 정수가 필요합니다.');
    }
  }
  // sequence .2
  function innerOne(one, callback) {
    return callback(null, one + 1);
  }
  // sequence .3
  function innerTwo(two, callback) {
    return callback(null, two + 2);
  }
  // sequence .4
  function innerThree(three, callback) {
    return callback(null, three + 3);
  }
  // sequence .5
  function innerFour(four, callback) {
    return callback(null, four + 4);
  }
  // 1,2,3,4,5 시퀸스를 따라 진행하는 콜백지옥 코드 작성
  // ChatGPT의 도움을 받아 작성한 시퀸스를 따르는 콜백지옥.
  const result = integerCheck(numberValue, (empty, data) => {
    innerOne(data, (empty, data) => {
      innerTwo(data, (empty, data) => {
        innerThree(data, (empty, data) => {
          innerFour(data, (empty, data) => {
            console.log(data + " 콜백 지옥");
          })
        })
      })
    })
  })
}
callbackHell(10);

// 생각햇던 콜백지옥. 하지만 매개변수로 함수만 넣었을 뿐, 콜백함수 지옥으로 보이지 않아 주석처리
// const result = innerFour(
//   innerThree(
//     innerTwo(
//       innerOne(
//         integerCheck(numberValue)
//       )
//     )
//   )
// );

//Q.2 Promise를 사용해서 정해진 시퀸스를 따라 코드를 작성한 코드.
function promiseHell(numberValue) {
  function integerCheck(data) {
    // sequence .1
    // 매개변수가 정수인지 확인하는 함수 integerCheck()
    return new Promise((resolve, reject) => {
      if (Number.isInteger(data) === true) {
        resolve(data);
      } else {
        reject(new Error('이 함수는 정수가 필요합니다.'));
      }
    });
  }
  // sequence .2
  function innerOne(one) {
    return Promise.resolve(one + 1);
  }
  // sequence .3
  function innerTwo(two) {
    return Promise.resolve(two + 2);
  }
  // sequence .4
  function innerThree(three) {
    return Promise.resolve(three + 3);
  }
  // sequence .5
  function innerFour(four) {
    return Promise.resolve(four + 4);
  }
  // ChatGPT를 사용하여 작성해본 시퀸스를 따라 진행되는 프라미스 지옥
  integerCheck(numberValue)
    .then((data)=> innerOne(data))
    .then((data)=> innerTwo(data))
    .then((data)=> innerThree(data))
    .then((data)=> innerFour(data))
    .then(data=> {console.log(data + " " + "프라미스 지옥")})
    .catch((err)=>{
      throw err;
    })
}
promiseHell(10);

// Q.3 async/await 지옥
async function asyncHell(numberValue){
  // sequence .1
  // 매개변수가 정수인지 확인하는 함수 integerCheck()
  function integerCheck(data) {
    if (Number.isInteger(data) === true) {
      return data;
    } else {
      return new Error('이 함수는 정수가 필요합니다.');
    }
  }
  // sequence .2
  function innerOne(one) {
    return one + 1;
  }
  // sequence .3
  function innerTwo(two) {
    return two + 2;
  }
  // sequence .4
  function innerThree(three) {
    return three + 3;
  }
  // sequence .5
  function innerFour(four) {
    return four + 4;
  }
  // 변수로 선언해야 한다고 해서 만들어본 지옥. 예제와 차이가 없는 형태이나, 이전것이 처리될떄까지 기다려주는 지옥이다.
  await integerCheck(numberValue)
  const first = await innerOne(numberValue);
  const second = await innerTwo(first);
  const third = await innerThree(second);
  const fourth = await innerFour(third)
  return fourth;
}
//내보내는 값도 비동기함수로 작성되어 Promise객체로 내보내기에, 선언후 then에서 작업을 처리함.
asyncHell(10).then(result=>{console.log(result + " async/await 지옥")})

// Q.4 Class 지옥

class classHell {
  async integerCheck(data){
    if (Number.isInteger(data) === true) {
      return await Promise.resolve(data)
    } else {
      return new Error('이 함수는 정수가 필요합니다.');
    }

  }
}
// 새 클래스 선언 및 위의 async 함수를 사용하고 then으로 시퀸스를 만듬.
new classHell()
  .integerCheck(10)
  .then((value)=>{
    return value + 1;
  })
  .then((value)=>{
    return value + 2;
  })
  .then((value)=>{
    return value + 3;
  })
  .then((value)=>{
    return value + 4;
  })
  .then((value)=>{
    //then 밖으로 데이터를 꺼내는 방법을 아직 못찾아 여기서 console.log을 출력하게 함. 
    console.log(value + " 클래스 지옥")
  })