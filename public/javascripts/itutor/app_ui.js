var UI = {

    displayNext: function() {

        if (ks.hasEnded()) {
            this.disPlayEnd();
        } else {
            this.displayNextParagraphs(ks.currentS + 1);
            paragraphs.attempts = 0;
        }
    },

    displayNextParagraphs: function(id) {


        this.seeingP(id);
        this.guessHandler(id);
        this.attempts('p' + id, id);
    },

    guessHandler: function(id) {

        var s = document.getElementById(id);

        s.onclick = function() {

            guess.addEventListener('keyup', function() {

                if (event.keyCode == 100) {
                    guess.value = ks.answers[id - 1];
                }

            }, false);

            UI.cssDisplayNone([result, wrongDiv]);
            checkBtn.setAttribute('disabled', '');

            UI.removePOnclick(id);
            nextAudio.play();
            UI.cssDisplayBlock([inputs]);
            s.style = ['background-color: #a8e494;' + 'border-radius: 7px;'];
            UI.guessChanging();

            checkBtn.onclick = function() {


                var guess = document.getElementById('guess').value;
                var isCorrect = ks.isCorrectAnswer(guess, id - 1);

                if (isCorrect) {
                    UI.nextBtn(id, isCorrect);
                } else {
                    UI.nextBtn(id, isCorrect);
                }
            };
            const saz = s;
            document.addEventListener('keydown', function() {

                if (event.keyCode == 32) {
                    saz.click();
                }

            }, false);
            s.onclick = null;
        };
    },

    attempts: function(id, idNumber) {

        var p = document.getElementById(id);

        p.onclick = function() {

            wrongAudio.play();
            att = ++paragraphs.attempts;
            UI.cssDisplayBlock([result]);
            if (att >= 2) {

                result.innerHTML = '<button type="submit" id="seeMistake" class="btn">See mistake</button>';
                UI.seeMistake(idNumber);
            } else {
                result.innerHTML = 'Try again';
            }

        };

    },

    seeMistake: function(id) {

        var seeBtn = document.getElementById('seeMistake');

        seeBtn.onclick = function() {

            nextAudio.play();
            UI.cssDisplayNone([result]);

            var s = document.getElementById(id);
            s.style = ['background-color: #a8e494;' + 'border-radius: 7px;'];
            UI.removePOnclick(id);

        };
    },

    nextBtn: function(id, isCorrect) {

        var s = document.getElementById(id);

        if (isCorrect) {


            correctAudio.play();
            inputs.appendChild(nextButton);
            UI.cssDisplayInline([wrongDiv]);
            wrongDiv.innerHTML = imageRight;
            result.style.display = 'block';
            UI.cssDisplayNone([checkBtn, result]);
            UI.cssDisplayInline([nextButton]);
            if (id == s.parentNode.parentNode.lastChild.previousSibling.getElementsByClassName('keys')[0].id) {
                nextButton.innerHTML = 'Over';
            }

            nextButton.onclick = function() {

                correctAudio.pause();
                UI.workedPS(id);
                UI.cssDisplayInline([checkBtn]);
                UI.cssDisplayNone([this, inputs, result]);
                guess.value = '';
                s.innerHTML = ks.answers[ks.currentS - 1];
                nextAudio.play();
                UI.displayNext();
            };

            guess.onkeydown = function() {
                if (event.keyCode == 13) {
                    nextButton.click();
                }
            };
        } else {
            wrongAudio.play();
            result.style.display = 'none';
            UI.cssDisplayInline([wrongDiv]);
            guess.setAttribute('placeholder', 'Try again');
            guess.value = '';
            wrongDiv.innerHTML = imageWrong;
        }
    },

    seeingP: function(id) {
        var p = document.getElementById('p' + id);
        p.style = ['opacity:1; cursor:pointer; color:blue'];
    },
    workedPS: function(id) {
        var s = document.getElementById(id);
        var p = document.getElementById('p' + id);
        s.style = ['text-decoration:underline;background-color: white'];
        p.style = ['opacity:1;cursor:text;color:black'];
    },

    cssDisplayNone: function(array) {
        array.forEach(element => {
            element.style.display = 'none';
        });
    },
    cssDisplayInline: function(array) {
        array.forEach(element => {
            element.style.display = 'inline';
        });
    },
    cssDisplayBlock: function(array) {
        array.forEach(element => {
            element.style.display = 'block';
        });
    },

    guessChanging: function() {
        guess.onkeydown = function() {
            if (event.keyCode == 13) {
                checkBtn.click();
                checkBtn.setAttribute('disabled', '');
            }
            checkBtn.removeAttribute('disabled');
            if (event.keyCode != 13) {
                wrongDiv.innerHTML = '';
            }
            guess.style.backgroundColor = 'rgb(176, 207, 202)';
        };
        guess.onkeyup = function() {
            guess.style.backgroundColor = '';
        };
        guess.focus();
    },

    removePOnclick: function(id) {
        var p = document.getElementById('p' + id);
        var s = document.getElementById(id);

        p.onclick = null;
        p.style.cursor = 'text';
        s.style.cursor = 'pointer';
    },

    disPlayEnd: function() {
        modalTrigger.click();
        overAudio.play();
        document.head.appendChild(st);
    }
};
