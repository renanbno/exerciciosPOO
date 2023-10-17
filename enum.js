"use strict";
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["segunda"] = "segunda-feira";
    DiasDaSemana["ter\u00E7a"] = "ter\u00E7a-feira";
    DiasDaSemana["quarta"] = "quarta-feira";
    DiasDaSemana["quinta"] = "quinta-feira";
    DiasDaSemana["sexta"] = "sexta-feira";
    DiasDaSemana["sabado"] = "s\u00E1bado";
    DiasDaSemana["domingo"] = "domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
let diaHoje = DiasDaSemana.sexta;
//console.log("Hoje é " + DiasDaSemana[diaHoje]);
console.log("Hoje é " + diaHoje);
