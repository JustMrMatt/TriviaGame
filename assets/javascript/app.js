$(document).ready(function () {
    var questions = [
        {
            question: "What is Darth Vader's true name?", 
            options: ["Darth Vader", "Jim Stargazer", "Anakin Skywalker", "Harry Swordswinger" ],
            answer: "Anakin Skywalker",
            identifier: "one",
            divClass: ".firstQ"
        },
        {
            question: "About how old is Jedi Master Yoda?", 
            options: ["700 years", "800 years", "900 years", "1000 years" ],
            answer: "900 years",
            identifier: "two",
            divClass: ".secondQ"
        },
        {
            question: "What color is Yoda's Lightsaber?", 
            options: ["Red", "Green", "Purple", "Blue" ],
            answer: "Green",
            identifier: "three",
            divClass: ".thirdQ"
        },
        {
            question: "Who is Luke Skywalker's father?", 
            options: ["Darth Vader", "Darth Sidious", "Darth Maul", "Qui-Gon Jin" ],
            answer: "Darth Vader",
            identifier: "four",
            divClass: ".fourthQ"
        },
        {
            question: "What planet is Rey from?", 
            options: ["Tatooine", "Hoth", "Naboo", "Jakku" ],
            answer: "Jakku",
            identifier: "five",
            divClass: ".fifthQ"
        },
        {
            question: "What color lightsaber does Mace Windu use?", 
            options: ["Red", "Green", "Purple", "Blue" ],
            answer: "Purple",
            identifier: "six",
            divClass: ".sixthQ"
        },
        {
            question: "Who is Kylo Ren's father?", 
            options: ["Darth Vader", "Luke Skywalker", "JarJar Binks", "Han Solo" ],
            answer: "Han Solo",
            identifier: "seven",
            divClass: ".seventhQ"
        },
        {
            question: "What bounty hunter caught Han Solo?", 
            options: ["Jango Fett", "Boba Fett", "Lando Calrissian", "Darth Maul" ],
            answer: "Bob Fett",
            identifier: "eight",
            divClass: ".eigthQ"
        },
        {
            question: "JarJar Binks' true identity is?", 
            options: ["Jedi Master", "Bounty Hunter", "Rebel Spy", "Sith Lord" ],
            answer: "Sith Lord",
            identifier: "nine",
            divClass: ".ninthQ"
        }];

    
    $("#begin").on("click", function () {
        $("#begin").hide();
        $(".questionsContainer").show();
		//countdown(60);
        questionDisplay();
    });

    var questionDisplay = function() {
        $(".questionsContainer").empty();
        
        for (var i = 0; i < 10; i++) {
            $(".questionsContainer").append("<div class='questionBlock'>" + questions[i].question + "</div>");
            for (var q = 0; q <= 3; q++) {
                $(".questionsContainer").append("<div class='answerBlock'>" + questions[i].options[q] + "</div>");
            }
            $(".questionsAnswered").append("<hr />");
        }
    }
})