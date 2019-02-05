function toggle() {
    const hookAside = document.querySelector("#hookAside");
    const hide = document.querySelector("#hide");
    const show = document.querySelector("#show");
    if (hookAside.style.display === "none") {
        hookAside.style.display = "flex";
        hide.style.display = "inline-block";
        show.style.display = "none";
    } else {
        hookAside.style.display = "none";
        show.style.display = "inline-block";
        hide.style.display = "none";
    }
}