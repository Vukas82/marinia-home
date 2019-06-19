// navabar
function toggle(id, id2) {
    // console.log(btn.classList.value)

    if (btn.classList.value === "small-drop-btn") {
        btn.classList.add('is-active');
    } else {
        btn.classList.remove('is-active');
    }

    let n = document.getElementById(id);
    if (n.style.display != 'none') {
        n.style.display = 'none';
        document.getElementById(id2).setAttribute('aria-expanded', 'true');
    } else {
        n.style.display = '';
        document.getElementById(id2).setAttribute('aria-expanded', 'false');
    }
}

// ----------------------------------------------

// scroll to top

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}