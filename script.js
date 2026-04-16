let sliders = {};

function initSlider(containerId) {
    const container = document.getElementById(containerId);
    const slidesWrapper = container.querySelector(".slides");
    const slides = container.querySelectorAll(".slide");
    const wrapper = container.parentElement;
    const prevBtn = wrapper.querySelector(".prev");
    const nextBtn = wrapper.querySelector(".next");

    sliders[containerId] = {
        index: 0,
        total: slides.length,
        wrapper: slidesWrapper,
        prevBtn: prevBtn,
        nextBtn: nextBtn
    };

    updateSlide(containerId);
    updateButtons(containerId);
}

function plusSlides(n, containerId) {
    const slider = sliders[containerId];

    slider.index += n;

    if (slider.index < 0) slider.index = 0;
    if (slider.index > slider.total - 1) slider.index = slider.total - 1;

    updateSlide(containerId);
    updateButtons(containerId);
}

function updateSlide(containerId) {
    const slider = sliders[containerId];

    slider.wrapper.style.transform =
        `translateX(-${slider.index * 100}%)`;
}

function updateButtons(containerId) {
    const slider = sliders[containerId];

    // PREV BUTTON
    if (slider.prevBtn) {
        if (slider.index === 0) {
            slider.prevBtn.classList.add("hidden");
        } else {
            slider.prevBtn.classList.remove("hidden");
        }
    }

    if (slider.nextBtn) {
        if (slider.index === slider.total - 1) {
            slider.nextBtn.classList.add("hidden");
        } else {
            slider.nextBtn.classList.remove("hidden");
        }
    }
}

window.onload = function () {
    initSlider("slider-1");
    initSlider("slider-2");
};

/* === SCROLL ANIMATION (TETAP) === */
function revealOnScroll() {
    const elements = document.querySelectorAll(".section-header, .container");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
