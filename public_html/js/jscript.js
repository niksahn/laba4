
class Test {

    questionField;
    answerField;
    constructor(questions) {
        this.questions = questions;
        this.rezults;
        this.currentQuestion = 0;
    }
    start() {
        alert("hi");
        questionWin = open("questionPage.html", "hell");
       
        this.questionField = this.questionWin.document.getElementById("question");
        this.answerField = this.questionWin.document.getElementById("answer");
        this.showQuestion();

    }
    finish() {

    }

    showQuestion() {

        alert(this.questions[this.currentQuestion].question);
        alert(this.questionField);
        let div = document.createElement("div");
        div.innerHTML = "<p>" + this.questions[this.currentQuestion].question + "</p>";
        this.questionField.replaceChild(div, this.questionField.lastChild);

    }
    enterAnswer(ansv) {
        this.questions[this.currentQuestion].currentAnswer = ansv;
    }

}


class Question {
    constructor(question, type, rightAnswer, cost) {
        this.question = question;
        this.type = type;
        this.rightAnswer = rightAnswer;
        this.currentAnswer;
        this.cost = cost;
        this.id;
    }
    check() {
        return this.currentAnswer === this.rightAnswer;
    }
}

class QuestionWithVars extends Question {
    constructor(question, type, rightAnswer, cost, variantsOfAnswer) {
        super(question, type, rightAnswer, cost);
        this.variantsOfAnswer = variantsOfAnswer;
    }
}


class Rezults {
    constructor() {
        this.score;
    }

}

var questions = [
    new Question("Как избежать ядерного взрыва?", "text", "никак", 1)
];
var test = new Test(questions);
