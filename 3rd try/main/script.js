function changeTheme() {
    const bodyElement = document.body;

    if (bodyElement.classList.contains('dark-theme')) {
        bodyElement.classList.remove('dark-theme');
    } else {
        bodyElement.classList.add('dark-theme');
    }
}