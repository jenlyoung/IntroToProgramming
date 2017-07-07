/**
 * @description contains the bio information
 */
var bio = {
    "name": "Jennifer Young",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "636.686.0812",
        "email": "jen.l.young@gmail.com",
        "github": "jenlyoung",
        "twitter": "@jenyoung",
        "location": "St. Louis, MO"
    },
    "welcomeMessage": "Welcome to my resume! I am a Udacity student and I am currently learning JavaScript. I hope to use my new skills to become a front-end developer.",
    "skills": ["HTML", " CSS", " Python ", " JavaScript"],
    "biopic": "images/fry.jpg"
};

/**
 * @description Displays the bio section
 */
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName, formattedRole);

    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#topContacts, #footerContacts').prepend(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').append(formattedBioPic, formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var s = 0; s < bio.skills.length; s++) {
            var formattedSkills = HTMLskills.replace('%data%', bio.skills[s]);
            $('#skills').append(formattedSkills);
        }
    }
};

/**
 * @description Contains the education information
 */
var education = {
    "schools": [{
        "name": "University of Denver Sturm College of Law",
        "location": "Denver, CO",
        "degree": "LL.M",
        "majors": ["Environmental and Natural Resources Law and Policy"],
        "dates": "May 2005",
        "url": "http://www.law.du.edu/"
    }, {
        "name": "Saint Louis University School of Law",
        "location": "St. Louis, MO",
        "degree": "J.D",
        "majors": ["Law"],
        "dates": "May 2004",
        "url": "http://law.slu.edu/"
    }, {
        "name": "University of Missouri-St. Louis",
        "location": "St. Louis, MO",
        "degree": "B.A., English Literature",
        "majors": ["English Literature", "Writing Certificate"],
        "dates": "May 2000",
        "url": "http://www.umsl.edu//"
    }],
    "onlineCourses": [{
        "title": "Introduction to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/"
    }]
};

/**
 * @description Displays the education section
 */
education.display = function() {
    for (var s = 0; s < education.schools.length; s++) {
        var school = education.schools[s];

        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
        var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
        // $('.education-entry:last').append();

        var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
        // $('.education-entry:last').append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
        $('.education-entry:last').append(formattedNameDegree, formattedSchoolDates ,formattedSchoolLocation);

        for (var m = 0; m < school.majors.length; m++) {
            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.majors[m]);
            $('.education-entry:last').append(formattedSchoolMajor);
        }
    }
    //the code below is for online education only
    for (var u = 0; u < education.onlineCourses.length; u++) {
        var online = education.onlineCourses[u];

        $('#education').append(HTMLonlineClasses, HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', online.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', online.school);
        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        // $('.education-entry:last').append(formattedOnlineTitleSchool);

        var formattedOnlineDates = HTMLonlineDates.replace('%data%', online.dates);
        // $('.education-entry:last').append(formattedOnlineDates);

        var formattedOnlineUrl = HTMLonlineURL.replace('%data%', online.url);
        $('.education-entry:last').append(formattedOnlineTitleSchool, formattedOnlineDates, formattedOnlineUrl);
    }
};

/**
 * @description Contains the work information
 */
var work = {
    "jobs": [{
        "employer": "Adams County Parks and Community Resources",
        "title": "Open Space Program Manager",
        "location": "Brighton, CO",
        "dates": "June 2008 to November 2009",
        "description": "Managed the Adams County Open Space Grant program, which distributes proceeds from a sales tax to qualifying jurisdictions for parks and open space projects."
    }, {
        "employer": "Adams County Parks and Community Resources",
        "title": "Colorado Conservation Trust Fellow",
        "location": "Brighton, CO",
        "dates": "February 2007 to June 2008",
        "description": "Chosen to participate in Colorado Conservation Trust's Future Conservation Leaders Fellowship program. Served as project manager on two key open space acquisitions and wrote over $9 million in successful grant applications. "
    }, {
        "employer": "Colorado 18th Judicial District Court",
        "title": "Judicial Law Clerk for the Honorable J. Mark Hannen",
        "location": "Centennial, CO",
        "dates": "August 2005 to November 2006",
        "description": "Managed a docket of civil and criminal cases consisting of over 300 cases."
    }]
};

/**
 * @description Displays the work section
 */
work.display = function() {
    for (var j = 0; j < work.jobs.length; j++) {
        var job = work.jobs[j];

        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        // $('.work-entry:last').append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        // $('.work-entry:last').append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        // $('.work-entry:last').append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);

    }
};

/**
 * @description Contains the projects section
 */
var projects = {
    "projects": [{
        "title": "Getting Started with HTML",
        "dates": "2017",
        "description": "HTML page that contains notes from the Introduction to Programming Nanodegree.",
        "images": ["Project1.png"]
    }, {
        "title": "Make a Web Page",
        "dates": "2017",
        "description": "A professional-looking web page using both HTML and CSS.",
        "images": ["HTML-CSS.png"]
    }, {
        "title": "Code Your Own Quiz",
        "dates": "2017",
        "description": "Fill-in-the-blanks quiz using Python.",
        "images": ["Game.png"]
    }, {
        "title": "Movie Website",
        "dates": "2017",
        "description": "Website that displays movie posters, provides important information about the movies, and plays the movie trailer when poster image is clicked.",
        "images": ["movieTrailer.png"]
    }]
};

/**
 * @description Displays the projects section
 */
projects.display = function() {
    for (var p = 0; p < projects.projects.length; p++) {
        var project = projects.projects[p];

        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

        for (var i = 0; i < project.images.length; i++) {
            var formattedProjectImage = HTMLprojectImage.replace('%data%', project.images[i]);
            $('.project-entry:last').append(formattedProjectImage);
        }
    }
};


/**
 * @description Displays the google map
 */
$('#mapDiv').append(googleMap);

/**
 * @description Changes bio name to international capitalization
 */
$('#main').append(internationalizeButton);

function inName(name) {
    name = name.trim().split(' ');

    name[1] = name[1].toUpperCase();
    name[2] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + ' ' + name[1];
}

inName(bio.name);
bio.display();
education.display();
work.display();
projects.display();