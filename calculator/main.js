let tbcal = "";
const useinp = document.getElementById("userinput");
const compinp = document.getElementById("compout");
const needInput = document.getElementsById("need-input-alert")

function calcad(value) {
    tbcal += value;
    useinp.value = tbcal;
}

function remove() {
    tbcal = tbcal.substring(0, tbcal.length - 1);
    useinp.value = tbcal;
}

function execm() {
    if (tbcal.length === 0 || tbcal === "") {
        // FIXME: needInput.style.visibility = "visible";
        alert("I need an input")
        return;
    }
    try {
        let ans = eval(tbcal);
        compinp.value = ans;
    } catch (err) {
        alert("Invalid input");
    }
}

function reset() {
    tbcal = "";
    useinp.value = "";
    compinp.value = "";
}