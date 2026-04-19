let clicked = false;

const thoughts = [
    "I don’t know who I am.",
    "Why do I feel behind everyone else?",
    "I wish I could pause everything.",
    "I’m trying my best but it never feels enough.",
    "No one really sees this part of me.",
    "What if I fail after all this effort?",
    "I miss who I used to be.",
    "I act okay so people don’t worry.",
    "I wish I could quiet my mind.",
    "I don’t even know what I need anymore."
];

document.addEventListener("click", function() {
    if (clicked) return;
    clicked = true;

    document.body.classList.add("chaos");

    document.getElementById("title").innerText = "I'm not fine.";
    document.getElementById("subtitle").style.display = "none";

    thoughts.forEach(text => {
        let p = document.createElement("p");
        p.innerText = text;
        p.classList.add("thought");

        p.style.top = Math.random() * 90 + "%";
        p.style.left = Math.random() * 90 + "%";

        p.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

        document.body.appendChild(p);
    });
});