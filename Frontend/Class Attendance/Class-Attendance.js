// Select elements
const time = document.getElementById("time");
const logout = document.getElementById("logout");
const generate = document.getElementById("generate-qr");
const refresh = document.getElementById("refresh");
const submit = document.getElementById("submit");
const download = document.getElementById("download");
const datashow = document.querySelector(".attendance-list");

// Clock function
function clock ()
{
    const now = new Date();
    const hours = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    time.textContent = `Time: ${hours} | Date: ${date}`;
}
clock();
setInterval(clock, 1000);

// Button working
logout.addEventListener("click", () =>
{
    window.location.replace("index.html");
});

generate.addEventListener("click", () =>
{
    alert("QR Generated Successfully");
});

// show student attendance

async function main ()
{
    try {
        const student = await fetch("http://localhost:3000/attendance/show");
        const datas = await student.json();
        console.log(datas);
        datashow.innerHTML = "";

        datas.student.forEach((data) =>
        {
            datashow.innerHTML += `
            <div class="data">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Roll no:</strong> ${data.rollno}</p>
            <p><strong>Date:</strong> ${new Date(data.date).toLocaleTimeString()}</p>
            <button class="edit-btn" data-id="${data._id}">X</button>
            </div>
            `;
        });

        datashow.addEventListener("click", async (event) =>
        {
            if (event.target.classList.contains("edit-btn")) {
                const id = event.target.dataset.id;

                const del = await fetch(
                    `http://localhost:3000/attendance/delete/${id}`,
                    {
                        method: "DELETE",
                    },
                );

                const result = await del.json()

                if (del.ok) {
                    event.target.parentElement.remove()
                }

            }
        });
    } catch (error) {
        console.log(error);
    }
}

refresh.addEventListener("click", () =>
{
    window.location.reload();
});

submit.addEventListener("click", () =>
{
    alert("Submit Attendance");
});

download.addEventListener("click", () =>
{
    alert("Download Attendance");
});

main();
