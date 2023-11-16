window.$ = window.jQuery = require('jquery');
const {monteCarloSimulation} = require('./class/DrunkWalk')

document.addEventListener('DOMContentLoaded',()=>{
    btnSimular = document.getElementById('btnSimular');
    tableResultados = document.getElementById('tableResultados');
    inputM = document.getElementById('input-m');
    inputN = document.getElementById('input-n');

    btnSimular.addEventListener('click',()=>{
        try {
            let m = inputM.value;
            let n = inputN.value;
            let result = monteCarloSimulation(m,n);
            if (result === null) throw new Error("Error en los valores");

            
        } catch (error) {
            new Notification(error);
        }
    })
})