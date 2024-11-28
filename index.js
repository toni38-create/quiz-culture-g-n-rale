
///////////////////////////////// CHOIX DU SUJET /////////////////////////////////////////////

/////////////// Choix du sujet lettres et philosophie ///////////////////////////
document.getElementById('imageNietzsche').addEventListener('click', function() {
    choixNiveaux();
    document.getElementById('containerNiveauquiz1').style.display = 'flex';
});

/////////////// Choix du sujet sciences /////////////////////////////////
document.getElementById('imageEinstein').addEventListener('click', function() {
    choixNiveaux();
    document.getElementById('containerNiveauquiz2').style.display = 'flex';
});

/////////////// Choix du sujet histoire ////////////////////////////

document.getElementById('imageNapoleon').addEventListener('click', function() {
    choixNiveaux();
    document.getElementById('containerNiveauquiz3').style.display = 'flex';
});

/////////////// Fonction choisir difficulté ///////////////////////////

function choixNiveaux() {
    // Cache les trois sujets 
    document.getElementById('imageContainer').style.display = 'none'; 
    // Fait apparaitre le cadre "niveaux de difficulté" 
    document.getElementById('cadreNiveau').style.display = 'flex';
}

////////////////////////// CHOIX DU NIVEAU DE DIFFICULTE ///////////////////////////////////////


/////////////////// QUESTIONS LETTRES ET PHILOSOPHIE /////////////////////////////////////////

document.getElementById('quiz1-easy' || 'quiz1').addEventListener('click', function() {
    afficherQuestion('quiz1', 'easy', 0);
    niveau = 'easy';
    document.getElementById('containerNiveauquiz1').style.display = 'none';
    document.getElementById('cadreNiveau').style.display = 'none';
});

document.getElementById('quiz1-medium' || 'quiz1').addEventListener('click', function() {
    afficherQuestion('quiz1', 'medium', 0);
    niveau = 'medium';
    document.getElementById('containerNiveauquiz1').style.display = 'none';
    document.getElementById('cadreNiveau').style.display = 'none';
});

document.getElementById('quiz1-difficult' || 'quiz1').addEventListener('click', function() {
    afficherQuestion('quiz1', 'difficult', 0);
    niveau = 'difficult';
    document.getElementById('containerNiveauquiz1').style.display = 'none';
    document.getElementById('cadreNiveau').style.display = 'none';
});

/////////////////////////// QUESTIONS SCIENCES /////////////////////////////////////////

document.getElementById('quiz2-easy' || 'quiz2').addEventListener('click', function() {
    afficherQuestion('quiz2', 'easy', 0);
    niveau = 'easy';
    document.getElementById('containerNiveauquiz2').style.display = 'none';
    document.getElementById('cadreNiveau').style.display = 'none';
});

document.getElementById('quiz2-medium' || 'quiz2').addEventListener('click', function() {
    afficherQuestion('quiz2', 'medium', 0);
    niveau = 'medium';
    document.getElementById('containerNiveauquiz2').style.display = 'none';
    document.getElementById('cadreNiveau').style.display = 'none';
});

document.getElementById('quiz2-difficult' || 'quiz2').addEventListener('click', function() {
    afficherQuestion('quiz2', 'difficult', 0);
    niveau = 'difficult';
    document.getElementById('containerNiveauquiz2').style.display = 'none';
    document.getElementById('cadreNiveau').style.display = 'none';
});

/////////////////////////// QUESTIONS HISTOIRE  /////////////////////////////////////////

document.getElementById('quiz3-easy' || 'quiz3').addEventListener('click', function() {
    afficherQuestion('quiz3', 'easy', 0);
    niveau = 'easy';
    document.getElementById('containerNiveauquiz3').style.display = 'none';
    document.getElementById('cadreNiveau').style.display = 'none';});

