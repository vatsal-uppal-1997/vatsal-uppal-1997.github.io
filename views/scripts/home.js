function toggle() {
    const hookAside = document.querySelector("#hookAside");
    const hide = document.querySelector("#hide");
    const show = document.querySelector("#show");
    const content = document.querySelector("#contentHook");
    if (hookAside.style.display === "none") {
        hookAside.style.display = "flex";
        hide.style.display = "inline-block";
        show.style.display = "none";
        content.style.transform = "translate(20rem)";
        content.style.marginRight = "20rem";
    } else {
        hookAside.style.display = "none";
        show.style.display = "inline-block";
        hide.style.display = "none";
        content.style.transform = "unset";
        content.style.marginRight = "0";
    }
}