const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 }
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" }
};

// 우리학원 휴게실에 있는 자판기에 들어있는 음료수의 정보를 담은 배열입니다.
// 아래의 exampleOne()은 임의의 '돈'에 대해 얼마짜리를 넣었는지 확인 할 수 있게 로직을 구성합니다.
function exampleOne(inputPrice, currency, basicData) {
  // Q.1
  // 만약 inputPrice가 1000원이라면 currency.thousand.name을 반환하여
  // "일천원권을 넣었습니다."라는 문구를 console.log를 통해 출력하도록 제작하세요.
  // Q.2
  // 만약 inputPrice가 1000원일 때, basicData를 통해 구매 가능한 제품을
  // console.log()을 통해 출력하세요.
  // Q.3
  // 만약 inputData가 모든 제품의 가격보다 적다면 "잔액이 부족합니다." 라는 문구를
  // console.log()를 통해 출력하세요.
  // Q.4
  // 만약 inputData가 모든 제품의 가격보다 많다면 "당신은 부자입니다." 라는 문구를
  // console.log()를 통해 출력하세요.
  
  // 받은 돈을 기준으로 output을 만드는 함수.
  function priceChecker(price){
    // 반환용 객체. 여기에 price, 구매가능 아이템 갯수, output을 담는다.
    let result = {
      input : price,
      count : 0,
      output : "\n"
    }
    //돈의 표시를 한국 원으로 표기하는 구문.
    const krwFormat = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' })
    //넣은 돈이 어떤 돈인지 파악하고 output을 추가하는 구문 currency와 동일하지 않은 금액일시 넘어간다.
    for(let money in currency ){
      if(currency[money].value === price){
        result.output += `${currency[money].name}을 넣었습니다.\n`
      }
    }
    basicData.forEach(item=>{
      //만일 상점에 있는 아이템의 가격보다 돈이 더 많을경우
      if(item.price <= price){
        //카운트 추가
        result.count++;
        //구매 가능한 아이템을 output에 추가
        result.output += `${item.number}번,\t${item.name}:${krwFormat.format(item.price)} 원\n`;
      }
    })
    //만일 카운트가 0, 살수 있는 아이템이 없을 시.
    if(result.count = 0){
      //잔액 부족을 output에 추가.
      result.output += "잔액이 부족합니다.\n";
      //만일 카운트가 10, 살 수 있는 모든 아이템만큼 있을 시.
    } else if(result.count  === basicData.length){
      //너는 부자다를 output에 추가.
      result.output += "당신은 부자입니다.\n"
    }
    return result;
  }
  // 함수 실행, 및 반환된 객체를 저장.
  const result = priceChecker(inputPrice);

  console.log(result.output);
  
}


exampleOne(1000,currency,basicData);