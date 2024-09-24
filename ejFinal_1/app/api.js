const express = require("express");
const app = express();

//
const readLine = require("readline");
const f = require("fs");
const { text } = require("body-parser");
var array = [];
var file = "./alumnos.txt";
var rl = readLine.createInterface({
  input: f.createReadStream(file),
  output: process.stdout,
  terminal: false,
});
rl.on("line", function (text) {
  console.log(text);
  array = JSON.parse(text.replaceAll("'", '"'));
  console.log(array);
});

app.get("/api/estadisticas", (req, res) => {
  var notas = 0;
  for (let i = 0; i < array.length; i++) {
    notas += array[i].Promedio;
  }
  res.send(
    "La nota media de todas las carreras es: " +
      (notas / array.length).toFixed(2)
  );
});

app.get("/api/estadisticas/:carrera", (req, res) => {
  if (req.params.carrera) {
    var bool = false;
    var notas = 0;
    var cont = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].Carrera == req.params.carrera) {
        console.log("Existe");
        bool = true;
        cont++;
        notas += array[i].Promedio;
      }
    }
    if (!bool) {
      console.log("No Existe");
      res.send("No Existe");
    } else {
      res.send("La nota media es: " + (notas / cont).toFixed(2));
    }
  } else {
    res.send(`Introduzca todos los valores`);
  }
});

app.get("/api/carrera/:carrera", (req, res) => {
  if (req.params.carrera) {
    var bool = false;
    var alumnos = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].Carrera == req.params.carrera) {
        console.log("Existe");
        bool = true;
        alumnos.push(
          " " +
            array[i].Nombre +
            " " +
            Object.values(array[i])[4] +
            " " +
            Object.values(array[i])[5]
        );
      }
    }
    if (!bool) {
      console.log("No Existe");
      res.send("No Existe");
    } else {
      res.send("La alumnos son: " + alumnos);
    }
  } else {
    res.send(`Introduzca todos los valores`);
  }
});

app.get("/api/pagados", (req, res) => {
  var bool = false;
  var alumnos = [];
  for (let i = 0; i < array.length; i++) {
    if (Object.values(array[i])[1] == true) {
      console.log("Existe");
      bool = true;
      alumnos.push(
        " " +
          array[i].Nombre +
          " " +
          Object.values(array[i])[4] +
          " " +
          Object.values(array[i])[5]
      );
    }
  }
  if (!bool) {
    console.log("No Existe");
    res.send("No Existe");
  } else {
    res.send("La alumnos son: " + alumnos);
  }
});

app.get("/api/nopagados", (req, res) => {
  var bool = false;
  var alumnos = [];
  for (let i = 0; i < array.length; i++) {
    if (Object.values(array[i])[1] == false) {
      console.log("Existe");
      bool = true;
      alumnos.push(
        " " +
          array[i].Nombre +
          " " +
          Object.values(array[i])[4] +
          " " +
          Object.values(array[i])[5]
      );
    }
  }
  if (!bool) {
    console.log("No Existe");
    res.send("No Existe");
  } else {
    res.send("La alumnos son: " + alumnos);
  }
});

app.get("/api/:cuenta", (req, res) => {
  var bool = false;
  var alumnos = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].Cuenta == parseInt(req.params.cuenta)) {
      console.log("Existe");
      bool = true;
      res.send(array[i]);
    }
  }
  if (!bool) {
    console.log("No Existe");
    res.send("No Existe");
  } else {
    res.send("La alumnos son: " + alumnos);
  }
});

app.put("/api/:cuenta", (req, res) => {
  var bool = false;
  var alumnos = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].Cuenta == req.params.cuenta) {
      console.log("Existe");
      bool = true;
      res.send("La alumnos son: " + array[i]);
    }
  }
  if (!bool) {
    console.log("No Existe");
    res.send("No Existe");
  } else {
    res.send("La alumnos son: " + alumnos);
  }
});

app.post("/api/:cuenta", (req, res) => {
  var bool = false;
  var alumnos = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].Cuenta == req.params.cuenta) {
      console.log("Existe");
      bool = true;
      res.send("La alumnos son: " + array[i]);
    }
  }
  if (!bool) {
    console.log("No Existe");
    res.send("No Existe");
  } else {
    res.send("La alumnos son: " + alumnos);
  }
});

app.delete("/api/:cuenta", (req, res) => {
  var bool = false;
  var alumnos = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].Cuenta == req.params.cuenta) {
      console.log("Existe");
      bool = true;
      res.send("La alumnos son: " + array[i]);
    }
  }
  if (!bool) {
    console.log("No Existe");
    res.send("No Existe");
  } else {
    res.send("La alumnos son: " + alumnos);
  }
});

app.listen(3001, () => {
  console.log("App escuchando en puerto 3000!");
});
