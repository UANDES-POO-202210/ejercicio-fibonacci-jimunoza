//Función de fibonacci con recursión
function fibonacci(number) {
  if (number < 2) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

const fs = require("fs");

//Asumo que el archivo será txt y tendrá sólo el número a calcular
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  if (data < 0) {
      console.log("El número debe ser positivo");
  }
  else {
    console.log("F(" + data + ") = " + fibonacci(data));
  }
});
