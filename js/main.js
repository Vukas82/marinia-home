// navabar
function toggle(id, id2) {
    console.log(btn.classList.value)

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