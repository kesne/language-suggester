function scoreCount(scoreboard, questionValue) {
    if (!(questionValue in scoreboard)) {
        console.log(questionValue, scoreboard);
        throw new Error('Error in scoreCount - questionValue is not a language.');
    }

    return {
        ...scoreboard,
        [questionValue]: scoreboard[questionValue] + 1
    };
}

const keyNameToBetterLanguageName = {
    ruby: 'Ruby',
    javascript: 'JavaScript',
    python: 'Python',
    go: 'Go',
    java: 'Java',
    'csharp': 'C♯',
    'cpp': 'C++'
};

function betterName(languageName) {
    return keyNameToBetterLanguageName[languageName];
}

function finalResult(scoreboard) {
    const results = Object.entries(scoreboard).sort((a, b) => {
        if (a[1] > b[1]) {
            return -1;
        } else if (b[1] > a[1]) {
            return 1;
        } else {
            return 0;
        }
    });

    return {
        winner: results[0][0],
        runnerUp: results[1][0]
    };
}

function wikiURL(languageName) {
    var wikiLink = 'https://en.wikipedia.org/wiki/';
    if (languageName === 'csharp') {
        wikiLink += 'C_Sharp_(programming_language)';
    } else if (languageName === 'javascript') {
        wikiLink += languageName;
    } else if (languageName === 'cpp') {
        wikiLink += 'C++';
    } else {
        wikiLink = wikiLink + languageName + '_(programming_language)';
    }
    return wikiLink;
}

//Front-End Logic
$(document).ready(function() {
    $('button#start').click(function() {
        $('button#start').toggle(400);
        $('div#survey')
            .delay(400)
            .slideToggle(1000);
    });

    $('form#userInfo').submit(function() {
        event.preventDefault();

        var projectInput = $('input:radio[name=project]:checked').val();
        var planInput = $('input:radio[name=plan]:checked').val();
        var animalInput = $('input:radio[name=animal]:checked').val();
        var drinkInput = $('input:radio[name=drink]:checked').val();
        var musicInput = $('input:radio[name=music]:checked').val();
        var gemInput = $('input:radio[name=gem]:checked').val();

        const scoreboard = [projectInput, planInput, animalInput, drinkInput, musicInput, gemInput].reduce(
            (scoreboard, input) => {
                return scoreCount(scoreboard, input);
            },
            {
                ruby: 0,
                javascript: 0,
                python: 0,
                go: 0,
                java: 0,
                'csharp': 0,
                'cpp': 0
            }
        );

        const result = finalResult(scoreboard);
        const winner = result.winner;
        const runnerUp = result.runnerUp;

        //fill result panels
        $('span.nameInsert').text($('input#userName').val());
        $('#option1 span').text(betterName(winner));
        $('#option1 img').attr('src', 'img/' + winner.toLowerCase() + '.png');
        $('#option1 a').attr('href', wikiURL(winner));
        $('#option2 span').text(betterName(runnerUp));
        $('#option2 img').attr('src', 'img/' + runnerUp.toLowerCase() + '.png');
        $('#option2 a').attr('href', wikiURL(runnerUp));

        //reveal result panels
        $('div#survey').slideToggle(1000);
        $('div#result')
            .delay(1000)
            .slideToggle(1000);
    });
});
