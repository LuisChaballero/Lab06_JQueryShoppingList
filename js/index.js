
var list = $('.shopList')

// Function that adds an item to a list
$('.add-button').on('click', function (e) {
    e.preventDefault()

    var text = $("#itemName").val();

    list.append(`<li>
                    <div class="listItem"> 
                        <p>${text}</p>
                        <button type="submit" class="check-button">check</button>
                        <button type="submit" class="delete-button">delete</button>
                    </div>   
                </li>`)
});

// Function to change the text property of the name Item
$('.shopList').on('click', '.check-button' , function (e) {
    e.preventDefault()

    let itemName = $(this).parent().find("p")
    itemName.toggleClass("cross")

});

// Function to delete the current Item
$('.shopList').on('click', '.delete-button' , function (e) {
    e.preventDefault()

    let currentItem = $(this).parent()
    currentItem.remove()

});