function calculateSI(){

    let p = Number(document.getElementById("p").value);

    let r = Number(document.getElementById("r").value);

    let t = Number(document.getElementById("t").value);

    let si = (p * r * t) / 100;

    document.getElementById("result").innerHTML =
    "Simple Interest = " + si;
}