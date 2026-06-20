var users=[
    {
        "name": "John Doe",
        "gender": "male",
        "image": "../images/john.png"
    },
    {
        "name": "europhia",
        "gender": "female",
        "image": "../images/oip.png"
    }
]
var currentIndex = 0;

function toggle(){
    currentIndex = (currentIndex + 1) % 2;
    var user= users[currentIndex];
    document.getElementById("user-image").src=user.image;
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
 }