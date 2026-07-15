// Asscessing the elements.
const home = document.getElementById('home');
const studentreg = document.getElementById('student-reg');
const help = document.getElementById('help');
const feedback = document.getElementById('feedback');
const clock = document.getElementById('clock');
const email = document.getElementById('email');
const password = document.getElementById('password');
const remember = document.getElementById('remember');
const forgotpass = document.getElementById('forgot-password');
const submit = document.getElementById('submit');

// Links working logic.
home.addEventListener('click', () =>
{
    window.open('https://www.youtube.com/', '_blank')
})

studentreg.addEventListener('click', () =>
{
    window.open('https://www.geeksforgeeks.org/', '_blank')
})

help.addEventListener('click', () =>
{
    window.open('https://expressjs.com/en/', '_blank')
})

feedback.addEventListener('click', () =>
{
    window.open('https://www.npmjs.com/package/mongodb', '_blank')
})

forgotpass.addEventListener('click', () =>
{
    window.location.assign('https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop');
})

// Time and date logic. 
function time ()
{
    let now = new Date();
    let second = now.toLocaleTimeString();
    let date = now.toDateString()
    clock.textContent = `${second} | ${date}`
}

time()
setInterval(time, 1000);

// Email logic 
function emailcheck (email)
{
    const emailrule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailrule.test(email)
}

// Password logic
function passwordcheck (password)
{
    const passwordrule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    return passwordrule.test(password)
}

// Error show 
function showerror (input, message)
{
    let error = input.parentElement.querySelector(".error");
    if (!error) {
        error = document.createElement('small');
        error.className = 'error';
        input.parentElement.appendChild(error)
    }
    error.innerHTML = message
}

// Remove error
function removeerror (input)
{
    let error = input.parentElement.querySelector(".error");
    if (error) error.remove(input)
}

// Rember me logic 
remember.addEventListener('change', () =>
{
    let check = remember.checked;
    if (check) {
        alert('rember')
    } else {
        alert('do not')
    }
})

// Submit logic
submit.addEventListener('click', async (event) =>
{
    event.preventDefault();

    if (email.value === "" || password.value === "") {
        alert('Enter details for login');
    }

    let valid = true;

    let emailconfirm = email.value.trim()
    if (!emailcheck(emailconfirm)) {
        showerror(email, 'Enter right email');
        valid = false
    } else {
        removeerror(email)
    }

    let passwordconfirm = password.value.trim()
    if (!passwordcheck(passwordconfirm)) {
        showerror(password, 'Enter right password');
        valid = false
    } else {
        removeerror(password)
    }

    if (!valid) {
        return
    }

    try {
        let log = await fetch('http://localhost:3000/teacher/login', {
            method: 'Post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })

        let result = await log.json()

        if (log.ok) {
            window.location.href = '../Teacher Dashbord/Teacher-Dashbord.html';
            alert(result.message)
            email.value = "";
            password.value = "";
        } else {
            alert(result.message)
        }
    } catch (error) {
        console.log(error)
    }
})