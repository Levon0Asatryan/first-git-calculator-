const res = document.getElementById("value");
const container = document.getElementById("container");
const img = document.getElementById("photo");
let canType = true;
let isOperationActive = false;
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
        if (canType) {
          num += actions_type;
          res.innerHTML += actions_type;
          isOperationActive = true;
        }
      }
      break;
    case "C":
      {
        res.innerHTML = "";
        num = "";
        numsAndOperations = [];
        canType = true;
        isOperationActive = true;
      }
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      {
        if (isOperationActive && canType) {
          if (num !== "") numsAndOperations.push(num);
          num = "";
          numsAndOperations.push(actions_type);
          res.innerHTML += actions_type;
          isOperationActive = false;
        }
      }
      break;
    case "=":
      {
        numsAndOperations.push(num);
        res.innerHTML = getresalt(numsAndOperations);
        numsAndOperations = [];
        num = res.innerHTML;
      }
      break;
    case ".":
      {
        res.innerHTML += actions_type;
        num += actions_type;
      }
      break;
    case "DEL":
      {
        if (numsAndOperations.join("") === res.innerHTML) {
          if (numsAndOperations[numsAndOperations.length - 1].length === 1) {
            numsAndOperations.pop();
          } else {
            numsAndOperations[numsAndOperations.length - 1] = numsAndOperations[
              numsAndOperations.length - 1
            ].slice(
              0,
              numsAndOperations[numsAndOperations.length - 1].length - 1
            );
          }
        } else {
          num = num.slice(0, num.length - 1);
        }
        res.innerHTML = res.innerHTML.slice(0, res.innerHTML.length - 1);
        isOperationActive = true;
      }
      break;
  }
});

function getresalt(arr) {
  arr = [...whileOperation("*", "/", arr)];
  arr = [...whileOperation("+", "-", arr)];

  return arr[0];
}

function whileOperation(op1, op2, arr) {
  while (arr.includes(op1) || arr.includes(op2)) {
    let operation = arr.includes(op1) ? op1 : op2;
    let opIndex = arr.indexOf(operation);
    let value = setValue(arr[opIndex - 1], arr[opIndex + 1], operation);

    if (operationError(arr[opIndex - 1]) || operationError(arr[opIndex + 1])) {
      canType = false;
      return ["operation error"];
    }

    arr.splice(opIndex - 1, 3, value);
  }

  return arr;
}

function operationError(num) {
  if (isNaN(Number(num)) || num === "") {
    return true;
  }
}

function setValue(num1, num2, operation) {
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

let rightLeft = true;
document.getElementById("openBtn").addEventListener("click", function (event) {
  if (rightLeft) {
    container.style.width = "520px";
    img.src = "/assets/left-arrow.png";
    rightLeft = false;
  } else {
    container.style.width = "25.2rem";
    img.src = "/assets/right-arrows.png";
    rightLeft = true;
  }
});
