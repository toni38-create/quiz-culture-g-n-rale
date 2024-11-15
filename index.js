
const questions = {
    quiz1: [
        {
            question: "Dans quelle œuvre de Dostoïevski trouve-t-on le personnage de Raskolnikov, étudiant en droit tourmenté par ses dilemmes moraux?",
            answers: ["Les Frères Karamazov", "L'Idiot", "Crime et Châtiment", "Les Démons"],
            correct: 2,
        },
        {
            question: "Quel philosophe a influencé Friedrich Nietzsche avec le concept du 'Surhomme'?",
            answers: ["Arthur Schopenhauer", "Emmanuel Kant", "Platon", "Søren Kierkegaard"],
            correct: 0
        },
        {
            question: "Qui a écrit 'De l'esprit des lois', une œuvre fondatrice de la théorie de la séparation des pouvoirs?",
            answers: ["Voltaire", "Rousseau", "Montesquieu", "John Locke"],
            correct: 2
        },
        {
            question: "Dans 'La République' de Platon, quel est le but de l'allégorie de la caverne?",
            answers: ["Illustrer la difficulté de trouver le bonheur","Critiquer la politique de son époque","Montrer la distinction entre le monde sensible et le monde des idées","Décrire les hiérarchies sociales de la Grèce antique"],
            correct: 2
        },
        {
            question: "Quel écrivain français a exploré l'absurde et le nihilisme dans son œuvre 'Le Mythe de Sisyphe'?",
            answers: ["Albert Camus", "Jean-Paul Sartre", "Simone de Beauvoir", "André Malraux"],
            correct: 0
        },
        {
            question: "Dans 'Germinal' d'Émile Zola, quel mouvement social est décrit à travers la vie des mineurs?",
            answers: [
                "Le syndicalisme révolutionnaire",
                "Le socialisme utopique",
                "Le communisme",
                "Le mouvement anarchiste"
            ],
            correct: 2
        },
        {
            question: "À quel mouvement littéraire appartiennent les œuvres de Marcel Proust et Virginia Woolf?",
            answers: [
                "Existentialisme",
                "Symbolisme",
                "Nouveau roman",
                "Modernisme"
            ],
            correct: 3
        },
        {
            question: "Quelle est la thèse centrale du 'Traité de la nature humaine' de David Hume?",
            answers: [
                "L'importance de la liberté individuelle",
                "L'origine des connaissances dans l'expérience sensible",
                "La moralité comme expression de la rationalité",
                "L'existence de vérités innées"
            ],
            correct: 1
        },
        {
            question: "Dans 'Ainsi parlait Zarathoustra', quelle idée centrale Friedrich Nietzsche introduit-il pour guider l'humanité?",
            answers: [
                "Le nihilisme",
                "Le retour éternel",
                "La moralité des esclaves",
                "La volonté de puissance"
            ],
            correct: 3
        },
        {
            question: "Quel ouvrage d’Albert Camus commence par la phrase 'Aujourd'hui, maman est morte.' ?",
            answers: ["L'Étranger", "La Peste", "Les Justes", "Le Mythe de Sisyphe"],
            correct: 0
        },
        {
            question: "Dans 'Les Confessions', Jean-Jacques Rousseau décrit sa vie et ses idées. De quel siècle est-il ?",
            answers: ["XVIIe siècle", "XVIIIe siècle", "XIXe siècle", "XVIe siècle"],
            correct: 1
        },
        {
            question: "Quel écrivain français est associé au courant du Nouveau Roman ?",
            answers: ["Albert Camus", "Marguerite Duras", "André Gide", "Victor Hugo"],
            correct: 1
        },
        {
            question: "Quel roman de Franz Kafka met en scène un homme accusé sans savoir pourquoi ?",
            answers: ["Le Château", "La Métamorphose", "Le Procès", "Amérique"],
            correct: 2
        },
        {
            question: "Qui a écrit 'Ainsi parlait Zarathoustra', une œuvre fondatrice de la philosophie moderne ?",
            answers: ["Friedrich Nietzsche", "Arthur Schopenhauer", "Søren Kierkegaard", "Hegel"],
            correct: 0
        },
        {
            question: "Dans 'La République' de Platon, quel est le rôle alloué aux philosophes dans la cité idéale ?",
            answers: ["Guerriers protégeant la cité", "Rois gouvernant la cité", "Artisans travaillant pour la cité", "Citoyens ordinaires soumis aux lois"],
            correct: 1
        },
    ],
    quiz2: [
        {
            question: "Quel est l'élément chimique avec le symbole 'O'?",
            answers: ["Oxygène", "Or", "Osmium", "Oganesson"],
            correct: 0
        },
        {
            question: "Quelle est la formule de la vitesse?",
            answers: ["v = d / t", "v = m / t", "v = t / d", "v = d * t"],
            correct: 0
        },
        {
            question: "Qui est célèbre pour la théorie de la relativité?",
            answers: ["Isaac Newton", "Albert Einstein", "Galilée", "Marie Curie"],
            correct: 1
        },
        {
            question: "Quel est l'élément chimique avec le symbole 'H'?",
            answers: ["Hydrogène", "Hélium", "Lithium", "Oxygène"],
            correct: 0
        },
        {
            question: "Quel phénomène quantique permet à des particules de passer à travers une barrière, même si elles n'ont pas assez d'énergie pour le faire selon la physique classique?",
            answers: ["Effet tunnel", "Intrication quantique", "Décohérence", "Dualité onde-particule"],
            correct: 0
        },
        {
            question: "Qu'est-ce qu'un trou noir ?",
            answers: ["Une étoile qui s'est effondrée sous sa propre gravité","Une étoile extrêmement lumineuse","Un nuage de gaz interstellaire", "Une planète géante"],
            correct: 0
        },
        {
            question: "Quelle est la durée de vie approximative d'une étoile comme le Soleil ?",
            answers: ["10 000 ans","100 000 ans","10 millions d'années","10 milliards d'années"],
            correct: 3
        },
        {
            question: "Quelle est la différence entre un acide et une base en termes de pH?",
            answers: ["Les acides ont un pH supérieur à 7, tandis que les bases ont un pH inférieur à 7.", "Les acides ont un pH inférieur à 7, tandis que les bases ont un pH supérieur à 7.", "Les acides et les bases ont tous deux un pH de 7.", "Les acides et les bases n'ont pas de pH."],
            correct: 1
        },
        {
            question: "Quel est le nom du phénomène par lequel la lumière change de direction lorsqu'elle passe d'un milieu à un autre?",
            answers: ["Diffraction", "Réflexion", "Réfraction", "Dispersion"],
            correct: 2
        },
        {
            question: "Quel est le nom du chromosome sexuel associé à la détermination du sexe masculin chez l'être humain?",
            answers: ["Chromosome X", "Chromosome Y", "Chromosome 21", "Chromosome 22"],
            correct: 1
        },
        {
            question: "Quel phénomène se produit lorsqu'une étoile massive explose en fin de vie, dispersant ses éléments dans l'espace ?",
            answers: ["Nova", "Supernova", "Éruption solaire", "Amas globulaire"],
            correct: 1
        },
        {
            question: "Quel est le nom de la galaxie la plus proche de la Voie lactée ?",
            answers: ["La galaxie d'Andromède", "La galaxie du Sombrero", "La nébuleuse d'Orion", "La galaxie du Triangle"],
            correct: 0
        },
        {
            question: "Quel type d'astre émet des ondes radio régulières, souvent interprétées comme des pulsations ?",
            answers: ["Étoile à neutrons", "Quasar", "Pulsar", "Amas stellaire"],
            correct: 2
        },
        {
            question: "Quelle théorie explique l'origine de l'univers comme une expansion rapide à partir d'un état extrêmement dense et chaud ?",
            answers: ["La théorie des cordes", "La relativité restreinte", "Le Big Bang", "La théorie des multivers"],
            correct: 2
        },
        {
            question: "Quel terme désigne une planète située en dehors de notre système solaire ?",
            answers: ["Exoplanète", "Astéroïde", "Planète naine", "Système binaire"],
            correct: 0
        },
    ],
    quiz3: [
        {
            question: "Quel traité signé en 843 a divisé l'Empire carolingien entre les petits-fils de Charlemagne ?",
            answers: ["Traité de Verdun", "Traité de Troyes", "Traité de Paris", "Traité de Westphalie"],
            correct: 0
        },
        {
            question: "Quel événement de 1517 marque le début de la Réforme protestante initiée par Martin Luther ?",
            answers: [
                "Le Concile de Trente",
                "La publication des 95 thèses",
                "La Paix d’Augsbourg",
                "La Guerre des Paysans"
            ],
            correct: 1
        },
        {
            question: "Quel roi anglais a instauré l'Acte de suprématie en 1534, marquant la rupture avec l'Église catholique ?",
            answers: ["Henri VII", "Henri VIII", "Édouard VI", "Jacques Ier"],
            correct: 1
        },
        {
            question: "Quel empire contrôlait la Route de la Soie jusqu'à sa chute face aux Mongols au XIIIe siècle ?",
            answers: ["Empire byzantin", "Empire chinois", "Empire khmer", "Empire perse"],
            correct: 3
        },
        {
            question: "Qui a fondé la dynastie des Capétiens en France en 987 ?",
            answers: ["Louis IV", "Hugues Capet", "Charlemagne", "Philippe Auguste"],
            correct: 1
        },
        {
            question: "Quel fut le principal rival militaire de la République romaine lors des guerres puniques ?",
            answers: ["Les Carthaginois", "Les Gaulois", "Les Égyptiens", "Les Parthes"],
            correct: 0
        },
        {
            question: "En quelle année la bataille de Hastings, marquant la conquête normande de l’Angleterre, a-t-elle eu lieu ?",
            answers: ["1066", "1215", "1328", "1415"],
            correct: 0
        },
        {
            question: "Quel empereur romain a divisé l'Empire en deux parties en 285, établissant la Tétrarchie ?",
            answers: ["Néron", "Constantin", "Dioclétien", "Augustin"],
            correct: 2
        },
        {
            question: "Quel événement de 1905 a marqué le début de l’affaiblissement de l'Empire russe avant la révolution de 1917 ?",
            answers: [
                "La défaite contre le Japon",
                "La révolution bolchevique",
                "Le traité de Brest-Litovsk",
                "La révolution de Février"
            ],
            correct: 0
        },
        {
            question: "Quel traité a mis fin à la guerre de Succession d'Espagne en 1713 ?",
            answers: [
                "Traité de Westphalie",
                "Traité de Versailles",
                "Traité d'Utrecht",
                "Traité de Fontainebleau"
            ],
            correct: 2
        },
        {
            question: "En quelle année la Révolution industrielle a-t-elle commencé en Grande-Bretagne ?",
            answers: ["1750", "1780", "1800", "1820"],
            correct: 1
        },
        {
            question: "Quel empire, considéré comme 'le vieil homme malade de l'Europe', s’est effondré après la Première Guerre mondiale ?",
            answers: ["Empire austro-hongrois", "Empire ottoman", "Empire russe", "Empire allemand"],
            correct: 1
        },
        {
            question: "Quel explorateur a mené la première expédition autour du monde au XVIe siècle ?",
            answers: ["Vasco de Gama", "Christophe Colomb", "Ferdinand Magellan", "James Cook"],
            correct: 2
        },
        {
            question: "Quelle guerre civile a eu lieu en Angleterre au XVIIe siècle, opposant les royalistes aux parlementaires ?",
            answers: ["Guerre des Deux Roses", "Guerre civile anglaise", "Guerre de Cent Ans", "Rébellion des barons"],
            correct: 1
        },
        {
            question: "Quel événement en 1453 marque la fin de l'Empire byzantin ?",
            answers: ["La chute de Constantinople", "La bataille de Poitiers", "La découverte de l'Amérique", "La Réforme protestante"],
            correct: 0
        },
    ],
};
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
    
    // Afficher le quiz choisi
    document.getElementById(quizId).style.display = 'block'; 
    currentQuiz = quizId; // Mettre à jour le quiz courant
    currentQuestionIndex = 0; // Réinitialiser l'index de la question
    afficherQuestion(currentQuiz, currentQuestionIndex); // Afficher la première question
}

