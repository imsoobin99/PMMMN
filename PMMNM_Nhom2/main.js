function toggleForm(){
    container = document.querySelector(".container");
    container.classList.toggle('active');
}

window.addEventListener('scroll', function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
