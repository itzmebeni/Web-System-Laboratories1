document.getElementById('addButton').addEventListener('click', addItem);

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const artistInput = document.getElementById('artistInput');
    const itemText = itemInput.value.trim();
    const artistText = artistInput.value.trim();

    if (itemText === '' || artistText === '') {
        alert('Please fill in both the music title and the artist name.');
        return;
    }

    const itemList = document.getElementById('itemList');
    const listItem = document.createElement('li');

    // Create a container for the item and artist
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    // Add item and artist text with explicit labels
    itemInfo.innerHTML = `
        <div class="song">Music Title: <span class="title">${itemText}</span></div>
        <div class="artist">Artist Name: <span class="name">${artistText}</span></div>
    `;
    listItem.appendChild(itemInfo);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        itemList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    itemList.appendChild(listItem);

    // Clear inputs
    itemInput.value = '';
    artistInput.value = '';
}

function searchItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const itemList = document.getElementById('itemList');
    const items = itemList.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const songElement = items[i].querySelector('.title');
        const songText = songElement.textContent;

        // Reset the original text to remove previous highlights
        songElement.innerHTML = songText;

        // Apply bold to matching parts in Music Title
        if (searchInput && songText.toLowerCase().includes(searchInput)) {
            const regex = new RegExp(`(${searchInput})`, 'gi');
            songElement.innerHTML = songText.replace(regex, `<span class="bold">$1</span>`);
            items[i].style.display = ''; // Show the item if it matches the search
        } else {
            items[i].style.display = 'none'; // Hide the item if it doesn't match
        }
    }
}
