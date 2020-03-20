cosnt STORE = [
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
    },
]

//store quiz score and progress
let question = 0;
let score = 0;

//start quiz
function startQuiz() {
    $('#start').on('click', function(event) {
        generateQuestion();
    }
    );
}
//run each question









//increment the question value and update the question number


//increment the score value and update the score number