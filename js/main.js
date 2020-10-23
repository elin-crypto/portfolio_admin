//By: elin kurtsdotter
"use strict";



/* Toggle between *** and show password */
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


//VARIABLES
//education
let educationEl = document.getElementById("education");
let addEduBtn = document.getElementById("addEducation");
let schoolInput = document.getElementById("school");
let eduNameInput = document.getElementById("eduName");
let eduStartInput = document.getElementById("eduStart");
let eduStopInput = document.getElementById("eduStop");
let updateEducationEl = document.getElementById("updateEducation");
let addEducationFormEl = document.getElementById("addEducationForm");
//work
let workEl = document.getElementById("work");
let addWorkBtn = document.getElementById("addWork");
let workplaceInput = document.getElementById("workPlace");
let workTitleInput = document.getElementById("workTitle");
let workStartInput = document.getElementById("workStart");
let workStopInput = document.getElementById("workStop");
let workCityInput = document.getElementById("workCity");
let updateWorkEl = document.getElementById("updateWork");
let addWorkFormEl = document.getElementById("addWorkForm");
//websites
let websitesEl = document.getElementById("websites");
let addWebsiteBtn = document.getElementById("addWebsiteBtn");
let wsTitleInput = document.getElementById("wsTitle");
let wsUrlInput = document.getElementById("wsUrl");
let wsDescriptionInput = document.getElementById("wsDescription");
let updateWebsiteEl = document.getElementById("updateWebsite");
let addWebsiteFormEl = document.getElementById("addWebsiteForm");
let wsImageInput = document.getElementById("file");

//eventListener
window.addEventListener('load', getCourses);
addEduBtn.addEventListener('click', addCourse);
window.addEventListener('load', getWork);
addWorkBtn.addEventListener('click', addWork);
window.addEventListener('load', getWebsite);
addWebsiteBtn.addEventListener('click', addWebsite);


//Functions
/********************************
 * EDUCATION
*********************************/
//GET education/courses
function getCourses() {
  educationEl.innerHTML = '';

  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/education.php')
    .then(respones => respones.json())
    .then(data => {
      data.forEach(education => {
        educationEl.innerHTML +=
        `<tr>
          <td contenteditable="true" id="nEduName${education.id}"> ${education.edu_name}</td>
          <td contenteditable="true" id="nEduSchool${education.id}">${education.edu_school}</td>
          <td contenteditable="true" id="nEduStart${education.id}"> ${education.edu_start} </td>
          <td contenteditable="true" id="nEduStop${education.id}"> ${education.edu_stop} </td>
          <td><button id="${education.id}" onclick="updateCourse(${education.id})" class="btn">Uppdatera</button></td>
          <td><button id="${education.id}" onclick="deleteCourse(${education.id})" class="btn">Radera</button></td>
        </tr>`        
      })
    })
}


// DELETE COURSES
function deleteCourse(id) {
  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/education.php?id=' + id, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      getCourses();
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}


// ADD COURSES
function addCourse(ev) {
  let school = schoolInput.value;
  let eduName = eduNameInput.value;
  let eduStart = eduStartInput.value;
  let eduStop = eduStopInput.value;

  ev.preventDefault(); //prevent reload page 

  //make it an object
  let education = {'edu_school': school, 'edu_name': eduName, 'edu_start': eduStart, 'edu_stop': eduStop};

  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/education.php', {
    method: 'POST',
    body: JSON.stringify(education),
  })
    .then(response => response.json())
    .then(data => {
      getCourses();
    })
    .then(function resetForm() {
      document.getElementById("addEducationForm").reset();
    })
    
    .catch(error => {
      console.log('Error: ', error);
    })
}


// * UPDATE COURSES

