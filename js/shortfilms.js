const carrouselOpenerBtn1 = document.querySelector(".shortfilms__video1__container"),
carrouselOpenerBtn2 = document.querySelector(".shortfilms__video2__container"),
imageView = document.querySelector(".image-view"),
imageBox = document.querySelector(".image-box");

imageView.addEventListener("click", 
function() {
    this.style.display = "none";
    imageBox.style.display = "none";
} )

carrouselOpenerBtn1.addEventListener("click" ,
function() {
    imageView.style.display= " block ";
    imageBox.style.display = " block ";
    imageBox.innerHTML=`
    <div id="carouselWithControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../imagenesShortfilms/corto-1.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 1">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/corto-2.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 2">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/corto-3.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/corto-4.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/corto-5.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/corto-6.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/corto-7.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselWithControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselWithControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
    </div>`

})


carrouselOpenerBtn2.addEventListener("click" ,
function() {
    imageView.style.display= " block ";
    imageBox.style.display = " block ";
    imageBox.innerHTML=`
    <div id="carouselWithControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../imagenesShortfilms/still-1.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 1">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-2.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 2">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-3.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-5.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-6.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-7.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-8.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-9.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-10.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-11.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>
            <div class="carousel-item">
                <img src="../imagenesShortfilms/still-12.jpg" class="d-block w-100 altura__imagenesCarrousel__shortfilms" alt="Slide 3">
            </div>

        </div>
        <a class="carousel-control-prev" href="#carouselWithControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselWithControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
    </div>`

})