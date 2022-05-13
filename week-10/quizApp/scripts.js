const resultContainer = document.getElementById("resultContainer");
const scoresContainer = document.getElementById("scoresContainer");
const result = document.getElementById("result");
const resultPrefix = document.getElementById("resultPrefix");
const resultInfo = document.getElementById("resultInfo");
const btnContainer = document.getElementById("btnContainer");
const loader = document.getElementById("loader");
let name,score;

const dispScores = ()=>{
    try{
        let quizResult = localStorage.getItem("quizResult");
        if(quizResult != null) {
            localStorage.removeItem("quizResult");
            results = quizResult.split('~')
            name=results[0];
            score=results[1];
            submitQuiz();
        } else {
            getAllScores();
        }
    }
    catch(er){
        console.error(er);
    }
}


const checkPreviousRecord = async ()=>{
    let apiResponse = await fetch(`https://627df586271f386cefee62a7.mockapi.io/users/score?search=${name}`);
    let result = await apiResponse.json(); 
    if(result.length > 0)
        return result[0];
    else
            return null;
}

const submitQuiz = async () =>{
    let prevRecord = await checkPreviousRecord();
    resultContainer.classList.remove('d-none');
    btnContainer.classList.add('d-none');
    if(prevRecord != null && prevRecord.score >= score){   
        result.innerHTML = `Congrats ${name}! You Scored: <strong>${score}</strong>`
        resultInfo.innerHTML = `Your Current HighScore: <strong>${prevRecord.score}</strong>`;
        getTopScores();
    }
    else{
        result.innerHTML = `Congrats ${name}! You Scored: ${score}`;
        if(prevRecord) {
            resultInfo.innerHTML = `Your previous best: <strong>${prevRecord.score}<\strong>`;
        }
        saveScore(prevRecord);
    }   
}

const saveScore = async (dbRecord)=>{
    let response = await fetch(`https://627df586271f386cefee62a7.mockapi.io/users/score/${dbRecord != null ? dbRecord.id : ''}`,{
                        method: `${dbRecord != null ? 'PUT' : 'POST'}`,
                        body : JSON.stringify({
                            name,
                            score
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    })
     getTopScores();
};

const createElement = (elem , classes , parentElem) =>{
    let createdElement = document.createElement(elem);
    createdElement.setAttribute('class',classes);
    parentElem.append(createdElement);
    return createdElement;
}

const getTopScores = async ()=>{
    let emailId = localStorage.getItem("emailId");
    let apiResponse = await fetch(`https://627df586271f386cefee62a7.mockapi.io/users/score?sortBy=score&order=desc`);
   let scores = await apiResponse.json();
    let tableBody = document.getElementById("tableBody");
    let userScore= scores.find(obj => obj.name === name);
    let topScores = scores.slice(0, 3);
    if(topScores.indexOf(userScore) == -1 ) {
        userScore.position = scores.indexOf(userScore) + 1;
        topScores.push(userScore);
    }
    topScores.forEach((element,index) => {
       let tr = createElement("tr",``,tableBody);
       if(name != null && name === element.name){
        tr.setAttribute('class',"table-active");
       }
       let pos = element.position ? userScore.position : index + 1;
       tr.innerHTML = `
            <td scope="col">${pos}</td>
            <td scope="col">${element.name}</td>
            <td scope="col">${element.score}</td>
       `;
   });
   loader.classList.add('d-none');
   scoresContainer.classList.remove('d-none');
};

const getAllScores = async ()=>{
    let emailId = localStorage.getItem("emailId");
    let apiResponse = await fetch(`https://627df586271f386cefee62a7.mockapi.io/users/score?sortBy=score&order=desc`);
   let scores = await apiResponse.json();
    let tableBody = document.getElementById("tableBody");
    let userScore= scores.find(obj => obj.name === name);
    let topScores = scores.slice(0, 5);
    topScores.forEach((element,index) => {
       let tr = createElement("tr",``,tableBody);
       if(name != null && name === element.name){
        tr.setAttribute('class',"table-active");
       }
       tr.innerHTML = `
            <td scope="col">${index + 1}</td>
            <td scope="col">${element.name}</td>
            <td scope="col">${element.score}</td>
       `;
   });
   loader.classList.add('d-none');
   scoresContainer.classList.remove('d-none');
};

dispScores();
