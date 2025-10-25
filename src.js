let items = [];
const Div = document.getElementById("items");
const input = document.getElementById('iteminput');
const addBtn = document.getElementById("add");
const ClearBtn = document.getElementById('clc');
function Load() {
    Div.innerHTML = "";

    items.forEach((item, idx) => {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.textContent = item;

        const bt = document.createElement("button");
        bt.textContent = "Delete";
        bt.onclick = () => Remove(idx);

        container.appendChild(text);
        container.appendChild(bt);
        Div.appendChild(container);
    });
}


function Add() {
    const val = input.value;
    if (!val) {
        alert('Cannot add empty item');
        return;
    }
    items.push(val);
    input.value = "";
    Save();
    Load();
}


function Remove(idx) {
    items.splice(idx, 1);
    Save();
    Load();
}

function Save() {
    localStorage.setItem("farhad", JSON.stringify(items));
}


function Show() {
    const data = JSON.parse(localStorage.getItem("farhad")) || [];
    items = data;
    Load();
}


addBtn.addEventListener("click", Add);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") Add();
});

document.addEventListener("DOMContentLoaded", Show)
// Show();

ClearBtn.addEventListener('click', () => {

    items = [];
    Div.innerHTML = "";
    localStorage.removeItem('farhad');

})