let openedlecture_id = sessionStorage.getItem("id");
if (openedlecture_id) {
    let openedlecture = document.getElementById(openedlecture_id)
    openlecture(openedlecture)
}