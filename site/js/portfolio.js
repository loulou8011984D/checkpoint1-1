//change avatar
const avatarChange = document.querySelector('.avatar');
    avatarChange.addEventListener('click', function () {
    avatarChange.src = "image/avatar-bis.png";
    avatarChange.alt = "avatar2";
    });
//change name
const userName = prompt("What's your name?");
const changeName = document.querySelector('#name');
changeName.innerHTML = `${userName}`;
changeName.style.color = 'white';
userName.onsubmit = function (event){
    event.preventDefault();
};
