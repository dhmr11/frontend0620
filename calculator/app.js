const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const clearAllEl=document.querySelector('.all-clear');
const clearLastEl=document.querySelector('.last-entity-clear');
const equalEl=document.querySelector('.equal');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation= '';
let haveDot = false;

numbersEl.forEach( number => {
    number.addEventListener('click',(e)=>{
        if ( e.target.innerText === '.' && !haveDot){//만약 . 버튼을 눌렀을 때 이전에 .가 없을 때
            haveDot= true;            
        }
        else if(e.target.innerText === '.' && haveDot){//만약 .버튼이 이전에도 있었는데 또 입력되면 이후 더 나아가지않음
            return;
        }
        dis2Num += e.target.innerText;//버튼을 누른뒤 이전에 갖고있는값과 연결됨
        display2El.innerText = dis2Num;// 스크린에 보이게 한느것임

    })  


});

operationEl.forEach( operation =>{
    operation.addEventListener('click', (e)=>{
        if (!dis2Num) result;//최종결과값자리에 값이 들어왔는지
        haveDot= false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();

        }else{
            result =parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;

    })
});
function clearVar(name =''){
    dis1Num += dis2Num+ ' '+ name + ' '; //결과값 화면의 누적될 값을 위의 회색 위치로 보내는것
    display1El.innerText = dis1Num;
    display2El.innerText=''; //최종 결과값 화면은 비운다
    dis2Num='';//실제 값도 비움
    tempResultEl.innerText= result;//왼쪽의 임시값에 표시하기
}

function mathOperation(){
    if(lastOperation === '*'){
        result = parseFloat(result) * parseFloat(dis2Num);//비워진 dis2num에 새로운값이 들어오면 이전 결과값에 곱해줌
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);//비워진 dis2num에 새로운값이 들어오면 이전 결과값에 곱해줌
    }
    else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);//비워진 dis2num에 새로운값이 들어오면 이전 결과값에 곱해줌
    }
    else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);//비워진 dis2num에 새로운값이 들어오면 이전 결과값에 곱해줌
    }

}

equalEl.addEventListener('click', (e)=>{
    if( !dis2Num || !dis2Num) return;
    haveDot= false;
    mathOperation();
    clearVar();
    display2El.innerText = result;// 최종적인 값 표시
    tempResultEl.innerText='';
    dis2Num = result;
    dis1Num = '';    
});
clearAllEl.addEventListener('click',(e) =>{
    display1El.innerText='0';
    display2El.innerText='0';
    dis1Num = '';
    dis2Num = '';
    result  = '';
    tempResultEl.innerText ='0';

});
clearLastEl.addEventListener('click',(e)=>{
    display2El.innerText='';
    dis2Num = '';
})