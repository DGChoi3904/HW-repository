export default function priceChecker(price){
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
    if(currency[money].value === money){
      result.output += `${currency[money].name}을 넣었습니다.\n`
    }
  }
  basicData.forEach(item=>{
    //만일 상점에 있는 아이템의 가격보다 돈이 더 많을경우
    if(item.price <= price){
      //카운트 추가
      result.count++;
      //구매 가능한 아이템을 output에 추가
      result.output += `${item.number}번, ${item.name} : ${krwFormat.format(item.price)}원\n`;
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