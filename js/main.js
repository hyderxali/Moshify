document.querySelectorAll(".collapsible").forEach((collapsible) => {
    collapsible.addEventListener("click", function (e) {

        this.classList.toggle("collapsible--collapsed");
    })
}
);