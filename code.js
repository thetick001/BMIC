$(document).ready(function (){
$("#submit").on("click", calculate)
});

function calculate()
{
    let bodyClass = "";
    let weight = $("#weight").val();
    let height = $("#height").val();

    let bmi = (weight / (height * height)) * 703;

    if (bmi <= 18.5)
    { bodyClass = "Underweight"}

    else if (18.5 < bmi && bmi <= 25)
    { bodyClass = "Normal (Healthy weight)"}

    else if (25 < bmi && bmi <= 30)
    { bodyClass = "Overweight"}

    else if (30 < bmi && bmi <= 40)
    { bodyClass = "Obese"}

    else if (bmi > 40)
    { bodyClass = "How are you alive"}

    $("p#results").text(`${bodyClass} (BMI ${bmi.toFixed(1)}) at ${weight} pounds`);
}