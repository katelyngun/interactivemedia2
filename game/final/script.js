(function () {
    'use strict';
    console.log('reading JS');


    const statusText  = document.querySelector('#status-text');
    const die1Img     = document.querySelector('#die1');
    const die2Img     = document.querySelector('#die2');
    const actionsDiv  = document.querySelector('#actions');
    const scoreP1El   = document.querySelector('#score-p1');
    const scoreP2El   = document.querySelector('#score-p2');
    const pbP1        = document.querySelector('#pb-p1');
    const pbP2        = document.querySelector('#pb-p2');
    const winScreen   = document.querySelector('#win-screen');
    const winMessage  = document.querySelector('#win-message');
    const newGameBtn  = document.querySelector('#new-game');


    const gameData = {
        dice: ['DICE1.png', 'DICE2.png', 'DICE3.png',
               'DICE4.png', 'DICE5.png', 'DICE6.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };


    gameData.index = Math.floor(Math.random() * 2);
    setupTurn();

    // ── new game button ───────────────────────────────────────────
    newGameBtn.addEventListener('click', function () {
        gameData.score = [0, 0];
        gameData.index = Math.floor(Math.random() * 2);
        winScreen.classList.add('hidden');
        hideDice();
        updateScoreDisplay();
        setupTurn();
    });

    // ── turn setup ────────────────────────────────────────────────
    function setupTurn() {
        statusText.textContent = `roll the dice for ${gameData.players[gameData.index]}!`;
        showActions(false);
    }

    // ── action buttons visibility──────────────────────────────────
    function showActions(canPass) {
        actionsDiv.style.display = 'flex';
        document.querySelector('#roll').onclick = throwDice;
        document.querySelector('#pass').onclick = canPass ? function () {
            gameData.index = gameData.index ? 0 : 1;
            hideDice();
            setupTurn();
        } : null;
        document.querySelector('#pass').style.opacity = canPass ? '1' : '0.35';
        document.querySelector('#pass').style.cursor = canPass ? 'pointer' : 'default';
    }

    function hideActions() {
        actionsDiv.style.display = 'none';
    }

    
    function showDice(r1, r2) {
        die1Img.src = gameData.dice[r1 - 1];
        die2Img.src = gameData.dice[r2 - 1];
        die1Img.classList.add('visible');
        die2Img.classList.add('visible');
    }

    function hideDice() {
        die1Img.classList.remove('visible');
        die2Img.classList.remove('visible');
    }

    // ── Score progress bar─────────────────────────────
    function updateScoreDisplay() {
        scoreP1El.textContent = gameData.score[0];
        scoreP2El.textContent = gameData.score[1];

        // Progress bars fill percentage
        pbP1.style.height = Math.min((gameData.score[0] / 30) * 100, 100) + '%';
        pbP2.style.height = Math.min((gameData.score[1] / 30) * 100, 100) + '%';
    }


    function throwDice() {
        hideActions();

        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        showDice(gameData.roll1, gameData.roll2);

        if (gameData.rollSum === 2) {
            // Snake eyes 
            gameData.score[gameData.index] = 0;
            updateScoreDisplay();
            statusText.textContent = `snake eyes! ${gameData.players[gameData.index]}'s score is zeroed out`;
            gameData.index = gameData.index ? 0 : 1;
            setTimeout(function () { hideDice(); setupTurn(); }, 2500);

        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            // One rolled 
            gameData.index = gameData.index ? 0 : 1;
            statusText.textContent = `you rolled a 1! switching to ${gameData.players[gameData.index]}`;
            setTimeout(function () { hideDice(); setupTurn(); }, 2500);

        } else {
            // Good roll 
            gameData.score[gameData.index] += gameData.rollSum;
            updateScoreDisplay();

            if (checkWin()) return;

            statusText.textContent = `nice baking! keep going or pass?`;
            showActions(true);
        }
    }

    // ── Win ─────────────────────────────────────────────────
    function checkWin() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            hideActions();
            winMessage.textContent =
                `${gameData.players[gameData.index]} wins the Bake Off with ${gameData.score[gameData.index]} points! Your pastry is done!`;
            winScreen.classList.remove('hidden');
            return true;
        }
        return false;
    }

})();
