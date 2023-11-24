var numbers = [];

  function addNumber() {
    const numberInput = document.getElementById("numberInput");
    const valueNumber = parseInt(numberInput.value);

    if (!isNaN(valueNumber)) {
      numbers.push(valueNumber);
      numberInput.value = "";
      document.getElementById("pThemSo").innerHTML =(numbers);
    } else {
      document.getElementById("pThemSo").innerHTML =
        "Vui lòng nhập số nguyên hợp lệ.";
    }
  }

function calculateSum() {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    document.getElementById("PositiveNumber").innerHTML = `Tổng số dương trong mảng là: ${sum}`;
}

function countPositive() {
    let count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    document.getElementById("countPosivtive").innerHTML = `Số lượng số dương trong mảng là: ${count}`;
}

function findMin() {
    if (numbers.length === 0) {
      document.getElementById("minNumber").innerHTML = "Mảng rỗng.";
      return;
    }
    const min = Math.min(...numbers);
    document.getElementById("minNumber").innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
}


  function findMinPositive() {
    var minPositiveNumber = -1;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0 && (minPositiveNumber === -1 || numbers[i] < minPositiveNumber)) {
        minPositiveNumber = numbers[i];
      }
    }
    if (minPositiveNumber !== -1) {
      document.getElementById("minPositive").innerHTML = `Số dương nhỏ nhất trong mảng là: ${minPositiveNumber}`;
    } else {
      document.getElementById("minPositive").innerHTML = "Mảng không có số dương.";
    }
  }

function findLastEven() {
  var lastEven = -1;
  for (var i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 === 0) {
      lastEven = numbers[i];
      break;
    }
  }
  document.getElementById(
    "lastEven"
  ).innerHTML = `Số chẵn cuối cùng trong mảng là: ${
    lastEven !== -1 ? lastEven : "Không có số chẵn"
  }`;
}

function swapValues() {
    const position1 = parseInt(prompt("Nhập vị trí thứ nhất:"));
    const position2 = parseInt(prompt("Nhập vị trí thứ hai:"));

    if (!isNaN(position1) && !isNaN(position2) && position1 >= 0 && position2 >= 0 && position1 < numbers.length && position2 < numbers.length) {
        const temp = numbers[position1];
        numbers[position1] = numbers[position2];
        numbers[position2] = temp;
        document.getElementById("swapValues").innerHTML = `Mảng sau khi đổi chỗ: ${numbers}`;
    } else {
        document.getElementById("swapValues").innerHTML = "Vui lòng nhập đúng vị trí trong mảng.";
    }
}




function sortArray() {
    numbers.sort(function(a, b) {
        return a - b;
    });
    const result =("Mảng sau khi sắp xếp: " + numbers);
    document.getElementById("arrayOrder").innerHTML = result;
}

function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findFirstPrime() {
    var firstPrime = -1;
    for (var i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            firstPrime = numbers[i];
            break;
        }
    }
    const result =("Số nguyên tố đầu tiên trong mảng là: " + (firstPrime !== -1 ? firstPrime : "Không có số nguyên tố"));
    document.getElementById("firstPrime").innerHTML = result;
}

function addRealNumbers() {

    const realNumbersInput = prompt("Nhập mảng số thực, cách nhau bằng dấu phẩy:");
    const realNumbers = realNumbersInput.split(",").map(Number);

    if (realNumbers.some(isNaN)) {
        document.getElementById("realNumber").innerHTML = "Vui lòng nhập mảng số thực hợp lệ.";
        return;
    }

    var integerCount = 0;
    for (var i = 0; i < realNumbers.length; i++) {
        if (Number.isInteger(realNumbers[i])) {
            numbers.push(realNumbers[i]);
            integerCount++;
        }
    }
    const result = "Mảng sau khi thêm số thực: " + (numbers) + ", Số nguyên trong mảng mới: " + integerCount;
    document.getElementById("realNumber").innerHTML = result;
}


function comparePositiveNegative() {
    var positiveCount = 0;
    var negativeCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveCount++;
        } else if (numbers[i] < 0) {
            negativeCount++;
        }
    }
    updateContent("Số lượng số dương: " + positiveCount + ", Số lượng số âm: " + negativeCount, "comparePosNeg");
}

function updateContent(message, elementId) {
    const resultElement = document.getElementById(elementId);
    resultElement.textContent = message;
}


