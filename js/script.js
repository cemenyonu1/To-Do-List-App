let li = $('<li></li>');
let ol = $('#list');
let button = $('#button');
let inputValue = $('#input').val();
let crossOutButton = $('<button class="crossOutButton">X</>');

li.append(inputValue);
li.append(crossOutButton);

//add item to list function
function addToList() {
    ol.append(li);
};



function crossOut(element) {
    element.addClass('strike');
};

function remove(element) {
    element.addClass('delete');
};

//event listeners
button.on('click', () => {
    if(inputValue.length > 0) {
        addToList()
    } else {
        alert('You must write something!')
    }
});

crossOutButton.on('click', () => {
    remove(li)
});