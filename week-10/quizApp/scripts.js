const resultContainer = document.getElementById("resultContainer");
const result = document.getElementById("result");
const resultPrefix = document.getElementById("resultPrefix");
const resultInfo = document.getElementById("resultInfo");
let userId,score;

const dispScores = ()=>{
        try{
            let quizResult = localStorage.getItem("quizResult");
            if(quizResult != null) {
                localStorage.removeItem("quizResult");
                results = quizResult.split('~')
                userId=results[0];
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
    let emailId = localStorage.getItem("emailId");
    let apiResponse = await fetch(`https://600ad9bb778d1a00177948d8.mockapi.io/users/score?search=${userId}`);
   let result = await apiResponse.json(); 
   console.log(result)
   if(result.length > 0)
       return result[0];
   else
        return null;
}

const submitQuiz = async () =>{
    let prevRecord = await checkPreviousRecord();
    resultContainer.classList.remove('d-none');
    if(prevRecord != null && prevRecord.score >= score){   
        saveScore(prevRecord);
        result.innerHTML = `Congrats! You Scored: <strong>${score}</strong>`
        resultInfo.innerHTML = `Your Current HighScore: <strong>${prevRecord.score}</strong>`;
    }
    else{
        result.innerHTML = `Congrats! You Scored: ${score}`;
        resultPrefix.innerHTML = 'HighScore';
        resultInfo.innerHTML = `Your previous best: <strong>${prevRecord.score}<\strong>`;
    }
    getAllScores();
}

const saveScore = async (dbRecord)=>{
    let response = await fetch(`https://600ad9bb778d1a00177948d8.mockapi.io/users/score/${dbRecord != null ? dbRecord.id : ''}`,{
                        method: `${dbRecord != null ? 'PUT' : 'POST'}`,
                        body : JSON.stringify({
                            userId,
                            score
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    })
    console.log(response)
    console.log({
        userId,
        score
    })
};

const createElement = (elem , classes , parentElem) =>{
    let createdElement = document.createElement(elem);
    createdElement.setAttribute('class',classes);
    parentElem.append(createdElement);
    return createdElement;
}


const getAllScores = async ()=>{
    let emailId = localStorage.getItem("emailId");
    let apiResponse = await fetch(`https://600ad9bb778d1a00177948d8.mockapi.io/users/score?sortBy=score&order=desc`);
   let result = await apiResponse.json();
    let tableBody = document.getElementById("tableBody");
    result.forEach((element,index) => {
       let tr = createElement("tr",``,tableBody);
       if(emailId != null && emailId === element.email){
        tr.setAttribute('class',"table-active");
       }
       tr.innerHTML = `
            <td scope="col">${index + 1}</td>
            <td scope="col">${element.name}</td>
            <td scope="col">${element.score}</td>
       `
   });
};


dispScores();