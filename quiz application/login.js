localStorage.setItem('name','adil')
function foo() {
    var a = document.getElementById('semail').value
    var b = document.getElementById('spass').value
    localStorage.setItem('email', a)
    localStorage.setItem('pass', b)
    alert('Data Inserted Sucsessfully')
    location.href = './quiz-start.html'
}
// function doo() {
//     var a = document.getElementById('lemail').value
//     var b = document.getElementById('lpass').value
//     var getmail = localStorage.getItem('email', a)
//     var getpass = localStorage.getItem('pass', b)
//     if (a === getmail && b === getpass) {

//         alert('Congrats Your Log in Sucsessfully')
//         location.href = './quiz-start.html'

//     }
//     else {
//         alert('please sign in try again')
//         location.href = './mainsignin.html'

//     }
// }
