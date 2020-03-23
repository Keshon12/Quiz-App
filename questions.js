const STORE = {
   questions: [
        {//Question 1
            question: 'What NBA player scored 100 points on March 2, 1962?',
            answers: [
                'Wilt Chamberlain',
                'Kareem Abdul-Jabbar',
                'Bill Russell',
                'Elgin Baylor'
            ],
            correctAnswer: 'Wilt Chamberlain'
        },
        {//Question 2
            question: 'Who was the first player in NBA history to be elected league MVP by unanimous vote?',
            answers: [
                'Michael Jordan',
                'Lebron James',
                'Stephen Curry',
                'Kobe Bryant'
            ],
            correctAnswer: 'Stephen Curry'
        },
        {//Question 3
            question: 'What NBA team owns the longest winning streak in NBA history?',
            answers: [
                'Miami Heat',
                'Los Angeles Lakers',
                'Golden State Warriors',
                'Chicago Bulls'
            ],
            correctAnswer: 'Los Angeles Lakers'
        },
        {//Question 4
            question: 'Who was the first WNBA player to dunk in a playoff game?',
            answers: [
                'Brittney Griner',
                'Michelle Snow',
                'Tamika Catchings',
                'Lisa Leslie'
            ],
            correctAnswer: 'Lisa Leslie'
        },
        {//Question 5
            question: 'What Player won All-Star game MVP, NBA MVP, and NBA Finals MVP awards in 2000?',
            answers: [
                'Kobe Bryant',
                'Michael Jordan',
                'Shaquille ONeal',
                'Tim Duncan'
            ],
            correctAnswer: 'Shaquille Oneal'
        }
    ],
    progress: 0,
    score: 0
};

//start quiz
function startQuiz() {
    $('#start').on('click', function(event) {
        generateQuestion();
    }
    );
}

//Show question progress and score
function updateProgress() {
    const html = $(`<ul> <li id="js-completed">Question Number: ${STORE.progress + 1}/${STORE.questions.length}</li>
    <li id ="js-score"> Score: ${STORE.score}/${STORE.questions.length}</li> </ul>`);
    $(".progress-and-score").html(html);
}

//display the answers for the question
function displayAnswers() {
    let question = STORE.questions[STORE.progress];
    for(let i=0; i < question.answers.length; i++) {
        $('.js-answers').append(`<input type = "radio" name = "answers" id = "answer${i+1}" value = ${question.answers[i]}" tabindex = "${i+1}">
        <label for = "answer${i+1}"> ${question.answers[i]} </label> <br/> <span id = "js-r${i+1}"> </span>`);
    }
}

//display the question
function generateQuestion () {
    let question = STORE.questions[STORE.progress];
    updateProgress();
    const questionHtml = $(`<div>
    <form id="js-questions" class="question-form">
      
      <fieldset>
        <div class="top question">
          <div class="quiz">
            <legend> ${question.question}</legend>
          </div>
        </div>

        <div class="top question">
          <div class="quiz">
            <div class="js-question"> </div>
        </div>
      </div>
    

      <div class="top">
        <div class="quiz">
          <button type = "submit" id="answer" tabindex="5">Submit</button>
          <button type = "button" id="next-question" tabindex="6"> Next >></button>
        </div>
      </div>
    </fieldset>
    </form>
  </div>`);
  $("main").html(questionHtml);
  updateProgress();
  $("#next-question").hide();
}

//display results and restart option
function showAnswers() {
    let resultsHtml = $(`<div class="results">
    <form id="js-restart-quiz">
      <fieldset>
        <div class="top">
          <div class="quiz">
            <legend>Your Final Score is: ${STORE.score}/${STORE.questions.length}</legend>
          </div>
        </div>
      
        <div class="top">
          <div class="quiz">
            <button type="button" id="restart"> Restart Quiz </button>
          </div>
        </div>
      </fieldset>
  </form>
  </div>`);
  STORE.progress = 0;
  STORE.score = 0;
  $("main").html(resultsHtml);
}

//checks if questions are done
function  checkQuestions() {
    $('body').on('click','#next-question', (event) => {
        STORE.progress === STORE.questions.length?
        displayAnswers() : generateQuestion();
 });
}

//check for right or wrong answer and display corresponding message
function checkAnswer() {
    $('body').on("submit",'#js-questions', function (event) {
        event.preventDefault();
        let current = STORE.questions[STORE.progress];
        let selected = $("input[name=answers]:checked").val();
        if (!selected) {
            alert("Please select an answer");
            return;
        }
        let num = current.options.findIndex(i => i === selected);
        let id = "#js-r" + ++num;
        $('span').removeClass("right-answer wrong-answer");
        if(selected === current.correctAnswer) {
            STORE.score++;
            $(`${id}`).append(`Your answer is correct<br/>`);
            $(`${id}`).addClass("right-answer");
        }
        else {
            $(`${id}`).append(`Your answer is wrong. <br/> The Correct answer is: ${current.correctAnswer} <br/>`);
            $(`${id}`).addClass("wrong-answer");
        }
        STORE.progress++;
        $("#js-score").text(`Score: ${STORE.score}/${STORE.questions.length}`);
        $('#correctAnswer').hide();
        $("input[type=radio]").attr('disabled', true);
        $('#next-question').show();
    });
}

function restartApp() {
    $('body').on('click','#restart', (event) => {
        generateQuestion();
    });
}

function quizApp() {
    startQuiz();
    checkQuestions();
    checkAnswer();
    restartApp();
}

$(quizApp);