let currentQuestionIndex = 0;
let currentQuiz = "quiz1"; // Commence avec le premier quiz

points = 0; // Réinitialiser les points au début du quiz

///////////////////////////////////// TIMER ///////////////////////////////////////////////////

// ID du quiz et index de la question
let questionIndex = 0; // Commence à 0 pour la première question


// Fonction pour démarrer le timer
function startTimer(quizId, questionIndex) {
    
    document.getElementById("timer").style.display = "block";
    const timerDiv = document.getElementById("timer");
    
    let tempsquestion = 10;  // Réinitialise le temps à 10 secondes pour chaque nouvelle question
    timerDiv.innerText = tempsquestion;  // Affiche le temps initial
    
    const timerID = setInterval(() => {
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
    }, 1000); 
} // Appelle la fonction toutes les secondes

    return timerID;


/////////////////////////////////////////////////////////////////////////////////////////////////////

function afficherQuestion(quizId, questionIndex, intervalID = null) {
    avancerQuestion(quizId, questionIndex);
    clearInterval(intervalID);  // Arrête le timer de la question précédente
    let questionObj = questions[quizId][questionIndex];
    
    // Cibler les éléments spécifiques pour chaque quiz
    let questionElement;
    if (quizId === 'quiz1') {
        questionElement = document.getElementById('questionphilo');
    } else if (quizId === 'quiz2') {
        questionElement = document.getElementById('questionsciences');
    } else if (quizId === 'quiz3') {
        questionElement = document.getElementById('questionhistoire');
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
        
        // Affichage des images de succès
        if (quizId === 'quiz1') {
            document.getElementById('bonneréponsequiz1').style.display = 'block'; // Affiche l'image pour quiz 1
            document.getElementById('timer').style.display = 'none'; // Affiche l'image pour quiz 1

        } else if (quizId === 'quiz2') {
            document.getElementById('bonneréponsequiz2').style.display = 'block'; // Affiche l'image pour quiz 2
            document.getElementById('timer').style.display = 'none'; // Affiche l'image pour quiz 1

        } else if (quizId === 'quiz3') {
            document.getElementById('bonneréponsequiz3').style.display = 'block'; // Affiche l'image pour quiz 3
            document.getElementById('timer').style.display = 'none'; // Affiche l'image pour quiz 1

        }

        // Masquer le message après 1 seconde et passer à la question suivante
        setTimeout(() => {
            successMessageElement.style.display = 'none';
            // Disparition des images 
            if (quizId === 'quiz1') {
                document.getElementById('bonneréponsequiz1').style.display = 'none'; // Disparition de l'image pour quiz 1
            } else if (quizId === 'quiz2') {
                document.getElementById('bonneréponsequiz2').style.display = 'none'; // Disparition de l'image pour quiz 2
            } else if (quizId === 'quiz3') {
                document.getElementById('bonneréponsequiz3').style.display = 'none'; // Disparition de l'image pour quiz 3
            }
            
        if (questionIndex + 1 < questions[quizId].length) {
            afficherQuestion(quizId, questionIndex + 1 ,timerID);
            document.getElementById(quizId).style.display = 'block'; // Réaffiche le quiz pour la question suivante
            } else {
                // Si le quiz est terminé
                document.getElementById(quizId).style.display = 'none';
                document.getElementById('scoreValeur').innerText = score;
                document.getElementById('scoreFinal').style.display = 'block';
                document.getElementById('retouraccueil').style.display = 'block';
                document.getElementById('timer').style.display = 'none';
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
            document.getElementById('mauvaiseréponsequiz1').style.display = 'block'; // Affiche l'image pour quiz 1
            document.getElementById('timer').style.display = 'none'; // Affiche l'image pour quiz 1

        } else if (quizId === 'quiz2') {
            document.getElementById('mauvaiseréponsequiz2').style.display = 'block'; // Affiche l'image pour quiz 2
            document.getElementById('timer').style.display = 'none'; // Affiche l'image pour quiz 1

        } else if (quizId === 'quiz3') {
            document.getElementById('mauvaiseréponsequiz3').style.display = 'block'; // Affiche l'image pour quiz 3
            document.getElementById('timer').style.display = 'none'; // Affiche l'image pour quiz 1

        }

        
        // Masquer le message après 2 secondes et passer à la question suivante
        setTimeout(() => {
            feedbackElement.style.display = 'none';
            
            // Disparition  des images pour les mauvaises réponses
            if (quizId === 'quiz1') {
                document.getElementById('mauvaiseréponsequiz1').style.display = 'none'; // Affiche l'image pour quiz 1
            } else if (quizId === 'quiz2') {
                document.getElementById('mauvaiseréponsequiz2').style.display = 'none'; // Affiche l'image pour quiz 2
            } else if (quizId === 'quiz3') {
                document.getElementById('mauvaiseréponsequiz3').style.display = 'none'; // Affiche l'image pour quiz 3
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
                document.getElementById('retouraccueil').style.display = 'block';
                document.getElementById('timer').style.display = 'none';
            }
        }, 2400); // Délai de 2 secondes 40 avant de passer à la suite
    }
}

//////////////////////// BOUTON RETOUR A L ACCUEIL //////////////////////////////

document.getElementById('retouraccueil').addEventListener('click', function() {
    
    // Fait apparaitre les images
    document.getElementById('imageContainer').style.display = 'flex';
    document.getElementById('retouraccueil').style.display = 'none';
    document.getElementById('scoreFinal').style.display = 'none';
    document.getElementById('timer').style.display = 'none';
    document.getElementById('questionnombre').style.display = 'none';
});

///////////////////////// COMPTEUR DE QUESTIONS //////////////////////////////////

function avancerQuestion(quizId, questionIndex) {
    if (questionIndex + 1 < questions[quizId].length) 
    {
        let questionLength = questions[quizId].length;
        updateQuestionCounter(questionIndex + 1,questionLength); // Mettre à jour le compteur
    } else {
        console.log("Fin du quiz.");
    }
}

// Fonction pour mettre à jour le compteur de questions
function updateQuestionCounter(questionIndex, questionLength) {
    document.getElementById('questionnombre').innerText = 
    questionIndex + " / " + questionLength;
}
