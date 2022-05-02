document.addEventListener("DOMContentLoaded", () => {
    let i = 0;
    document.querySelectorAll('.accordion').forEach(button => {
        i = i + 1;
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            button.classList.toggle('accordion-active');
            
            if(button.classList.contains('accordion-active')){
                accordionContent.style.maxHeight = '100px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
});