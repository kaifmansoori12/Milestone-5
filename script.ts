// Listing Element.
document.getElementById(`resumeForm`)?.addEventListener(`submit`, function(event) {
  event.preventDefault();

// Get references to form elements using their IDs.
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
  
  const aboutElement = document.getElementById(`about`) as HTMLInputElement;
  const nameElement = document.getElementById(`name`) as HTMLInputElement;
  const fathernameElement = document.getElementById(`fathername`) as HTMLInputElement;
  const dateofbirthElement = document.getElementById(`dateofbirth`) as HTMLInputElement;
  const cnicElement = document.getElementById(`cnic`) as HTMLInputElement;
  const genderElement = document.getElementById(`gender`) as HTMLInputElement;
  const domicileElement = document.getElementById(`domicile`) as HTMLInputElement;
  const religionElement = document.getElementById(`religion`) as HTMLInputElement;
  const martialstatusElement = document.getElementById(`martialstatus`) as HTMLInputElement;
  const nationalityElement = document.getElementById(`nationality`) as HTMLInputElement;
  const addressElement = document.getElementById(`address`) as HTMLInputElement;
  const contactElement = document.getElementById(`contact`) as HTMLInputElement;
  const educationElement = document.getElementById(`education`) as HTMLInputElement;
  const projectsElement = document.getElementById(`projects`) as HTMLInputElement;
  const experienceElement = document.getElementById(`experience`) as HTMLInputElement;
  const skillsElement = document.getElementById(`skills`) as HTMLInputElement;
  const contdetailElement = document.getElementById(`contdetail`) as HTMLInputElement;
  const languagesElement = document.getElementById(`languages`) as HTMLInputElement;
 

// Check if all from elements are present.
  if (profilePictureInput && aboutElement && nameElement && fathernameElement && dateofbirthElement && cnicElement && genderElement && domicileElement && religionElement && martialstatusElement && nationalityElement && addressElement && contactElement && educationElement && projectsElement && experienceElement && skillsElement && contdetailElement &&  languagesElement){
      const about = aboutElement.value;
      const name = nameElement.value;
      const fathername = fathernameElement.value;
      const dateofbirth = dateofbirthElement.value;
      const cnic = cnicElement.value;
      const  gender = genderElement.value;
      const domicile = domicileElement.value;
      const religion = religionElement.value;
      const martialstatus = martialstatusElement.value;
      const nationality = nationalityElement.value;
      const address = addressElement.value;
      const contact = contactElement.value;
      const education = educationElement.value;
      const projects = projectsElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const contdetail = contdetailElement.value;
      const languages = languagesElement.value;

// Picture Elements.
  const profilePictureFile = profilePictureInput.files?.[0]
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';


// Create Resume Output.
  const resumeOutput =`
  
  ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : '' }

  <h3>About Me:</h3>
  <p>${about}</p>

  <h3>Personal Information:</h3>
  <p> <strong>Name:</strong>${name}<p> 
  <p> <strong>Father Name:</strong>${fathername}<p> 
  <p> <strong>Date Of Birth:</strong>${dateofbirth}<p> 
  <p> <strong>CNIC:</strong>${cnic}<p> 
  <p> <strong>Gender:</strong>${gender}<p> 
  <p> <strong>Domicile:</strong>${domicile}<p> 
  <p> <strong>Religion:</strong>${religion}<p>
  <p> <strong>Martial Status:</strong>${martialstatus}<p> 
  <p> <strong>Nationality:</strong>${nationality}<p> 
  <p> <strong>Address:</strong>${address}<p>
  <p> <strong>Contact:</strong>${contact}</p>
  
  <h3>Education:</h3>
  <p>${education}</p>

  <h3>Projects:</h3>
  <p>${projects}</p>

  <h3>Work Experience:</h3>
  <p>${experience}</p>

  <h3>Skills:</h3>
  <p>${skills}</p>

  <h3>Contact Details:</h3>
  <p>${contdetail}</p>
  
  
  <h3>Languages:</h3>
  <p>${languages}</p>`;

  






  // Display the resume Objcet.
  const resumeOutputElement = document.getElementById(`resumeOutput`)
  if (resumeOutputElement){
      resumeOutputElement.innerHTML =resumeOutput;
      resumeOutputElement.style.display = 'block';
  
  
  
      const buttonsContainer = document.createElement("div");
      buttonsContainer.id = "buttonsContainer";
      resumeOutputElement.appendChild(buttonsContainer);
  
      
      const downloadButton = document.createElement("button");
      downloadButton.textContent = "Download as PDF";
      downloadButton.addEventListener("click", () => {
        window.print();
      });
      buttonsContainer.appendChild(downloadButton);
  
  
    } 


  



}});