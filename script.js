const controles = {
    "ct1": document.getElementById('controle1'),
    "ct2": document.getElementById('controle2'),
    "ct3": document.getElementById('controle3'),
    "ct3_1": document.getElementById('opc_pomo')
}

const num = { 
    horas: document.getElementById('H_M'),
    minutos: document.getElementById('M_S'),
    segundos: document.getElementById('S_Ms'),
    title: document.getElementById('titleT')
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
    clearInterval(timerInterval);
    clearInterval(fimTimer);
    document.getElementById('SumirHora').style.display = 'flex';
    document.getElementById('fPoint').style.display= 'block';
    num.horas.innerHTML = '00'
    num.minutos.innerHTML = '00'
    num.segundos.innerHTML = '00'
    num.title.innerHTML = 'Tempu'
}

function relogio(){

    zerarRelogio()

    esconderControles('ct1', 'ct2', 'ct3')
    
    controles.ct3_1.style.visibility = 'hidden';
    controles.ct3_1.style.opacity = '0';

    document.getElementById('txtR').style.opacity = '1';

    document.getElementById('SumirHora').style.display = 'flex';
    document.getElementById('fPoint').style.display= 'block';

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

    document.getElementById('SumirHora').style.display = 'none';
    document.getElementById('fPoint').style.display= 'none';

}

function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours < 10 ? hours = '0' + hours : hours = hours
    minutes < 10 ? minutes = '0' + minutes : minutes = minutes
    seconds < 10 ? seconds = '0' + seconds : seconds = seconds

    num.horas.innerHTML = hours
    num.minutos.innerHTML = minutes
    num.segundos.innerHTML = seconds


    num.title.innerHTML = hours + ":" + minutes + ":" + seconds + " - TEMPU"
}
  
let relogioI = setInterval(displayTime, 1000);
  

let startTime;
let elapsedTime = 0;
let timerInterval;

function startCron() {
    startTime = new Date();
    document.getElementById('startCron').disabled = true;
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
    document.getElementById('startCron').disabled = false;
}

var fimTimer;
function startTimer(){
    let Vtimer = {
        horas: document.getElementById('hr').value,
        minutos: document.getElementById('mt').value,
        segundos: document.getElementById('sc').value
    }
    document.getElementById('startTimer').disabled = true;
    fimTimer = setInterval(function() {
        if(Vtimer.segundos == 0 && Vtimer.minutos > 0){
            Vtimer.minutos -= 1;
            Vtimer.segundos = 60;
        }
        if(Vtimer.minutos == 0 && Vtimer.horas > 0){
            Vtimer.minutos = 59
            Vtimer.horas -= 1
            Vtimer.segundos = 60
        }
        if(Vtimer.horas == 0 && Vtimer.minutos == 0 && Vtimer.segundos == 0){
            stopTimer()
        } else {
            Vtimer.segundos -= 1;

            Vtimer.horas < 10 ? num.horas.innerHTML = '0' + Vtimer.horas : num.horas.innerHTML = Vtimer.horas;
            Vtimer.minutos < 10 ? num.minutos.innerHTML = '0' + Vtimer.minutos : num.minutos.innerHTML = Vtimer.minutos;
            Vtimer.segundos < 10 ? num.segundos.innerHTML = '0' + Vtimer.segundos : num.segundos.innerHTML = Vtimer.segundos;
        }

        
    }, 1000);
}

function stopTimer(){
    clearInterval(fimTimer)
    num.horas.innerHTML = '00';
    num.minutos.innerHTML = '00';
    num.segundos.innerHTML = '00';
    document.getElementById('startTimer').disabled = false;
    alert('Timer Finalizado')
}

function pomoTimer(){

}