function updateCourse(id) {
  let newSchoolInput = document.getElementById("nEduSchool" + id);
  let newEduNameInput = document.getElementById("nEduName" + id);
  let newEduStartInput = document.getElementById("nEduStart" + id);
  let newEduStopInput = document.getElementById("nEduStop" + id);

  let newSchool = newSchoolInput.innerHTML;
  let newEduName = newEduNameInput.innerHTML;
  let newEduStart = newEduStartInput.innerHTML;
  let newEduStop = newEduStopInput.innerHTML;

  //make it an object
  let newCourse = {'edu_school': newSchool, 'edu_name': newEduName, 'edu_start': newEduStart, 'edu_stop': newEduStop};

  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/education.php?id=' + id, {
    method: 'PUT',
    body: JSON.stringify(newCourse),
  })
    .then(response => response.json())
    .then(data => {
      getCourses();
      popUp("Du har uppdaterat kursen");

    })
    .catch(error => {
      console.log('Error: ', error);
    })

}


/********************************
 *  WORK
*********************************/
// GET work
function getWork() {
  workEl.innerHTML = '';

  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/work.php')
    .then(respones => respones.json())
    .then(data => {
      data.forEach(work => {
        workEl.innerHTML +=
        `<tr>
          <td contenteditable="true" id="nWorkplace${work.id}"> ${work.work_place}</td>
          <td contenteditable="true" id="nWorkTitle${work.id}">${work.work_title}</td>
          <td contenteditable="true" id="nWorkCity${work.id}">${work.work_city}</td>
          <td contenteditable="true" id="nWorkStart${work.id}"> ${work.work_start} </td>
          <td contenteditable="true" id="nWorkStop${work.id}"> ${work.work_stop} </td>
          <td><button id="${work.id}" onclick="updateWork(${work.id})" class="btn">Uppdatera</button></td>
          <td><button id="${work.id}" onclick="deleteWork(${work.id})" class="btn">Radera</button></td>
        </tr>`        
      })
    })
}


 // * DELETE WORK
function deleteWork(id) {
  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/work.php?id=' + id, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      getWork();
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}

// * ADD WORK
function addWork(ev) {
  let workPlace = workplaceInput.value;
  let workTitle = workTitleInput.value;
  let workStart = workStartInput.value;
  let workStop = workStopInput.value;
  let workCity = workCityInput.value;
  
  ev.preventDefault(); //prevent reload page

  //make it an object
  let work = {'work_place': workPlace, 'work_title': workTitle, 'work_start': workStart, 'work_stop': workStop, 'work_city': workCity};

  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/work.php', {
    method: 'POST',
    body: JSON.stringify(work),
  })
    .then(response => response.json())
    .then(data => {
      getWork();
    })
    .then(function resetForm() {
      document.getElementById("addWorkForm").reset();
    })
    
    .catch(error => {
      console.log('Error: ', error);

    })
}

// * UPDATE WORK
function updateWork(id) {
  let newWorkPlaceInput = document.getElementById("nWorkplace" + id);
  let newWorkTitleInput = document.getElementById("nWorkTitle" + id);
  let newWorkStartInput = document.getElementById("nWorkStart" + id);
  let newWorkStopInput = document.getElementById("nWorkStop" + id);
  let newWorkCityInput = document.getElementById("nWorkCity" + id);

  let newWorkplace = newWorkPlaceInput.innerHTML;
  let newWorkTitle = newWorkTitleInput.innerHTML;
  let newWorkStart = newWorkStartInput.innerHTML;
  let newWorkStop = newWorkStopInput.innerHTML;
  let newWorkCity = newWorkCityInput.innerHTML;

  //make it an object
  let newWork = {'work_place': newWorkplace, 'work_title': newWorkTitle, 'work_start': newWorkStart, 'work_stop': newWorkStop, 'work_city': newWorkCity};

  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/work.php?id=' + id, {
    method: 'PUT',
    body: JSON.stringify(newWork),
  })
    .then(response => response.json())
    .then(data => {
      getWork();
      popUp("Du har uppdaterat arbete");
    })
    .catch(error => {
      console.log('Error: ', error);
    })

}


