gsap.registerPlugin(ScrollTrigger);


//숫자 카운트다운
var startCount = {var: 0};

gsap.to(startCount, {
    var:1000, duration: 3, ease:"none",
    onUpdate:changeNumber,
    scrollTrigger:{
        trigger:"#number",
        toggleActions:"restart none reverse none",
    },
})

var Number = document.querySelector('#number');

function changeNumber(){
    Number.innerHTML = (startCount.var).toFixed();
}