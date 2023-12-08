const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (searchTerm !== '') {
    const apiUrl = 'https://valorant-api.com/v1/weapons/skins';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const matchingSkins = data.data.filter((skin) => {
          return skin.displayName.toLowerCase().includes(searchTerm);
        });
      });
  } else {
    alert('Please enter a search term');
  }
});
