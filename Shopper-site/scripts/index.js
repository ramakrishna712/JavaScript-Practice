
function LoadPage(page) {
    var http = new XMLHttpRequest();
    http.open("get", page, true);
    http.send();
    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            console.log(http.responseText);
            document.querySelector("section").innerHTML = http.responseText;
        } else if (http.readyState === 4) {
            console.error("Failed to load page: " + page + ", Status: " + http.status);
        }
    }
}

function bodyload() {
    LoadPage("home.html");
}

