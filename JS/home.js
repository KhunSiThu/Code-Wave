import { adsInfo } from "./objects.js";

const s1_div = document.querySelector(".s1-div");
const adsSmImg = document.querySelectorAll(".adsSmImg");

const adsShow = (e) => {
    s1_div.innerHTML = `
                <div class="s1-left">
                    <img src="${e.img}" alt="">
                     <!-- <img src="/Image/backEnd.png" alt=""> -->
                </div>
                <div class="s1-right">
                    ${e.info}
                </div>
    `
}

let index = 0;    
adsShow(adsInfo[index]);
adsSmImg[index].classList.add("adsSmImgChange");
const adsChange = setInterval(() => {
    adsSmImg[index].classList.remove("adsSmImgChange");
    if(index <= 4){
        index++;
        if(index === 5)
            {
                index = 0;
            }
        adsSmImg[index].classList.add("adsSmImgChange");
        adsShow(adsInfo[index]);
    }
    
}, 2500);


