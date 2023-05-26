// console.log("Hello JavaScript!");


/*
  JavaScript 튜토리얼

  1 데이터타입과 기본 메서드
  2 연산자
  3 조건문
  4 반복문
  5 변수
  6 함수
  7 배열
  8 객체
  9 클래스
  10 에러와 에러처리
  11 비동기 작업
  12 JSON
*/


/*
  1 데이터 타입

  1 String (문자열)
  2 Number
  3 Boolean
  4 null
  5 undefined
  6 BigInt
*/



/*
  String (문자열)
  연속된 문자
  '', "" 안에 문자를 작성한다
*/


// var foo = "bar";

// console.log(foo); // bar
// console.log(typeof foo); // string

// 각각의 문자에 접근한다
// console.log(foo[0]) // b
// console.log(foo[1]) // a
// console.log(foo[2]) // r


// 문자의 갯수 구하기
// console.log(foo.length); // 3


/*
  Number

  값의 종류: 정수, 소수, NaN(Not a Number), +Infinity, -Infinity
*/


// 정수
// var year = 2023;
// console.log(year); // 2023
// console.log(typeof year); // number


// 소수
// var pi = 3.14;

// console.log(pi); // 3.14


// NaN
// var nan = 2 - "foo";
// console.log(nan); // NaN (Not a Number)


// Number타입이 표현할 수 있는 최대값 
// var max_value = Number.MAX_VALUE;
// console.log(max_value);

// Number타입이 표현할 수 있는 최소값
// var min_value = -Number.MAX_VALUE;
// console.log(min_value);


// +Infinity
// var infinity = Number.MAX_VALUE * 1.1;
// console.log(infinity) // Infinity (양의 무한대)

// -Infinity
// var negative_infinity = -Number.MAX_VALUE * 1.1;
// console.log(negative_infinity); // -Infinity (음의 무한대)


/*
  boolean
  참 또는 거짓 (true or false) 값을 갖는다
*/

// var bool = true;

// console.log(bool); // true
// console.log(typeof bool); // boolean

// 비교연산은 boolean을 리턴한다
// console.log(1 > 0) // true


/*
  null
  없음을 나타낸다
*/

// var foo = null;

// console.log(null); // null
// console.log(typeof foo); // object


/*
  undefined
  정의되지 않은 변수
*/

// var foo;

// console.log(foo); // undefined
// console.log(typeof foo); // undefined


/*
  BigInt
  안전한 정수(safe integer)밖의 정수를 나타낸다
*/


// 안전한 정수의 최대값
// var max_safe_integer = Number.MAX_SAFE_INTEGER;
// console.log(max_safe_integer);

// 안전한 정수의 최소값
// var min_safe_integer = Number.MIN_SAFE_INTEGER;
// console.log(min_safe_integer);


// Number 타입으로 안전하지 않은 정수를 표현할 경우
// var not_safe_integer = 9999999999999999; // 9가 16개
// console.log(not_safe_integer)


// 정수값 뒤에 n을 붙여서 BigInt를 선언한다
// var bigint = 9999999999999999n;

// console.log(bigint); // 9999999999999999n
// console.log(typeof bigint) // bigint


/*
  기본 데이터타입의 메서드
  데이터에 특정한 작업을 수행한다

  1 String 메서드
  2 Number 메서드
*/


/*
  String 메서드

  1 toUpperCase()
  2 trim()
  3 concat()
  4 split()
*/


// toUpperCase()
// var foo = "bar";

// 모든 문자를 대문자로 변환한다
// console.log(foo.toUpperCase()) // BAR


// trim()
// var foo = "  bar  ";

// console.log(foo)
// // 문자열 앞 뒤의 공백을 제거한다
// console.log(foo.trim())


// concat()
// var foo = "Hello";
// var bar = "JavaScript";

// // A.concat(arg, B): A문자열 뒤에 B문자열을 연결한다 (arg 기준)
// var result = foo.concat(" ", bar); // concatenate (연결)

// console.log(result); // Hello JavaScript


// split()

// var foo = "Hello JavaScript";

