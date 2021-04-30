// ### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 

// ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

// ### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

// ### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.

let vieille_dame = {
    age: 100,
    nom: {
        nom:"Tirisca",
        prenom:"Nicebéré"
    },
    moral:"mal",
    objet:"AK-47 gold Edition Since 1999 Albania",
    parler(){
        switch (vieille_dame.moral) {
            case "mal":
                alert(`${this.nom.nom, this.nom.prenom} dit : Vous me dérangez \naction : lui tire dessus avec son ${vieille_dame.objet}`)
                break;
            case "bien":
                alert(`${this.nom.nom, this.nom.prenom} dit : Bonjour ${vieil_homme.nom}`)
                break;
            default:
                console.log("Fuyez pauvres fous")
                break;
        }
    }
}

let vieil_homme = {
    nom:"Kimotsuchi",
    adoucir(){
        vieille_dame.moral = "bien"
    }
}

vieille_dame.parler()
vieil_homme.adoucir()
vieille_dame.parler()