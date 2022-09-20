var divcitation = document.getElementById('citation');
var divauteur = document.getElementById('auteur');
var btn = document.querySelector('button');

var tableau = [
    {
        c : "Y'a pas mon 'l'ayant' dedans !",
        a : "--Richouf"
    },
    {
        c : "L'homme est un loup pour l'homme.",
        a : "--Plaute"
    },
    {
        c : "Il m'a fait trop de bien pour en dire du mal, - Il m'a fait trop de mal pour en dire du bien.",
        a : "--Pierre Corneille"
    },
    {
        c : "Rien de grand ne s'est accompli dans le monde sans passion.",
        a : "--Georg Wilhelm Friedrich Hegel"
    },
    {
        c : "On n'est pas sérieux, quand on a dix-sept ans",
        a : "--Arthur Rimbaud"
    },
    {
        c : "Science sans conscience n'est que ruine de l'âme.",
        a : "--François Rabelais"
    },
    {
        c : "Il y a deux histoires : l'histoire officielle, menteuse, qu’on enseigne, puis l'Histoire secrète, où sont les véritables causes des événements.",
        a : "--Balzac"
    },
    {
        c : "Familles! je vous hais! Foyers clos; portes refermées; possessions jalouses du bonheur.",
        a : "--André Gide"
    },
    {
        c : "L'homme n'est pas né pour le repos.",
        a : "--Voltaire"
    },
    {
        c : "Tout vrai regard est un désir",
        a : "--Alfred de Musset"
    }
];

    divcitation.textContent = tableau[0].c;
    divauteur.textContent = tableau[0].a;


btn.addEventListener('click', pioche);
function pioche() {
    let b = Math.floor(Math.random() * tableau.length);
    divcitation.textContent = '<< ' + tableau[b].c + ' >>';
    divauteur.textContent = tableau[b].a;
}
