# 함수 math를 import, Python에선 Math가 아닌 math이다.
import math

def exampleOne(a):
  # 타입이 정수가 아닐경우 실행하는 구문.
  if not isinstance(a, int):
    raise TypeError('정수를 입력해야 합니다.')
  # 참고로 JS에서는 number 타입이 정수와 부동소숫점 숫자(float)도 포함하기에 JS 예제에서 포함된 구문을 Python에선 아래와 같이 쓴다.
  # Python은 number가 아닌 int로 타입을 확인하기에 아래의 조건문이 요구되진 않는다. 허나 아래에 작성했다.
  if math.isclose(a, math.floor(a)):
    raise TypeError('정수를 입력해야 합니다.')

  return a
