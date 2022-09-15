//up&down 게임 만들기

//값을 입력하고 보여주는 창 만들기v
//업인지 다운인지 구분하기v
//리셋버튼 v
//찬스 5번 v
//찬스 영역 설정 - game over면 go키 막아서 찬스도 블락 v
//같은 값이면 다시하라고 하기 v
//1부터 100사이 숫자로 v

//input값을 가져오기

let setNumber = document.getElementById("set-number");
let goButton = document.getElementById("go-button");
let resultText = document.getElementById("result");
let resetButton = document.getElementById("reset-button");
let chanceText = document.getElementById("chance");
let gameOver = false;

let randomID = 0;
let chance = 5;
let resultArr = [];

//goButton을 누르면 어떤(resultContent)클릭 이벤트를 준다.
goButton.addEventListener("click", resultContent);
resetButton.addEventListener("click", resetAll);

//resultContent는 setNumber의 값을 구분해서
//랜덤으로 만들어진 숫자보다 적으면 up
//랜덤으로 만들어진 숫자보다 많으면 down
//랜덤으로 만들어진 숫자와 같으면 correct를
//resultText에 나타낸다.
function resultContent() {
  let inputValue = setNumber.value;
  //up,down이 나오면 카운터 하나씩 차감
  //차감된 값을 저장할 변수필요
  //goButton을 누르면
  //찬스가 1씩 감소
  if (inputValue > 0 && inputValue <= 100) {
    if (resultArr.includes(inputValue) == true) {
      resultText.textContent = "같은 값입니다! 다시 선택하세요";
      return;
    }

    chance--;
    chanceText.textContent = `chance : ${chance}`;

    if (inputValue < randomID) {
      resultText.textContent = "up";
    } else if (inputValue > randomID) {
      resultText.textContent = "down";
    } else {
      resultText.textContent = "correct";
      // gameOver = true;
      goButton.disabled = true;
    }
    if (chance == 0) {
      let resetButton = document.getElementById("reset-button");
      goButton.disabled = true;
      resultText.textContent = "게임이 끝났습니다. 한잔 마셔요!"
    }

    // array에 값을 넣고싶다ㅠㅠ
    resultArr.push(inputValue);
    console.log(resultArr);
    //됐다..!!!

    //resultArr에 있는 값이 중복되면 찬스 차감 안되게하기
    //같은 값을 포함한다..?!
  } else {
    resultText.textContent = "1부터 100사이 숫자를 넣으시오!";
  }
}

function randomNumber() {
  randomID = Math.floor(Math.random() * 100) + 1;
  console.log("숫자는", randomID);
}

randomNumber();

function resetAll() {
  //변수 하나를 false로 저장,
  //리셋 버튼을 누르면 true값으로 바뀌게 함

  //결과값
  resultText.textContent = "결과값이 나옵니다.";

  //찬스 리셋
  //reset버튼을 누르면 chance.textContent가 초기화 v
  //chance 값도 리셋
  chance = 5;
  chanceText.textContent = "chance : 5";

  //랜덤값 리셋
  randomNumber();

  //go버튼 언락
  let resetButton = document.getElementById("reset-button");
  goButton.disabled = false;

  //셋넘버 인풋 리셋
  document.getElementById("set-number").value = ' ';

  //arr리셋
  resultArr = [];

}

// function gameSet(){
//   //gameOver가 되는 조건
//   //1. 찬스를 다 씀
//   //2. 답을 맞춤
//   if(chance < 1){
//     gameOver = true;
//   }
// }
//1 숫자 맞추면 게임오버
//2 chance 리셋 v
//  reset버튼을 누르면 chance.textContent가 초기화 v
//3 같은값 구분을 위해 arr에 값 넣기 (inputValue다시 들여다보기)
