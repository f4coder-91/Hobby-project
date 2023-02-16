const date = new Date().toLocaleDateString();
let span = document.createElement("span");
span.innerHTML = date;
const footer = document.querySelector(".date");
footer.appendChild(span);
