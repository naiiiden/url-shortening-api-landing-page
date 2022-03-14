document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#nav-ul").classList.toggle("show");
    if (document.getElementById("menu-icon").getAttribute("src") === "images/menu_black_36dp.svg") {
        document.getElementById("menu-icon").setAttribute("src", "images/close_black_36dp.svg");
    } else {
        document.getElementById("menu-icon").setAttribute("src", "images/menu_black_36dp.svg");
    };
});

// document.getElementById("myinput").addEventListener("click", () => {
//     let link = document.getElementById("linkinput").value;
//     let data = {
//         "domain":"3nob.short.gy",
//         "originalURL": link,
//         "allowDuplicates":false 
//     };
//     fetch('https://api.short.cm/links/public', {
//         method: 'post',
//         headers: {
//             'accept': 'application/json',
//             'Content-Type': 'application/json',
//             'authorization': 'pk_27bdKTOoLndT4s9b'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data){
//         document.getElementById("message").textContent = "Your short link is " + data.shortURL 
//     })
//     document.getElementById("linkinput").value='';
// });
