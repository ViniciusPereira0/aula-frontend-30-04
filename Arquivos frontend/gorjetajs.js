function calc(){

  let v = document.getElementById("valor").value;
  let p = document.getElementById("pessoas").value;

  let gorjeta = 0 * 1;
  let total = Number(v) + gorjeta;
  let porPessoa = total / p;

  document.getElementById("res").innerHTML = 
    "Gorjeta: R$ " + gorjeta.toFixed(2) + 
    "<br>Total: R$ " + total.toFixed(2) + 
    "<br>Valor por pessoa: R$ " + porPessoa.toFixed(2);

}
