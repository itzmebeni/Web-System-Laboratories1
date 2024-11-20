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

    // Add item and artist text
    itemInfo.innerHTML = `Name of Song: ${itemText}<br> Artist: ${artistText}`;
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
        const itemText = items[i].firstChild.firstChild.textContent.toLowerCase();
        const artistText = items[i].firstChild.lastChild.textContent.toLowerCase();
        items[i].style.display = itemText.includes(searchInput) || artistText.includes(searchInput) ? '' : 'none';
    }
}