window.addEventListener("load", () => {
  // 스크롤 될때
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  const navMb =document.querySelector(".nav-mb")
  let scy = 0;
  // 스크롤바의 픽셀 위치값을 파악해서

  // 스크롤 된 값을 잡아놓는다.
  scy = window.document.documentElement.scrollTop;
  // 2. class 적용 여부를 결정

  //      if(scy > 0){
  //         header.classList.add("active")
  //      }
  //

  // 스크롤 했을때 호버가 바뀌어요 , 
  window.addEventListener("scroll", () => {
    scy = window.document.documentElement.scrollTop;
    if (scy > 0) {
      mbt.classList.add("active");
      header.classList.add("active");
    } else {
      header.classList.remove("active");
      mbt.classList.remove("active");
    }
  });
  // 모바일 메뉴 클릭시 
  const htmlRoot= document.querySelector("html");
  mbt.addEventListener("click", () => {
    
    //console.log(this); /*this 는 window 전체다.*/ 
    // contain() 현재 ani클래스가 있는지 없는지를 파악
    const state = mbt.classList.contains("ani");
    console.log(state); 

    if(state){
      navMb.classList.remove("active");
      mbt.classList.remove("ani");
      header.classList.remove("active");
      // 윈도우에 스크롤바가 나타난다.
      htmlRoot.classList.remove("active")
      header.classList.remove("active")
    }else{
      mbt.classList.add("ani")
      navMb.classList.add("active");
      header.classList.add("active")
      mbt.classList.add("active")
    }
    

  });
 //반응형 처리
 // 모바일 버튼 모양 초기화
 // 모바일 메뉴 초기화 
 let winW = window.innerWidht;
 // console.log(innerWidth);
 window.addEventListener("resize" , ()=>{
  let winW = window.innerWidth;
  // mobile ===> pc전환할때 
  if(winW > 1024){
    mbt.classList.remove("ani")
    navMb.classList.add("active")
    htmlRoot.classList.remove("active")
    if(scy > 0){
      // 스크롤이 된 상태에서 화면 리사이징...
      header.classList.add("active")
      mbt.classList.add("active")

    }else{
      header.classList.remove("active")
    }
  }
 })
 
});




