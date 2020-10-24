const lazyImages = document.querySelectorAll('[data-src]');
const lazyImageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const preloadImage = function(image) {
    const src = image.getAttribute('data-src');
    if (!src) {
        return;
    }
    image.src = src;
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        console.log(entry);
        preloadImage(entry.target);
        observer.unobserve(entry.target);
    });
}, lazyImageOptions);


lazyImages.forEach((image) => {
    observer.observe(image);
})