/**
 * node-exam-7
 * exampleOne() 함수는 총 네개의 경우의 수를 분기하여,
 * 정수기의 필터처럼 데이터타입과, 원하는 값 검출들을 처리하는 ㅎ마수입니다.
 * 필요하지 않은 데이터나, 필요한 데이터, 혹은 안정성을 위한
 * 조치로 이러한 함수를 작성해 사용 할 수 있습니다.
 * 몇개의 반복문과 몇개의 조건문이 작성되어 있는데,
 * 이것을 다른 방식으로 '처라' 할 수 있을까요?
 * 
 * class의 getter와 setter, helper method로 '객체지향' 방식으로 조립하기도,
 * 외부함수, 내부함수 구조 혹은 클로저로 '함수지향' 방식으로 조립하기도
 * 할 수 있는 자바스크립트의 '변형성'을 탐구해보시기 바랍니다.
 */

function exampleOne(arr, dataType, itemToFind){
  if(Array.isArray(arr) === false){
    console.log("배열이 아닙니다.");
    return false;
  }
  const isDataTypeMatched = (typeof(itemToFind) === dataType);
  const isItemExist = arr.includes(itemToFind);

  if(isDataTypeMatched === true && isItemExist === true){
    console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
    return true;
  } else if(isItemExist === false){
    console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`)
  } else if(isDataTypeMatched === false){
    console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`)
    return false;
  }
}

const basicData = ["안녕하세요", "어디선가", "입력된", "데이터를", "찾아보는", "함수입니다."];

exampleOne(basicData, "string", "어디선가")

//클래스 타겟파인터 from 배열을 정의.
class TargetFinderFromArray {
  constructor(array, dataType, target){
    // 받은 데이터를 저장하는 객체를 생성
    this._target = new Object;
    // arrayCheck을 사용해 array만 넣을 수 있게 함.
    this._target.array = this.arrayCheck(array);
    // dataTypeCheck을 사용해 데이터타입 문자열만 넣을 수 있게 함.
    this._target.dataType = this.dataTypeCheck(dataType);
    this._target.target = target;
    // 이 클래스의 메인. 넣은 데이터를 토대로 배열을 검색하여 결과를 담아둔다.
    this._result = this.search(this._target.target,this._target.dataType);
  }
  // setter가 실행될때마다, refresh()가 실행되어 _result의 값을 갱신한다.

  set array(array){
      this._target.array = this.arrayCheck(array); 
      this.refresh();
  }
  get array(){
    return this._target.array;
  }
  set dataType(type){
    this._target.dataType = this.dataTypeCheck(type);
    this.refresh();
  }
  get dataType(){
    return this._target.dataType;
  } 
  set target(tar){
    this._target.target = tar;
    this.refresh();
  }
  get target(){
    return this._target.target;
  }
  get result(){
    return this._result;
  }
  // 타겟이 Array가 아닐결우 타입에러를 throw하는 구문.
  arrayCheck(array){
    if(Array.isArray(array)){
      return array;
    } else {
      const err = new TypeError("배열만 검색 가능합니다.")
      throw err;
    }
  }
  // 타겟이 typeof의 문자열일 경우에만 통과, 아닐경우 typeError를 던지게 함.
  dataTypeCheck(type){
    //typeof에 정의된 모든 타입들. null은 object타입이기에 여기에는 표기가 안됨.
    let types = ["undefined", "object", "boolean", "number", "bigint", "string", "symbol", "function"]
    if(types.includes(type)){
      return type;
    } else {
      err = new TypeError("데이터 타입중 하나를 typeof 스타일 문자열로 넣으셔야 하며, null은 object입니다.")
      throw err;
    }
  }
  // 검색 메소드. 위의 기본 검색을 그대로 가져옴.
  search(itemToFind, dataType){
    const isDataTypeMatched = (typeof(itemToFind) === dataType);
    const isItemExist = this._target.array.includes(itemToFind);

    if(isDataTypeMatched === true && isItemExist === true){
      return `${itemToFind}은(는) 배열에 존재합니다.`;
    } else if(isItemExist === false){
      return `${itemToFind}은(는) 배열에 존재하지 않습니다.`;
    } else if(isDataTypeMatched === false){
      return `찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`;
    }
  }
  // 갱신 메소드. 세터가 실행될 때마다 result을 갱신할 수 있게 함.
  refresh(){
    this._result = this.search(this._target.target,this._target.dataType);
  }
}
let number = 1;


const testOne = new TargetFinderFromArray(basicData, "string", "어디선가")

console.log(testOne)
testOne.dataType = "number"
console.log(testOne)

//걸린시간 약 2시간!