// const ver = navigator.userAgent;
// console.log(ver);

// const isIE = /trident/i.test(ver);
// console.log(isIE);

// if(isIE){
//   alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.")
// }

const modelViewer = document.querySelectorAll("model-viewer")[1]; //모든 모델뷰어를 부른 다음에 2번 뷰어로 설정
    
window.switchSrc = (element, name) => {
  const base = "glb/" + name;
  modelViewer.src = base + '.glb';
  modelViewer.poster = base + '.webp';
  const slides = document.querySelectorAll(".slide");
  slides.forEach((e) => {e.classList.remove("selected");});
  element.classList.add("selected");
};
