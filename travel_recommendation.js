let travelData = [];

// Fetch JSON data
fetch("travel_recommendation_api.json")
  .then(response => response.json())
  .then(data => {
    travelData = data;
    console.log(data); // Check if data loads
  })
  .catch(error => console.log("Error loading JSON:", error));

// Search function
function searchPlaces() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (keyword.includes("beach")) {
        displayResults(travelData.beaches);
    } 
    else if (keyword.includes("temple")) {
        displayResults(travelData.temples);
    } 
    else if (keyword.includes("country")) {
        displayResults(travelData.countries);
    } 
    else {
        resultsDiv.innerHTML = "<p>No results found</p>";
    }
}

// Display results
function displayResults(places) {
    const resultsDiv = document.getElementById("results");

    places.slice(0,2).forEach(place => {
        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${place.name}</h3>
            <img src="${place.imageUrl}" alt="${place.name}">
            <p>${place.description}</p>
        `;

        resultsDiv.appendChild(card);
    });
}

// Reset results
function clearResults() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("searchInput").value = "";
}