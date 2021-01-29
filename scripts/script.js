const app = (() => {
    const _headerList = document.querySelector(".header__list");
    const _headerMenuIcon = document.querySelector(".header__hamburger");

    let _menuOpen = false;

    _headerMenuIcon.addEventListener("click", (event) => {
        
        _menuOpen = !_menuOpen;

        if (_menuOpen) {
            showMenu();
            activeCloseMenuIcon();
        } else {
            removeMenu();
            activeHamburgerMenuIcon();
        }

    })

    function showMenu() {
        _headerList.classList.add("show");
    }

    function removeMenu() {
        _headerList.classList.remove("show");
    }

    function activeCloseMenuIcon() {
        _headerMenuIcon.src = "images/icon-close.svg";

    }

    function activeHamburgerMenuIcon() {
        _headerMenuIcon.src = "images/icon-hamburger.svg";
    }

})();