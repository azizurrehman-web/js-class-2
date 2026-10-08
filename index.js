function percentagecalculate() {
  obtmarks = document.getElementById("obt1").value;
  totmarks = document.getElementById("tot1").value;
  res = (obtmarks / totmarks) * 100;

  document.getElementById("results").innerHTML =
    "You have Obtained " + res.toFixed(2) + "% Marks.";
}
