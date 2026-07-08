// get the current year and display it in the footer
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.addEventListener('DOMContentLoaded', function() {
    let lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Modification: " + lastModified;
});



// array of course items
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// variable to hold the filtered courses
const allLink = document.querySelector("#all-link");
const cseLink = document.querySelector("#cse-link");
const wddLink = document.querySelector("#wdd-link");
const links = [allLink, cseLink, wddLink];




// function to filter courses based on selected criteria
function setActiveLink(activeLink) {
    links.forEach(link => link.classList.remove("active"));
    activeLink.classList.add("active");
}

// Function to handle filters
function handleFilter(event, filterCallback) {
    event.preventDefault();
    setActiveLink(event.target);
    const filteredCourses = filterCallback();
    displayCourses(filteredCourses);
}

// Event listeners for filter links
allLink.addEventListener("click", (event) => {handleFilter(event, () => courses, "all-link")});
cseLink.addEventListener("click", (event) => {handleFilter(event, () => courses.filter(course => course.subject === 'CSE'), "cse-link")});
wddLink.addEventListener("click", (event) => {handleFilter(event, () => courses.filter(course => course.subject === 'WDD'), "wdd-link")});

// Function to create course cards and display them
function displayCourses(courseArray) {
    const courseList = document.querySelector(".course-list");
    courseList.innerHTML = ""; // Clear existing courses

    // calculate total credits for displayed courses
    const totalCredits = courseArray.reduce((sum, course) => sum + course.credits, 0);
    const totalCreditsElement = document.createElement("p");
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
    courseList.appendChild(totalCreditsElement);

    courseArray.forEach(course => {
        let courseCard = document.createElement("div");
        let courseTitle = document.createElement("h3");

        courseCard.classList.add("course-card");
        if (course.completed) {
            courseTitle.textContent = `✅ ${course.subject} ${course.number}: ${course.title}`; 
        } else {
            courseTitle.textContent = `${course.subject} ${course.number}: ${course.title}`;
            courseCard.classList.add("incomplete");
        }

        courseCard.appendChild(courseTitle);
        courseList.appendChild(courseCard);
    });

}

// Initialize the page with all courses displayed
displayCourses(courses);
setActiveLink(allLink);

// function filterCourses(subject, technology, completed) {
//     return courses.filter(course => {
//         if (subject && course.subject !== subject) return false;
//         if (technology && !course.technology.includes(technology)) return false;
//         if (completed !== undefined && course.completed !== completed) return false;
//         return true;
//     });
// }