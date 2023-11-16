window.$ = window.jQuery = require('jquery');
const { error } = require('jquery');
const {monteCarloSimulation} = require('./class/DrunkWalk.js')
const {Chart} = require('chart.js/auto');

document.addEventListener('DOMContentLoaded',()=>{
    let btnSimular = document.getElementById('btnSimular');
    let tableResultados = document.getElementById('tablaResultados');
    let spanPromedio = document.getElementById('span-promedio');
    let inputM = document.getElementById('input-m');
    let inputN = document.getElementById('input-n');

    let grafica

    const crearGrafica = (datos)=>{
        if(grafica ){
            grafica.destroy();
        }
        grafica = new Chart(document.getElementById("grafica"),{
            type: 'line',
            data: {
                labels: datos.map((i)=>{
                    return i.x.toFixed(2);
                }),
                datasets: [{
                    label:'Tambaleo del borracho',
                    data: datos.map((i)=>{
                        return i.y.toFixed(2);
                    }),
                    fill:false
                }]
                
            }
        })

        
    }

    btnSimular.addEventListener('click',()=>{
        try {
            let m = inputM.value;
            let n = inputN.value;
            if (m < 1 | n < 1){
                throw new Error("Error en los valores")
            }
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
                <td>${row.x.toFixed(4)}</td>
                <td>${row.y.toFixed(4)}</td>
                <td>${row.distancia.toFixed(4)}</td>
                `
                tbody.appendChild(tr);
            }
            tableResultados.innerHTML = tbody.innerHTML;
            spanPromedio.textContent = promedio;
            crearGrafica(datos);
        } catch (error) {
            new Notification(error);
        }
    })

    inputM.addEventListener('change',()=>{
        if (inputM.value < 1 ){
            inputM.value = 1;
        }
    })

    inputN.addEventListener('change',()=>{
        if(inputN.value < 1){
            inputN.value = 1
        }
    })
})