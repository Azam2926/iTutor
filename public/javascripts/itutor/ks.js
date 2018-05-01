function KS(spans, answers) {

    this.spans = spans;
    this.answers = answers;
    this.currentS = 0;

}

KS.prototype.isCorrectAnswer = function(value, currentS) {

    if (this.answers[currentS] == value) {
        this.currentS++;
        return 1;
    } else { return 0; }
};

KS.prototype.hasEnded = function() {

    return this.currentS >= this.answers.length;
};

KS.prototype.isLastParagraph = function() {

    if (this.currentS == this.answers.length) {
        return 1;
    }
};