// split(arg): arg를 기준으로 문자열을 나눈다
// console.log(foo.split(" ")); // Hello, JavaScript


/*
  Number 메서드

  1 toPrecision()
  2 toString()
*/


// toPrecision()

// var pi = Math.PI;

// console.log(pi); // 16자리까지 표현할 수있다


// // toPrecision(arg): arg(자릿수)
// console.log(pi.toPrecision(50)); // 정밀도


// toString()

// var year = 2023;
// // Number타입을 문자열로 변환한다
// console.log(year.toString());


/*
  연산자

  1 수리연산자
  2 대입연산자
  3 비교연산자
  4 논리 연산자
  5 타입 연산자
*/


/*
  수리연산자

  1 사칙연산자
  + - * /
  2 증가연산자
  ++
  3 감소연산자
  --
  4 거듭제곱연산자
  **
  5 계수연산자
  %
*/


// 사칙연산
// var add = 1 + 2;
// var subtract = 2 - 1;
// var divide = 1 / 2
// var multiply = 1 * 2;

// console.log(add)
// console.log(subtract)
// console.log(divide)
// console.log(multiply)


// 증가연산자

// var i = 1;
// i++ // 1을 증가시킨다

// console.log(i) // 2

// var i = 1;
// i--; // 1을 감소시킨다

// console.log(i); // 0


// 제곱연산자

// var exp = 2 ** 7

// console.log(exp) // 128


// 계수연산자

// var mod = 5 % 2; // 5를 2로 나눈 나머지

// console.log(mod) // 1



/*
  대입연산자

  1 변수대입 연산자
  =
  2 덧셈 대입 연산자
  +=
  3 빼기 대입 연산자
  -=
  4 곱하기 대입 연산자
  *=
  5 나누기 대입 연산자
  /=
  6 거듭제곱 대입 연산자
  **=
  7 계수 대입 연산자
  %=
*/


// 변수대입연산자

// var foo = "bar"


// 더하기 대입 연산자

// var longVariablesName = 1;

// // longVariablesName = longVariablesName + 1
// longVariablesName += 1;

// console.log(longVariablesName); // 2


/*
  비교 연산자

  1 동등연산자
  ==
  2 비동등 연산자
  !=

  3 엄격 동등 연산자
  ===
  4 엄격 비동등 연산자
  !==

  5 크다
  >
  6 크거나 같다
  >=
  7 작다
  <
  7 작거나 같다
  <=
*/


// 동등 연산
// console.log(1 == 2) // false
// console.log("foo" == "bar") // false
// console.log(2023 == "2023") // true
// console.log(null == undefined) // true


// 엄격 동등연산
// console.log(1 === 2) // false
// console.log("foo" === "bar") // false
// console.log(2023 === "2023") // false
// console.log(null === undefined) // false


// 비동등 연산
// console.log(1 != 2) // true
// console.log("foo" != "bar"); // true
// console.log(2023 != "2023") // false
// console.log(null != undefined) // false


// 엄격 비동등 연산
// console.log(1 !== 2) // true
// console.log("foo" !== "bar") // true
// console.log(2023 !== "2023") // true
// console.log(null !== undefined) // true


/*
  논리 연산자

  1 && (AND)
  expr1 && expr2

  2 || (OR)
  expr1 || expr2

  3 ! (NOT)
  !expr

  * expr(expression): 표현식
*/


// AND
// 두 표현식이 모두 참이면 true를 리턴한다
// console.log(1 > 0 && 1 < 2) // true


// OR
// 두 표현식 중 하나가 참이면 true를 리턴한다
// console.log(1 > 0 || 1 > 2) // true


// NOT
// console.log(!(1 > 0)) // false


// Boolean타입이 아닌 데이터를 부정할 경우

// console.log(!null) // true
// console.log(!undefined) // true

// console.log(!0); // true
// console.log(!2); // false (0아닌 숫자를 부정할 경우)

// console.log(!""); // true
// console.log(!"foo") // false (빈 문자열이 아닌 문자를 부정할 경우)


/*
  타입연산자

  1 typeof
  2 instanceof
*/

