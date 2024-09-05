window.addEventListener("scroll",() => {
    if (window.scrollY > 100) {
        hedaerele.classList.add("scroll-down")
        
    } else {
        hedaerele.classList.remove("scroll-down")
    }
})