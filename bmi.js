function klikk()
{

    let index = parseFloat(document.getElementById('suly').value / (document.getElementById('magassag').value/100)**2).toFixed(1);

    document.getElementById('ertek').innerHTML = "AZ ÖN BMI ÉRTÉKE: "+ index;

    if (index<parseFloat(18,5))
    {
        document.getElementById('sovany').style.backgroundColor ="orange";
        document.getElementById('normal').style.backgroundColor ="white";
        document.getElementById('tulsuly').style.backgroundColor ="white";
        document.getElementById('egyelhizas').style.backgroundColor ="white";
        document.getElementById('ketelhizas').style.backgroundColor ="white";
        document.getElementById('haromelhizas').style.backgroundColor ="white";
    }
    else if (index <25)
    {
        document.getElementById('sovany').style.backgroundColor ="white";
        document.getElementById('normal').style.backgroundColor ="orange";
        document.getElementById('tulsuly').style.backgroundColor ="white";
        document.getElementById('egyelhizas').style.backgroundColor ="white";
        document.getElementById('ketelhizas').style.backgroundColor ="white";
        document.getElementById('haromelhizas').style.backgroundColor ="white";
    }
    else if (index <30)
    {
        document.getElementById('sovany').style.backgroundColor ="white";
        document.getElementById('normal').style.backgroundColor ="white";
        document.getElementById('tulsuly').style.backgroundColor ="orange";
        document.getElementById('egyelhizas').style.backgroundColor ="white";
        document.getElementById('ketelhizas').style.backgroundColor ="white";
        document.getElementById('haromelhizas').style.backgroundColor ="white";
    }
    else if (index <35)
    {
        document.getElementById('sovany').style.backgroundColor ="white";
        document.getElementById('normal').style.backgroundColor ="white";
        document.getElementById('tulsuly').style.backgroundColor ="white";
        document.getElementById('egyelhizas').style.backgroundColor ="orange";
        document.getElementById('ketelhizas').style.backgroundColor ="white";
        document.getElementById('haromelhizas').style.backgroundColor ="white"; 
    }
    else if (index <40)
    {
        document.getElementById('sovany').style.backgroundColor ="white";
        document.getElementById('normal').style.backgroundColor ="white";
        document.getElementById('tulsuly').style.backgroundColor ="white";
        document.getElementById('egyelhizas').style.backgroundColor ="white";
        document.getElementById('ketelhizas').style.backgroundColor ="orange";
        document.getElementById('haromelhizas').style.backgroundColor ="white";
    }
    else {
        document.getElementById('sovany').style.backgroundColor ="white";
        document.getElementById('normal').style.backgroundColor ="white";
        document.getElementById('tulsuly').style.backgroundColor ="white";
        document.getElementById('egyelhizas').style.backgroundColor ="white";
        document.getElementById('ketelhizas').style.backgroundColor ="white";
        document.getElementById('haromelhizas').style.backgroundColor ="orange";
    }

    document.getElementById('ideal').innerHTML = "AZ IDEÁLIS TESTTÖMEGE: <i>x kg</i>"
    document.getElementById('idealisertekek').innerHTML = "x kg - x kg"

}










document.getElementById('szamitogomb').addEventListener('click',klikk);