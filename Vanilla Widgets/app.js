const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",
    destination: "Nigeria",
    flight: "0X 203",
    gate: "A01",
    remarks: "ON TIME",
  },
  {
    time: "12:39",
    destination: "London",
    flight: "CL 302",
    gate: "C31",
    remarks: "CANCELLED",
  },
  {
    time: "13:21",
    destination: "Dubai",
    flight: "DXB 201",
    gate: "A 19",
    remarks: "CANCELLED",
  },
  {
    time: "15:22",
    destination: "Korea",
    flight: "TK 211",
    gate: "A 32",
    remarks: "DELAYED",
  },
  {
    time: "14:01",
    destination: "LOS ANGELES",
    flight: "LO 504",
    gate: "L01",
    remarks: "ON TIME",
  },
];

//populating table
function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    //create 5 td element,that loops through each flight object to get the details
    for (const flightDetails in flight) {
      const tableCell = document.createElement("td");
      const word = Array.from(flight[flightDetails]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");

        //for flipping of the animation
        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }
      tableRow.append(tableCell);
    }
    tableBody.append(tableRow);
  }
}

populateTable();
