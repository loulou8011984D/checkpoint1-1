//change avatar
const avatarChange = document.querySelector('.avatar');
    avatarChange.addEventListener('click', function () {
    avatarChange.src = "image/avatar-bis.png";
    avatarChange.alt = "avatar2";
});
//change color to #750ff7
const newColor1 = prompt("Enter a Color :");
const userName = prompt("What's your name?");

const newColor2 = document.querySelector('.pink-text','.description pink-bg');
//const newColor3 = document.querySelector('.description');
newColor2.style.color = '#750ff7';
newColor2.style.backgroundColor = '#750ff7';


//change name and color
const changeName = document.querySelector('#name');
const changeColor = document.querySelector('.pink-bg');
changeName.innerHTML = `${userName}`;
changeName.style.color = 'white';
changeColor.style.backgroundColor = '#750ff7';
userName.onsubmit = function (event){
    event.preventDefault();
};


