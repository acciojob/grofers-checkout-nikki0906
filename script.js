const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with the class 'prices'
    const priceElements = document.querySelectorAll('.prices');
    
    // Initialize total price to 0
    let totalPrice = 0;
    
    // Loop through each price element to calculate the total price
    priceElements.forEach(priceElement => {
        const price = parseFloat(priceElement.textContent);
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // Create a new row for the total price
    const totalRow = document.createElement('tr');

    // Create a single cell that spans both columns
    const totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', 2);
    totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    // Remove any existing total row before adding a new one
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Append the cell to the row
    totalRow.appendChild(totalCell);
    totalRow.classList.add('total-row'); // Add class to identify the total row

    // Append the new row to the table
    const table = document.getElementById('grocery-table');
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

