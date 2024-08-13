let formular = document.getElementById("formular");
let rozmazanie = document.getElementById("rozmazanie")

function openFormular(){
    formular.classList.add("open-formular")
    rozmazanie.classList.add("open-rozmazanie")
}

function closeFormular(){
    formular.classList.remove("open-formular")
    rozmazanie.classList.remove("open-rozmazanie")
}