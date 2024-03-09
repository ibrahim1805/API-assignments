document.addEventListener("DOMContentLoaded", function () {
    const catFactsContainer = document.getElementById("cat-facts");
    const refreshButton = document.getElementById("refresh-button");
  
    // Function to fetch cat facts from the API
    async function fetchCatFacts() {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        const data = await response.json();
        return data.data;
      } catch (error) {
        console.error("Error fetching cat facts:", error);
      }
    }
  
    // Function to display cat facts on the webpage
    async function displayCatFacts() {
      const catFacts = await fetchCatFacts();
      catFactsContainer.innerHTML = "";
  
      catFacts.forEach((fact) => {
        const factElement = document.createElement("div");
        factElement.classList.add("fact");
        factElement.textContent = fact.fact;
        catFactsContainer.appendChild(factElement);
      });
    }
  
    displayCatFacts();
  
    // Event listener for refreshing cat facts
    refreshButton.addEventListener("click", function () {
      displayCatFacts();
    });
  });