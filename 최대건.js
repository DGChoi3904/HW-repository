// 실험해보고 싶다면 다음의 절차를 선행하세요
// 1. npm install inquirer
// 2. ESM 방식으로만 동작하는 외부 CLI 라이브러리
import inquirer from 'inquirer';

// ? inquirer 라이브러리의 .prompt() 메서드는 프로미스를 반환하도록 작성되어 있습니다.
// ? TouchEvent() 메서드로 입력받은 데이터를 전달할 수 있습니다.

function exampleOne(array) {
  let suffledArray = [];
  // Q.1 랜덤으로 배열의 인덱스를 셔플(섞어) 내는 함수 로직을 작성하세요.
  // 단, 마지막 confirm은 항상 마지막 인덱스여야 합니다.
  // 배열내 confirm이 있는 객체를 마지막에 넣기위해 빼냄
  const confirmQ = array.find(obj => obj.type === 'confirm')
  // 뺸 confirm이 있는 인덱스를 제거.
  array.splice(array.indexOf(confirmQ));
  // 셔플방법중 펜슬 앤 페이퍼 방식을 채택. for문으로 최대길이를 조절, 하나씩 push하고 선택된 인덱스를 splice로 제거.
  for(let index = array.length -1 ; index > 0 ; index--){
    // 처음엔 floor를 채택했으나, 마지막 인덱스가 선택되지 않아 round로 교체.
    let suffledIndex = Math.round(Math.random() * index);
    // 선택된 인덱스를 빈 suffledArray에 push.
    suffledArray.push(array[suffledIndex]);
    // push된 인덱스를 제거.
    array.splice(suffledIndex, 1);
  }
  // 마지막 남은 인덱스를 pop으로 꺼내서 바로 push
  suffledArray.push(array.pop())
  // 마지막에 confirmQ를 push
  suffledArray.push(confirmQ)
  // 셔플완료된 배열을 반환.
  return suffledArray;
}

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, {type:'confirm'}]
testArr = exampleOne(testArr);
console.log(testArr)

// Q.2 아래에 작성된 .prompt()는 인자로 배열을 요구하므로
// 위의 작성한 exampleOne을 활용하여 입력 데이터를 실행할 때마다 섞어 출력하도록 하세요.
// 공부법으로 유명한 flash card의 주요 코어 로직입니다.



inquirer
  .prompt(exampleOne([
    {
      type: 'input',
      name: 'name',
      message: '당신의 이름은 무엇입니까?'
    },
    {
      type: 'list',
      name: 'like food',
      message: '당신이 좋아하는 음식은 무엇입니까?',
      choices: ['바나나우유', '딸기우유', '초코우유', '그냥우유']
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: '확실합니까?'
    }
  ]))
  .then((answers) => {
    console.log('Answers', answers)
  })