/********************************
 *  WEBSITE
*********************************/
// * GET website
function getWebsite() {
  websitesEl.innerHTML = '';

  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/websites.php')
    .then(respones => respones.json())
    .then(data => {
      data.forEach(websites => {
        websitesEl.innerHTML +=
        `<div class="oneWebsite">
        <section class="websiteSection">
          <h4 contenteditable="true" id="nWsTitle${websites.id}"> ${websites.ws_title}</h4>
            <p contenteditable="true" id="nWsUrl${websites.id}" class="kursiv">${websites.ws_url}</p>
            <p contenteditable="true" id="nWsDescription${websites.id}"> ${websites.ws_description} </p>
            <span><button id="${websites.id}" onclick="updateWebsite(${websites.id})" class="btn">Uppdatera</button></span>
            <span><button id="${websites.id}" onclick="deleteWebsite(${websites.id})" class="btn">Radera</button></span>
        </section>
        <!--<section class="img-thumb">
          <img src="images/${websites.ws_image}" alt="${websites.ws_image}">
          <p contenteditable="true" id="nWsImage${websites.id}">${websites.ws_image}</p>
        </section>-->
        <hr></div>`        
      })
    })
}

 // * DELETE Website
function deleteWebsite(id) {
  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/websites.php?id=' + id, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      getWebsite();
    })
    .catch(error => {
      console.log('Error: ', error);
    })
}

// * ADD Website
function addWebsite(ev) {
  let wsTitle = wsTitleInput.value;
  let wsUrl = wsUrlInput.value;
  let wsDescription = wsDescriptionInput.value;
  //let wsImage = wsImageInput.value;
  
  ev.preventDefault(); //prevent reload page

  //make it an object
  let website = {'ws_title': wsTitle, 'ws_url': wsUrl, 'ws_description': wsDescription/*, 'ws_image': wsImage*/};
  
  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/websites.php', {
    method: 'POST',
    body: JSON.stringify(website),
  })
    .then(response => response.json())
    .then(data => {
      getWebsite();
    })
    .then(function resetForm() {
      document.getElementById("addWebsiteForm").reset();
    })
    
    .catch(error => {
      console.log('Error: ', error);

    })
}


// * UPDATE Website
function updateWebsite(id) {
  let newWsTitleInput = document.getElementById("nWsTitle" + id);
  let newWsUrlInput = document.getElementById("nWsUrl" + id);
  let newWsDescriptionInput = document.getElementById("nWsDescription" + id);
  //let newWsImageInput = document.getElementById("nWsImage" + id); 

  let newWsTitle = newWsTitleInput.innerHTML;
  let newWsUrl = newWsUrlInput.innerHTML;
  let newWsDecription = newWsDescriptionInput.innerHTML;
  //let newWsImage = newWsImageInput.innerHTML;

  //make it an object
  let newWebsite = {'ws_title': newWsTitle, 'ws_url': newWsUrl, 'ws_description': newWsDecription/*, 'ws_image': newWsImage*/};

  fetch('http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioAdmin/API/websites.php?id=' + id, {
    method: 'PUT',
    body: JSON.stringify(newWebsite),
  })
    .then(response => response.json())
    .then(data => {
      getWebsite();
      popUp("Du har uppdaterat webbsidan");
    })
    .catch(error => {
      console.log('Error: ', error);
    })

}



function popUp(message) {
  alert(message);
}








// Show/Hide EDUCATION FORM
$(document).ready(function(){
  $("#showEducationForm").click(function(){
    $("#addEducationForm").slideDown();
  });
});

$(document).ready(function(){
  $("#hideEducation").click(function(){
    $("#addEducationForm").slideUp();
  });
});

// Show/Hide WORK FORM
$(document).ready(function(){
  $("#showWorkForm").click(function(){
    $("#addWorkForm").slideDown();
  });
});
$(document).ready(function(){
  $("#hideWork").click(function(){
    $("#addWorkForm").slideUp();
  });
});

// Show/Hide WEBSITE FORM
$(document).ready(function(){
  $("#showWebsiteForm").click(function(){
    $("#addWebsiteForm").slideDown();
  });
});
$(document).ready(function(){
  $("#hideWebsite").click(function(){
    $("#addWebsiteForm").slideUp();
  });
});