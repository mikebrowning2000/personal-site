let about = document.querySelector('#about') , aboutWin = document.querySelector('#aboutWin'), aboutCls = document.querySelector("#aboutCls") 
let projects = document.querySelector('#projects') , projectsWin = document.querySelector('#projectsWin'), projectsCls = document.querySelector("#projectsCls")
let contact = document.querySelector('#contact') , contactWin = document.querySelector('#contactWin'), contactCls = document.querySelector("#contactCls")
let social = document.querySelector('#social') , socialWin = document.querySelector('#socialWin'), socialCls = document.querySelector("#socialCls")
let windowFour = document.querySelector('#windowFour') , windowFourWin = document.querySelector('#windowFourWin'), windowFourCls = document.querySelector("#windowFourCls")
let profileImg = document.querySelector('#profileImg')
let profileText = document.querySelector('.profileText')
let profileSocials = document.querySelector('.profileSocials')





function toggleAbout() {
    if (aboutWin.classList.contains('showMe')) {
        aboutWin.classList.remove('showMe');
       
    } else {
        aboutWin.classList.add('showMe');
        
    }
}

about.addEventListener('click', toggleAbout)
aboutCls.addEventListener('click', toggleAbout)

function toggleprojects() {
    if (projectsWin.classList.contains('showMe')) {
        projectsWin.classList.remove('showMe');
       
    } else {
        projectsWin.classList.add('showMe');
        
    }
}

projects.addEventListener('click', toggleprojects)
projectsCls.addEventListener('click', toggleprojects)

function togglesocial() {
    if (socialWin.classList.contains('showMe')) {
        socialWin.classList.remove('showMe');
       
    } else {
        socialWin.classList.add('showMe');
        
    }
}

social.addEventListener('click', togglesocial)
socialCls.addEventListener('click', togglesocial)

function togglecontact() {
    if (contactWin.classList.contains('showMe')) {
        contactWin.classList.remove('showMe');
       
    } else {
        contactWin.classList.add('showMe');
        
    }
}

contact.addEventListener('click', togglecontact)
contactCls.addEventListener('click', togglecontact)

function togglewindowFour() {
    if (windowFourWin.classList.contains('showMe')) {
        windowFourWin.classList.remove('showMe');
       
    } else {
        windowFourWin.classList.add('showMe');
        
    }
}

windowFour.addEventListener('click', togglewindowFour)
windowFourCls.addEventListener('click', togglewindowFour)

function toggleSocials() {


    if (profileImg.classList.contains('revealSocials')) {
        profileImg.classList.remove('revealSocials')
    } else {
        profileImg.classList.add('revealSocials')
    }

    if (profileText.classList.contains('hideMe')) {
        profileText.classList.remove('hideMe')
    } else {
        profileText.classList.add('hideMe')
    }

    if (profileSocials.classList.contains('hideMe')) {
        profileSocials.classList.remove('hideMe')
    } else {
        profileSocials.classList.add('hideMe')
    }
}

profileImg.addEventListener('click', toggleSocials)
