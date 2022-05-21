var full = document.documentElement;

function fullScreen(){
    if(full.requestFullscreen){
        full.requestFullscreen();
    } else if (full.webkitRequestFullScreen){
        full.webkitRequestFullScreen();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.accordion').forEach(button => {
        button.addEventListener('click', () =>{
            const accordionContent = button.nextElementSibling;
    
            button.classList.toggle('accordion-active');
    
            if(button.classList.contains('accordion-active')){
                accordionContent.style.maxHeight = "130px";
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });    
});