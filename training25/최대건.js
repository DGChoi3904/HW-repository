var dummyText = "아버지께서방에들어가신다.";
var refineNounData = ["아버지", "방"];
var spacing = " ";
function spacingLetter(text, nounData, spacing) {
    var result = "";
    // 검사하는 텍스트중에 지정한 명사가 있을경우 조사확인후 스페이싱과 함께 result에 추가
    nounData.forEach(function (val, index) {
        if (text.includes(val)) {
            result += val;
            var tempStr = text.split(val)[1];
            //뒤에 한글자 조사가 붙을 경우
            if (tempStr.startsWith("이") || tempStr.startsWith("가") || tempStr.startsWith("에")) {
                result += tempStr.charAt(0) + spacing;
                //뒤에 두글자 조사가 붙을 경우
            }
            else if (tempStr.startsWith("께서")) {
                result += tempStr.substring(0, 2) + spacing;
            }
        }
    });
    //지정된 명사가 다 나왔을 경우, 나머지부분을 그대로 뒤에 추가.
    result += text.split(result.split(" ").join(""))[1];
    return result;
}
console.log(spacingLetter(dummyText, refineNounData, spacing));
