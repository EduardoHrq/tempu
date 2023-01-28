const controles = {
    "ct1": document.getElementById('controle1'),
    "ct2": document.getElementById('controle2'),
    "ct3": document.getElementById('controle3'),
    "ct3_1": document.getElementById('opc_pomo')
}

// var radios = document.getElementsByName('tipo');
//   for(radio in radios) {
//     radios[radio].onclick = function() {
//         switch(this.value){
//             case '1':
//                 (controles.ct1, controles.ct2, controles.ct3, controles.ct3_1).style.opacity = "0";
//                 (controles.ct1, controles.ct2, controles.ct3, controles.ct3_1).style.visibility = "hidden";
//                 document.getElementById('txtR').style.opacity = '1';
//                 break
//             case '2':
//                 document.getElementById('cnt1').style.opacity = '0';
//                 document.getElementById('cnt1').style.visibility = 'hidden';
//                 document.getElementById('cnt2').style.opacity = '1';
//                 document.getElementById('cnt2').style.visibility = 'visible';
//                 break
//             case '3':
//                 controles.ct3_1.style.visibility = "hidden";
//                 controles.ct3_1.style.opacity = "0";
//                 document.getElementById('txtR').style.opacity = "0";
//                 (controles.ct2, controles.ct3).style.opacity = "0";
//                 (controles.ct2, controles.ct3).style.visibility = "hidden";
//                 controles.ct1.style.visibility = 'visible';
//                 controles.ct1.style.opacity = '1';
//                 break
//             case '4':
//                 controles.ct3_1.style.visibility = "hidden";
//                 controles.ct3_1.style.opacity = "0";
//                 document.getElementById('txtR').style.opacity = "0";
//                 (controles.ct1, controles.ct3).style.opacity = "0";
//                 (controles.ct1, controles.ct3).style.visibility = "hidden";
//                 controles.ct2.style.visibility = "visible";
//                 controles.ct2.style.opacity = "1";
//                 break
//             case '5':
//                 document.getElementById('txtR').style.opacity = "0";
//                 (controles.ct1, controles.ct2).style.opacity = "0";
//                 (controles.ct1, controles.ct2).style.visibility = "hidden";
//                 controles.ct3.style.visibility = "visible";
//                 controles.ct3.style.opacity = "1";
//                 controles.ct3_1.style.visibility = "visible";
//                 controles.ct3_1.style.opacity = "1";
//                 break
//         }
//     }
// }

function relogio(){

    controles.ct1.style.opacity = '0';
    controles.ct1.style.visibility = 'hidden';
    controles.ct2.style.opacity = '0';
    controles.ct2.style.visibility = 'hidden';
    controles.ct3.style.opacity = '0';
    controles.ct3.style.visibility = 'hidden';
    controles.ct3_1.style.visibility = 'hidden';
    controles.ct3_1.style.opacity = '0';

    document.getElementById('txtR').style.opacity = '1';

}

function cronometro(){

    document.getElementById('txtR').style.opacity = '0';

    controles.ct2.style.opacity = '0';
    controles.ct2.style.visibility = 'hidden';
    controles.ct3.style.opacity = '0';
    controles.ct3.style.visibility = 'hidden';
    controles.ct3_1.style.visibility = 'hidden';
    controles.ct3_1.style.opacity = '0';

    controles.ct1.style.visibility = 'visible';
    controles.ct1.style.opacity = '1';

}

function timer(){

    document.getElementById('txtR').style.opacity = '0';

    controles.ct1.style.opacity = '0';
    controles.ct1.style.visibility = 'hidden';
    controles.ct3.style.opacity = '0';
    controles.ct3.style.visibility = 'hidden';
    controles.ct3_1.style.visibility = 'hidden';
    controles.ct3_1.style.opacity = '0';

    controles.ct2.style.visibility = 'visible';
    controles.ct2.style.opacity = '1';


}

function pomodoro(){

    document.getElementById('txtR').style.opacity = '0';

    controles.ct1.style.opacity = '0';
    controles.ct1.style.visibility = 'hidden';
    controles.ct2.style.opacity = '0';
    controles.ct2.style.visibility = 'hidden';

    controles.ct3_1.style.visibility = 'visible';
    controles.ct3_1.style.opacity = '1';
    controles.ct3.style.visibility = 'visible';
    controles.ct3.style.opacity = '1';

}