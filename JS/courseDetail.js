// get course data
const courseDetail = JSON.parse(localStorage.getItem("chooseCourse"));
const courseData = courseDetail.courseData;

const episode_con = document.querySelector(".episode-con");
const display_video = document.querySelector(".display-video");
const cd_s1 = document.querySelector(".cd-s1");

//section 1
cd_s1.innerHTML = `
    <article>
        <div class="Instructor-profile">
            <img src="/Image/${courseDetail.instImg}" alt="">
        </div>
        <div class="In_name">
            <h3>${courseDetail.instructor}</h3>
            <p>Instructor</p>
        </div>
        <div class="In_link">
            <a href="#"><i class="fa-brands fa-youtube "></i></a>
            <a href="#"><i class="fa-brands fa-facebook "></i></a>
        </div>
    </article>
    <ul>
        <li>
            <h4>Course Name</h4>
            <strong>${courseDetail.courseName}</strong>
        </li>
        <li>
            <h4>Learning Students </h4>
            <strong>${courseDetail.learnStudents}</strong>
        </li>
        <li>
            <h4>Total Episode</h4>
            <strong>${courseDetail.totalEpisode}</strong>
        </li>
        <li>
            <h4>Course Duration </h4>
            <strong>${courseDetail.duration}</strong>
        </li>
    </ul>
`
//dicplay video
const videoShow = (e) => {
    display_video.src = `${e.path}`;
}
videoShow(courseData[0]);

courseData.forEach((e) => {
    // section 2 left
    episode_con.innerHTML += `
        <li><h3>${e.title}</h3><button><i class="fa-solid fa-play"></i></button></li>
    `
});




