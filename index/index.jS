  const visualiserTop = document.getElementsByClassName('top');
  const visualiserMid = document.getElementsByClassName('mid');
  const visualiserBottom = document.getElementsByClassName('bottom');
  let etapeTop= 0;
  let etapeMid= 0;
  let etapeBottom= 0;
  console.log(visualiserTop)
  
  function SlideTop() {
    visualiserTop[etapeTop].classList.remove('active')
    etapeTop++;
  
    if(etapeTop >= 9){
      etapeTop = 0;
    }
    visualiserTop[etapeTop].classList.add('active')
  }

  function SlideMid() {
    visualiserMid[etapeMid].classList.remove('active')
    etapeMid++;
  
    if(etapeMid >= document.querySelectorAll(".mid").length){
      etapeMid = 0;
    }
    visualiserMid[etapeMid].classList.add('active')
  }

  function SlideBottom() {
    visualiserBottom[etapeBottom].classList.remove('active')
    etapeBottom++;console.log(etapeMid);
  
    if(etapeBottom >= document.querySelectorAll(".bottom").length){
      etapeBottom = 0;
    }
    visualiserBottom[etapeBottom].classList.add('active')
  }