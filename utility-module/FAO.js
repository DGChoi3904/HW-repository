// 클래스 FAO, 사칙연산 클래스. 정적 helper function들을 가지고 있다.
// static으로 구현할 시, 해당 class를 사용하는 스크립트에서 선언하고 할당할 필요 없이, Class의 helper function을 바로 불러 사용할 수 있다.
class FAO {
  static add(a, b) {
    return a + b;
  }
  static minus(a, b) {
    return a - b;
  }
  static divide(a, b) {
    return a / b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static reminder(a, b) {
    return a % b;
  }

};
//오타 주의할 것. export가 아닌 exports다.
module.exports = FAO;