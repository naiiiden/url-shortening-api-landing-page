document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#nav-ul").classList.toggle("show");
    if (document.getElementById("menu-icon").getAttribute("src") === "images/menu_black_36dp.svg") {
        document.getElementById("menu-icon").setAttribute("src", "images/close_black_36dp.svg");
    } else {
        document.getElementById("menu-icon").setAttribute("src", "images/menu_black_36dp.svg");
    };
});

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    let link = document.getElementById("input").value;
    let data = {
        "domain":"3nob.short.gy",
        "originalURL": link,
        "allowDuplicates":false 
    };
    if (link == "") {
        document.querySelector("#input").style.border = "2px solid hsl(0, 87%, 67%)";
        document.querySelector("#input").classList.add("error");
    } else if (link !== "") {
        document.querySelector("#input").classList.remove("error");
        document.querySelector("#input").style.border = "2px solid transparent";
    }
    fetch('https://api.short.cm/links/public', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'pk_27bdKTOoLndT4s9b'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        document.querySelector(".full_link").textContent = data["originalURL"];
        document.querySelector(".shortened_link_container").style.display = "flex";
        document.querySelector(".shortened_link").textContent = data.shortURL; 
    })
    document.getElementById("input").value='';
});

document.querySelector(".copy").addEventListener("click", () => {
    let inp = document.createElement("input");
    document.body.appendChild(inp);
    inp.value = document.querySelector(".shortened_link").textContent;
    inp.select();
    document.execCommand("copy", false);
    inp.remove();
});