document.getElementById('quiz3-medium' || 'quiz3').addEventListener('click', function() {
    afficherQuestion('quiz3', 'medium', 0);
    niveau = 'medium';
    document.getElementById('containerNiveauquiz3').style.display = 'none';
    document.getElementById('cadreNiveau').style.display = 'none';});

document.getElementById('quiz3-difficult' || 'quiz3').addEventListener('click', function() {
    afficherQuestion('quiz3', 'difficult', 0);
    niveau = 'difficult';
    document.getElementById('containerNiveauquiz3').style.display = 'none';
    document.getElementById('cadreNiveau').style.display = 'none';
});

//////////////// Fonction faire apparaitre la question ////////////////


function afficherQuestion(quizId, niveau, questionIndex, intervalID = null) {

    clearInterval(intervalID);
    // Faire apparaitre le compteur de questions 
    document.getElementById('questionNombre').style.display = 'block';

    avancerQuestion(quizId, niveau, questionIndex);

    document.getElementById(quizId).style.display = 'block'; 
    currentQuiz = quizId; // Mettre à jour le quiz courant
    currentQuestionIndex = 0; // Réinitialiser l'index de la question

    // Récupère l'objet question à partir de l'index de la question pour le quiz actuel
    let questionObj = questions[quizId][niveau][questionIndex];
    
    let questionElement;
    
    if (quizId === 'quiz1') {
        questionElement = document.getElementById('questionPhilo');
    } 
    else if (quizId === 'quiz2') {
        questionElement = document.getElementById('questionSciences');
    } 
    else if (quizId === 'quiz3') {
        questionElement = document.getElementById('questionHistoire');
    }

    
    // Sélectionne tous les boutons associés à ce quiz pour les mettre à jour
    const buttons = document.querySelectorAll(`#${quizId} .bouton`);
    
    questionElement.innerText = questionObj.question;
    
    // Démarre un timer pour cette question 
    let timerID = startTimer(quizId, questionIndex);
    
    buttons.forEach((button, index) => {
        button.innerText = questionObj.answers[index];
        
        button.onclick = function() {
            verifierReponse(quizId, niveau, questionIndex, index, timerID);
        };
    });
}

let currentQuestionIndex = 0;

points = 0; // Réinitialiser les points au début du quiz

////////////////////////////////////////////////////// TIMER /////////////////////////////////////////////////////////////////

// ID du quiz et index de la question
let questionIndex = 0; 

let niveau = ''; 

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
            if (questionIndex < questions[quizId][niveau].length) {
                console.log();
                afficherQuestion(quizId, niveau, questionIndex);  // Affiche la nouvelle question
                console.log(afficherQuestion);

            } else {
                // Si c'est la dernière question, cache le timer
                timerDiv.style.display = 'none'; 
            }
        }
    }, 1000);  // Appelle la fonction toutes les secondes

    return timerID;
}

///////////////////////////////////////// GESTION DES GIFS SUCCES ET ERREURS /////////////////////////////////////////////////////////

// Variable pour le score 
let score = 0;


    // Fonction pour placer le message de succès
