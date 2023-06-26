var NOTS = [];

function submit() {
    var DisN = [];
    for (var i = 1; i <= 4; i++) {
        // Test if this works://
        // NOTS.push(document.getElementById("NOTS"+i).value); //
        var AddNOTS = document.getElementById("NOTS" + i).value;
        console.log(NOTS);
        NOTS.push(AddNOTS);
    }
}
function sort() {
    NOTS.sort();
    console.log(NOTS);
    var DisSSort = [];
    var LenNOTS = NOTS.length;
    for (var j = 0; j < LenNOTS; j++) {
        DisSSort.push("<h4>NAME - " + NOTS[j] + "</h4>");
        console.log(DisSSort)
    }
    var RCommasINOTS = DisSSort.join(" ");
    console.log(RCommasINOTS)
    document.getElementById("DisN").innerHTML = RCommasINOTS;
}