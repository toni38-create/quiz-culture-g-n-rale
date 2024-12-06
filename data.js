const questions = {
        quiz1: {
            easy: [
                {
                    question: "Qui est l'auteur de 'Les Misérables' ?",
                    answers: ["Victor Hugo", "Émile Zola", "Marcel Proust", "Albert Camus"],
                    correct: 0, // Victor Hugo
                },
                {
                    question: "Quel philosophe est l'auteur de 'Le Discours de la Méthode' ?",
                    answers: ["Jean-Paul Sartre", "René Descartes", "Friedrich Nietzsche", "Aristote"],
                    correct: 1, // René Descartes
                },
                {
                    question: "Dans quelle œuvre de Shakespeare trouve-t-on les personnages de Hamlet et Ofélie ?",
                    answers: ["Roméo et Juliette", "Macbeth", "Hamlet", "Le Roi Lear"],
                    correct: 2, // Hamlet
                },
                {
                    question: "Qui a écrit 'L'Étranger' ?",
                    answers: ["Albert Camus", "Simone de Beauvoir", "Jean-Paul Sartre", "André Gide"],
                    correct: 0, // Albert Camus
                },
                {
                    question: "Quel philosophe a écrit 'La République' ?",
                    answers: ["Jean-Jacques Rousseau", "Socrate", "Aristote", "Platon"],
                    correct: 3, // Platon 
                },
                {
                    question: "Quel écrivain a écrit 'À la recherche du temps perdu' ?",
                    answers: ["Marcel Proust", "Émile Zola", "Gustave Flaubert", "Honoré de Balzac"],
                    correct: 0, // Marcel Proust
                },
                {
                    question: "Dans quelle œuvre de Victor Hugo trouve-t-on le personnage de Quasimodo ?",
                    answers: ["Les Misérables", "Notre-Dame de Paris", "L'Homme qui rit", "Le Dernier Jour d'un Condamné"],
                    correct: 1, // Notre-Dame de Paris
                },
                {
                    question: "Qui a écrit 'L'Imaginaire' ?",
                    answers: ["René Descartes", "Jean-Paul Sartre", "Jean de La Fontaine", "Molière"],
                    correct: 3, // Molière
                },
                {
                    question: "Quel est le nom du livre de Jean-Paul Sartre sur la liberté et la mauvaise foi ?",
                    answers: ["L'Être et le Néant", "Les Mots", "La Nausée", "Le Deuxième Sexe"],
                    correct: 0, // L'Etre et le Néant
                },
                {
                    question: "Qui a écrit 'Candide' ?",
                    answers: ["Voltaire", "Jean-Jacques Rousseau", "Montesquieu", "Diderot"],
                    correct: 0, // Voltaire
                },
                {
                    question: "Quel est le philosophe célèbre pour sa théorie de l'évolution ?",
                    answers: ["Sigmund Freud", "Jean-Jacques Rousseau", "Charles Darwin", "René Descartes"],
                    correct: 2, // Charles Darwin
                },
                {
                    question: "Qui est l'auteur du 'Contrat Social' ?",
                    answers: ["Voltaire", "Jean-Jacques Rousseau", "Baruch Spinoza", "John Locke"],
                    correct: 1, // Jean-Jacques Rousseau
                },
                {
                    question: "Dans quelle œuvre de Gustave Flaubert trouve-t-on le personnage de Madame Bovary ?",
                    answers: ["L'Éducation sentimentale", "Bouvard et Pécuchet", "Madame Bovary", "Salammbô"],
                    correct: 2, // Madame Bovary
                },
                {
                    question: "Quel philosophe est l'auteur de 'Critique de la raison pure' ?",
                    answers: ["Emmanuel Kant", "Georg Wilhelm Friedrich Hegel", "Friedrich Nietzsche", "Arthur Schopenhauer"],
                    correct: 0, // Emmanuel Kant 
                },
                {
                    question: "Quel écrivain a écrit 'Les Fleurs du mal' ?",
                    answers: ["Paul Verlaine", "Arthur Rimbaud", "Charles Baudelaire", "Alfred de Musset"],
                    correct: 2, // Charles Baudelaire
                }
            ],
            medium: [
                    {
                        question: "Quel philosophe a écrit 'L'Être et le Néant' ?",
                        answers: ["Sartre", "Kant", "Hegel", "Spinoza"],
                        correct: 0, // Sartre
                    },
                    {
                        question: "Dans quelle œuvre de René Descartes se trouve le célèbre 'Je pense, donc je suis' ?",
                        answers: ["Méditations Métaphysiques", "Le Discours de la Méthode", "Les Passions de l'âme", "Les Principes de la Philosophie"],
                        correct: 1, // Le Discours de la Méthode 
                    },
                    {
                        question: "Dans quel livre Nietzsche affirme-t-il 'Dieu est mort' ?",
                        answers: ["Ainsi parlait Zarathoustra", "Le Gai Savoir", "Par-delà bien et mal", "La Volonté de puissance"],
                        correct: 1, // Le Gai Savoir
                    },
                    {
                        question: "Quel philosophe a développé la théorie du surhomme ?",
                        answers: ["Friedrich Nietzsche", "Jean-Paul Sartre", "Georg Wilhelm Friedrich Hegel", "Martin Heidegger"],
                        correct: 0, // Jean-Paul Sartre
                    },
                    {
                        question: "Dans quelle œuvre Kant traite-t-il de l'éthique et de la morale ?",
                        answers: ["Critique de la raison pure", "Critique de la raison pratique", "La Métaphysique des mœurs", "Fondements de la métaphysique des mœurs"],
                        correct: 2, // La Métaphysique des moeurs
                    },
                    {
                        question: "Qui a écrit 'Le Prince' ?",
                        answers: ["Spinoza", "Thomas Hobbes", "Jean-Jacques Rousseau", "Machiavel"],
                        correct: 3, // Machiavel
                    },
                    {
                        question: "Quel écrivain est l'auteur de 'Les Confessions' ?",
                        answers: ["Stendhal", "Jean-Paul Sartre", "Jean-Jacques Rousseau", "Honoré de Balzac"],
                        correct: 2, // Jean-Jacques Rousseau
                    },
                    {
                        question: "Quel philosophe est connu pour sa théorie de l'idéalisme absolu ?",
                        answers: ["Georg Wilhelm Friedrich Hegel", "Friedrich Nietzsche", "Arthur Schopenhauer", "Emmanuel Kant"],
                        correct: 0, // Hegel
                    },
                    {
                        question: "Quel écrivain a écrit 'L'Avare' ?",
                        answers: ["Voltaire", "Racine", "Corneille", "Molière"],
                        correct: 3, // Molière
                    },
                    {
                        question: "Quel philosophe a écrit 'Critique de la raison pratique' ?",
                        answers: ["René Descartes", "Emmanuel Kant", "Friedrich Nietzsche", "Arthur Schopenhauer"],
                        correct: 1, // Emmanuel Kant 

                    },
                    {
                        question: "Quel philosophe a écrit 'Le Manifeste du Parti Communiste' ?",
                        answers: ["Jean-Paul Sartre", "Louis Althusser", "Karl Marx", "Michel Foucault"],
                        correct: 2, // Karl Marx
                    },
                    {
                        question: "Dans quelle œuvre de Rousseau trouve-t-on la célèbre phrase 'L'homme est né libre, et partout il est dans les fers' ?",
                        answers: ["Emile", "Discours sur l'origine et les fondements de l'inégalité parmi les hommes", "Le Contrat Social", "Le Discours sur les sciences et les arts"],
                        correct: 2, // Le Contrat Social
                    },
                    {
                        question: "Quel est le principal ouvrage de John Locke sur les droits naturels ?",
                        answers: ["Deux traités du gouvernement", "Essai sur l'entendement humain", "Leviathan", "Critique de la raison pure"],
                        correct: 0, // Deux traités du gouvernement
                    },
                    {
                        question: "Dans quelle œuvre Foucault parle-t-il du pouvoir et de la surveillance ?",
                        answers: ["Histoire de la sexualité", "Histoire de la folie", "Les Mots et les Choses", "Surveiller et Punir"],
                        correct: 3, // Surveiller et Punir
                    },
                    {
                        question: "Quel philosophe est l'auteur de 'La Nausée' ?",
                        answers: ["Merleau-Ponty", "Simone de Beauvoir", "Jean-Paul Sartre", "Albert Camus"],
                        correct: 2, // Jean-Paul Sartre
                    },
                ],
                difficult: [
                    {
                        question: "Dans quel roman de James Joyce utilise-t-on abondamment la technique du 'stream of consciousness' (courant de conscience) ?",
                        answers: ["Les gens de Dublin", "Finnegans Wake", "Portrait de l'artiste en jeune homme", "Ulysse"],
                        correct: 3, // Ulysse
                    },
                    {
                        question: "Quel est le principe fondamental de la phénoménologie de Husserl ?",
                        answers: ["La réduction phénoménologique", "L'intuition pure", "L'extériorité", "Le Dasein"],
                        correct: 0, // La réduction phénoménologique
                    },
                    {
                        question: "Dans 'Les Misérables' de Victor Hugo, quel personnage devient un héros en sauvant des gens pendant l'émeute de Paris en 1832 ?",
                        answers: ["Enjolras", "Gavroche", "Marius Pontmercy", "Jean Valjean"],
                        correct: 3, // Jean Valjean
                    },
                    {
                        question: "Dans quelle œuvre Hegel développe-t-il sa dialectique de l'histoire ?",
                        answers: ["Phénoménologie de l'Esprit", "Science de la logique", "Principes de la philosophie du droit", "Leçons sur la philosophie de l'histoire"],
                        correct: 3, // Leçons sur la philosophie de l'histoire 
                    },
                    {
                        question: "Quel philosophe a écrit 'La Science de la logique' ?",
                        answers: ["Georg Wilhelm Friedrich Hegel", "Martin Heidegger", "Friedrich Nietzsche", "Karl Marx"],
                        correct: 0, // Hegel
                    },
                    {
                        question: "Dans quel roman de Marguerite Yourcenar retrouve-t-on les pensées fictives de l'empereur Hadrien ?",
                        answers: ["L'oeuvre au noir", "Mémoires d'Hadrien", "Alexis ou le Traité du vain combat", "Denier du rêve"],
                        correct: 1, // Mémoires d'Hadrien 
                    },
                    {
                        question: "Dans 'Être et Temps' de Heidegger, quel concept décrit la condition humaine face à sa finitude ?",
                        answers: ["L'angoisse", "Le Dasein", "La temporalité", "L'être-pour-la-mort"],
                        correct: 3, // L'être-pour-la-mort 
                    },
                    {
                        question: "Quel est le philosophe de l'Existentialisme ?",
                        answers: ["Sartre", "Hegel", "Kant", "Nietzsche"],
                        correct: 0, // Sartre 
                    },
                    {
                        question: "Quel philosophe a formulé l'argument ontologique dans une version influente du 11ème siècle ?",
                        answers: ["Thomas d'Aquin", "Anselme de Cantorbéry", "René Descartes", "Gottfried Leibniz"],
                        correct: 1, // Anselme de Cantorbéry
                    },
                    {
                        question: "Dans quelle œuvre de Marx est abordée la notion de 'l'aliénation' ?",
                        answers: ["Le Capital", "Manuscrits économiques et philosophiques", "Le Manifeste du Parti Communiste", "La Guerre civile en France"],
                        correct: 0, // Le Capital
                    },
                    {
                        question: "Quel philosophe est l'auteur de 'La Vie de Jésus' ?",
                        answers: ["Rousseau", "Diderot", "Renan", "Voltaire"],
                        correct: 2, // Renan
                    },
                    {
                        question: "Qui a écrit 'Le mythe de Sisyphe' ?",
                        answers: ["Socrate", "Albert Camus", "Simone de Beauvoir", "Maurice Merleau-Ponty"],
                        correct: 1, // Camus
                    },
                    {
                        question: "Quel philosophe a écrit 'De l'esprit des lois' ?",
                        answers: ["Montesquieu", "Rousseau", "Voltaire", "Diderot"],
                        correct: 0, // Montesquieu
                    },
                    {
                        question: "Quel philosophe a développé la théorie du 'pouvoir-savoir' ?",
                        answers: ["Sigmund Freud", "Jean-Paul Sartre", "Karl Marx", "Michel Foucault"],
                        correct: 3, // Michel Foucault 
                    },
                    {
                        question: "Dans quel ouvrage Foucault analyse-t-il le lien entre pouvoir et institution ?",
                        answers: ["Les Mots et les Choses", "Surveiller et punir", "L'Archéologie du savoir", "La Volonté de savoir"],
                        correct: 1, // Surveiller et punir
                    },
                ], 
        },
        quiz2: {
            easy: [
                {
                    question: "Quel est l'élément chimique dont le symbole est O ?",
                    answers: ["Oxygène", "Ozone", "Or", "Oxyde"],
                    correct: 0, // Oxygène
                },
                {
                    question: "Quel est l'astre le plus proche de la Terre ?",
                    answers: ["Mars", "Le Soleil", "La Lune", "Vénus"],
                    correct: 2, // La Lune
                },
                {
                    question: "Quel est le nom de la galaxie dans laquelle se trouve la Terre ?",
                    answers: ["Soleil", "Andromède", "Centaurus", "Voie Lactée"],
                    correct: 3, // Voie Lactée
                },
                {
                    question: "Quel est le plus grand animal vivant sur Terre ?",
                    answers: ["La baleine bleue", "L'éléphant", "Le requin", "La girafe"],
                    correct: 0, // La baleine bleue
                },
                {
                    question: "De quel gaz est principalement composé l'atmosphère terrestre ?",
                    answers: ["Hydrogène", "Oxygène", "Azote", "Carbone"],
                    correct: 2, // Azote 
                },
                {
                    question: "Quel est le nom du premier homme à avoir marché sur la Lune ?",
                    answers: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
                    correct: 1, // Neil Armstrong 
                },
                {
                    question: "Quel est le nom du processus par lequel l'oxygène est échangé dans les poumons ?",
                    answers: ["La photosynthèse", "La diffusion", "La respiration cellulaire", "La ventilation pulmonaire"],
                    correct: 1, // La diffusion 
                },
                {
                    question: "Quel est l'élément chimique qui est le plus abondant dans l'univers ?",
                    answers: ["Hydrogène", "Oxygène", "Carbone", "Hélium"],
                    correct: 0, // Hydrogène 
                },
                {
                    question: "Combien de planètes gravitent autour du Soleil dans notre système solaire ?",
                    answers: ["10", "7", "9", "8"],
                    correct: 3, // 8
                },
                {
                    question: "Qu'est-ce qu'un trou noir ?",
                    answers: ["Une planète", "Un trou dans la Terre", "Une région où la gravité est si forte que rien ne peut en sortir", "Une étoile mourante"],
                    correct: 2, // Une région où la gravité est si forte que rien ne peut en sortir
                },
                {
                    question: "Quelle planète est surnommée la planète rouge ?",
                    answers: ["Mars", "Jupiter", "Vénus", "Saturne"],
                    correct: 0, // Mars
                },
                {
                    question: "Quel est l’état principal de l’eau à 100 degrés Celsius ?",
                    answers: ["Liquide", "Gazeux", "Solide", "Plasma"],
                    correct: 1, // Gazeux 
                },
                {
                    question: "Quel est le satellite naturel de la Terre ?",
                    answers: ["Titan", "Mars", "Io", "La lune"],
                    correct: 3, // La lune 
                },
                {
                    question: "Quelle force maintient les planètes en orbite autour du Soleil ?",
                    answers: ["La gravité", "La magnétosphère", "La force nucléaire", "L’électricité statique"],
                    correct: 0, // La gravité 
                },
                {
                    question: "Quelle étoile est la plus proche de la Terre après le Soleil ?",
                    answers: ["Proxima du Centaure", "Sirius", "Bételgeuse", "Alpha du Centaure"],
                    correct: 0, // Proxima du Centaure 
                },
            ],
            medium: [
                {
                    question: "Quel est le nom du premier satellite artificiel lancé dans l'espace ?",
                    answers: ["Volstok 1", "Apollo 11", "Spoutnik 1", "Hubble"],
                    correct: 2, // Spoutnik 1 
                },
                {
                    question: "Selon le modèle cosmologique actuel, quel phénomène a conduit à l'accélération de l'expansion de l'univers après la phase d'inflation primordiale ?",
                    answers: ["La matière noire", "L'énergie noire", "La décohérence quantique", "La théorie de la relativité générale"],
                    correct: 1, // L'énergie noir 
                },
                {
                    question: "Quel est l'élément chimique dont le symbole est He ?",
                    answers: ["Carbone", "Hydrogène", "Beryllium", "Hélium"],
                    correct: 3, // Hélium 
                },
                {
                    question: "Qu'est-ce qu'une étoile à neutrons ?",
                    answers: ["Un objet dense formé par l'effondrement d'une étoile massive", "Une étoile en fin de vie", "Une planète géante", "Un satellite naturel"],
                    correct: 0, // Un objet dense formé par l'effondrement d'une étoile massive
                },
                {
                    question: "Qu'est-ce qu'un quasar ?",
                    answers: ["Une source d'énergie extrêmement brillante en astrophysique", "Une étoile", "Un type de planète", "Un trou noir"],
                    correct: 0, // Une source d'énergie extrêmement brillante en astrophysique
                },
                {
                    question: "Qu'est-ce que l'énergie noire ?",
                    answers: ["Une planète lointaine", "Une matière invisible", "Un type de radiation", "Une forme d'énergie mystérieuse accélérant l'expansion de l'univers"],
                    correct: 3, // Une forme d'énergie mystérieuse accélérant l'expansion de l'univers
                },
                {
                    question: "Quel est le nom du télescope spatial lancé en 1990 ?",
                    answers: ["Chandra", "James Webb", "Hubble", "Kepler"],
                    correct: 2, // Hubble
                },
                {
                    question: "Quel est le principal gaz à effet de serre responsable du réchauffement climatique ?",
                    answers: ["Dioxyde de carbone", "Oxygène", "Ozone", "Méthane"],
                    correct: 0, // Dioxyde de carbone
                },
                {
                    question: "Qui a découvert la structure de l'ADN ?",
                    answers: ["James Watson et Francis Crick", "Albert Einstein", "Rosalind Franklin", "Charles Darwin"],
                    correct: 0, // James Watson et Francis Crick
                },
                {
                    question: "Quelle est la particule subatomique porteuse de la force électromagnétique ?",
                    answers: ["Le neutron", "L'électron", "Le photon", "Le proton"],
                    correct: 2, // Le photon
                },
                {
                    question: "Quel est le nom du physicien qui a proposé la théorie de la relativité générale ?",
                    answers: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galilée"],
                    correct: 0, // Albert Einstein
                },
                {
                    question: "Quelle est la couche externe de l’atmosphère terrestre appelée ?",
                    answers: ["La stratosphère", "L'exosphère", "La mésosphère", "La thermosphère"],
                    correct: 1, // L'exosphère
                },
                {
                    question: "Quelle est la durée approximative d’une année lumière en kilomètres ?",
                    answers: ["9 460 milliards de km", "1 milliard de km", "500 millions de km", "100 milliards de km"],
                    correct: 0, // 9 460 milliards de km
                },
                {
                    question: "Quel est le nom du phénomène où une étoile explose en libérant une énorme quantité d'énergie ?",
                    answers: ["Un trou noir", "Une nova", "Une supernova", "Un pulsar"],
                    correct: 2, // Une supernova
                },
                {
                    question: "Quel est le pourcentage approximatif de matière noire dans l'univers ?",
                    answers: ["10%", "50%", "Une supernova", "90%"],
                    correct: 2, // Une supernova
                },
            ],

            difficult: [
                {
                    question: "Qui a proposé la théorie de la relativité générale ?",
                    answers: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Marie Curie"],
                    correct: 2, // Niels Bohr
                },
                {
                    question: "Quel est le phénomène qui déforme la lumière autour des trous noirs ?",
                    answers: ["La courbure de l'espace-temps", "Les ondes gravitationnelles", "L'effet Doppler", "Les rayons gamma"],
                    correct: 3, // Les rayons gamma
                },
                {
                    question: "Quel est l'élément le plus abondant dans l'univers observable ?",
                    answers: ["Hydrogène", "Hélium", "Carbone", "Oxygène"],
                    correct: 1, // Hélium
                },
                {
                    question: "Quel est le nom du premier télescope à avoir observé des exoplanètes ?",
                    answers: ["Kepler", "Hubble", "Spitzer", "James Webb"],
                    correct: 1, // Hubble
                },
                {
                    question: "Qui a formulé la théorie du Big Bang ?",
                    answers: ["Georges Lemaître", "Albert Einstein", "Edwin Hubble", "Stephen Hawking"],
                    correct: 2, // Edwin Hubble
                },
                {
                    question: "Qu'est-ce qu'une supernova ?",
                    answers: ["L'explosion d'une étoile en fin de vie", "Un type de planète", "Un trou noir", "Une forme de radiation"],
                    correct: 3, // Une forme de radiation
                },
                {
                    question: "Qui a proposé la théorie des trous noirs ?",
                    answers: ["Karl Schwarzschild", "Stephen Hawking", "Albert Einstein", "Isaac Newton"],
                    correct: 1, // Stephen Hawking
                },
                {
                    question: "Qu'est-ce qu'un boson de Higgs ?",
                    answers: ["Une particule fondamentale qui confère la masse", "Un type de planète", "Une particule de lumière", "Un type de radiation"],
                    correct: 2, // Une particule de lumière
                },
                {
                    question: "Quel est le nom du phénomène qui ralentit le temps près des trous noirs ?",
                    answers: ["La dilatation du temps", "L'effet Doppler", "La vitesse de la lumière", "Les ondes gravitationnelles"],
                    correct: 3, // Les ondes gravitationnelles
                },
                {
                    question: "Quelle est la vitesse d'évasion de la Terre ?",
                    answers: ["11,2 km/s", "25,3 km/s", "5,9 km/s", "20,1 km/s"],
                    correct: 2, // 5,9 km/s
                },
                {
                    question: "Quelle est la température approximative au centre du Soleil ?",
                    answers: ["15 millions de degrés Celsius", "1 million de degrés Celsius", "100 millions de degrés Celsius", "5 000 degrés Celsius"],
                    correct: 3, // 5 000 degrés Celsius
                },
                {
                    question: "Quelle est la distance approximative entre la Terre et le centre de notre galaxie, la Voie Lactée ?",
                    answers: ["27 000 années-lumière", "100 000 années-lumière", "10 000 années-lumière", "50 000 années-lumière"],
                    correct: 1, // 100 000 années-lumière
                },
                {
                    question: "Quel est le nom donné à la région autour d’un trou noir où rien, pas même la lumière, ne peut s’échapper ?",
                    answers: ["L’horizon des événements", "La singularité", "Le disque d’accrétion", "L’ergosphère"],
                    correct: 2, // Le disque d’accrétion
                },
                {
                    question: "Quelle est l’hypothèse la plus acceptée pour expliquer l’accélération de l’expansion de l’univers ?",
                    answers: ["L’énergie noire", "La matière noire", "Les trous de ver", "La constante de Planck"],
                    correct: 3, // La constante de Planck
                },
                {
                    question: "Quel phénomène est à l’origine des éléments plus lourds que le fer dans l’univers ?",
                    answers: ["Les supernovas", "La fusion nucléaire dans les étoiles", "La formation des galaxies", "Les collisions de trous noirs"],
                    correct: 0, // Les supernovas
                },
            ],
            },
            quiz3: {
                easy: [
                    {
                        question: "Qui était le premier président des États-Unis ?",
                        answers: ["Abraham Lincoln", "Franklin D. Roosevelt", "Thomas Jefferson", "George Washington"],
                        correct: 3,  // George Washington
                    },
                    {
                        question: "En quelle année a eu lieu la Révolution française ?",
                        answers: ["1776", "1812", "1789", "1620"],
                        correct: 2,  // 1789
                    },
                    {
                        question: "Qui a écrit 'Les Misérables' ?",
                        answers: ["Marcel Proust", "Victor Hugo", "Émile Zola", "Honoré de Balzac"],
                        correct: 1,  // Victor Hugo
                    },
                    {
                        question: "Qui a été le dernier roi de France ?",
                        answers: ["Louis XVI", "Charles X", "Louis-Philippe", "Napoléon III"],
                        correct: 2,  // Louis-Philippe
                    },
                    {
                        question: "Quel événement a marqué le début de la Seconde Guerre mondiale ?",
                        answers: ["Le débarquement de Normandie", "L'attaque de Pearl Harbor", "La prise de Berlin", "L'invasion de la Pologne par l'Allemagne"],
                        correct: 3,  // L'invasion de la Pologne par l'Allemagne
                    },
                    {
                        question: "Où a eu lieu le premier vol humain dans l'espace ?",
                        answers: ["Chine", "Union Soviétique", "France", "États-Unis"],
                        correct: 1,  // Union Soviétique (Vostok 1, 1961)
                    },
                    {
                        question: "Qui a fondé l'Empire romain ?",
                        answers: ["Néron", "Trajan", "Jules César", "Augustus"],
                        correct: 3,  // Augustus (empereur romain, anciennement Octave)
                    },
                    {
                        question: "Qui a découvert l'Amérique en 1492 ?",
                        answers: ["Vasco de Gama", "Marco Polo", "Ferdinand Magellan", "Christophe Colomb"],
                        correct: 3,  // Christophe Colomb
                    },
                    {
                        question: "Quel est le nom de la célèbre bataille de 1066 entre les Normands et les Anglo-Saxons ?",
                        answers: ["Bataille de Waterloo", "Bataille de Hastings", "Bataille d'Azincourt", "Bataille de Stalingrad"],
                        correct: 1,  // Bataille de Hastings
                    },
                    {
                        question: "Quel était le nom de l'ancienne capitale de l'Égypte ?",
                        answers: ["Memphis", "Thèbes", "Le Caire", "Alexandrie"],
                        correct: 0,  // Memphis
                    },
                    {
                        question: "Quel est le nom de la guerre entre les États-Unis et le Vietnam ?",
                        answers: ["Guerre de Sécession", "Guerre du Golfe", "Guerre du Vietnam", "Guerre d'Indépendance américaine"],
                        correct: 2,  // Guerre du Vietnam
                    },
                    {
                        question: "Qui a été le premier empereur de Chine ?",
                        answers: ["Qin Shi Huang", "Liu Bang", "Kublai Khan", "Sun Yat-sen"],
                        correct: 0,  // Qin Shi Huang
                    },
                    {
                        question: "Qui a écrit 'De l'esprit des lois' ?",
                        answers: ["Montesquieu", "Rousseau", "Voltaire", "Diderot"],
                        correct: 0,  // Montesquieu
                    },
                    {
                        question: "Quel événement a mis fin à la monarchie absolue en France ?",
                        answers: ["La Révolution française", "La Première Guerre mondiale", "La prise de la Bastille", "Le coup d'État de Napoléon"],
                        correct: 0,  // La Révolution française
                    },
                    {
                        question: "Qui était le chef des armées alliées lors du débarquement en Normandie ?",
                        answers: ["Winston Churchill", "Dwight D. Eisenhower", "Franklin D. Roosevelt", "Charles de Gaulle"],
                        correct: 1,  // Dwight D. Eisenhower
                    },
                ],
                medium: [
                    {
                        question: "En quelle année a été signé le traité de Versailles ?",
                        answers: ["1912", "1914", "1919", "1923"],
                        correct: 2, // 1919
                    },
                    {
                        question: "Quel empire s'est effondré après la Première Guerre mondiale ?",
                        answers: ["L'Empire russe", "L'Empire ottoman", "L'Empire britannique", "L'Empire austro-hongrois"],
                        correct: 3, // L'Empire austro-hongrois
                    },
                    {
                        question: "Qui a été l'empereur romain lors de la chute de l'Empire romain d'Occident ?",
                        answers: ["Néron", "Romulus Augustulus", "Hadrien", "Jules César"],
                        correct: 1, // Romulus Augustulus
                    },
                    {
                        question: "Quel était le nom du général carthaginois qui a affronté Rome lors des guerres puniques ?",
                        answers: ["César", "Hannibal", "Scipion l'Africain", "Augustus"],
                        correct: 1, // Hannibal
                    },
                    {
                        question: "Qui a écrit 'L'Origine des espèces' ?",
                        answers: ["Galilée", "Isaac Newton", "Jean-Baptiste Lamarck", "Charles Darwin"],
                        correct: 3, // Charles Darwin
                    },
                    {
                        question: "Quel était le nom du navire de Christophe Colomb ?",
                        answers: ["Le Bounty", "La Santa María", "Le Titanic", "Le Mayflower"],
                        correct: 1, // La Santa María
                    },
                    {
                        question: "Quel conflit a eu lieu entre 1955 et 1975, impliquant les États-Unis et le Vietnam ?",
                        answers: ["Guerre du Vietnam", "Guerre de Corée", "Guerre du Golfe", "Guerre d'Indochine"],
                        correct: 0, // Guerre du Vietnam
                    },
                    {
                        question: "En quelle année l'Empire romain a-t-il été divisé en deux parties ?",
                        answers: ["476", "395", "410", "312"],
                        correct: 1, // 395
                    },
                    {
                        question: "Qui était le dernier tsar de Russie ?",
                        answers: ["Nicolas II", "Alexandre II", "Pierre le Grand", "Ivan le Terrible"],
                        correct: 0, // Nicolas II
                    },
                    {
                        question: "Quel était le nom du roi de France lors de la Révolution de 1789 ?",
                        answers: ["Louis XVI", "Louis XIV", "Louis XV", "Napoléon Bonaparte"],
                        correct: 0, // Louis XVI
                    },
                    {
                        question: "En quelle année a été signé le traité de Versailles ?",
                        answers: ["1912", "1914", "1919", "1923"],
                        correct: 2, // 1919
                    },
                    {
                        question: "Quel empire s'est effondré après la Première Guerre mondiale ?",
                        answers: ["L'Empire russe", "L'Empire ottoman", "L'Empire britannique", "L'Empire austro-hongrois"],
                        correct: 3, // L'Empire austro-hongrois
                    },
                    {
                        question: "Qui a été l'empereur romain lors de la chute de l'Empire romain d'Occident ?",
                        answers: ["Néron", "Romulus Augustulus", "Hadrien", "Jules César"],
                        correct: 1, // Romulus Augustulus
                    },
                    {
                        question: "Quel était le nom du général carthaginois qui a affronté Rome lors des guerres puniques ?",
                        answers: ["César", "Hannibal", "Scipion l'Africain", "Augustus"],
                        correct: 1, // Hannibal 
                    },
                    {
                        question: "Qui a écrit 'L'Origine des espèces' ?",
                        answers: ["Galilée", "Isaac Newton", "Jean-Baptiste Lamarck", "Charles Darwin"],
                        correct: 3, // Charles Darwin
                    },
                ],
            
                    difficult: [
                        {
                            question: "Quel est le nom de la bataille décisive qui a marqué la fin des guerres napoléoniennes ?",
                            answers: ["Bataille de Waterloo", "Bataille d'Austerlitz", "Bataille de Leipzig", "Bataille de Trafalgar"],
                            correct: 0,  // Bataille de Waterloo
                        },
                        {
                            question: "Qui a mené la bataille de la Somme pendant la Première Guerre mondiale ?",
                            answers: ["George Vanier", "Wilhelm II", "Douglas Haig", "Ferdinand Foch"],
                            correct: 2,  // Douglas Haig
                        },
                        {
                            question: "Qui a été le principal architecte de l'Empire britannique au XIXe siècle ?",
                            answers: ["Winston Churchill", "Cecil Rhodes", "Benjamin Disraeli", "David Livingstone"],
                            correct: 2,  // Benjamin Disraeli
                        },
                        {
                            question: "Quel événement a marqué la fin du régime soviétique en Russie ?",
                            answers: ["La chute du mur de Berlin", "La révolution russe de 1917", "La perestroïka", "La fin de la guerre froide"],
                            correct: 2,  // La perestroïka
                        },
                        {
                            question: "Qui était le premier ministre du Royaume-Uni lors du début de la Seconde Guerre mondiale ?",
                            answers: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Margaret Thatcher"],
                            correct: 1,  // Neville Chamberlain
                        },
                        {
                            question: "Quel traité a mis fin à la Première Guerre mondiale ?",
                            answers: ["Le traité de Versailles", "Le traité de Trianon", "Le traité de Paris", "Le traité de Brest-Litovsk"],
                            correct: 0,  // Le traité de Versailles
                        },
                        {
                            question: "En quelle année l'Union européenne a-t-elle été fondée ?",
                            answers: ["1993", "1957", "1989", "1970"],
                            correct: 1,  // 1957
                        },
                        {
                            question: "Qui a dirigé la France pendant la Révolution française ?",
                            answers: ["Louis XVI", "Napoléon Bonaparte", "Maximilien Robespierre", "Charles de Gaulle"],
                            correct: 2,  // Maximilien Robespierre
                        },
                        {
                            question: "Quel empereur romain a fait légaliser le christianisme dans l'Empire romain ?",
                            answers: ["Trajan", "Néron", "Jules César", "Constantin Ier"],
                            correct: 3,  // Constantin Ier
                        },
                        {
                            question: "Quel roi d'Angleterre a rompu avec l'Église catholique pour fonder l'Église anglicane ?",
                            answers: ["Henri VIII", "Richard III", "Charles I", "Édouard VI"],
                            correct: 0,  // Henri VIII
                        },
                        {
                            question: "Quel traité a mis fin à la guerre de Trente Ans en 1648 ?",
                            answers: ["Le traité de Paris", "Le traité de Versailles", "Le traité de Westphalie", "Le traité de Utrecht"],
                            correct: 2,  // Le traité de Westphalie
                        },
                        {
                            question: "Qui a été le dernier empereur du Saint-Empire romain germanique ?",
                            answers: ["François II", "Charles V", "Friedrich II", "Maximilien II"],
                            correct: 0,  // François II
                        },
                        {
                            question: "Quel est le nom de la bataille décisive de la guerre de Cent Ans, où Jeanne d'Arc joua un rôle clé ?",
                            answers: ["La bataille de Crécy", "La bataille d'Azincourt", "La bataille de Poitiers", "La bataille de Patay"],
                            correct: 3,  // La bataille de Patay
                        },
                        {
                            question: "Qui était le premier ministre britannique pendant la Première Guerre mondiale ?",
                            answers: ["Winston Churchill", "David Lloyd George", "Herbert Asquith", "Clement Attlee"],
                            correct: 0,  // David Lloyd George
                        },
                        {
                            question: "Quel événement a marqué la fin de l'Empire byzantin en 1453 ?",
                            answers: ["La prise de Constantinople", "La chute de Rome", "La bataille de Manzikert", "La prise de Jérusalem"],
                            correct: 0,  // La prise de Constantinople
                        },
                    ]
                },
            };
        
