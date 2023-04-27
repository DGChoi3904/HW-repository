import inquirer from "inquirer";
// business logic
// % 나머지 값을 내는 연산자 "%"
// 7 % 2 = 1
// 숫자 7을 2로 나눈 나머지 값은 1이다.
// 8 % 2 = 0
// 숫자 8을 2로 나눈 나머지 값은 0이다.

// 홀수 odd Number, 짝수 even number를 구분하는 근거로
// 2로 나눈 값의 '몫'을 제외한 나머지가 0이면 짝수 0이 아니면 홀수라는 결론이 나온다.

// work:  오라클빌딩에는 두개의 엘리베이터가 있다.
// 전체 층을 가진 배열. 0은 지하1층이다.
const floor = ['지하1층', '1층', '2층', '3층', '4층', '5층', '6층', '7층', '8층', '9층', '10층']
// 엘리베이터 문제. 현재층에 따라 choice가 변한다.
let floorQuestion = {
  type: "list",
  name: "floor",
  message: "몇층으로 가시겠습니까? [B1~10F]",
  choices: []
};
//층이 지하1층, 1층, 10층이 아닌 홀수층일경우.
function oddElevator(floorNumber) {
  floor.forEach((val, index) => {
    if (index === 0 || index === 10 || index % 2 == 1) {
      //현재층일 경우 제외
      if (floorNumber !== index) {
        floorQuestion.choices.push(val);
      }
    }
  })
  chooseFloor(floorQuestion);
}
//층이 지하 1층, 1층, 10층이 아닐 경우.
function evenElevator(floorNumber) {
  floor.forEach((val, index) => {
    if (index % 2 == 0) {
      //현재층일 경우 제외
      if (floorNumber !== index) {
        floorQuestion.choices.push(val);
      }
    }
  })
  //문제를 실행하는 함수, 여기에 완성된 floorQuestion 객체를 매개변수로 넣어 실행한다.
  chooseFloor(floorQuestion);
}
// 현재층이 어딘지 확인하고 floorQuestion을 지정해주는 함수. 지하1층, 1층, 10층일경우 모든 층을 고를 수 있다.
function useElevator(currentFloor) {
  if (currentFloor !== 0) {
    console.log(`당신은 현재 ${currentFloor}층에 있습니다.`)
  } else {
    console.log(`당신은 현재 지하 1층에 있습니다.`)
  }
  // 지하1층, 1층, 10층일경우
  if (currentFloor === 0 || currentFloor === 1 || currentFloor === 10) {
    floorQuestion.choices = floor;
    chooseFloor(floorQuestion)
    // 홀수층일 경우
  } else if (currentFloor % 2 === 1) {
    oddElevator(currentFloor);
    // 짝수층일 경우
  } else if (currentFloor % 2 === 0) {
    evenElevator(currentFloor);
  }
}
// 층을 고르는 문제를 내는 함수. 위의 완성된 floorQuetion을 매개변수로 받는다.
function chooseFloor(question) {
  inquirer.prompt([question])
    .then(answer => {
      console.log("문을 열겠습니다.")
      setTimeout(() => {
        console.log(`${answer.floor}에 도착하였습니다.`)
        setTimeout(() => {
          console.log("문을 닫습니다.")
        }, 1000)
      }, 1000)
    })
}

// inquirer.prompt([{
//   type:"list",
//   name:"floor",
//   message: "몇층으로 가시겠습니까? [B1~10F]",
//   choices: floor
// }])
// .then(answer=>{
//   console.log("문을 열겠습니다.")
//   setTimeout(()=>{
//     console.log(`${answer.floor}에 도착하였습니다.`)
//     setTimeout(()=>{
//       console.log("문을 닫습니다.")
//       console.log(answer)
//     }, 1000)
//   },1000)

// })

//홀수 전용, 짝수 전용 엘리베이터 두개가 마련되어 있지만, 예외가 발생한다.
// 짝수엘리베이터는 1층도 가능하게 설계되어있다.
// 홀수엘리베이터는 10층도 가능하게 설계되어있다.
// 짝수 홀수 엘리베이터 둘다 지하일층 -1까지 가능하게 설계되어있다.

// ESM 모듈방식으로 사용가능한
// npm install inquirer 모듈을 설치하여
// 지하1층부터 10층까지 숫자를 입력할수 있는 인터페이스를 제작한다.
// "문을 열겠습니다." 라는 문구가 나오게 한다.
// 1초뒤에 "n층에 도착하였습니다." 라는 문구가 나오게 한다.
// "문을 닫습니다." 라는 문구가 나오게 한다.

// 현재 있는 빌딩(오라클빙딩이라 가정)에서 몇층에 있는지를 선택하는 함수. 엔트리 포인트이다. 매개변수는 없다.
function oracleBuilding() {
  inquirer.prompt([{
    type: "number",
    name: "floor",
    message: "당신은 지금 몇층예 계신가요? [숫자로 입력, 0-10, 0은 지하 1층]"
  }])
    .then(answer => {
      //만일 넣은 답이 숫자가 아닐경우
      if (Number.isNaN(answer.floor) === false) {
        //숫자이나 0~10이 아닐경우
        if (answer.floor < 0 && answer.floor > 10) {
          console.log("당신은 오라클 빌딩에 있지 않습니다. 지하1층(0)부터 10층(10)사이를 입력하세요.")
          setTimeout(() => {
            process.exit();
          }, 1000)
        } else {
          //모든 조건에 부합하는 숫자일경우 0~10.
          useElevator(answer.floor)
        }
      } else {
        //숫자가 아닐경우 나오는 구문
        console.log("숫자를 입력하세요.")
        setTimeout(() => {
          process.exit();
        }, 1000)
      }

    })
}
// 최종 실행
oracleBuilding();
//useElevator(1);
/**
 * 위의 설명을 종합하여 orderlist로(순서가 있는 목록)으로
 * 예상되는절차를 술어로 작성해보세요.
 * 
 * 위의 문제를 보며 작성하고 거기에 현재 위치, 층을 확인하고 이에따라 엘리베이터를 고르는 것을 추가한 절차를 설명한다.
 * 1. oracleBuilding() 함수를 실행하여 엘리베이터를 이용할 준비를 한다.
 * 2. 질문, 현재 당신의 위치를 숫자로 입력하시오에 다라 숫자를 입력한다.
 * 3. 만일 숫자가 0보다 아래거나 10보다 클 경우, 당신은 오라클빌딩에 있지 않다고 말하고 1초후 프로세스를 종료한다. 아니면 다음 문제를 낸다.
 * 4. 현재 있는 층에 따라 홀수엘리베이터를 탈지, 짝수 엘리베이터를 탈지 고른다. 만일 지하1층, 1층, 10층일 경우, 모두를 고를 수 있게 한다.(짝수 홀수 둘중 하나 골라 타면 되므로)
 * 5. 층을 골랐다면, "문을 열겠습니다"라는 메세지가 뜨고 1초를 기다린다.
 * 6. 1초가 지난후, "n층에 도착하였습니다." 라는 메세지가 뜨고 1초를 기다린다.
 * 7. 1초가 지난 후, "문을 닫습니다"라는 메세지가 뜨고 모든 프로세스가 종료된다.
 */

