const lightMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    themeToggleBtns.forEach((sunBtn) => {
        sunBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');

            if(document.body.classList.contains('light-mode'))
            {
                localStorage.setItem('theme', 'light-mode');
            }
            else
            {
                localStorage.removeItem('theme');
            }
        });
    });
};
lightMode();
