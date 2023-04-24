let basicData = {
  header : {
    id: "header",
    type: "div",
    children: null,
  },
  main : {
    id: "main",
    type: "div",
    children: null,
  },
  footer : {
    id: "footer",
    type: "div",
    children: null,
  }
}

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];

function exampleOne(object, array){
  // basic 객체의 children 속성이 null 데이터타입이 할당되어있는지를 판별하고
  // null 데이터타입이 할당되어 있으면 매개변수를 각각 할당한다.
  // children 값이 null인 하위 HTML객체들에게 각각 지정된 매개변수 array를 children에 할당하는 구문
  for(let tag in object){
    if(object[tag].children === null){
      object[tag].children = array;
    }
  }

  // 문자열이 들어갈 변수 선언
  let value;
  // 위의 for-in문을 써도 좋으나 구별을 위해 다시 for-in문을 사용함. 단 함수로 따로 빼서 진행.
  value = htmlTag(object);
  // header, main, footer HTML 태그를 생성하는 로직으로
  // 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집하시오.
  return value;
}
//위의 객체를 받고 HTML형식의 문자열덩어리로 가공편집
function htmlTag(obj){
  let result = "";
  for(let key in obj){
    result += `<${key} id="${obj[key].id}">\n`;
    obj[key].children.forEach(val => {
      result += `\t<${obj[key].type}>${val}</${obj[key].type}>\n`
    })
    result += `</${key}>\n`
  }
  return result;
}

console.log(exampleOne(basicData,elementData));