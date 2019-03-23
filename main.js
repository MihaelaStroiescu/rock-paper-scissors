window.onload = function() {

    let allButtons = [];
    let index = 0;
    let btn, ranNumber, userChoice, computerChoice, scoreBoard, findSelectedUser;
    let countUser = 0; countComp = 0;
    let boardText;

    // am creat array-ul cu cele 3 optiuni
    let options = document.querySelectorAll('.buttonOption');

	options.forEach(buttonOptions => {
        btn = buttonOptions.getAttribute('value');
        index++;
        allButtons.push(btn);
    });

    // capturam click-ul userului  stabilim ca imag sa se coloreze:
    // in rosu pt optiunea userului
    // in galben pt optinea computerului
    // in orange cand optiunile coincid
    let optionsLength = options.length;

    for (let index of document.querySelectorAll('.buttonOption')) {
        index.addEventListener('click', EventClick);

        function EventClick(e) {
            //clickul este capturat pe icon, adaugam clasa pe buton
            e.target.parentNode.classList.add('userSelect');
            userChoice = index.getAttribute('value');

            ranNumber = Math.round(Math.random() * (optionsLength - 1));
            computerChoice = allButtons[ranNumber];
            options[ranNumber].classList.add('compSelect');

            for (let item of options) {
                item.setAttribute('disabled', true);
            }

            if (userChoice === computerChoice) {
                e.target.parentNode.classList.add('bothSelect');
                document.getElementsByClassName('board')[0].innerText = 'Draw!';
            };

            if (userChoice === 'Rock') {
                switch (computerChoice) {
                    case ('Scissors'):
                        boardText = document.getElementsByClassName('board')[0].innerText = 'User win!';
                        countUser++;
                        break;
                    case ('Paper'):
                        boardText = document.getElementsByClassName('board')[0].innerText = 'Computer win!';
                        countComp++;
                        break;
                };

                finalScore(countUser, countComp);
            };

            if (userChoice === 'Scissors') {
                switch (computerChoice) {
                    case ('Paper'):
                        boardText = document.getElementsByClassName('board')[0].innerText = 'User win!';
                        countUser++;
                        break;
                    case ('Rock'):
                        boardText = document.getElementsByClassName('board')[0].innerText = 'Computer win!';
                        countComp++;
                        break;
                };

                finalScore(countUser, countComp);
            };

            if (userChoice === 'Paper') {
                switch (computerChoice) {
                    case ('Rock'):
                        boardText = document.getElementsByClassName('board')[0].innerText = 'User win!';
                        countUser++;
                        break;
                    case ('Scissors'):
                        boardText = document.getElementsByClassName('board')[0].innerText = 'Computer win!';
                        countComp++;
                        break;
                };

                finalScore(countUser, countComp);
            };
        };
    };

    for (let index of document.querySelectorAll('.playAgain')) {
        index.addEventListener('click', PlayAgain);
    };

    function PlayAgain(e) {
        for (let index of options) {
            index.removeAttribute('disabled');

            if (index.classList.contains('userSelect')) {
                index.classList.remove('userSelect');
            };
        };

        for (let index of options) {
            index.removeAttribute('disabled');

            if (index.classList.contains('bothSelect')) {
                index.classList.remove('bothSelect');
            };
        };

        for (let index of options) {
            index.removeAttribute('disabled');

            if (index.classList.contains('compSelect')) {
                index.classList.remove('compSelect');
            };
        };
    };

    for (let index of document.querySelectorAll('.resetContor')) {
        index.addEventListener('click', resetGame);

        function resetGame(e) {
            countUser = 0;
            countComp = 0;
            PlayAgain();
            finalScore(countUser, countComp);
            boardText = document.getElementsByClassName('board')[0].innerText = '';
        };
    };

    function finalScore(p1, p2) {
        let scoreUser = document.getElementsByClassName('scoreBox')[0];
        let scoreComp = document.getElementsByClassName('scoreBox')[1];
        scoreUser.textContent = countUser;
        scoreComp.textContent = countComp;
    };
};
