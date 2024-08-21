function newItem() {
    let inputValue = $('#input').val();
//add item to list function

    if(inputValue === '') {
        return alert('Please Type Something')
    }else{
        let li = $('<li></li>');
        let ol = $('#list');
        let button = $('#button');
        let crossOutButton = $('<button class="crossOutButton">X</>');

        li.append(inputValue + "  ");
        li.append(crossOutButton);

        ol.append(li);

        crossOutButton.on('click', () => {
            $('li').addClass('delete')
        });

        li.on('dblclick', () => {
            li.toggleClass('strike')
        });

        $('#input').val('');

        ol.sortable();

    }
};