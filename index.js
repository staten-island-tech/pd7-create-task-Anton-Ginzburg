const API_KEY = "a52cb174caac9a77a0c95146";

const convertCurrency = () => {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`)
    .then(response => response.json())
    .then(data => {
      if (data.conversion_result) {
        const result = `${amount} ${from} = ${data.conversion_result} ${to}`;
        document.getElementById("result").innerHTML = result;
      } else {
        document.getElementById("result").innerHTML = "Failed to convert currency";
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("result").innerHTML = "Failed to fetch exchange rates";
    });
};

document.getElementById("convert").addEventListener("click", convertCurrency);
