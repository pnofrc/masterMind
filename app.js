var riddle = ["var(--yellow)", "var(--green)", "var(--green)", "var(--red)"]
var turn = 0
var n1 = 0
var n2 = 0
var n3 = 0
var n0 = 0

var current = []

var colors = ["var(--red)", "var(--brown)", "var(--green)", "var(--blue)", "var(--yellow)", "var(--orange)", "var(--white)"]

function go() {

    let divs = document.getElementsByClassName("row")

    for (let div = 0; div < divs.length; div++) {
        if (div != turn) {
            document.getElementsByClassName("row")[div].classList.add("disabledButtons");
        }
    }


    document.getElementsByClassName("choiceEl1")[turn].addEventListener("click", function() {
        this.style.background = colors[n0]
        current[0] = colors[n0]
        n0++
        if (n0 == 7) {
            n0 = 0
        }
    })

    document.getElementsByClassName("choiceEl2")[turn].addEventListener("click", function() {
        this.style.background = colors[n1]
        current[1] = colors[n1]
        n1++
        if (n1 == 7) {
            n1 = 0
        }
    })

    document.getElementsByClassName("choiceEl3")[turn].addEventListener("click", function() {
        this.style.background = colors[n2]
        current[2] = colors[n2]
        n2++
        if (n2 == 7) {
            n2 = 0
        }
    })

    document.getElementsByClassName("choiceEl4")[turn].addEventListener("click", function() {
        this.style.background = colors[n3]
        current[3] = colors[n3]
        n3++
        if (n3 == 7) {
            n3 = 0
        }
    })


}

go()

function shuffle() {
    let array = [0, 1, 2, 3]
    let currentIndex = 3,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

var newShuffle = shuffle()



function check() {

    for (let solve = 0; solve < 4; solve++) {
        r = newShuffle[solve]
        if (riddle[solve] == current[solve]) {
            document.getElementsByClassName("results")[turn].getElementsByClassName("result")[r].style.background = "var(--black)"
        } else if (riddle.includes(current[solve])) {
            document.getElementsByClassName("results")[turn].getElementsByClassName("result")[r].style.background = "var(--white)"
        }
    }

    let areEqual = (first, second) => {
        if (first.length !== second.length) {
            return false;
        };
        for (let i = 0; i < first.length; i++) {
            if (!second.includes(first[i])) {
                return false;
            };
        };
        return true;
    };

    if (areEqual(current, riddle)) {
        alert("win")
    }
    if (turn == 6) {
        alert("stop")
    }

    turn++
    current = []
    go()

}

function checkpre() {
    if (current.length == 4) {
        check()
    } else {
        console.log("sdv")
    }
}