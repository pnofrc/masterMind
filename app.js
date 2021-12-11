var riddle = ["var(--yellow)", "var(--green)", "var(--green)", "var(--red)"]

var n1 = 0
var n2 = 0
var n3 = 0
var n0 = 0

var current = []

var colors = ["var(--red)", "var(--brown)", "var(--green)", "var(--blue)", "var(--yellow)", "var(--orange)", "var(--white)"]


document.getElementById("choiceEl1").addEventListener("click", function() {
    this.style.background = colors[n0]
    current[0] = colors[n0]
    n0++
    if (n0 == 7) {
        n0 = 0
    }
})

document.getElementById("choiceEl2").addEventListener("click", function() {
    this.style.background = colors[n1]
    current[1] = colors[n1]
    n1++
    if (n1 == 7) {
        n1 = 0
    }
})

document.getElementById("choiceEl3").addEventListener("click", function() {
    this.style.background = colors[n2]
    current[2] = colors[n2]
    n2++
    if (n2 == 7) {
        n2 = 0
    }
})

document.getElementById("choiceEl4").addEventListener("click", function() {
    this.style.background = colors[n3]
    current[3] = colors[n3]
    n3++
    if (n3 == 7) {
        n3 = 0
    }
})

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
            document.getElementsByClassName("result")[r].style.background = "var(--black)"

        } else if (riddle.includes(current[solve])) {
            document.getElementsByClassName("result")[r].style.background = "var(--white)"
        }
    }
}