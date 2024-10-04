document.addEventListener("DOMContentLoaded", function () {
    const shoppingList = document.getElementById("shoppingList");
    const addItemButton = document.getElementById("addItem");
    const itemInput = document.getElementById("itemInput");

    // Event delegation for removing items
    shoppingList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });

    // Add new item to the shopping list
    addItemButton.addEventListener("click", function () {
        const itemText = itemInput.value.trim();

        if (itemText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `${itemText} <span class="delete">X</span>`;
            shoppingList.appendChild(li);
            itemInput.value = "";
        }
    });
});
