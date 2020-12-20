const createElement = (element , classes , parentElement) =>{
    let createdElement = document.createElement(element);
    createdElement.setAttribute('class',classes);
    parentElement.append(createdElement);
    return createdElement;
}

const createCloneNode = (element , parentElement) =>{
    let createdElement = element.cloneNode(false);
    parentElement.append(createdElement);
    return createdElement;
}

let pageContainer = createElement('div', 'page-container', document.body);
let page = createElement('div', 'page', pageContainer);
let header = createElement('header', '',page);

let headerImage = createElement('div', 'header-image', header);
let img = createElement('img', 'image', headerImage);
img.src = 'images/display-picture-min.jpg';
img.alt = "display-picture";

let headerInfo = createElement('div', 'header-info', header);
let infoTitle = createElement('h1', 'info-title', headerInfo);
    infoTitle.innerHTML = `SIVAKUMAR NEELAKANDAN`;
let infoShortDesc = createElement('h4', 'info-short-desc', headerInfo);
    infoShortDesc.innerHTML = `(Software Developer)`;
let infoLongDesc = createElement('p', 'info-long-desc', headerInfo);
    infoLongDesc.innerHTML = `An Engineering Graduate with a specialization in ECE,
    but developed passion towards building and designing Dynamic Web applications
    which led me towards Software Development. 
    Seeking a Role in a Organisation which involves projects 
    that require both conceptual and analytical thinking thereby
    growing as a person and as a professional. I'm always eager to 
    learn from anyone and everyone. `;


let profileSection = createElement('div', 'profile-section', page);
let profileOtherInfo = createElement('div', 'profile-other-info', profileSection);
let sectionContainer1 = createElement('div', 'section-container', profileOtherInfo);
let subSection1 = createElement('div', 'sub-section', sectionContainer1);
let subSection2 = createCloneNode(subSection1,sectionContainer1);
let subSection3 = createCloneNode(subSection1,sectionContainer1);
let subSection4 = createCloneNode(subSection1,sectionContainer1);


let subSection1Title = createElement('div', 'sub-section-title', subSection1);
    subSection1Title.innerText = `CONTACT`;
let subSection1Items1 = createElement('div', 'sub-section-items', subSection1);
    subSection1Items1.innerHTML = `<i class="fas fa-user-tie bordered"></i>
    <span>Sivakumar Neelakandan</span>`;
let subSection1Items2 = createCloneNode(subSection1Items1,subSection1);
    subSection1Items2.innerHTML = `<i class="fas fa-mobile bordered"></i>
    <span>+91-9003250601</span>`;
let subSection1Items3 = createCloneNode(subSection1Items1,subSection1);
    subSection1Items3.innerHTML = `<i class="fas fa-envelope bordered"></i>
    <span>send2shivaa@gmail.com</span>`;
let subSection1Items4 = createCloneNode(subSection1Items1,subSection1);
    subSection1Items4.innerHTML = `<i class="fas fa-location-arrow bordered"></i>
    <span class="text-right">New No.5,Kambar Street, <br />
        Subramaniya Salai.<br />
        West Saidapet, Chennai - 15.</span>`;


let subSection2Title = createElement('div', 'sub-section-title', subSection2);
    subSection2Title.innerText = `SKILLS`;
let contentContainer1 =  createElement('div', 'content-container column-box', subSection2);
    contentContainer1.innerHTML = `<h4 class='sub-section-items center'>Back-End</h4>
    <div class="sub-section-items">
        <span class='row-box space-apart'>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle'></div>
        </span>
    </div>
    <p class='sub-section-items small'>
        Core Java 8.0, Spring Core, Spring MVC,
        Spring Security, Spring Boot, Hibernate, Spring Boot,
        Spring Data Jpa, Struts, Microservices
    </p>`;
let contentContainer2 =  createElement('div', 'content-container column-box', subSection2);
    contentContainer2.innerHTML = `<h4 class='sub-section-items center'>Front-End</h4>
    <div class="sub-section-items">
        <span class='row-box space-apart'>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle'></div>
            <div class='circle'></div>
            <div class='circle'></div>
        </span>
    </div>
    <p class='sub-section-items small'>
        HTML5, CSS3, BootStrap, Jquery, JavaScript(ES6) <br />
        Angular(Currently learning)
    </p>`
let contentContainer3 =  createElement('div', 'content-container column-box', subSection2);
    contentContainer3.innerHTML = `<h4 class='sub-section-items center'>Database</h4>
    <div class="sub-section-items">
        <span class='row-box space-apart'>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade'></div>
            <div class='circle shade' ></div>
            <div class='circle shade'></div>
            <div class='circle'></div>
            <div class='circle'></div>
        </span>
    </div>
    <p class='sub-section-items small'>
        PostgreSQL, Oracle (SQL, HQL)
    </p>`


let subSection3Title = createElement('div', 'sub-section-title', subSection3);
    subSection3Title.innerText = `LANGUAGES`;