// var foo = "bar"
// console.log(typeof foo) // string


/*
  조건문

  1 if 조건문
  2 switch 조건문
  3 ? (삼항연산자) 조건문
*/


// if 조건문

// var year = 2023;

// if (year === 2023) {
//   console.log("이번 년도")
// }


// if/else

// var year = 2023;

// if (year === 2023) { // 조건이 참인 경우
//   console.log("이번 년도")
// } else { // 조건이 참이 아닌 경우
//   console.log("이번 년도가 아닙니다")
// }


// if / elseif / else

// var year = 2023;

// if (year === 2022) {
//   console.log("작년")
// } else if (year === 2023) {
//   console.log("이번 년도")
// } else if (year === 2024) {
//   console.log("내년")
// } else {
//   console.log("가까운 년도가 아닙니다")
// }


/*
  switch 조건문
  엄격 동등 연산을 수행한다
*/

// var year = 2023;

// switch (year) {
//   case 2022:
//     console.log("작년")
//     break;

//   case 2023:
//     console.log("이번 년도")
//     break;

//   case 2024:
//     console.log("내년")
//     break;

//   default:
//     console.log("가까운 년도가 아닙니다")
// }


/*
  ? (삼항연산자) 조건문

  조건 ? 값1 : 값2

  조건이 참이면 값1을 리턴한다
  조건이 거짓이면 값2를 리턴한다
*/


// var year = 2023;

// var r = year === 2023 ? "이번 년도" : "이번 년도가 아닙니다"

// console.log(r) // 이번 년도



// Q. 성인이면 "성인입니다" 성인이 아니면 "성인이 아닙니다"를 출력하는
// 조건문을 만들어보세요

// var age = 20;

// // 1 if/else 조건문

// if (age >= 18) {
//   console.log("성인입니다")
// } else {
//   console.log("성인이 아닙니다")
// }

// // 2 삼항연산자 조건문

// var r = age >= 18 ? "성인입니다" : "성인이 아닙니다";

// console.log(r)



/*
  반복문

  1 for반복문
  2 while 반복문
*/


// for (변수초기값; 수행조건; 변수값증가)
// for (var i=1; i<=10; i++) {
//   console.log(i + "번 실행되었습니다")
// }


// var sum = 0;

// for (var i=1; i<=10; i++) {
//   sum += i;
// }

// console.log(sum) // 1부터 10까지의 합


// while 반복문


// var i = 1; // 변수초기화

// while (i <= 10) { // while (수행조건)
//   console.log(i + "번 실행되었습니다");

//   i++; // 변수값증가
// }


// Q. 1, 1/2, 1/3 ... 1/10 까지의 합을 반복문을 사용해서 구해보세요

// var sum = 0;

// for (var i=1; i<=10; i++) {
//   sum += (1 / i);
// }

// console.log(sum);



/*
  변수
  값을 저장하는 컨테이너

  1 기본 사용
  2 변수의 범위
*/


// 기본 사용

// var foo = "bar"; // 변수초기화

// console.log(foo); // bar


// var foo = "bar"; // 변수초기화

// foo = "baz" // 재정의 가능

// console.log(foo) // baz


// var foo; // 선언

// // foo는 undefined이다

// foo = "bar" // 정의

// console.log(foo)



/*
  변수의 범위

  1 전역 변수 (global variables)
  2 지역 변수 (local variables)
*/



// 전역 변수
// 함수밖에서 선언된 변수. 소스코드 어디에서든지 접근 가능하다

// var varInGlobal = true;

// console.log(varInGlobal); // true


// 지역 변수
// 함수 내에서 선언된 변수. 해당 함수 내에서만 접근 가능하다

// function f() {
//   var varInFunction = true;
// }

// console.log(varInFunction); // 에러


/*
  함수
  호출될때에만 실행되는 코드

  1 함수 선언
  2 Hoisting
  3 매개변수와 인자
  4 return
  5 callback
*/


/*
  함수 선언 

  1 함수 선언식
  2 함수 표현식
*/

// 함수 선언식

// function f() {
//   console.log("foo");
// }

