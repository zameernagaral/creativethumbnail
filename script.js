document.addEventListener("DOMContentLoaded", function () {
    let logo = document.querySelector(".logo");
    
    let nav = document.querySelector("nav");
    let header = document.querySelector("header");
    let main = document.querySelector("main");
    let footer = document.querySelector("footer");
    let thumbnailViewer = document.querySelector(".thumbnailViewer");
    let images = document.querySelectorAll("img");
    let back = document.querySelector(".back");
    let lower = document.querySelector(".lower");
    let work = document.querySelectorAll(".thumbnails");
    let hire = document.querySelector(".hire");
    let works = document.querySelector(".workC");
    

    
        const hamburger = document.getElementById('hamburger');
        const links = document.querySelector('.links');


        hire.addEventListener("click", function () {
            window.location.href = "mailto:shorttalks15@gmail.com";
        });
hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
        links.classList.toggle('show');
        window.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !links.contains(event.target)) {
                hamburger.classList.remove('active');
                links.classList.remove('show');
            }
        });
});
// Optional: Hide menu when a link is clicked (for better UX)
document.querySelectorAll('.links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                links.classList.remove('show');
            });
});


    
    

    
    

    back.style.display = "none";
    logo.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    images.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            work.forEach(function (work) {
                let img = thumbnail.getAttribute("src");
                let worksrc = work.getAttribute("src");
                let image = document.createElement("img");
                if (img === worksrc) {
                    
                    
                    
                
            

            back.style.display = "block";
            window.scrollTo(0, 0);
            lower.style.display = "none";
            nav.style.display = "none";
            header.style.display = "none";
            main.style.display = "none";
            footer.style.display = "none";
            
            image.src = img;
            thumbnailViewer.appendChild(image);
        }
            });

        
        });
    });
    back.addEventListener("click", function () {
        window.location.reload();
    });

    



});