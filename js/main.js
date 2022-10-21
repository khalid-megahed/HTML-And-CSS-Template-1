function forgerPassword(){
    document.getElementById('section2').style.display = 'block';
    document.getElementById('section1').style.display = 'none';
}
function goBack() {
    document.getElementById('section2').style.display = 'none';
    document.getElementById('section1').style.display = 'block';
}
function sendLink() {
    document.getElementById('section2').style.display = 'none';
    document.getElementById('section3').style.display = 'block';
}
function cancel() {
    document.getElementById('section3').style.display = 'none';
    document.getElementById('section1').style.display = 'block';
}
