const logout = document.getElementById('logout');
const time = document.getElementById('time');
const date = document.getElementById('date');
const details = document.querySelector('.details')
const reports = document.querySelector('.reports');
const feedback = document.querySelector('.feedback');
const profile = document.querySelector('.profile');
const openClass = document.querySelectorAll(".open-class");

logout.addEventListener('click', () =>
{
    window.location.replace('index.html');
})

function clock ()
{
    const now = new Date();
    let timeshow = now.toLocaleTimeString();
    let dateshow = now.toLocaleDateString();
    time.innerText = `Time: ${timeshow}`;
    date.innerText = `Date: ${dateshow}`
}
clock();
setInterval(clock, 1000)

openClass.forEach(button =>
{

    button.addEventListener("click", () =>
    {

        window.location.assign("../Class Attendance/Class-Attendance.html");

    });

});

details.addEventListener('click', () =>
{
    window.open('https://www.npmjs.com/package/mongodb', '_blank');
})

reports.addEventListener('click', () =>
{
    window.open('https://www.npmjs.com/package/mongodb', '_blank');
})

feedback.addEventListener('click', () =>
{
    window.open('https://www.npmjs.com/package/mongodb', '_blank');
})

profile.addEventListener('click', () =>
{
    window.open('https://www.npmjs.com/package/mongodb', '_blank');
})




