const tableBody = document.getElementById("table-body");

const getFlight = () => {
  fetch("http://localhost:9080/flights")
    .then((response) => response.json())
    .then((flights) => {
      console.log(flights);
    })
    .catch((err) => console.log(err));
};

getFlight();

const populateTable = (flights) => {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");
    const tableIcon = document.createElement("td");
    tableIcon.textContent = "✈";
    tableRow.append(tableIcon);

    const fligtDetails = {
      time: flight.departing.slice(0, 5),
      destination: flight.destination.toUpperCase(),
      flight: flight.flightNumber.shift(),
      gate: flight.gate,
      remark: flight.status,
    };
    //use the new object to create table datacell

    tableBody.append(tableRow);
  }
};
