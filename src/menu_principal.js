window.$ = window.jQuery = require('jquery');
const {monteCarloSimulation} = require('./class/DrunkWalk.js')

document.addEventListener('DOMContentLoaded',()=>{
    btnSimular = document.getElementById('btnSimular');
    tableResultados = document.getElementById('tableResultados');
    spanPromedio = document.getElementById('span-promedio');
    inputM = document.getElementById('input-m');
    inputN = document.getElementById('input-n');

    btnSimular.addEventListener('click',()=>{
        try {
            let m = inputM.value;
            let n = inputN.value;
            let result = monteCarloSimulation(m,n);
            if (result === null) throw new Error("Error en los valores");
            let promedio = result.promedio
            let datos = result.datos
            let tbody = document.createElement('tbody')
            for (const row of datos) {
                let tr = document.createElement('tr');
                tr.innerHTML = 
                `
                <td>${row.paso}</td>
                <td>${row.x}</td>
                <td>${row.y}</td>
                <td>${row.distancia}</td>
                `
                tbody.appendChild(tr);
            }
            tableResultados.innerHTML = tbody.innerHTML;
            spanPromedio.textContent = promedio

        } catch (error) {
            new Notification(error);
        }
    })
})