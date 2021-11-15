var colors_container = document.querySelector(".colors-container");
var random_btn = document.getElementById("random_btn");
var hide_text = true;

window.onload = function () {
    colors();
}

// generate hex color
function generate_hex_color() {
    const chars = 'abcdef0123456789';
    let h1, h2, h3, h4, h5, h6;
    h1 = random(chars);
    h2 = random(chars);
    h3 = random(chars);
    h4 = random(chars);
    h5 = random(chars);
    h6 = random(chars);
    let hex_color = `#${chars[h1]}${chars[h2]}${chars[h3]}${chars[h4]}${chars[h6]}${chars[h6]}`;
    return hex_color;
}

// random
function random(chars) {
    return parseInt(Math.random() * chars.length);
}

// show all colors to screen
function colors() {
    colors_container.innerHTML = "";
    for (let i = 0; i <= 100; i++) {
        let generated_color = generate_hex_color();
        let color_code = `<div class="color-code"> ${generate_hex_color()} <div>`;

        let color = document.createElement("div");
        color.classList.add("color");
        color.innerHTML = color_code;
        color.style.backgroundColor = generated_color;
        colors_container.append(color);
    }
    copy_color()
}

function copy_color() {
    let color_codes = document.querySelectorAll(".color-code");
    Array.from(color_codes).map((ele) => {
        ele.addEventListener("click", (e) => {
            let hex_color = e.target.innerText;
            navigator.clipboard.writeText(hex_color);
            e.target.innerText = "Copied";
            setTimeout(() => {
                e.target.innerText = hex_color;
            }, 500)
        })
    })
}

function hide_color_code() {
    let color_codes = document.querySelectorAll(".color-code");
    if (hide_text) {
        Array.from(color_codes).map((ele) => {
            ele.style.display = "none";
            hide_text = false;
        })
        random_btn.innerText = "Show Text";
    } else {
        Array.from(color_codes).map((ele) => {
            ele.style.display = "block";
            hide_text = true;
        })
        random_btn.innerText = "Hide Text";
    }
}
