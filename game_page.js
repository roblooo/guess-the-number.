player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")
player1_score = 0
player2_score = 0
document.getElementById("player1_name").innerHTML = player1_name
document.getElementById("player2_name").innerHTML = player2_name
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score
document.getElementById("player_question").innerHTML = "question turn is " + player1_name
document.getElementById("player_answer").innerHTML = "answer turn is " + player2_name

function send() {
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    answer = n1 * n2
    question_word = "<h4 id='word_display'> Q. " + n1 + "X" + n2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button
    document.getElementById("output").innerHTML = row
}
question_turn = "player1"
answer_turn = "player2"

function check() {
    getanswer = document.getElementById("input_check_box").value
    if (answer == getanswer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1

            document.getElementById("player1_score").innerHTML = player1_score

        } else {
            player2_score = player2_score + 1

            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
}