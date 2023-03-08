
var current = 0; //이미지 위치 인덱스 할 변수

showSlides();

function showSlides(){
  var slides= document.querySelectorAll('#slides > img');
  for(let i =0;i<slides.length;i++){
    slides[i].style.display="none";//모든 이미지 감춤

  }
  current++;
  if(current > slides.length) //마지막 이라면
    current =1; //1번이미지로 이동
  slides[current-1].style.display = "block"; //현재 위치 이미지 표시
  setTimeout(showSlides, 2000); //2초마다 showSlides()함수실행
}


