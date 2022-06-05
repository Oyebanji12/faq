// tranversing the dom

var questionTime=document.querySelectorAll('.question');

questionTime.forEach(function (process) {
        //console.log('oranges')
        const clickButton= process.querySelector('.question-btn');
        // console.log('pressed');
        clickButton.addEventListener('click', function () {
            process.classList.toggle('show-text')
            
        })
    
})



/*
var questionBtn= document.querySelectorAll('.question-btn')

questionBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        var question= e.currentTarget.parentElement.parentElement;
        if(question.classList.contains('show-text'))
        question.classList.remove('show-text');

        else{
            question.classList.add('show-text');
        }   
        
    })

})
*/


// or this //

// questionBtn.forEach(function (btn) {
   // btn.addEventListener('click', function (e) {
      //  const question=e.currentTarget.parentElement.parentElement;
    //    question.classList.toggle('show-text')
        
  //  })
    
//})