
///////////////////////////////// CHOIX DU SUJET /////////////////////////////////////////////

// Choix du sujet lettres et philosophie
document.getElementById('imageNietzsche').addEventListener('click', function() {
    choisirQuiz('quiz1');
});

// Choix du sujet sciences
document.getElementById('imageEinstein').addEventListener('click', function() {
    choisirQuiz('quiz2');
});

// Choix du sujet histoire
document.getElementById('imageNapoleon').addEventListener('click', function() {
    choisirQuiz('quiz3');
});

// Fonction pour choisir le quiz
function choisirQuiz(quizId) {
    // Masquer les trois sujets de quiz 
    document.getElementById('imageContainer').style.display = 'none';

    // Affichage du compteur de questions
    document.getElementById('questionNombre').style.display = 'block';
    
    // Affichage du quiz choisi
    document.getElementById(quizId).style.display = 'block'; 
    currentQuiz = quizId; // Mettre à jour le quiz courant
    currentQuestionIndex = 0; // Réinitialiser l'index de la question
    afficherQuestion(currentQuiz, currentQuestionIndex); // Afficher la première question
}

let currentQuestionIndex = 0;
let currentQuiz = "quiz1"; // Commence avec le premier quiz

points = 0; // Réinitialiser les points au début du quiz

////////////////////////////////////////// TIMER ///////////////////////////////////////////////////

// ID du quiz et index de la question
let questionIndex = 0; // Commence à 0 pour la première question

