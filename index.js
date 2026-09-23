function percentagecalculate() {
  obtmarks = document.getElementById("obt1").value;
  totmarks = document.getElementById("tot1").value;
  res = (obtmarks / totmarks) * 100;

  document.getElementById("results").innerText =
    "You have Obtained " + res + "%";
}
