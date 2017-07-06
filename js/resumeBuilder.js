/**
 * @description contains the bio information
 */
var bio = {
    "name": "Jennifer Young",
    "role": "Front-End Web Developer",
    "contacts":
        {
            "mobile": "636.686.0812",
            "email": "jen.l.young@gmail.com",
            "github": "jenlyoung",
            "twitter": "@jenyoung",
            "location": "St. Louis, MO"
        },
    "welcomeMsg" : "Welcome to my resume! I am a Udacity student and I am currently learning Java Script. I hope to use my new skills to become a front-end developer.",
    "skills" : ["HTML", " CSS", " Python ", " Java Script"],
    "biopic" : "images/fry.jpg"
};

/**
 * @description Displays the bio section
 */
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);

    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedName);

    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').prepend(formattedLocation);
    $('#footerContacts').prepend(formattedLocation);

    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').prepend(formattedGithub);
    $('#footerContacts').prepend(formattedGithub);

    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts').prepend(formattedEmail);
    $('#footerContacts').prepend(formattedEmail);

    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#topContacts').prepend(formattedMobile);
    $('#footerContacts').prepend(formattedMobile);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);
    $('#header').append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var s = 0; s < bio.skills.length; s++) {
            var formattedSkills = HTMLskills.replace('%data%', bio.skills[s]);
            $('#header').append(formattedSkills)
        }
    }
};

/**
 * @description Contains the education information
 */
var education = {
    "schools": [
        {
            "name": "University of Denver Sturm College of Law",
            "location": "Denver, CO",
            "degree": "LL.M",
            "majors": ["Environmental and Natural Resources Law and Policy"],
            "dates": "May 2005",
            "url": "http://www.law.du.edu/"
        },
        {
            "name": "Saint Louis University School of Law",
            "location": "St. Louis, MO",
            "degree": "J.D",
            "majors": ["Law"],
            "dates": "May 2004",
            "url": "http://law.slu.edu/"

        },
        {
            "name": "University of Missouri-St. Louis",
            "location": "St. Louis, MO",
            "degree": "B.A., English Literature",
            "majors": ["English Literature", "Writing Certificate"],
            "dates": "May 2000",
            "url": "http://www.umsl.edu//"
        }
    ],
    "onlineCourses": [
        {
            "title": "Introduction to Programming Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/"
        }
    ]
};
//used json.lint.com to validate that education is correct


/**
 * @description Displays the education section
 */
education.display = function(){
    for (var s = 0; s < education.schools.length; s++){
        var school = education.schools[s];

        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
        var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
        $('.education-entry:last').append(formattedNameDegree);

        var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
        $('.education-entry:last').append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
        $('.education-entry:last').append(formattedSchoolLocation);

            for (var m = 0; m < school.majors.length; m++){
                var formattedSchoolMajor = HTMLschoolMajor.replace('%data%',school.majors[m]);
                $('.education-entry:last').append(formattedSchoolMajor);
            }
    };
//the code below is for online education only
    for (var u = 0; u < education.onlineCourses.length; u++){
        var online = education.onlineCourses[u];

        $('#education').append(HTMLonlineClasses);
        $('#education').append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', online.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', online.school);
        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $('.education-entry:last').append(formattedOnlineTitleSchool);

        var formattedOnlineDates = HTMLonlineDates.replace('%data%', online.dates);
        $('.education-entry:last').append(formattedOnlineDates);

        var formattedOnlineUrl = HTMLonlineURL.replace('%data%', online.url);
        $('.education-entry:last').append(formattedOnlineUrl);
    }
};

/**
 * @description Contains the work information
 */
var work = {
    "jobs": [
        {
            "employer": "Adams County Parks and Community Resources",
            "title": "Open Space Program Manager",
            "location": "Brighton, CO",
            "dates": "June 2008 to November 2009",
            "description": "Managed the Adams County Open Space Grant program, which distributes proceeds from a sales tax to qualifying jurisdictions for parks and open space programs."
        },
        {
            "employer": "Adams County Parks and Community Resources",
            "title": "Colorado Conservation Trust Fellow",
            "location": "Brighton, CO",
            "dates": "February 2007 to June 2008",
            "description": "Chosen to participate in Colorado Conseravtion Trust's Future Conservation Leaders Fellowship program."
        },
        {
            "employer": "Colorado 18th Judicial District Court",
            "title": "Judicial Law Cerk for the Honorable J.  Mark Hannen",
            "location": "Centennial, CO",
            "dates": "August 2005 to November 2006",
            "description": "Managed a docket consisting of over 300 cases."
        }
    ]
};
//validated json

/**
 * @description Displays the work section
 */
work.display = function(){
    for (var j = 0; j < work.jobs.length; j++){
        var job = work.jobs[j];

        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('.work-entry:last').append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        $('.work-entry:last').append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        $('.work-entry:last').append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(formattedDescription);

    }
};

/**
 * @description Contains the projects section
 */
var projects = {
    "projects": [
        {
            "title": "HMTL Notes",
            "dates": "2017",
            "description": "HTML page that contains notes from the INDP.",
            "images": ["Project1.jpg"]
        },
        {
            "title": "Jen's Notes--Styled ",
            "dates": "2017",
            "description": "HTML page from :Jen's Notes, styled with CSS.",
            "images": ["HTML-CSS.png"]
        },
        {
            "title": "Code Your Own quiz",
            "dates": "2017",
            "description": "Fill-in-the-blanks quiz using Python",
            "images": ["Game.png"]
        },
        {
            "title": "Movie Website",
            "dates": "2017",
            "description": "Website that displays movie posters, provides important information about the movies, and plays the movie trailer when clicked.",
            "images": ["movieTrailer.png"]
        }
    ]
};
//validated json

/**
 * @description Displays the projects section
 */
projects.display = function(){
    // for (project in projects.projects) {
    for (var p = 0; p < projects.projects.length; p++){
        var project = projects.projects[p];

        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
        $('.project-entry:last').append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
        $('.project-entry:last').append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedProjectDescription);

        for (var i = 0; i < project.images.length; i++){
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
    name[2] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + ' ' + name[1];
}

inName(bio.name);
bio.display();
education.display();
work.display();
projects.display();


