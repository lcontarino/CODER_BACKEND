let diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

Array.prototype.convertirMayusculas = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
}

diasSemana.convertirMayusculas();

console.table(diasSemana);