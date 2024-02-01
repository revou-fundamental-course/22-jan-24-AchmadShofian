
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('name').value;
    const iniemail = document.getElementById('email').value;

    if(!username || !iniemail){
        alert('Please fill all the required fields!');
        return;
    }

    console.log(`Username: ${username}, Email Address: ${iniemail}`);
});



   