let subSection3ContentContainer = createElement('div', 'content-container row-box space-apart', subSection3);
let subSection3Items1 = createElement('div', 'sub-section-items column-box', subSection3ContentContainer);
let subSection3Items2 = createCloneNode(subSection3Items1,subSection3ContentContainer);
    subSection3Items1.innerHTML = `<h3>English</h3>
    <div class='bordered xl-border'>
        <span>100%</span>
    </div>`;
    subSection3Items2.innerHTML = `<h3>Tamil</h3>
    <div class='bordered xl-border'>
        <span>100%</span>
    </div>`

let subSection4Title = createElement('div', 'sub-section-title', subSection4);
    subSection4Title.innerText = `PASSION`;
let subSection4Items = createElement('div', 'sub-section-items row-box space-apart', subSection4);
    subSection4Items.innerHTML = `<i class="fnt-2 fas fa-laptop-code"></i>
    <i class="fnt-2 far fa-cricket"></i>
    <i class="fnt-2 fal fa-book-open"></i>
    <i class="fnt-2 fas fa-music"></i>`


let profileMainInfo = createElement('div', 'profile-main-info', profileSection);
let sectionContainer2 = createElement('div', 'section-container', profileMainInfo);
let mainInfoSubSection1 = createElement('div', 'sub-section', sectionContainer2);
let mainInfoSubSection2 = createCloneNode(mainInfoSubSection1,sectionContainer2);
let mainInfoSubSection3 = createCloneNode(mainInfoSubSection1,sectionContainer2);


let mainInfoSubSection1Header = createElement('div', 'row-box', mainInfoSubSection1);
let arrowLeft = createElement('div', 'arrow-left', mainInfoSubSection1Header);
let arrowLeftText = createElement('div', 'arrow-header row-box space-apart', mainInfoSubSection1Header);
    arrowLeftText.innerHTML = `<h3 class="sub-section-title">ABOUT ME</h3>
    <i class="fas fa-user-tie bordered l-border"></i>`;
let mainInfoSubSection1Content = createElement('div', 'content-container', mainInfoSubSection1);
let mainInfoSubSection1ContentDesc =  createElement('p', 'info-long-desc white', mainInfoSubSection1Content);
    mainInfoSubSection1ContentDesc.innerHTML = `I am self-motivated, proactive and extremely driven.
    I work well under pressure and can deliver reliable 
    results. I am a team player and can work in a 
    fast-paced environment. Ability to quickly learn 
    new technologies and apply them in business solutions.`;


let mainInfoSubSection2Header = mainInfoSubSection2.appendChild(mainInfoSubSection1Header.cloneNode(true));
    mainInfoSubSection2Header.childNodes[1].childNodes[0].innerText = `EDUCATION`;
let mainInfoSubSection2Content1 = createElement('div', 'content-container column-box', mainInfoSubSection2);
    mainInfoSubSection2Content1.innerHTML = `<h4 class="info-short-desc">2013 to 2017</h4>
    <p class="info-long-desc white">
        M.N.M Jain Engineering College 
    </p>
    <p class="info-long-desc white">
        BE(ECE) - 6.42
    </p>`;
let mainInfoSubSection2Content2 = mainInfoSubSection2.appendChild(mainInfoSubSection2Content1.cloneNode(true));
    mainInfoSubSection2Content2.childNodes[1].innerText = `2013`;
    mainInfoSubSection2Content2.childNodes[3].innerText = `Oxford Matriculation Higher Secondary School`;
    mainInfoSubSection2Content2.childNodes[5].innerText = ` HSLC - 83.25%`;

let mainInfoSubSection2Content3 = mainInfoSubSection2.appendChild(mainInfoSubSection2Content1.cloneNode(true));
    console.log(mainInfoSubSection2Content3.childNodes);
    mainInfoSubSection2Content3.childNodes[1].innerText = `2011`;
    mainInfoSubSection2Content3.childNodes[3].innerText = `Oxford Matriculation Higher Secondary School`;
    mainInfoSubSection2Content3.childNodes[5].innerText = `SSLC - 88%`;



let mainInfoSubSection3Header = mainInfoSubSection3.appendChild(mainInfoSubSection1Header.cloneNode(true));
    mainInfoSubSection3Header.childNodes[1].childNodes[0].innerText = `EXPERIENCE`;

let mainInfoSubSection3Content1 = mainInfoSubSection3.appendChild(mainInfoSubSection2Content1.cloneNode(true));
    mainInfoSubSection3Content1.childNodes[1].className = 'info-long-desc';
    mainInfoSubSection3Content1.childNodes[1].innerText = `Software Developer`;
    mainInfoSubSection3Content1.childNodes[3].innerText = `CNSI Technology Development Center.`;
    mainInfoSubSection3Content1.childNodes[5].innerText = `(Sep 2019  till  Present)`;

let mainInfoSubSection3Content2 = mainInfoSubSection3.appendChild(mainInfoSubSection2Content1.cloneNode(true));
    mainInfoSubSection3Content2.childNodes[1].innerText = `Senior ML Data Associate`;
    mainInfoSubSection3Content2.childNodes[3].innerText = `Amazon Development Center Pvt Ltd.`;
    mainInfoSubSection3Content2.childNodes[5].innerText = `(May 2017  to  May 2020)`;