// Asseccing the elements or fileds
const currentTime = document.getElementById("current-time");
const name = document.getElementById("name");
const email = document.getElementById("email");
const rollno = document.getElementById("rollno");
const password = document.getElementById("password");
const cpassword = document.getElementById("confirm-password");
const submit = document.getElementById("Submit-btn");

// Time logic
function time ()
{
    let now = new Date();
    let timesec = now.toLocaleTimeString();
    let date = now.toLocaleDateString();
    currentTime.innerText = `${timesec} | ${date}`;
}
time();
setInterval(time, 1000);

// Name rule
function namecheck (name)
{
    const namerule = /^[A-Z][A-Za-z\s]{1,29}$/;
    return namerule.test(name);
}

// Email rule
function emailcheck (email)
{
    const emailrule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailrule.test(email);
}

// Rollno rule
function rollnocheck (rollno)
{
    return rollno >= 1 && rollno <= 100;
}

//  Password rule
function passwordcheck (password)
{
    const passwordrule =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;
    return passwordrule.test(password);
}

// Error message
function errormessage (input, message)
{
    let error = input.parentElement.querySelector(".error");
    if (!error) {
        error = document.createElement("small");
        error.className = "error";
        input.parentElement.appendChild(error);
    }
    error.innerHTML = message;
}

// Remove error message
function removeerror (input)
{
    let error = input.parentElement.querySelector(".error");
    if (error) error.remove(input);
}

// Submit check
submit.addEventListener("click", async (event) =>
{
    event.preventDefault();

    // checking all fields
    if (
        name.value === "" ||
        email.value === "" ||
        rollno.value === "" ||
        password.value === "" ||
        cpassword.value === ""
    ) {
        alert("Enter all Details");
        return;
    }

    // for removing error
    let valid = true;

    // name check
    let nameconfirm = name.value.trim();
    if (!namecheck(nameconfirm)) {
        errormessage(name, "Please enter right name");
        valid = false;
    } else {
        removeerror(name);
    }

    // email check
    let emailconfirm = email.value.trim();
    if (!emailcheck(emailconfirm)) {
        errormessage(email, "Enter correct email");
        valid = false;
    } else {
        removeerror(email);
    }

    // rollno check
    let roolnoconfirm = rollno.value.trim();
    if (!rollnocheck(roolnoconfirm)) {
        errormessage(rollno, "Enter correct rooll number");
        valid = false;
    } else {
        removeerror(rollno);
    }

    // password check
    let passwordconfirm = password.value.trim();
    if (!passwordcheck(passwordconfirm)) {
        errormessage(
            password,
            `Must contain at least one lowercase letter and at least one uppercase letter one special character`,
        );
        valid = false;
    } else {
        removeerror(password);
    }

    // confirm password
    if (password.value !== cpassword.value) {
        errormessage(cpassword, "Password doesnot match");
        valid = false;
    } else {
        removeerror(cpassword);
    }

    if (!valid) {
        return;
    }

    try {
        const data = await fetch("http://localhost:3000/student/register", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                rollno: rollno.value,
                password: password.value,
            })
        });

        const result = await data.json()

        if (data.ok) {
            alert(result.message)
            name.value = "",
                email.value = "",
                rollno.value = "",
                password.value = "",
                cpassword.value = ""
        } else {
            alert(result.message)
        }
    } catch (error) {
        console.log(error)
    }
    // alert("Submitted");
});
