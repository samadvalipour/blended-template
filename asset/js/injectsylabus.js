const ul = document.getElementById("syllabus");
const coursetitle = document.getElementById("course_title");
coursetitle.textContent = coursecontent["name"]

syllabus = coursecontent["lectures"]
console.log(syllabus);

for (const key in syllabus) {
    const li = document.createElement("li");
    const button = document.createElement("a");
    button.className = "content_item text-justify rounded-lg"
    button.id = key
    button.addEventListener('click', function() {
        openlecture(this)
    });
    
    const span1 = document.createElement("span");
    span1.textContent = key  
    span1.className = "w-5"
    const span2 = document.createElement("span");
    span2.textContent = syllabus[key]["title"]
    button.appendChild(span1)
    button.appendChild(span2)
    li.appendChild(button);
    ul.appendChild(li);
}




function inject_data(id, text, image_url){
    let image = ""
    if (image_url !== "") {
        image = `
        <div>
            <img src="${image_url}" alt="practice image" />
        </div>`
    }
    let exercise_template = `
        <div>
            <p class="text-lg font-bold mb-3">تمرین ${id}</p>
            <p class="text-justify">${text}</p>
        </div>
        ${image}`
    
    return exercise_template
}

const video = document.getElementById("video");
const exercise = document.getElementById("exercises");
const items = document.getElementsByClassName("content_item")
let last_btn = document.createElement("a");

function openlecture(obj) {
    last_btn.classList.remove('bg-base-200');
    obj.classList.add("bg-base-200")
    last_btn = obj
    id = obj.id
    sessionStorage.setItem("id", id);
    video.src = syllabus[id]["video"]
    let exercises = syllabus[id]["exercises"]
    exercise.innerHTML = ""
    for (const key in exercises) {
        const div = document.createElement("div");
        div.className = "flex flex-col w-full bg-base-100 border md:border rounded-box p-5 gap-10"
        let text = exercises[key]["text"]
        let image_url = ""
        if ("image" in exercises[key]) {
            image_url = exercises[key]["image"]
        }
        let template = inject_data(key, text, image_url)
        div.innerHTML = template
        console.log(div);
        exercise.appendChild(div);
        }
}
