        // Choix du sujet lettres et philosophie
        document.getElementById('imageNietzsche').addEventListener('click', function() {

        // Masque les trois sujets de quiz 
        document.getElementById('imageContainer').style.display = 'none';
    
        // Fait apparaitre les questions 
        document.getElementById('quiz1').style.display = 'block';
    });
    
        // Choix du sujet sciences
        document.getElementById('imageEinstein').addEventListener('click', function() {
    
        // Masque les trois sujets de quiz 
        document.getElementById('imageContainer').style.display = 'none';
    
        // Fait apparaitre les questions 
        document.getElementById('quiz2').style.display = 'block';
    });
    
        // Choix du sujet histoire
        document.getElementById('imageNapoleon').addEventListener('click', function() {
    
        // Masque les trois sujets de quiz 
        document.getElementById('imageContainer').style.display = 'none';
    
        // Fait apparaitre les questions 
        document.getElementById('quiz3').style.display = 'block';
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
        
    let currentQuestionIndex = 0;
    let currentQuiz = "quiz1"; // Commence avec le premier quiz
    
    // Liste des questions 
    const questions = {
        quiz1: [
            {
                question: "Quel philosophe a écrit 'Ainsi parlait Zarathoustra'?",
                answers: ["Friedrich Nietzsche", "Platon", "Descartes", "Socrate"],
                correct: 0
            },
            {
                question: "Qui a écrit 'Tourne la page'?",
                answers: ["Alexandre Dumas", "Squeezie", "Victor Hugo", "Michel Drucker"],
                correct: 1
            },
            {
                question: "Qui a écrit la citation 'L'enfer, c'est les autres'?",
                answers: ["Michel Cymes", "Althusser", "Jean-Paul Sartre", "Simone de Beauvoir"],
                correct: 2
            },
            {
                question: "D'après toi, qui a écrit le classique 'La Promesse de l'aube'?",
                answers: ["Philippe Etchebest", "Gustave Flaubert", "Honoré de Balzac", "Romain Gary"],
                correct: 3
            },
            {
                question: "Où est né le philosophe Albert Camus ?",
                answers: ["En Algérie", "Au Japon", "A Tourcoing", "A Villeurbanne à deux minutes du Transbo"],
                correct: 0
            },
            {
                question: "Qui a écrit 'Si les meilleurs partent en premier, pourquoi suis-je toujours en vie ?'?",
                answers: ["Paul Valéry", "Marcel Proust", "Booba", "Michel Drucker"],
                correct: 2
            },
            {
                question: "Quel livre a écrit Christine de Pizan ?",
                answers: ["Le tueur aveugle", "La Cité des Dames", "L'étranger", "Je suis trop sexiste pour le savoir"],
                correct: 1
            },
            {
                question: "Qui a écrit 'La beauté est dans les yeux de celui qui regarde'?",
                answers: ["Cyril Hanouna", "Oscar Wilde", "Victor Hugo", "Kev Adams"],
                correct: 1
            },
            {
                question: "Par quoi commence le livre 'A la recherche du temps perdu'?",
                answers: ["Longtemps, je me suis couché de bonne heure", "J’suis capable du meilleur, comme du pire Et c’est dans l’pire que j’suis le meilleur", "Appelons la femme un bel animal sans fourrure dont la peau est très recherchée.", "Quand je pense à tous les livres qu'il me reste à lire, j'ai la certitude d'être encore heureux."],
                correct: 0
            }
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
                    options: ["10 000 ans","100 000 ans","10 millions d'années","10 milliards d'années"],
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
        ],
            quiz3: [
                {
                    question: "Qui a été le premier empereur de Rome?",
                    answers: ["Jules César", "Auguste", "Néron", "Caligula"],
                    correct: 1
                },
                {
                    question: "Quelle bataille a marqué le début de la fin pour Napoléon Bonaparte?",
                    answers: ["Bataille de Waterloo", "Bataille d'Austerlitz", "Bataille de Leipzig", "Bataille de Trafalgar"],
                    correct: 0
                },
                {
                    question: "Quel traité a mis fin à la Première Guerre mondiale?",
                    answers: ["Traité de Versailles", "Traité de Trianon", "Traité de Saint-Germain", "Traité de paix de Paris"],
                    correct: 0
                },
                {
                    question: "Quelle révolution a eu lieu en France en 1789?",
                    answers: ["Révolution américaine", "Révolution industrielle", "Révolution française", "Révolution russe"],
                    correct: 2
                },
                {
                    question: "Quel empire est connu pour ses routes, ses aqueducs et son système juridique influent?",
                    answers: ["Empire romain", "Empire ottoman", "Empire mongol", "Empire perse"],
                    correct: 0
                },
                {
                    question: "Qui était le leader sud-africain qui a lutté contre l'apartheid?",
                    answers: ["Desmond Tutu", "Nelson Mandela", "F.W. de Klerk", "Thabo Mbeki"],
                    correct: 1
                },
                {
                    question: "Quelle civilisation ancienne a construit des pyramides à Gizeh?",
                    answers: ["Les Grecs", "Les Romains", "Les Égyptiens", "Les Incas"],
                    correct: 2
                },
                {
                    question: "Quel événement a été déclenché par l'assassinat de l'archiduc François-Ferdinand?",
                    answers: ["La guerre froide", "La Première Guerre mondiale", "La Seconde Guerre mondiale", "La Révolution russe"],
                    correct: 1
                },
                {
                    question: "Qui a écrit la Déclaration d'indépendance des États-Unis?",
                    answers: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
                    correct: 1
                },
                {
                    question: "Quelle était la principale cause de la chute de l'Empire romain?",
                    answers: ["La peste noire", "Les invasions barbares", "Les guerres civiles", "La corruption"],
                    correct: 1
                },
            ],
    };

    function demarrerQuiz(quizId) {
    currentQuiz = quizId; // Mettre à jour le quiz actif
    points = 0; // Réinitialiser les points
    currentQuestionIndex = 0; // Réinitialiser l'index des questions

    afficherQuestion(quizId, currentQuestionIndex); // Afficher la première question
}
    points = 0; // Réinitialiser les points au début du quiz
    currentQuestionIndex = 0; // Réinitialiser l'index des questions

    // Fonction pour afficher le quiz choisi
    function afficherQuiz(quizId) {
        // Masquer les trois sujets de quiz 
        document.getElementById('imageContainer').style.display = 'none';
    
        // Afficher le quiz choisi
        document.getElementById(quizId).style.display = 'block';
        currentQuiz = quizId; // Mettre à jour le quiz courant
        currentQuestionIndex = 0; // Réinitialiser l'index de la question
        afficherQuestion(currentQuiz, currentQuestionIndex); // Afficher la première question
    }

    function afficherQuestion(quizId, questionIndex) {
        const questionObj = questions[quizId][questionIndex];
        
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
    
        // Mettre à jour les textes des boutons
        buttons.forEach((button, index) => {
            button.innerText = questionObj.answers[index];
            button.onclick = function() {
                verifierReponse(quizId, questionIndex, index);
            };
        });
    }

    document.getElementById('bloc1').addEventListener('click', function() {
        // Affiche uniquement le conteneur des images, mais pas le quiz
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.style.display = 'flex';  // S'assurer que le conteneur reste en mode flex
        imageContainer.style.flexDirection = 'row';  // Alignement horizontal (par défaut)
    });    
    
    // Fonction pour placer le message de succès
    function verifierReponse(quizId, questionIndex, answerIndex) {
        const correctAnswer = questions[quizId][questionIndex].correct;
        const successMessageElement = document.getElementById('successMessage'); 
        const feedbackElement = document.getElementById('feedbackMessage');
        
        // Masquer le quiz actuel
        document.getElementById(quizId).style.display = 'none';
    
        if (answerIndex === correctAnswer) {
            // Afficher le message de succès
            successMessageElement.innerText = "Bonne réponse !"; 
            successMessageElement.style.display = 'block'; 

            // Affichage des images de succès
            if (quizId === 'quiz1') {
                document.getElementById('bonneréponsequiz1').style.display = 'block'; // Affiche l'image pour quiz 1
            } else if (quizId === 'quiz2') {
                document.getElementById('bonneréponsequiz2').style.display = 'block'; // Affiche l'image pour quiz 2
            } else if (quizId === 'quiz3') {
                document.getElementById('bonneréponsequiz3').style.display = 'block'; // Affiche l'image pour quiz 3
            }

            // Masquer le message après 1 seconde et passer à la question suivante
            setTimeout(() => {
                successMessageElement.style.display = 'none';
            // Disparition des images 
                if (quizId === 'quiz1') {
                    document.getElementById('bonneréponsequiz1').style.display = 'none'; // Affiche l'image pour quiz 1
                } else if (quizId === 'quiz2') {
                    document.getElementById('bonneréponsequiz2').style.display = 'none'; // Affiche l'image pour quiz 2
                } else if (quizId === 'quiz3') {
                    document.getElementById('bonneréponsequiz3').style.display = 'none'; // Affiche l'image pour quiz 3
                }
    
                if (questionIndex + 1 < questions[quizId].length) {
                    currentQuestionIndex++;
                    afficherQuestion(quizId, currentQuestionIndex);
                    document.getElementById(quizId).style.display = 'block'; // Réaffiche le quiz pour la question suivante
                } else {
                    // Si le quiz est terminé
                    
                    document.getElementById('imageContainer').style.display = 'block'; // Affiche l'écran d'accueil
                    currentQuestionIndex = 0; // Réinitialiser pour le prochain quiz
                }
            }, 1500); // Délai de 1 seconde 50 avant de passer à la suite 
        } else {
            // Afficher le message d'erreur
            feedbackElement.innerText = "Mauvaise réponse !";
            feedbackElement.style.display = 'block'; 
            
            // Affichage des images pour les mauvaises réponses
            if (quizId === 'quiz1') {
                document.getElementById('mauvaiseréponsequiz1').style.display = 'block'; // Affiche l'image pour quiz 1
            } else if (quizId === 'quiz2') {
                document.getElementById('mauvaiseréponsequiz2').style.display = 'block'; // Affiche l'image pour quiz 2
            } else if (quizId === 'quiz3') {
                document.getElementById('mauvaiseréponsequiz3').style.display = 'block'; // Affiche l'image pour quiz 3
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
                    currentQuestionIndex++;
                    afficherQuestion(quizId, currentQuestionIndex);
                    document.getElementById(quizId).style.display = 'block'; // Réaffiche le quiz pour la question suivante
                } else {
                    // Si le quiz est terminé
                    const imageContainer = document.getElementById('imageContainer');
                    imageContainer.style.display = 'flex';  // S'assurer que le conteneur reste en mode flex
                    imageContainer.style.flexDirection = 'row';  // Alignement horizontal (par défaut)
                    document.getElementById('imageContainer').style.display = 'block';
                }
            }, 1500); // Délai de 2 secondes avant de passer à la suite
        }
    }

    // Afficher la première question du premier quiz
    afficherQuestion(currentQuiz, currentQuestionIndex);

