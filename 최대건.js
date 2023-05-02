// const add = require('./utility-module/add.js');
// const minus = require('./utility-module/minus.js');
// const divide = require('./utility-module/divide.js');
// const multiply = require('./utility-module/multiply.js');

// 위의 사칙연산 스크립트를 하나로 모아서 만들었다고 가정하고, 그렇게 만든 클래스를 require를 통해 import함.
const FAO = require('./utility-module/FAO.js');

const a = 10;
const b = 20;



// console.log(add(a,b));
// console.log(minus(a,b));
// console.log(divide(a,b));
// console.log(multiply(a,b));

// Q.1 사칙연산 모듈을 4개 만들어서 import(가져오기) 후 호출한 예시입니다.
// Q.1 아무래도 이렇게 하나하나 가져오는 것은 가독성면에서나 사용성면에서 좋아보이지 않습니다.
// Q.1 이것을 하나의 Class 형태의 모듈로 만들어 관리할 수 있으까요?

//만일 하나로 통합하여 관리한다면, 클래스를 만들면 된다.
//하나의 클래스에 각각의 모듈을 helper function으로 추가하면 된다.
//여기서 FAO는 사칙연산, Four Fundamental Arthimetic Operation의 줄임말이다.

console.log(FAO.add(a,b));
console.log(FAO.minus(a,b));
console.log(FAO.divide(a,b));
console.log(FAO.multiply(a,b));


// Q.2 Class에서 작성될 메서드는 모두 '정수'로 된 두 개의 인자를 받아서 결과를 반환하게끔 제한하려면,
// Q.2 어떤 helper function을 사용해야 할까요?
// Q.2 helper function을 사용하면 어떤 장점이 있을까요?
// Q.2 helper function을 사용하지 않고 구현할 수 있는 방법이 있을까요?

// 위의 클래스에서 매개변수로 받을 데이터가 '정수'인지 확인하는 방법으로는 나눗셈, 나머지를 계산하는 식인 reminder()가 있다.
// 나머지(reminder) 연산은 엄밀히 말하자면 나눗셈이기에 사칙연산에 포함된다. 위의 Class FAO에는 이 나머지 연산 함수를 구현해 놨으며,
// 만일 데이터 a를 1로 나눌시 나머지가 0일경우 정수임을 판단할 수 있다. 음수이든 양수이든 1로 나누어서 나머지가 0이 아니면 정수가 아니기 떄문이다.

// 10이라는 정수를 가진 a를 1로 나눌경우, 나머지는 0이 되기에 true가 된다.
console.log(FAO.reminder(a,1) === 0);
// 11.1이라는 소숫점을 가진 수를 1로 나눌경우, 나머지는 0보다 크기에 false가 된다.
console.log(FAO.reminder(11.1,1) == 0);

// helper function을 사용할경우, 해당 클래스가 스크립트 안에 import되거나 선언되고 할당되는 한, 각각 따로 import할 필요 없이 
// object의 내장 메서드 호출방식처럼 불러서 사용할 수 있다.
// Class의 helper function으로 사용하지 않고 사용하고싶으 경우, 해당 메서드만 변수로 선언한 후 할당하는 방법으로 사용할 수 있다.
// 그 외의 방식으로는, 해당 클래스의 선언된 사칙연산을 리터럴로 구형하는 방법이다. 프로그래밍 언어에서는 논리연산을 위해 사칙연산자를 사용하기에
// 이를 리터럴로 사용하여 구현할 수 있다.

// 해당 helper function만 변수를 선언하고 담아 사용하기.
const adder = FAO.add;
//adder는 fourAO.add() 함수와 동일한 작업을 한다. 결과는 a+b;
console.log(adder(a,b));

//사칙연산의 경우 프로그래밍 언어에서 기초적으로 쓰이는 논리연산이기에 아래와 같이 리터럴로 사용할 수 있다.
console.log(a+b);
