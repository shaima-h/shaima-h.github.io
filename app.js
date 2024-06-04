document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#mobile-menu')
    const menuLinks = document.querySelector('.navbar__menu')

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    function toggleDescription(element) {
        // Remove active class from all descriptions and project names
        const descriptions = document.querySelectorAll('.description');
        const projectContainers = document.querySelectorAll('.project__container');

        descriptions.forEach(description => {
            description.classList.remove('active');
        });

        projectContainers.forEach(container => {
            container.classList.remove('active');
        });

        // // Add active class to the clicked project name and its description
        // const description = element.nextElementSibling;
        // element.classList.add('active');
        // description.classList.add('active');

        // Add active class to the clicked project name and its description
        const descriptionId = element.getAttribute('data-description');
        const description = document.getElementById(descriptionId);
        element.classList.add('active');
        description.classList.add('active');
    }

    // Add event listeners to project names
    document.querySelectorAll('.project__container').forEach(projectContainer => {
        projectContainer.addEventListener('click', function() {
            toggleDescription(this);
        });
    });
});