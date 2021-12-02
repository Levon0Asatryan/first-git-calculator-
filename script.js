const res = document.getElementById("res");
let operation = "";
let num1 = "";
let num2 = "";
let num3 = "";
let bool = false;
document.getElementById("btns").addEventListener("click", function (event) {
  let actions_type = event.target.innerText;
  switch (actions_type) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      {
        res.innerHTML += actions_type;
      }
      break;
    case "C":
      {
        res.innerHTML = "";
        operation = "";
        num1 = "";
        num2 = "";
        num3 = "";
        bool = false;
      }
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      {
        if (!num1 || bool) {
          operation = actions_type;
          num1 = res.innerText;
          res.innerHTML += actions_type;
        } else {
          num1 =
            "" +
            setResult(
              num1,
              res.innerText.slice(
                res.innerText.indexOf(actions_type),
                res.innerText.length
              ),
              operation
            );
          res.innerHTML += actions_type;
          operation = actions_type;
        }
      }
      break;
    case "=":
      {
        if (operation) {
          num2 = res.innerText.slice(res.innerText.indexOf(actions_type));
          console.log(num1);
          console.log(num2);
          console.log(operation);
          res.innerText = setResult(num1, num2, operation);
          num1 = setResult(num1, num2, operation);
          bool = true;
        }
      }
      break;
    case ".":
      {
        res.innerHTML += actions_type;
      }
      break;
    /*case "DEL":
      {
        res.innerHTML = res.innerHTML.substring(0, res.innerHTML.length - 1);
      }
      break;*/
  }
});

function setResult(num1, num2, operation) {
  num1 = parseFloat(num1, 10);
  num2 = parseFloat(num2, 10);
  switch (operation) {
    case "+":
      {
        return num1 + num2;
      }
      break;
    case "-":
      {
        return num1 - num2;
      }
      break;
    case "*":
      {
        return num1 * num2;
      }
      break;
    case "/":
      {
        return num1 / num2;
      }
      break;
  }
}
