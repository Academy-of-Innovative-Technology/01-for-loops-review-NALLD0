function printChip(row, value){
    row.insertAdjacentHTML("beforeend", `<span class="chip">${value}</span>`);   
}



const cards = document.querySelectorAll("#cards .card");

cards.forEach((card, index) => {
    const runBtn = card.querySelector("button.btn-primary");
    const resetBtn = card.querySelector("button.btn-outline-secondary");
    const output = card.querySelector(".result-row");

    runBtn.addEventListener("click", () => {
        output.innerHTML = "";

        if (index === 0) {

            for (let i = 1; i <= 15; i++){
                printChip(output, i);
            }
        }

        if (index == 1) {

            for (let i = 15; i >= 1; i--){
                printChip(output, i);
            }
        }

        if (index == 2) {

            for (let i = 1; i <= 30; i++) {
                if (i % 2 !== 0) {
                    printChip(output, i);
                }
            }
        }

        if (index === 3) {

            for (let i = 30; i >= 0; i -= 5) {
                if (i % 5 === 0){
                    printChip(output, i);
                }
            }
        }

        if (index === 4){

            for (let i = -50; i <= 50; i += 5){
                printChip(output, i);
            }
        }

        if (index === 5) {

            for(let i = -50; i <= 50; i += 2) {
                if (i % 2 === 0){
                    printChip(output, i);
                }
            }
        }
    });

    resetBtn.addEventListener("click", () => {
        output.innerHTML = "";
    });
});



const pgRun = document.querySelector("#pg-run");
const pgReset = document.querySelector("#pg-reset");
const pgRow = document.querySelector("#pg-row");

pgRun.addEventListener("click", () => {
    pgRow.innerHTML = "";

    const start = Number(document.querySelector("#pg-start").value);
    const end = Number(document.querySelector("#pg-end").value);
    const step = Number(document.querySelector("#pg-step").value);
    const filter = document.querySelector("#pg-filter").value;

    if (step === 0) {
        pgRow.textContent = "Step cannot be 0.";
        return;
    }


    if (start < end) {
        for (let i = start; i <= end; i += step) {
            if (filter === "odd" && i % 2 === 0) continue;
            if (filter === "even" && i % 2 !==0) continue;
            if (filter === "mul5" && i % 5 !==0)continue; 
            
            printChip(pgRow, i);
        }
    }
    

    else {
        for( let i = start; i >= end; i -= step){
            if (filter === "odd" && i % 2 === 0) continue;
            if (filter === "even" && i % 2 !==0) continue;
            if (filter === "mul5" && i % 5 !==0)continue; 

            printChip(pgRow, i);
        }
    }
});

pgReset.addEventListener("click", () => {
    pgRow.innerHTML = "";
});