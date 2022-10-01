const squareEl = document.querySelectorAll(".square");
const prevEl = document.getElementById("prev");
const nextEl  = document.getElementById("next");
const progressEl  = document.getElementById("progress");

let currentValue = 1;

nextEl.addEventListener("click", () =>{
    currentValue++;
    if(currentValue > squareEl.length){
        currentValue = squareEl.length;
    }
    updateSquare();
});

prevEl.addEventListener("click", () => {
    currentValue--;
    if(currentValue < 1){
        currentValue = 1;
    }
    updateSquare();
});

function updateSquare() {
    squareEl.forEach((square , index) =>{
        if(index < currentValue){
            square.classList.add("active");
           
        }
        else{
            square.classList.remove("active");
        }
    });

    const ActivesClasses = document.querySelectorAll('.active');
   progressEl.style.width =  (ActivesClasses.length - 1) / (squareEl.length - 1) * 100 + "%";


   if(currentValue === 1){
    prevEl.disabled = true;
   }
   else if(currentValue === squareEl.length){
    nextEl.disabled = true;
   }
   else {
    prevEl.disabled = false;
    nextEl.disabled = false;
   }

}

