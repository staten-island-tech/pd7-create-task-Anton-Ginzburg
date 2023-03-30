const API_KEY = "a52cb174caac9a77a0c95146";
let pastconversions = [];
function convertCurrency(from, to, amount) {
  fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.conversion_result) {
        const result = `${amount} ${from} = ${data.conversion_result} ${to}`;
        document.getElementById("result").innerHTML = result;
        pastconversions.push({
          amount: amount,
          to: to,
          from: from,
        });
      } else {
        document.getElementById("result").innerHTML =
          "Failed to convert currency";
      }
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("result").innerHTML =
        "Failed to fetch exchange rates";
    });
  console.log(pastconversions[pastconversions.length - 1]);
}

document.getElementById("convert").addEventListener("click", function () {
  convertCurrency(
    document.getElementById("from").value,
    document.getElementById("to").value,
    document.getElementById("amount").value
  );
});
