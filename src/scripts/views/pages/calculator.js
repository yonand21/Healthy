const Calculator = {
  render() {
    return `
    <div class="divTable">
        <div class="divTableRow">
          <div class="divTableCellhd">BMI</div>
          <div class="divTableCellhd">Status Berat Badan</div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">Kurang dari 18.5</div>
          <div class="divTableCell">Kekurangan bobot</div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">18.5 - 24.9</div>
          <div class="divTableCell">Normal</div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">25.0 - 29.9</div>
          <div class="divTableCell">Kelebihan berat badan</div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">30.0 - 34.9</div>
          <div class="divTableCell">Obesitas 1</div>
        </div>
        <div class="divTableRow">
          <div class="divTableCell">Lebih dari 35.0</div>
          <div class="divTableCell">Obesitas 2</div>
        </div>
      </div> 
      <div class="textbox">
        <p>
         Body Mass Index (BMI) atau yang sering dikenal dengan 
         Indeks Massa Tubuh (IMT) adalah nilai ukur untuk 
         mengetahui status gizi seseorang berdasarkan berat
         dan tinggi badannya. Gunakan kalkulator ini untuk 
         memeriksa indeks massa tubuh dan mengecek apakah berat 
         badan anda ideal atau tidak
        <P>
      </div>   
    </div>
      <div class="container-calc">
        <h1>BMI Calculator</h1>
        <label for="weight">Weight (kg):</label>
        <input type="number" id="weight" placeholder="Enter weight">
        <br>
        <label for="height">Height (cm):</label>
        <input type="number" id="height" placeholder="Enter height">
        <br>
        <button id="calculateBtn">Calculate BMI</button>
        <br>
        <div id="result"></div>
      </div>
    `;
  },

  afterRender() {
    const calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", this.calculateBMI);
  },

  calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height)) {
      document.getElementById("result").innerHTML = "Please enter valid values.";
      return;
    }

    const bmi = weight / (height * height);

    let result = "Your BMI is " + bmi.toFixed(2) + ". ";

    if (bmi < 18.5) {
      result += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
      result += "You are in the normal weight range.";
    } else if (bmi >= 25 && bmi < 30) {
      result += "You are overweight.";
    } else {
      result += "You are obese.";
    }

    document.getElementById("result").innerHTML = result;
  },
};

export default Calculator;
