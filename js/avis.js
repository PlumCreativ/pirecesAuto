export function ajoutListenerAvis(){
    const btnAvisElement = document.querySelectorAll('#fiches article button')
   

    for(let btnAvis of btnAvisElement){
        btnAvis.addEventListener('click', (e)=> {
            console.log(e) 
            const currentBtn = e.target 
            const idFiche = currentBtn
            fetch('http://localhost:3000/piece/' + idFiche + '/avis')
                .then(response=>{
                    return response.json()
                })
                .then(listeAvis=>{
                    const pieceElem = currentBtn.parentElement
                    const avisElem = document.createElement('p')
                    for(let avis of listeAvis){
                        avisElem.innerHTML += '</br>' + avis.utilisateur + '</br> :' + avis.commmentaire + '</br>'
                    }
                    console.log(avis)

                    pieceElem.appendChild(avisElem)
                })
                .catch( error=>{
                    console.log('Erreur !'), error
                })
        })
    }
}

export function ajoutAvis() {
    const formAvis = document.querySelector('.form-avis')
    formAvis.addEventListener('submit', (e)=>{
        e.preventDefault()
        const avis = {
            pieceId: formAvis.querySelector('#piece-id').value, 
            utilisateur: formAvis.querySelector('#utilisateur').value,
            commentaire: formAvis.querySelector('#commentaires').value,
            nbEtoiles: formAvis.querySelector('#nbEtoiles').value
        }
        fetch('http://localhost:3000/avis', {
            methode: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(avis)

        })
        .then(response =>{
            if(response.status === 201){
                const mess = document.querySelector('#message')
                mess.innerHTML = '<span class=\'alert alert-success alert-sm> Votre commentaire a été ajouté </span> \' '
                formAvis.reset()
            }
        })
    })
}
