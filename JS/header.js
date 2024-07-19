const profile_btn = document.querySelector(".profile-btn");
const profile_menu = document.querySelector(".profile-menu");

profile_btn.addEventListener("click", () => {
        profile_menu.style.display = "flex";
})

profile_menu.addEventListener("mouseleave", () => {
    if(profile_menu.style.display == "flex")
    {
        profile_menu.style.display = "none";
    } 
})