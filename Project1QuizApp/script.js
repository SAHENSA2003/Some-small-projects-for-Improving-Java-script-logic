import differentQuestionSet from "./questionset.js";
console.log(differentQuestionSet)
/* Variables of DOM   */
const select = (element) => document.querySelector(element);
const CreateDom = (element) => document.createElement(element);

const landing = select('.landing');
const TestContainer = select('.TestContainer');
const ResultSheet = select('.resultSheet');
const AllFields = [landing, TestContainer, ResultSheet];

const StartBtn = select('.StartBtn');
const QuestionText = select('.question');
const WatchTime = select('#stopwatch');
const AnswerContainer = select('.Option');

let Attempt = select('.attempt .out');
let Attempt2 = select('.attempt .of');
const Attempt3 = select('.attempt');
const Option = select('.Option');
const scoreDom = select('#scoreDom');
const ResultScore = select('#score .out');
const FinalScore = select('.result .out');
const MaXScore = select('.result .of');
const resultMassage = select('.resultMassage');
const Progressbar = select('.progress');
const ResetBtn = select('.reset');
const QuitBtn = select('.quit');
const Duration = 150 * 1000;
const ResultMassage = select('.resultMassage');
const Reset = select('.reset');
const Quit = select('.quit');


/* Normal variables  */
let currentIndex = 0;
let currentQuestionObj = null;
let Score = 0;
let isDisabled = false;
let quizQuestion = null;
let ExamDuration = null;
let set = null;
let TotalSecond = 30;


function showField(val1, val2, val3) {
    let vals = [val1, val2, val3];
    AllFields.forEach((field, i) => {
        field.classList.remove('flex', 'hidden');
        field.classList.add(vals[i]);
    });
}
showField('flex', 'hidden', 'hidden');


const chooseRandom = () => {
  const randomIndex = Math.floor(Math.random() * differentQuestionSet.length);
  quizQuestion = differentQuestionSet[randomIndex];

}
// quiz state vars 


StartBtn.addEventListener('click', startQuiz);

function StopWatch() {
    clearInterval(set);

    let updateTime = TotalSecond;
    set = setInterval(() => {
        updateTime--;
        WatchTime.textContent = updateTime;
    }, 1000);
}

function startQuiz() {
    showField('hidden', 'flex', 'hidden');
    StopWatch();
    chooseRandom();
    showQuestion();
    ExamDuration = setTimeout(() => { showResult() }, TotalSecond * 1000);

}
function progress() {
    const progressPercent = currentIndex * (100 / quizQuestion.length);
    Progressbar.style.width = progressPercent + '%';
}
function showQuestion() {
    isDisabled = false;
    currentQuestionObj = quizQuestion[currentIndex];
    QuestionText.textContent = currentQuestionObj.Question;
    Attempt.textContent = currentIndex + 1;
    Attempt2.textContent = quizQuestion.length;

    Option.innerHTML = '';
    currentQuestionObj.Answer.forEach(answer => {
        const button = CreateDom('button');
        button.textContent = answer.text;
        button.classList.add('answer');
        progress();
        button.dataset.correct = answer.correct;
        button.addEventListener('click', SelectedAnswer);
        Option.appendChild(button);
    })
}

function SelectedAnswer(event) {
    if (isDisabled) return;

    isDisabled = true;/* As user can only choose one option from the question  */
    const clickedBtn = event.target;
    const isCorrect = event.target.dataset.correct;

    // checking the correct answer;
    Array.from(Option.children).forEach((button) => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        } else if (isCorrect === 'false') {
            clickedBtn.classList.add('incorrect');
        }
    });
    // increasing the value of the score 

    if (isCorrect === 'true') {
        Score++
        scoreDom.textContent = Score;

    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex + 1 > quizQuestion.length) {
            progress();
            Attempt3.innerHTML = `<span>compleat</span>`;
            clearTimeout(ExamDuration);
            clearInterval(set);
            setTimeout(() => { showResult() }, 2000);

        } else {
            showQuestion();
            progress();
        }

    }, 1000);



}
function showResult() {

    const Impression = [
        'You are the best ! with your Performance , WoW!!',
        'fantastic !! keep learning',
        'Very good !! some small practice will improve as of future best',
        'You have tried good enough . need more practice 😐'

    ];
    showField('hidden', 'hidden', 'flex');
    console.log('Quiz is over');
    ResultScore.textContent = Score;

    if (Score === 5) {
        ResultMassage.textContent = Impression[0];
    } else if (Score === 3) {
        ResultMassage.textContent = Impression[2];
    } else if (Score > 3) {
        ResultMassage.textContent = Impression[1]
    } else {
        ResultMassage.textContent = Impression[3]
    }
}
Reset.addEventListener('click', Restart)
Quit.addEventListener('click', QuitQuiz);


function Restart() {
    Attempt3.innerHTML = `<span class="out"></span>out of <span class="of">`;

    Attempt = select('.attempt .out');
    Attempt2 = select('.attempt .of');
    RestartAllVariable();
    startQuiz();
}
function QuitQuiz() {
    showField('flex', 'hidden', 'hidden');
    RestartAllVariable();
}

function RestartAllVariable() {

    clearInterval(set);
    clearTimeout(ExamDuration);
    currentIndex = 0;
    currentQuestionObj = null;
    TotalSecond = 30;
    Score = 0;
    isDisabled = false;
    scoreDom.textContent = 0;
    quizQuestion = null;
    WatchTime.textContent = 0;

}







