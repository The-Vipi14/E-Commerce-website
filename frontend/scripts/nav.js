fetch("../components/nav.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
    });