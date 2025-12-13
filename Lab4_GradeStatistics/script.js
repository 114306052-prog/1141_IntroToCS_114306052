let count = 0;

document.getElementById("submitBtn").addEventListener("click", function () {
    const math = Number(document.getElementById("mathInput").value);
    const eng = Number(document.getElementById("engInput").value);

    if (math === "" || eng === "" || isNaN(math) || isNaN(eng)) {
        alert("Please enter valid numbers.");
        return;
    }

    count++;
    const avg = ((math + eng) / 2).toFixed(2);

    // add the new row
    const tableBody = document.getElementById("tableBody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${count}</td>
        <td>${math}</td>
        <td>${eng}</td>
        <td>${avg}</td>
    `;
    tableBody.appendChild(row);

    updateColumnAverages();
});

function updateColumnAverages() {
    const rows = document.querySelectorAll("#tableBody tr");
    let mathSum = 0;
    let engSum = 0;
    let avgSum = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        mathSum += Number(cells[1].textContent);
        engSum += Number(cells[2].textContent);
        avgSum += Number(cells[3].textContent);
    });

    const n = rows.length;

    document.getElementById("mathAvg").textContent = (mathSum / n).toFixed(2);
    document.getElementById("engAvg").textContent = (engSum / n).toFixed(2);
    document.getElementById("overallAvg").textContent = (avgSum / n).toFixed(2);
}