function setJefferCreqPage() {
    $(".navbar-brand").text("JefferCreq");
    $("#pucp, #linkedin").hide();
    $("#twitter, #reddit, #play-category, #shop-category").show();
}

function setPucpPage() {
    $(".navbar-brand").text("Home");
    $("#pucp, #linkedin").show();
    $("#twitter, #reddit, #play-category, #shop-category").hide();
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        setPucpPage();
    } else {
        setTheme('theme-dark');
        setJefferCreqPage();
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('darkmode-toggle').checked = true;
        setJefferCreqPage();
    } else {
        setTheme('theme-light');
        document.getElementById('darkmode-toggle').checked = false;
        setPucpPage();
    }
})();