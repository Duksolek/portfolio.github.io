function toggleText(contentId, button) {
    var content = document.getElementById(contentId);

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.querySelector('span:last-child').innerHTML = "&#x25B2;";
        button.parentNode.classList.add('expanded'); // Dodano klasę dla rozwiniętego bloku
    } else {
        content.style.display = "none";
        button.querySelector('span:last-child').innerHTML = "&#x25BC;";
        button.parentNode.classList.remove('expanded'); // Usunięto klasę dla zwiniętego bloku
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


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var nav = document.querySelector('.nav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add('nav-scroll');
    } else {
        nav.classList.remove('nav-scroll');
    }
}