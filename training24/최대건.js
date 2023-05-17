/**
 * git의 diff 기능처럼 두 값(배열)을 비교하여, 중복되는 요소가 있을 경우, 중복되는 요소를 바꾸기 위해 필요한 요소를 담은 객체를 반환하는 함수.
 * 해당 논리는 매우 자주 사용하는 논리라고 하니 참고하자.
 * @param {array} targetArray
 * @param {array} compareArray
 * @param {array} originalArray
 * @returns {object} 중복된 요소와, 바뀔 요소를 담은 객체
 */
function diffFinder(targetArray, compareArray, originalArray) {
    // 기본 값은 null이나, 여기에 값을 할당할 예정이기에 할당할 값의 데이터타입을 추가.
    // 아래와 같이 여러타입을 명시하는 합집합 타입을 유니온 타입(union type)이라 한다.
    var duplicatedElement = null;
    var replaceElement = null;
    targetArray.forEach(function (element, index) {
        if (compareArray.includes(element) === true) {
            duplicatedElement = element; // 중복되어 있는 요소를 미리 만들어둔 변수에 할당
            replaceElement = originalArray[index]; // 중복되었다고 판단되는 시점의 index를 통해 교체하기 위해 별도에 변수에 할당.
            targetArray[index] = replaceElement; // 요소 교체
        }
    });
    // 가독성을 위해 객체의 키값을 지역변수 이름과 동일하게 지정.
    // 다른 키 이름으로 지정해도 무방하다.
    return {
        duplicatedElement: duplicatedElement,
        replaceElement: replaceElement
    };
}
var pokemon = ["피카츄", "라이츄", "파이리", "꼬부기"];
var digimon = ["코로몬", "테일몬", "기브몬", "꼬부기"];
var digimonOriginalData = ["코로몬", "테일몬", "기브몬", "어니몬"];
console.log(diffFinder(digimon, pokemon, digimonOriginalData));
