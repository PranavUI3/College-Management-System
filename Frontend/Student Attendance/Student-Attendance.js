const subject = document.getElementById('subject');
const section = document.getElementById('section');
const teacher = document.getElementById('teacher');
const date = document.getElementById('date');
const time = document.getElementById('time');
const rollno = document.getElementById('rollno');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const status = document.getElementById('status');

function clock ()
{
    let now = new Date();
    let Hourshow = now.toLocaleTimeString();
    let Dateshow = now.toLocaleDateString();
    time.innerHTML = `<strong>Time: </strong>${Hourshow}`;
    date.innerHTML = `<strong>Date: </strong>${Dateshow}`;
}
clock();
setInterval(clock, 1000);

function rollnocheck (rollno)
{
    return rollno >= 1 && rollno <= 100;
}

function passwordcheck (password)
{
    const passwordrule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    return passwordrule.test(password);
}

function errormessage (input, message)
{
    let error = input.parentElement.querySelector('.error');
    if (!error) {
        error = document.createElement('small');
        error.className = 'error';
        input.parentElement.appendChild(error);
    }
    error.innerHTML = message;
}

function removeerror (input)
{
    let error = input.parentElement.querySelector('.error');
    if (error) error.remove(input);
}

submit.addEventListener('click', async (event) =>
{
    event.preventDefault();

    if (rollno.value === '' || password.value === '') {
        alert('Enter the details')
    }

    let valid = true;

    let rollnoconfirm = rollno.value.trim();
    let passwordconfirm = password.value.trim();

    if (!rollnocheck(rollnoconfirm)) {
        errormessage(rollno, 'Rollno did not match');
        valid = false;
    } else {
        removeerror(rollno);
    }

    if (!passwordcheck(passwordconfirm)) {
        errormessage(password, 'Password did not match');
        valid = false;
    } else {
        removeerror(password);
    }

    if (!valid) {
        return
    }

    try {
        const send = await fetch("http://localhost:3000/attendance/save", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rollno: rollno.value,
                password: password.value
            })
        })

        const data = await send.json()

        if (send.ok) {
            alert(data.message)
            rollno.value = "",
                password.value = ""
            status.innerText = '✅ Attendance Marked'
        } else {
            alert(data.message)
        }
    } catch (error) {
        console.log(error)
    }
})