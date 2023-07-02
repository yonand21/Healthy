const Calculator = {
    async render() {
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
    <div class="calculator">
      <h2>Calculator BMI</h2>
      <p class="text">Height</p>
      <input type="text" id="height">
      <p class="text">Weight</p> 
      <input type="text" id="weight">
      <p id="result"></p>
      <button id="btn" onclick="bmi()">Calculate</button>
    </div>
      `;
    },
    async afterRender() {
      
    },
  };
  
  export default Calculator;
  