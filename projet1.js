var i;
var creative = document.getElementsByClassName("creative");
var corporate = document.getElementsByClassName("corporate");
var portfolio = document.getElementsByClassName("portfolio");
var button = document.getElementsByClassName("filtre");

document.getElementById('showAll').addEventListener('click', function () {
    for (i = 0; i < creative.length; i++) {
        creative[i].style.opacity = 1;
    };

    for (i = 0; i < corporate.length; i++) {
        corporate[i].style.opacity = 1;
    };

    for (i = 0; i < portfolio.length; i++) {
        portfolio[i].style.opacity = 1;
    };
});

document.getElementById('showCreative').addEventListener('click', function () {
    for (i = 0; i < creative.length; i++) {
        creative[i].style.opacity = 1;
    };

    for (i = 0; i < corporate.length; i++) {
        corporate[i].style.opacity = 0.3;
    };

    for (i = 0; i < portfolio.length; i++) {
        portfolio[i].style.opacity = 0.3;
    };
});

document.getElementById('showCorporate').addEventListener('click', function () {
    for (i = 0; i < corporate.length; i++) {
        corporate[i].style.opacity = 1;
    };

    for (i = 0; i < portfolio.length; i++) {
        portfolio[i].style.opacity = 0.3;
    };

    for (i = 0; i < creative.length; i++) {
        creative[i].style.opacity = 0.3;
    };
});

document.getElementById('showPortfolio').addEventListener('click', function () {
    for (i = 0; i < corporate.length; i++) {
        corporate[i].style.opacity = 0.5;
    };

    for (i = 0; i < portfolio.length; i++) {
        portfolio[i].style.opacity = 1;
    };

    for (i = 0; i < creative.length; i++) {
        creative[i].style.opacity = 0.5;
    };
});

for (i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += " active";
    });
}
