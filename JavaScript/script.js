const nuttig = document.getElementsByClassName("collapsible");
const nuttig2 = document.getElementsByClassName("nuttigelinks")[0];
let i;

for (i = 0; i < nuttig.length; i++) {
    nuttig[i].addEventListener("click", function () {
        if (nuttig2.style.display === "block") {
            nuttig2.style.display = "none";
        } else {
            nuttig2.style.display = "block";
        }
    });
}

const portfolio = document.getElementsByClassName("collapsible2");
const portfolio2 = document.getElementsByClassName("mijnportfolio")[0];
i = 0;

for (i = 0; i < portfolio.length; i++) {
    portfolio[i].addEventListener("click", function () {
        if (portfolio2.style.display === "block") {
            portfolio2.style.display = "none";
        } else {
            portfolio2.style.display = "block";
        }
    });
}
function updateProgressbar() {
    let table = document.querySelector('table');
    let rows = table.querySelectorAll('tr');
    let totalEC = 0;

    // Loop through table rows to sum the EC points
    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].querySelectorAll('td');
        if (cells.length > 2) {
            let ecValue = parseFloat(cells[2].innerText.replace(',', '.'));
            if (!isNaN(ecValue)) {
                totalEC += ecValue;
            }
        }
    }

    // Update progressbar and label
    let progressbar = document.getElementById('ec-progress');
    let label = document.getElementById('ec-value');
    progressbar.value = totalEC;
    label.innerText = totalEC + "/60";
}

// Call the function on page load
window.addEventListener('DOMContentLoaded', (event) => {
    updateProgressbar();
});
