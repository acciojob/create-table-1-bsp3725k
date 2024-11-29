function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");

    // Create a new row
    let newRow = table.insertRow(0);

    // Create two new cells for the row
    let cell1 = newRow.insertCell(0); // First cell
    let cell2 = newRow.insertCell(1); // Second cell

    // Set the text content of the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}

