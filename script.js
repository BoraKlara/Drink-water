const smallCups = document.querySelectorAll(".cup-small");

const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, i) => {
  cup.addEventListener('click', () => highlightCups)
};

function highlightCups(i){
  smallCups.forEach((cup, i2) =>){
    if(i2 <= i){
      cup.classList.add('full')
    }else{
      cup.classList.add('full')
    }
  }
}