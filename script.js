var _a;
// Listing Element.
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs.
    var profilePictureInput = document.getElementById('profilePicture');
    var aboutElement = document.getElementById("about");
    var nameElement = document.getElementById("name");
    var fathernameElement = document.getElementById("fathername");
    var dateofbirthElement = document.getElementById("dateofbirth");
    var cnicElement = document.getElementById("cnic");
    var genderElement = document.getElementById("gender");
    var domicileElement = document.getElementById("domicile");
    var religionElement = document.getElementById("religion");
    var martialstatusElement = document.getElementById("martialstatus");
    var nationalityElement = document.getElementById("nationality");
    var addressElement = document.getElementById("address");
    var contactElement = document.getElementById("contact");
    var educationElement = document.getElementById("education");
    var projectsElement = document.getElementById("projects");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var contdetailElement = document.getElementById("contdetail");
    var languagesElement = document.getElementById("languages");
    // Check if all from elements are present.
    if (profilePictureInput && aboutElement && nameElement && fathernameElement && dateofbirthElement && cnicElement && genderElement && domicileElement && religionElement && martialstatusElement && nationalityElement && addressElement && contactElement && educationElement && projectsElement && experienceElement && skillsElement && contdetailElement && languagesElement) {
        var about = aboutElement.value;
        var name_1 = nameElement.value;
        var fathername = fathernameElement.value;
        var dateofbirth = dateofbirthElement.value;
        var cnic = cnicElement.value;
        var gender = genderElement.value;
        var domicile = domicileElement.value;
        var religion = religionElement.value;
        var martialstatus = martialstatusElement.value;
        var nationality = nationalityElement.value;
        var address = addressElement.value;
        var contact = contactElement.value;
        var education = educationElement.value;
        var projects = projectsElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var contdetail = contdetailElement.value;
        var languages = languagesElement.value;
        // Picture Elements.
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create Resume Output.
        var resumeOutput = "\n  \n  ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n\n  <h3>About Me:</h3>\n  <p>").concat(about, "</p>\n\n  <h3>Personal Information:</h3>\n  <p> <strong>Name:</strong>").concat(name_1, "<p> \n  <p> <strong>Father Name:</strong>").concat(fathername, "<p> \n  <p> <strong>Date Of Birth:</strong>").concat(dateofbirth, "<p> \n  <p> <strong>CNIC:</strong>").concat(cnic, "<p> \n  <p> <strong>Gender:</strong>").concat(gender, "<p> \n  <p> <strong>Domicile:</strong>").concat(domicile, "<p> \n  <p> <strong>Religion:</strong>").concat(religion, "<p>\n  <p> <strong>Martial Status:</strong>").concat(martialstatus, "<p> \n  <p> <strong>Nationality:</strong>").concat(nationality, "<p> \n  <p> <strong>Address:</strong>").concat(address, "<p>\n  <p> <strong>Contact:</strong>").concat(contact, "</p>\n  \n  <h3>Education:</h3>\n  <p>").concat(education, "</p>\n\n  <h3>Projects:</h3>\n  <p>").concat(projects, "</p>\n\n  <h3>Work Experience:</h3>\n  <p>").concat(experience, "</p>\n\n  <h3>Skills:</h3>\n  <p>").concat(skills, "</p>\n\n  <h3>Contact Details:</h3>\n  <p>").concat(contdetail, "</p>\n  \n  \n  <h3>Languages:</h3>\n  <p>").concat(languages, "</p>");
        // Display the resume Objcet.
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = 'block';
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
        }
    }
});