// Fonction pour démarrer le timer
function startTimer(quizId, questionIndex) {

    // Variable du timer 
    const timerDiv = document.getElementById("timer");

    // Affichage du timer
    document.getElementById("timer").style.display = "block";    
    let tempsquestion = 15;  // Réinitialise le temps à 10 secondes pour chaque nouvelle question
    timerDiv.innerText = tempsquestion;  // Affiche le temps initial

    let timerID; // VARIABLE DE TIMER ID 

     timerID = setInterval(() => {
        tempsquestion -= 1;
        timerDiv.innerText = tempsquestion;  // Met à jour l'affichage
        
        if (tempsquestion <= 0) {
            clearInterval(timerID);  // Arrête le timer
            questionIndex++;  // Incrémente l'index pour la prochaine question

            // Vérifiez si la question suivante existe
            if (questionIndex < questions[quizId].length) {
                afficherQuestion(quizId, questionIndex);  // Affiche la nouvelle question
            } else {
                // Si c'est la dernière question, cache le timer
                timerDiv.style.display = 'none'; 
            }
        }
    }, 1000);  // Appelle la fonction toutes les secondes

    return timerID;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function afficherQuestion(quizId, questionIndex, intervalID = null) {
    avancerQuestion(quizId, questionIndex);
    clearInterval(intervalID);  // Arrête le timer de la question précédente
    let questionObj = questions[quizId][questionIndex];
    
    // Cibler les éléments spécifiques pour chaque quiz
    let questionElement;
    if (quizId === 'quiz1') {
        questionElement = document.getElementById('questionPhilo');
    } else if (quizId === 'quiz2') {
        questionElement = document.getElementById('questionSciences');
    } else if (quizId === 'quiz3') {
        questionElement = document.getElementById('questionHistoire');
    }
    
    const buttons = document.querySelectorAll(`#${quizId} .bouton`);
    
    // Mettre à jour le texte de la question
    questionElement.innerText = questionObj.question;
    let timerID = startTimer(quizId, questionIndex); 
    // Mettre à jour les textes des boutons
    buttons.forEach((button, index) => {
        button.innerText = questionObj.answers[index];
        button.onclick = function() {
            verifierReponse(quizId, questionIndex, index, timerID);
        };
    });
}

// Variable pour le score 
let score = 0;

///////////////////////////////////////// GESTION DES GIFS SUCCES ET ERREURS /////////////////////////////////////////////////////////

    // Fonction pour placer le message de succès
function verifierReponse(quizId, questionIndex, answerIndex, timerID = null) {
    const correctAnswer = questions[quizId][questionIndex].correct;
    const successMessageElement = document.getElementById('successMessage'); 
    const feedbackElement = document.getElementById('feedbackMessage');
    
    // Masquer le quiz actuel
    document.getElementById(quizId).style.display = 'none';
    
    if (answerIndex === correctAnswer) {
        // Afficher le message de succès
        score++;
        successMessageElement.innerText = "Bonne réponse !"; 
        successMessageElement.style.display = 'block'; 

        
        if (quizId === 'quiz1') {
            document.getElementById('bonneRéponsequiz1').style.display = 'block'; // Affiche l'image succès pour quiz 1
            document.getElementById('timer').style.display = 'none'; 

        } else if (quizId === 'quiz2') {
            document.getElementById('bonneRéponsequiz2').style.display = 'block'; // Affiche l'image succès pour quiz 2
            document.getElementById('timer').style.display = 'none'; 

        } else if (quizId === 'quiz3') {
            document.getElementById('bonneRéponsequiz3').style.display = 'block'; // Affiche l'image succès pour quiz 3
            document.getElementById('timer').style.display = 'none'; 

        }

        // Masquer le message après 1 seconde et passer à la question suivante
        setTimeout(() => {
            successMessageElement.style.display = 'none';
            // Disparition des images 
            if (quizId === 'quiz1') {
                document.getElementById('bonneRéponsequiz1').style.display = 'none'; // Disparition de l'image pour quiz 1
            } else if (quizId === 'quiz2') {
                document.getElementById('bonneRéponsequiz2').style.display = 'none'; // Disparition de l'image pour quiz 2
            } else if (quizId === 'quiz3') {
                document.getElementById('bonneRéponsequiz3').style.display = 'none'; // Disparition de l'image pour quiz 3
            }
            
        if (questionIndex + 1 < questions[quizId].length) {
            afficherQuestion(quizId, questionIndex + 1 ,timerID);
            document.getElementById(quizId).style.display = 'block'; // Réaffiche le quiz pour la question suivante
            } else {
                // Si le quiz est terminé
                document.getElementById(quizId).style.display = 'none';
                document.getElementById('scoreValeur').innerText = score;
                document.getElementById('scoreFinal').style.display = 'block';
                document.getElementById('retourAccueil').style.display = 'block';
                document.getElementById('timer').style.display = 'none';
                clearInterval(timerID);
            }
    }, 1000); // Délai de 2 secondes 40 avant de passer à la suite 
        } else {
        // Afficher le message d'erreur
        const bonneReponse = questions[quizId][questionIndex].answers[correctAnswer];
        feedbackElement.innerText = `Mauvaise réponse ! 
        
        La bonne réponse était : ${bonneReponse}`;
        feedbackElement.style.display = 'block'; 
        
        // Affichage des images pour les mauvaises réponses
        if (quizId === 'quiz1') {
            document.getElementById('mauvaiseRéponsequiz1').style.display = 'block'; // Affiche l'image pour quiz 1
            document.getElementById('timer').style.display = 'none'; 

        } else if (quizId === 'quiz2') {
            document.getElementById('mauvaiseRéponsequiz2').style.display = 'block'; // Affiche l'image pour quiz 2
            document.getElementById('timer').style.display = 'none'; 

        } else if (quizId === 'quiz3') {
            document.getElementById('mauvaiseRéponsequiz3').style.display = 'block'; // Affiche l'image pour quiz 3
            document.getElementById('timer').style.display = 'none'; 

        }

        
        // Masquer le message après 2 secondes et passer à la question suivante
        setTimeout(() => {
            feedbackElement.style.display = 'none';
            
            // Disparition  des images pour les mauvaises réponses
            if (quizId === 'quiz1') {
                document.getElementById('mauvaiseRéponsequiz1').style.display = 'none'; // Affiche l'image pour quiz 1
            } else if (quizId === 'quiz2') {
                document.getElementById('mauvaiseRéponsequiz2').style.display = 'none'; // Affiche l'image pour quiz 2
            } else if (quizId === 'quiz3') {
                document.getElementById('mauvaiseRéponsequiz3').style.display = 'none'; // Affiche l'image pour quiz 3
            }
            
            
            if (questionIndex + 1 < questions[quizId].length) {
                questionIndex++;
                afficherQuestion(quizId, questionIndex,timerID);
                document.getElementById(quizId).style.display = 'block'; // Réaffiche le quiz pour la question suivante
            } else {
                // Si le quiz est terminé
                document.getElementById(quizId).style.display = 'none';
                document.getElementById('scoreValeur').innerText = score;
                document.getElementById('scoreFinal').style.display = 'block';
                document.getElementById('retourAccueil').style.display = 'block';
                document.getElementById('timer').style.display = 'none';
                clearInterval(timerID);
            }
        }, 2500); // Délai de 2 secondes 50 avant de passer à la suite
    }
}

///////////////////////////////////////// BOUTON RETOUR A L ACCUEIL //////////////////////////////////////////////////////

document.getElementById('retourAccueil').addEventListener('click', function() {
    
    // Fait apparaitre les images
    document.getElementById('imageContainer').style.display = 'flex';
    document.getElementById('retourAccueil').style.display = 'none';
    document.getElementById('scoreFinal').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('questionNombre').style.display = 'none';
});

/////////////////////////////////////////// COMPTEUR DE QUESTIONS ///////////////////////////////////////////////////////////

function avancerQuestion(quizId, questionIndex) {
    if (questionIndex + 1 <= questions[quizId].length) 
    {
        let questionLength = questions[quizId].length;
        updateQuestionCounter(questionIndex + 1, questionLength); // Mettre à jour le compteur
    } else {
        console.log("Fin du quiz.");
    }
}

// Fonction pour mettre à jour le compteur de questions
function updateQuestionCounter(questionIndex, questionLength) {
    document.getElementById('questionNombre').innerText = 
    questionIndex + " / " + questionLength;
}
