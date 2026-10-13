function calculateBudget() {
  let landArea = Number(document.getElementById("landArea").value);
  let builtArea = Number(document.getElementById("builtArea").value);
  let material = Number(document.getElementById("material").value);
  let floors = Number(document.getElementById("floors").value);
  let labour = Number(document.getElementById("labour").value);
  let facility = Number(document.getElementById("facility").value);
  let budget = Number(document.getElementById("budget").value);

  let constructionCost = builtArea * material * floors;
  let labourCost = constructionCost * (labour - 1);
  let totalCost = constructionCost + labourCost + facility;

  let result = document.getElementById("result");

  if (landArea <= 0 || builtArea <= 0 || budget <= 0) {
    result.innerHTML = "Please enter valid values.";
    return;
  }

  result.innerHTML =
    "Estimated Construction Cost: ₹" + totalCost.toLocaleString("en-IN");

  if (totalCost > budget) {
    result.innerHTML +=
      "<br><span style='color:red'>Warning: Estimated budget exceeds your specified budget!</span>";
  } else {
    result.innerHTML +=
      "<br><span style='color:green'>The estimated cost is within your budget.</span>";
  }
}
