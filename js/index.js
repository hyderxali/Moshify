document.querySelectorAll(".icon-container").forEach((icon) => {
    icon.addEventListener("click", function (e) {
        let collapsible = icon;
        while (collapsible.parentNode.classList.contains("collapsible") != true) {
            collapsible = collapsible.parentNode;
        }
        collapsible = collapsible.parentNode;
        collapsible.classList.toggle("collapsible--expanded");
    })
}
);