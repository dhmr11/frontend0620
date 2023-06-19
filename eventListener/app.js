// btn 클릭시에 : click
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    window.alert("버튼을 누르셨나요?");
});



// 스크롤 내릴 때 : scroll
window.addEventListener("scroll", isScroll);
function isScroll(){
    console.log("스크롤 중");
}



// window창 사이즈 크기에 따라서 : resize
const body = document.querySelector('body');
window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'gray';
    }
});



// 덧셈 계산기 : input, change
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultSpan = document.getElementById('result');

function calculate() {
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = '';
    }
}

num1Input.addEventListener('input', calculate);
num2Input.addEventListener('change', calculate);