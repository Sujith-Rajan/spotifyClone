const question= document.querySelectorAll(".questions")
const answers = document.querySelectorAll(".answer");

question.forEach((questions,index)=>{
    questions.addEventListener("click",()=>{
     
        if(answers[index].style.display === "none"){
            answers[index].style.display = "block";
        }
        else {
            answers[index].style.display = "none";
          }
        
        
    })
}) 