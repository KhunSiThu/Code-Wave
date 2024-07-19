import { courses } from "./objects.js";

const course_show_con = document.querySelector(".course-show-con");
const cs2_left_menu = document.querySelector(".cs2-left-menu");
const all_btn = document.querySelector(".all-btn");
const design_btn = document.querySelector(".design-btn");
const front_btn = document.querySelector(".front-btn");
const back_btn = document.querySelector(".back-btn");
const project_btn = document.querySelector(".project-btn");
const sort_con = document.querySelector("#sort_con");

// Get Courses Datas From JSON File
const getCourses = async () => {
    let response = await fetch("/JSON/Web.json");
    let data = await response.json();
    return data;
}

// Courses Show Function
const coursesShow = (e) => {
   
        course_show_con.innerHTML += `
            <a href = "#" class="course-box course${e.courseId}" course_No = ${e.courseId}>
                <button class="save-btn"><i class="wh-col fa-solid fa-bookmark"></i></button>
                <div class="course-box-left">
                    <div class = "course-img-con"><img class="course-img" src="/Image/${e.courseImg}" alt=""></div>
                    <h2>${e.courseName}</h2>
                </div>
                <hr>
                <ul>
                    <li>
                        <div class="Instructor-profile">
                            <img src="/Image/${e.instImg}" alt="">
                        </div>
                        <div>
                            <h3>${e.instructor}</h3>
                            <p>Instructor</p>
                        </div>
                    </li>
                    <li>
                        <h4>Total Episode</h4>
                        <span>- ${e.totalEpisode}</span>
                    </li>
                    <li>
                        <h4>Learing Students </h4>
                        <span>- ${e.learnStudents}</span>
                    </li>
                    <li>
                        <h4>Course Duration </h4>
                        <span>- ${e.duration}</span>
                    </li>
                    <button class="learn-now-btn learn-btn${e.courseId}">Learn Now</button>
                </ul>

                
            </a>
        `
    
}

const courseMenuShow = () => {
    course_show_con.innerHTML = "";

    if(all_btn.checked === false && front_btn.checked === false && back_btn.checked === false && design_btn.checked === false && project_btn.checked === false)
    {
        all_btn.checked = true;
    }

    if(all_btn.checked == true)
    {
        front_btn.checked = false;
        back_btn.checked = false;
        design_btn.checked = false;
        project_btn.checked = false;
        courses.forEach((e) => {
            coursesShow(e);
        })
    }

    if(design_btn.checked == true)
    {
        const coursesFilter = courses.filter((e) => {return e.course === "Design"})
        coursesFilter.forEach((e) => {
            coursesShow(e);
        })
    }

    if(front_btn.checked == true)
    {
        const coursesFilter = courses.filter((e) => {return e.course === "Front"})
        coursesFilter.forEach((e) => {
            coursesShow(e);
        })
    }

    if(back_btn.checked == true)
    {
        const coursesFilter = courses.filter((e) => {return e.course === "Back"})
        coursesFilter.forEach((e) => {
            coursesShow(e);
        })
    }

    if(project_btn.checked == true)
    {
        const coursesFilter = courses.filter((e) => {return e.courseId > 24})
        coursesFilter.forEach((e) => {
            coursesShow(e);
        })
    } 
}

courses.forEach((e) => {
    coursesShow(e);
});

all_btn.checked = true;

cs2_left_menu.addEventListener("click", (e) => {
    if(e.target.classList.contains("all-btn"))
        {
            courseMenuShow();
        }

    if(e.target.classList.contains("design-btn"))
        {
            all_btn.checked = false;
            courseMenuShow();
        }

    if(e.target.classList.contains("front-btn"))
        {
            all_btn.checked = false;
            courseMenuShow();
        }

    if(e.target.classList.contains("back-btn"))
        {
            all_btn.checked = false;
            courseMenuShow();
        }

    if(e.target.classList.contains("project-btn"))
        {
            all_btn.checked = false;
            courseMenuShow();
        }
})

document.querySelector(".row").addEventListener("click", () => {
    course_show_con.classList.add("flex");
})

document.querySelector(".column").addEventListener("click", () => {
    course_show_con.classList.remove("flex");
})

// course click test

const course_box = document.querySelectorAll(".course-box");

course_box.forEach((e) => {
    e.addEventListener("click", () => {
        const chooseCourse = courses.filter((el) => {return el.courseId == e.attributes.course_No.value});
        localStorage.setItem("chooseCourse",JSON.stringify(chooseCourse[0]));
        localStorage.setItem("currentPage",window.location)
    })
})