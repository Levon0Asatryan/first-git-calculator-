const res = document.getElementById("res");
let num = "";
let numsAndOperations = [];
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
        num += actions_type;
        res.innerHTML += actions_type;
      }
      break;
    case "C":
      {
        res.innerHTML = "";
        num = "";
        numsAndOperations = [];
      }
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      {
        numsAndOperations.push(num);
        num = "";
        numsAndOperations.push(actions_type);
        res.innerHTML += actions_type;
      }
      break;
    case "=":
      {
        numsAndOperations.push(num);
        console.log(numsAndOperations);
      }
      break;
    case ".":
      {
        num += ".";
        res.innerHTML += actions_type;
      }
      break;
    /*case "DEL":
      {
        res.innerHTML = res.innerHTML.substring(0, res.innerHTML.length - 1);
        if (numsAndOperations[numsAndOperations.length - 1] === num) {
          num = num.substring(0, num.length - 1);
        }
        if (numsAndOperations[numsAndOperations.length - 1].length === 1) {
          numsAndOperations.pop();
        } else {
          numsAndOperations = numsAndOperations.substring(
            0,
            numsAndOperations.length - 1
          );
        }
      }
      break;*/
  }
});

/*function setResult(num1, num2, operation) {
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
}*/
