const fakeDiv = document.querySelector(".third");
const fakeTitle = document.querySelector(".third_title");
const fakeBody = document.querySelector(".third_body");
const btn = document.querySelector("#btn")

const p1 = document.createElement('p1');

btn.addEventListener("click", () => {

    if (fakeDiv.style.backgroundColor==='orange'){
        fakeDiv.style.backgroundColor='white';
    }else{
        fakeDiv.style.backgroundColor='orange';

    }
    document.querySelector(".third_title").textContent="[심층보도]슬기요미 사실 안귀여워";
    p1.textContent="수정완료";
    console.log(p1);
    const parent=document.querySelector("#parent");
    console.log(parent)
    fakeDiv.appendChild(p1);




});
