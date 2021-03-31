const panels = document.querySelectorAll('.panel');

// Looping through the panels and performing an event on them
panels.forEach( panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    });
});

// Function to remove the current active class
function removeActiveClass(){
    panels.forEach( panel => {
        panel.classList.remove('active');
    });
}