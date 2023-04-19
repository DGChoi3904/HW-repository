// 정적인 객체 리터럴, 데이터를 넣을 자리 마련
let basicData = {
  header: {},
  main: {},
  footer: {}
}
// fromJsonData 변수는
// json.parse()를 통해 받아온 데이터라고 가정한다.
let fromJsonData = {
  header: {
    content: "header 부분입니다.",
    style : {
      width : "100vw",
      height: "100px",
      backgroundColor: "#ccc"
    }
  },
  main: {
    content: "main 부분입니다.",
    style : {
      width : "100vw",
      height: "100px",
      backgroundColor: "#333"
    }
  },
  footer: {
    content: "footer 부분입니다.",
    style : {
      width : "100vw",
      height: "100px",
      backgroundColor: "#666"
    }
  }
}

// 작성에 걸린시간 1시간 10분.
// 대부분의 시간을 왜 basicData객체가 들어갔는가를 고민했다. 딱히 무엇을 하라는 메세지는 없었기에 한참을 고민하다 그냥 JsonData객체를 basicData로 옮겨넣기로 했다. 작성하는데 걸린시간은 40분.
function exampleOne(basicData, fromJsonData){
  let value ="";
  // 아래의 호출부를 참고하여, 지역변수 value에
  // 적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다.
  // key를 기준으로 fromJsonData의 파라미터 열기
  for(let key in fromJsonData){
    //fromJsonData의 값을 동일한 키를 가진 basicData에 옮기기.
    basicData[key] = fromJsonData[key];
    //value 문자열에 ES6 문법 `${}`을 통하여 HTML문법 생성.(아래의 element가 innerHTML이라 하기에 이에 맞게 HTML문법을 채용)
    //concat()을 써볼까 했으나, MDN에서 + 또는 +=문법을 사용하는 것이 차라리 났다고 하여 +=을 채용.
    //key이름을 가진 시작태그 및 style attribute 시작부분 주입.
    value += `<${key} style="`;
    //해당 스타일을 태그에 적용하기 위해 스타일 키만큼 반복. 마지막을 구분하기위해 backgroundColor가 선택되면 뒤의 콤마 없이 기입.
    for(let styleKey in fromJsonData[key].style){
      if(styleKey !== "backgroundColor"){
        value += `${styleKey}:${fromJsonData[key]['style'][styleKey]}, `;
      } else {
        //HTML에서 적용할 때에는 카멜케이스가 아닌 background-color여야 하기에 이에 수정.
        value += `background-color:${fromJsonData[key]['style'][styleKey]}`;
      } 
    }
    //마지막 content부분을 주입, 이때, 보기 편하게 줄바꿈 \n 그리고 탭 \t을 추가 적용
    value += `">\n\t${fromJsonData[key].content}\n</${key}>\n`
  }
  return value;
}
const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);
console.log(exampleOne(basicData, fromJsonData))


// 위 fromJsonData과 같은 객체나 JSON을 생성하기 위한
// 생성자함수, 클래스를 작성한다.
// setter 기능을 활용하여 인스턴스의 값들은 모두 "문자열"만 들어가도록
// 안정성을 확보한다.

// 작성하는데 걸린시간 1시간 40분.
// 어떤 클래스로 만들까 한참을 고민했다. 위의 header, main, footer를 생성하는 클래스로 만들지, 아니면 각 header, main, footer 객체를 생성하는 클래스로 만들지를 고민헀다. fromJsonData같은 객체의 범주를 어디로 잡아야하나 고민하다 위의 basicData를 생각하고서, basicData와 같은 header, main, footer를 가진 객체를 생성하는 것으로 정했다. 정하는데 걸린시간 50분, 코드 작성은 50분정도 걸렸다.
// 작성 50분중 오래걸린것은 생성자 함수를 어떻게 정의할까였다. ChatGPT가 제안한 형태를 보고 이대로 쓸까 고민하다 그대로 따랐다. 단 get과 set은 내가 직접 정의하였다. 
//getter와 setter는 객체를 넣었을때, content만 넣었을 때, 그리고 style만 넣었을때로 구분했다. 모두 인스턴스가 string인 것을 확인하는 구문이 있다.
class ExampleTwo {
  constructor(headerContent, headerStyle, mainContent, mainStyle, footerContent, footerStyle){
    this._header = {
      content : headerContent,
      style : headerStyle
    }
    this._main = {
      content : mainContent,
      style : mainStyle
    }
    this._footer = {
      content : footerContent,
      style : footerStyle
    }
  }
  get header(){
    return this._header;
  }
  set header(obj){
    if(typeof obj.content === 'string'){
      let styleCheck = true;
      for(let key in obj.style){
        if(typeof obj.style[key] !== 'string' ){
          styleCheck = false;
        }
      }
      if(styleCheck){
        this._header = obj;
      }
    }
  }
  get headerContent(){
    return this._header.content;
  }
  set headerContent(val){
    if(typeof val === 'string'){
      this._header.content = val;
    }
  }
  get headerStyle(){
    return this._header.style;
  }
  set headerStyle(obj){
    let strCheck = true;
    for(let key in obj){
      if(typeof obj[key] !== 'string'){
        strCheck = false;
      }
    }
    if(strCheck){
      this._header.style = obj;
    }
  }
  get main(){
    return this._main;
  }
  set main(obj){
    if(typeof obj.content === 'string'){
      let styleCheck = true;
      for(let key in obj.style){
        if(typeof obj.style[key] !== 'string' ){
          styleCheck = false;
        }
      }
      if(styleCheck){
        this._main = obj;
      }
    }
  }
  get mainContent(){
    return this._main.content;
  }
  set mainContent(val){
    if(typeof val === 'string'){
      this._main.content = val;
    }
  }
  get mainStyle(){
    return this._main.style;
  }
  set mainStyle(obj){
    let strCheck = true;
    for(let key in obj){
      if(typeof obj[key] !== 'string'){
        strCheck = false;
      }
    }
    if(strCheck){
      this._main.style = obj;
    }
  }
  get footer(){
    return this._footer;
  }
  set footer(obj){
    if(typeof obj.content === 'string'){
      let styleCheck = true;
      for(let key in obj.style){
        if(typeof obj.style[key] !== 'string' ){
          styleCheck = false;
        }
      }
      if(styleCheck){
        this._footer = obj;
      }
    }
  }
  get footerContent(){
    return this._footer.content;
  }
  set footerContent(val){
    if(typeof val === 'string'){
      this._footer.content = val;
    }
  }
  get footerStyle(){
    return this._footer.style;
  }
  set footerStyle(obj){
    let strCheck = true;
    for(let key in obj){
      if(typeof obj[key] !== 'string'){
        strCheck = false;
      }
    }
    if(strCheck){
      this._footer.style = obj;
    }
  }
}

let myClass = new ExampleTwo("header이다.",{width:"100vw",height:"100vh",backgroundColor:"#fff"}, "main이다.",{width:"100vw",height:"100vh",backgroundColor:"#ccc"}, "footer이다.",{width:"100vw",height:"100vh",backgroundColor:"#888"});
console.log(myClass)
console.log(myClass.header);

