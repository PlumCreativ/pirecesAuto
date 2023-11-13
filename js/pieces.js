import {ajoutListenerAvis, ajoutAvis} from "./avis.js"

const response = await fetch('http://localhost:3000/pieces')
const pieces = await response.json()



const article = pieces[0]


const sectionFiches = document.querySelector('#fiches')
const btnTrier = document.querySelector('#btn-trier')
const btnAbordable = document.querySelector('#btn-abordable')
const btnReset = document.querySelector('#btn-reset')


btnTrier.addEventListener('click', (e) => {
    const pieceOrdonnees = Array.from( pieces )
    pieceOrdonnees.sort( function(a, b){
        return a.prix - b.prix

    } )

    sectionFiches.innerHTML = ''
    SchowPieces( pieceOrdonnees )

})

btnAbordable.addEventListener('click', function (e) {
    const pieceAbordable = pieces.filter(function( pieces ){
        return pieces.prix <= 35
    })
    sectionFiches.innerHTML = ''
    SchowPieces(pieceAbordable)
})

btnReset.addEventListener('click', (e)=>{
    sectionFiches.innerHTML = ''
    SchowPieces(pieces)
})

    

function SchowPieces(pieces) {
    for (let article of pieces) {


        const imageElement = document.createElement('img')
        imageElement.src = article.image
        const nomElement = document.createElement('h4')
        nomElement.textContent = article.nom
        const prixElement = document.createElement('p')
        prixElement.textContent = 'Prix : ' + article.prix + ' €'
        const categorieElement = document.createElement('p')
        categorieElement.textContent = article.categorie ?? '(aucoun catégorie)'
        const descriptionElement = document.createElement('p')
        descriptionElement.textContent = article.description ?? 'pas de description'
        const pieceDispo = article.disponibilite === true ? "Oui" : "Non"
        const pieceDispoElement = document.createElement('p')
        pieceDispoElement.innerHTML = `Pièce disponible : <b> ${pieceDispo} <b>`
        

        // Avis
        const btnAvis = document.createElement('button')
        btnAvis.innerText = "Afficher les avis"

        btnAvis.dataset.id = article.id
        btnAvis.dataset.nom = article.nom
        btnAvis.setAttribute('class', 'btn btn-secondary btn-sm')


        // Append sur la carte 
        const sectionFiches = document.querySelector('#fiches')
        const ficheElement = document.createElement('article')
        
        ficheElement.setAttribute( 'class', 'col-3' )
        ficheElement.appendChild( imageElement )
        ficheElement.appendChild( nomElement )
        ficheElement.appendChild( prixElement )
        ficheElement.appendChild( categorieElement )
        ficheElement.appendChild(descriptionElement)
        ficheElement.appendChild(pieceDispoElement)
        ficheElement.appendChild(btnAvis)

        sectionFiches.appendChild( ficheElement )

    }

}

SchowPieces(pieces)
ajoutListenerAvis()
ajoutAvis()