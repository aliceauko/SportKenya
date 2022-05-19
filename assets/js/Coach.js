function coach(){
    document.getElementById('coach').style.display = "block";
    document.getElementById('para1').style.display = "none";
    document.getElementById('para2').style.display = "none";
}
function para1(){
    document.getElementById('coach').style.display = "none";
    document.getElementById('para1').style.display = "block";
    document.getElementById('para2').style.display = "none";
}
function para2(){
    document.getElementById('para1').style.display = "none";
    document.getElementById('coach').style.display = "none";
    document.getElementById('para2').style.display = "block";
}

