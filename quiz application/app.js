window.onload = function () {
    show(0)
}

var questions = [
    {
        id: 1,
        question: 'Q01:&nbspWhat does HTML stand for?',
        correct: 'Hyper text markup language',
        options: [
            'Hyper text markup language',
            'HyperText and links Markup Language',
            'HighText Machine Language',
            'None of these ',
        ],

    },
    {
        id: 2,
        question: 'Q02:&nbspA program in HTML can be rendered and read by-',
        options: [
            'Web browser    ',
            'Server',
            'lnterpreter',
            'None of Above',
        ],
        correct: 'Web browser',
    },
    {
        id: 3,
        question: 'Q03:&nbspWhat is the correct HTML for adding a background color? ',
        options: [
            'body style=backgorund-color:yellow"',
            'background&nbspyellow&nbsp/background',
            'body bg=yellow',
            'None of these',
        ],
        correct: '<body style=backgorund-color:yellow>',
    },
    {
        id: 4,
        question: 'Q04:&nbspChoose the correct HTML element to define important text',
        options: [
            'important',
            'i',
            'strong',
            'b',
        ],
        correct: 'strong',
    },
    {
        id:5,
        question: 'Q05:&nbspChoose the correct HTML element to define emphasized text',
        options: [
            'italic',
            'i',
            'em',
            'stylish',
        ],
        correct: 'italic',
    },
    {
        id: 6,
        question: 'Q06:&nbspWhich character is used to indicate an end tag',
        options: [
            '/',
            '^',
            '*',
            '>',
        ],
        correct: '>',
    }
    ,
    {
        id: 7,
        question: 'Q07:&nbspThe correct sequence of HTML tags for starting a webpage is_____',
        options: [
            'Head, Title, HTML, body',
            'HTML, Body, Title, Head',
            'HTML, Head, Title, Body',
            'Body, Head, Title,HTML',
        ],
        correct: 'HTML, Head, Title, Body',
    }
    ,
    {
        id: 8,
        question: 'Q08:&nbspWhich of the following tag is used to create a combo box?       ',
        options: [
            'list',
            'Select',
            'Input type=dropdown',
            'ul',
        ],
        correct: 'Input type=dropdown',
    }
    ,
    {
        id: 9,
        question: 'Q09:&nbspWhich of the following tag is used to create a combo box?        ',
        options: [
            'method',
            'action',
            'both (a) and (b))',
            'None Of the Above',
        ],
        correct: 'None Of the Above',
    }
    ,
    {
        id: 10,
        question: 'Q10:&nbspThe tags in HTML are -',
        options: [
            'case-sensitive',
            'in upper case',
            'not case sensitive',
            'in lowercase',
        ],
        correct: 'not case',
    }
]







function quiz() {
    document.getElementById('sub')
    location.href = './quiz.html'
}

// NOW QUIZ FANTIONS

var count_questions = 0;
var point = 0;
function next() {
    
    count_questions++;
    show(count_questions);


if(count_questions ==  questions.length -1){
    location.href ="result.html";
}



// let user_answer = document.querySelector("li.option.active").innerHTML;

        //   check answer by user

//   if(user_answer == questions[count_questions].correct){
//       console.log('right ')
      
//     }
//     else{
        
//         point += 10
//         sessionStorage.setItem('points',point)
//         console.log('wrong answer')
  
// }







}
function show(ques) {
  let question = document.getElementById('questions')
    question.innerHTML = `<h2>${questions[ques].question}</h2>
    <ul class="option_group">
                    <li class="option">${questions[ques].options[0]}</li>
                    <li class="option">${questions[ques].options[1]}</li>
                    <li class="option">${questions[ques].options[2]}</li>
                    <li class="option">${questions[ques].options[3]}</li>
                </ul>`
   toggleActive();
}


function toggleActive() {
    var option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
               for (let j = 0; j < option.length; j++) {
                 if(option[j].classList.contains('active')){
                    option[j].classList.remove('active')
                 }
                }
                option[i].classList.add('active');
        }
    }

}
