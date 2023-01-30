const controles = {
    "ct1": document.getElementById('controle1'),
    "ct2": document.getElementById('controle2'),
    "ct3": document.getElementById('controle3'),
    "ct3_1": document.getElementById('opc_pomo')
}

const num = { 
    horas: document.getElementById('H_M'),
    minutos: document.getElementById('M_S'),
    segundos: document.getElementById('S_Ms')
}

function esconderControles(nome1, nome2, nome3){
    controles[nome1].style.opacity = '0';
    controles[nome1].style.visibility = 'hidden';
    controles[nome2].style.opacity = '0';
    controles[nome2].style.visibility = 'hidden';
    controles[nome3].style.opacity = '0';
    controles[nome3].style.visibility = 'hidden';
}

function zerarRelogio(){
    clearInterval(relogioI);
    num.horas.innerHTML = '00'
    num.minutos.innerHTML = '00'
    num.segundos.innerHTML = '00'
}

function relogio(){

    esconderControles('ct1', 'ct2', 'ct3')
    
    controles.ct3_1.style.visibility = 'hidden';
    controles.ct3_1.style.opacity = '0';

    document.getElementById('txtR').style.opacity = '1';

    relogioI = setInterval(displayTime, 1000)

}

function cronometro(){

    document.getElementById('txtR').style.opacity = '0';

    esconderControles('ct2', 'ct3', 'ct3_1')

    controles.ct1.style.visibility = 'visible';
    controles.ct1.style.opacity = '1';

    zerarRelogio()

}

function timer(){

    document.getElementById('txtR').style.opacity = '0';

    esconderControles('ct1', 'ct3', 'ct3_1')

    controles.ct2.style.visibility = 'visible';
    controles.ct2.style.opacity = '1';

    zerarRelogio()

}

function pomodoro(){

    document.getElementById('txtR').style.opacity = '0';

    controles.ct1.style.opacity = '0';
    controles.ct1.style.visibility = 'hidden';
    controles.ct2.style.opacity = '0';
    controles.ct2.style.visibility = 'hidden';

    esconderControles('ct1', 'ct2', 'ct2');

    controles.ct3_1.style.visibility = 'visible';
    controles.ct3_1.style.opacity = '1';
    controles.ct3.style.visibility = 'visible';
    controles.ct3.style.opacity = '1';

    zerarRelogio()

}

function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (hours < 10){
        document.getElementById('H_M').innerHTML = '0' + hours;
    }else{
        document.getElementById('H_M').innerHTML = hours
    }

    if(minutes < 10){
        document.getElementById('M_S').innerHTML = '0' + minutes
    }else{
        document.getElementById('M_S').innerHTML = minutes
    }

    if(seconds < 10){
        document.getElementById('S_Ms').innerHTML = '0' + seconds
    }else{
        document.getElementById('S_Ms').innerHTML = seconds

    }
}
  
let relogioI = setInterval(displayTime, 1000);
  

let startTime;
let elapsedTime = 0;
let timerInterval;

function startCron() {
    startTime = new Date();
    timerInterval = setInterval(updateCron, 10);
  }
  function updateCron() {
    let currentTime = new Date();
    elapsedTime = currentTime - startTime;
    displayCron();
  }
  function displayCron() {
    let time = new Date(elapsedTime);
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let milliseconds = time.getMilliseconds();

    if (minutes < 10){
        document.getElementById('H_M').innerHTML = '0' + minutes;
    }else{
        document.getElementById('H_M').innerHTML = minutes
    }

    if(seconds < 10){
        document.getElementById('M_S').innerHTML = '0' + seconds
    }else{
        document.getElementById('M_S').innerHTML = seconds
    }

    if(milliseconds < 10){
        document.getElementById('S_Ms').innerHTML = '00' + milliseconds

    } else if(milliseconds < 100){
        document.getElementById('S_Ms').innerHTML = '0' + milliseconds

    }else{
        document.getElementById('S_Ms').innerHTML = milliseconds

    }
  }

function pauseCron() {
    clearInterval(timerInterval);
}

let vCod = 0;
function volta(){
        if(vCod == 0){
            clearInterval(timerInterval);
            vCod = 1;
        }
        else{
            timerInterval = setInterval(updateCron, 10);
            vCod = 0;
        }
}

function resetCron() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayCron();
}

function startTimer(){
    let Vtimer = {
        horas: document.getElementById('hr').value,
        minutos: document.getElementById('mt').value,
        segundos: document.getElementById('sc').value
    }
    setInterval(() => {
        if(Vtimer.horas == 0 && Vtimer.minutos == 0 && Vtimer.segundos == -1){
            clearInterval()
            alert('O tempo acabou')
        }
        if(Vtimer.segundos == 0 && Vtimer.minutos > 0){
            Vtimer.minutos -= 1;
            Vtimer.segundos = 60;
        }
        if(Vtimer.minutos == 0 && Vtimer.horas > 0){
            Vtimer.minutos = 59
            Vtimer.horas -= 1
            Vtimer.segundos = 60
        }

        Vtimer.segundos -= 1;

        Vtimer.horas < 10 ? num.horas.innerHTML = '0' + Vtimer.horas : num.horas.innerHTML = Vtimer.horas;
        Vtimer.minutos < 10 ? num.minutos.innerHTML = '0' + Vtimer.minutos : num.minutos.innerHTML = Vtimer.minutos;
        Vtimer.segundos < 10 ? num.segundos.innerHTML = '0' + Vtimer.segundos : num.segundos.innerHTML = Vtimer.segundos;
    }, 100);
}