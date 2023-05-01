/**
 * python의 재귀함수형 함수 예제를 JS로 구현해보기.
 * example = [[1,2,3], [4,[5,6]],7,[8,9]]
 * def flatten(data) :
 *  output = []
 *    for item in data:
 *      if type(item) == list:
 *        # 재귀적으로 처리
 *        output += flatten(item)
 *      else:
 *        output.append(item)
 *    return output
 * 
 * print(flatten(example))
 */
// ? 쉬운 방법
// MDN에서는 자체 flat()이라는 내장함수를 지원하며, 임의의 깊이(infinity, 무한으로도 설정 가능함)만큼 배열 안의 배열들을 재귀함수형으로 처리하여 단하나의 배열형태로 변환한다.
// 하지만 귀찮더라도 직접 재귀함수를 사용하여 이를 처리하는 법을 테스트한다.


//테스트용 함수

const example =  [[1,2,3], [4,[5,6]],7,[8,9]];
function flatten(mixedArray){
  let flattendArray = new Array;
  mixedArray.forEach(value => {
    if(value instanceof Array){
        
    }
    else{

    }
  })
}