// Definir una función que genera un número aleatorio entre -1 y 1
function randomStep() {
    return Math.random() * 2 - 1;
  }
  
  // Definir una función que simula el movimiento del borracho durante n pasos
  function drunkWalk(n) {
    // Inicializar la posición del borracho en el origen
    let x = 0;
    let y = 0;
    // Crear un arreglo para guardar las coordenadas del borracho
    let coordinates = [[x, y]];
    // Iterar n veces
    for (let i = 0; i < n; i++) {
      // Generar un paso aleatorio en el eje x y el eje y
      let dx = randomStep();
      let dy = randomStep();
      // Actualizar la posición del borracho
      x += dx;
      y += dy;
      // Agregar la nueva coordenada al arreglo
      coordinates.push([x, y]);
    }
    // Devolver el arreglo de coordenadas
    return coordinates;
  }
  
  // Definir una función que calcula la distancia euclidiana entre dos puntos
  function distance(p1, p2) {
    // Extraer las coordenadas de los puntos
    let [x1, y1] = p1;
    let [x2, y2] = p2;
    // Aplicar la fórmula de la distancia euclidiana
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
  
  // Definir una función que realiza la simulación del tambaleo del borracho m veces y devuelve una tabla en forma de objeto
  function monteCarloSimulation(m, n) {
    // Inicializar la suma de las distancias
    let sum = 0;
    // Crear un objeto para guardar la tabla
    let table = {promedio: 0, datos: []};
    // Iterar m veces
    for (let i = 0; i < m; i++) {
      // Realizar el movimiento del borracho durante n pasos
      let coordinates = drunkWalk(n);
      // Obtener la última coordenada del borracho
      let last = coordinates[coordinates.length - 1];
      // Calcular la distancia al origen
      let d = distance([0, 0], last);
      // Sumar la distancia a la suma total
      sum += d;
      // Crear un objeto con los datos del paso
      let row = {paso: i + 1, x: last[0], y: last[1], distancia: d};
      // Agregar el objeto al arreglo de datos de la tabla
      table.datos.push(row);
    }
    // Calcular la distancia promedio al origen
    let average = sum / m;
    // Asignar el promedio al objeto de la tabla
    table.promedio = average;
    // Devolver el objeto de la tabla
    return table;
  }
  

  module.exports = {monteCarloSimulation};