function verifierReponse(quizId, niveau, questionIndex, answerIndex, timerID = null) {
    const correctAnswer = questions[quizId][niveau][questionIndex].correct;
    const successMessageElement = document.getElementById('successMessage'); 
    const feedbackElement = document.getElementById('feedbackMessage');
    
    // Masquer le quiz actuel
    document.getElementById(quizId).style.display = 'none';
    
    if (answerIndex === correctAnswer) {
        // Afficher le message de succès
        score++;
        console.log(score);
        successMessageElement.innerText = "Bonne réponse !"; 
        successMessageElement.style.display = 'block'; 

        
        if (quizId === 'quiz1') {
            document.getElementById('bonneRéponseQuiz1').style.display = 'block'; // Affiche l'image succès pour quiz 1
            document.getElementById('timer').style.display = 'none'; 

        } else if (quizId === 'quiz2') {
            document.getElementById('bonneRéponseQuiz2').style.display = 'block'; // Affiche l'image succès pour quiz 2
            document.getElementById('timer').style.display = 'none'; 

        } else if (quizId === 'quiz3') {
            document.getElementById('bonneRéponseQuiz3').style.display = 'block'; // Affiche l'image succès pour quiz 3
            document.getElementById('timer').style.display = 'none'; 

        }

        // Masquer le message après 1 seconde et passer à la question suivante
        setTimeout(() => {
            successMessageElement.style.display = 'none';
            // Disparition des images 
            if (quizId === 'quiz1') {
                document.getElementById('bonneRéponseQuiz1').style.display = 'none'; // Disparition de l'image pour quiz 1
            } else if (quizId === 'quiz2') {
                document.getElementById('bonneRéponseQuiz2').style.display = 'none'; // Disparition de l'image pour quiz 2
            } else if (quizId === 'quiz3') {
                document.getElementById('bonneRéponseQuiz3').style.display = 'none'; // Disparition de l'image pour quiz 3
            }
            
        if (questionIndex + 1 < questions[quizId][niveau].length) {
            afficherQuestion(quizId, niveau, questionIndex + 1 ,timerID);
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
        const bonneReponse = questions[quizId][niveau][questionIndex].answers[correctAnswer];
        feedbackElement.innerText = `Mauvaise réponse ! 
        
        La bonne réponse était : ${bonneReponse}`;
        feedbackElement.style.display = 'block'; 
        
        // Affichage des images pour les mauvaises réponses
        if (quizId === 'quiz1') {
            document.getElementById('mauvaiseRéponseQuiz1').style.display = 'block'; // Affiche l'image pour quiz 1
            document.getElementById('timer').style.display = 'none'; 

        } else if (quizId === 'quiz2') {
            document.getElementById('mauvaiseRéponseQuiz2').style.display = 'block'; // Affiche l'image pour quiz 2
            document.getElementById('timer').style.display = 'none'; 

        } else if (quizId === 'quiz3') {
            document.getElementById('mauvaiseRéponseQuiz3').style.display = 'block'; // Affiche l'image pour quiz 3
            document.getElementById('timer').style.display = 'none'; 

        }

        
        // Masquer le message après 2 secondes et passer à la question suivante
        setTimeout(() => {
            feedbackElement.style.display = 'none';
            
            // Disparition  des images pour les mauvaises réponses
            if (quizId === 'quiz1') {
                document.getElementById('mauvaiseRéponseQuiz1').style.display = 'none'; // Affiche l'image pour quiz 1
            } else if (quizId === 'quiz2') {
                document.getElementById('mauvaiseRéponseQuiz2').style.display = 'none'; // Affiche l'image pour quiz 2
            } else if (quizId === 'quiz3') {
                document.getElementById('mauvaiseRéponseQuiz3').style.display = 'none'; // Affiche l'image pour quiz 3
            }
            
            
            if (questionIndex + 1 < questions[quizId][niveau].length) {
                questionIndex++;
                afficherQuestion(quizId, niveau, questionIndex,timerID);
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

function avancerQuestion(quizId, niveau, questionIndex) {
    const questionsNiveau = questions[quizId][niveau]; // Récupère les questions du niveau
    if (questionIndex + 1 <= questionsNiveau.length) { 
        let questionLength = questionsNiveau.length; // Longueur totale des questions du niveau
        updateQuestionCounter(questionIndex + 1, questionLength); // Met à jour le compteur des questions
    } else {
        console.log("Fin du quiz pour ce niveau.");
        // Logique à ajouter si nécessaire, par exemple pour afficher un message de fin de niveau ou de quiz
    }
}

// Fonction pour mettre à jour le compteur de questions
function updateQuestionCounter(questionIndex, questionLength) {
    document.getElementById('questionNombre').innerText = 
    questionIndex + " / " + questionLength;
}