// f(); // 함수 호출


// 함수 표현식
// 변수에 익명함수를 할당한다
// var f = function () {
//   console.log("foo")
// }

// f() // 함수 호출


// Hoisting (게양)
// 함수 선언이 호출시점보다 위로 올라간다

// f();

// function f() {
//   console.log("foo")
// }


// f() // f is not a function

// var f = function () {
//   console.log("foo")
// }


/*
  매개변수와 인자 (parameter and argument)
*/


// function add(x, y) { // x,y: 매개변수 (인자를 치환한 변수)
//   console.log(x + y);
// }

// add(1, 2); // 1,2: 인자 (함수에 실제로 전달되는 값)


/*
  return
*/

// function add(x, y) {
//   return x + y; // 함수가 결과를 반환한다
// }

// var r = add(1, 2);

// console.log(r) // 3


/*
  callback
  함수 인자
*/


// function f(callback) {
//   var r = callback();
//   console.log(r)
// }

// function cb() {
//   return "foo"
// }

// f(cb); // foo


// 콜백 예시

// function getTime() {
//   // 현재시간을 리턴한다
//   var time = new Date().toLocaleTimeString();

//   console.log(time);
// }

// // setInterval(callback, ms)
// // ms마다 callback을 실행한다
// // 1000ms = 1s
// setInterval(getTime, 1000)


// Q. 나이를 전달받아서 성인이면 "성인입니다" 성인이 아니면 "성인이 아닙니다"
// 를 출력하는 함수를 만들어보세요


// function isAdult(age) {

//   if (typeof age !== "number") {
//     console.log("인자는 숫자만 가능합니다");
//     return; // 함수의 실행을 중단시킨다
//   }

//   if (age >= 18) {
//     console.log("성인입니다")
//   } else {
//     console.log("성인이 아닙니다")
//   }
// }

// // isAdult(20)

// isAdult(null)


/*
  배열 (Array)
  한개 이상의 값을 가지는 데이터 타입

  1 배열의 아이템에 접근하기
  2 배열의 메서드
  3 배열 순회하기
*/


// var arr = ["foo", "bar", "baz"]
// 문자열 배열

// console.log(arr[0]) // foo
// console.log(arr[1]) // bar
// console.log(arr[2]) // baz

// // 아이템의 갯수
// console.log(arr.length) // 3


// 배열의 값 변경하기

// arr[2] = "BAZ"

// console.log(arr[2]) // BAZ


// 배열에 값 추가하기

// arr[3] = "lol";

// console.log(arr[3]); // lol

// console.log(arr.length) // 4


/*
  배열의 메서드
  배열에 특정한 작업을 수행한다

    Array.push()
    Array.pop()
    Array.concat()
    Array.sort()
*/


// push()

// var arr = ["foo", "bar"];

// // push(newItem1, newItem2, ...)
// // 배열에 새로운 아이템을 가장 마지막에 추가한다
// arr.push("baz");

// console.log(arr); // foo, bar, baz


// pop()

// var arr = ["foo", "bar", "baz"];

// // 가장 마지막의 아이템을 제거한다
// arr.pop();

// console.log(arr) // foo, bar


// concat()

// var arr1 = ["foo", "bar"];
// var arr2 = ["baz", "lol"];

// // Array1.concat(Array2, Array3, ...)
// // Array1에 뒤에 배열을 연결(concatenate)한다
// var r = arr1.concat(arr2);

// console.log(r) // foo, bar, baz, lol


/*
  배열 순회하기

  배열에 특정한 작업을 수행한다
*/


// var arr = ["foo", "bar", "baz"];

// // 배열의 아이템에 특정한 작업을 수행한다
// for (var i=0; i<arr.length; i++) {
//   // i변수가 index로 사용되었다
//   console.log(arr[i].toUpperCase());
// }

// FOO
// BAR
// BAZ


// 필터링 작업
var arr = ["foo", "bar", "baz"];

for (var i=0; i<arr.length; i++) {
  if (arr[i][0] === "b") {
    console.log(arr[i])
  }
}

// bar
// baz