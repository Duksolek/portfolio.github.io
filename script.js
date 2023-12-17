function toggleText(contentId, button) {
    var content = document.getElementById(contentId);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.querySelector('span:last-child').innerHTML = "&#x25B2;";
    } else {
        content.style.display = "none";
        button.querySelector('span:last-child').innerHTML = "&#x25BC;";
    }
}


function skopiuj() {
    var tekstDoSkopiowania = "kochamtrenbolon9";
    var ukrytePole = document.getElementById('ukrytePole');
    ukrytePole.value = tekstDoSkopiowania;
    ukrytePole.select();
    ukrytePole.setSelectionRange(0, 99999);
    document.execCommand("copy");
    var powiadomienie = document.getElementById('powiadomienie');
    powiadomienie.innerText = "Skopiowano nazwę użytkownika do schowka!";
    document.addEventListener('mousemove', function(event) {
        powiadomienie.style.top = (event.clientY - 20) + 'px';
        powiadomienie.style.left = (event.clientX + 20) + 'px';
    });
    powiadomienie.style.display = 'block';
    setTimeout(function() {
        powiadomienie.style.opacity = '0';
        setTimeout(function() {
            powiadomienie.style.display = 'none';
            powiadomienie.style.opacity = '1';
        }, 500);
    }, 2000); 
}