let x = document.querySelectorAll('.btn');
x.forEach(function (forbtn) {
    forbtn.addEventListener("mouseenter", changeLight);
    forbtn.addEventListener("mouseout", change);


    function changeLight() {
        document.querySelector('#action-light').style.background = '#FF3031';
    }
    function change() {
        document.querySelector('#action-light').style.background = '#4C4B4B';
    }
})
let i = document.querySelectorAll('i');
i.forEach(function (fori) {
    fori.addEventListener("mouseenter", changeLight);
    fori.addEventListener("mouseout", change);


    function changeLight() {
        document.querySelector('#action-light').style.background = '#FF3031';
    }
    function change() {
        document.querySelector('#action-light').style.background = '#4C4B4B';
    }
})