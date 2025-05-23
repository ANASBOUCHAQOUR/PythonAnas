let allBoldItems;

function getBoldItems() {
    allBoldItems = document.getElementsByTagName('strong');
}

function highlight() {
    for(const item of allBoldItems) {
        item.style.color = 'blue';
    }
}

function returnItemsToDefault() {
    for(const item of allBoldItems) {
        item.style.color = 'black';
    }
}

const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
getBoldItems();
