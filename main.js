const post = [
    {
        "nome_autore": 'Marco Rossi',
        "foto_profilo": 'https://picsum.photos/seed/picsum/200/200',
        "data": '1 mesi fa',
        "text_post": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel rem dolorum nihil soluta ab deleniti minus provident, illo odit facere odio consectetur culpa quam sed recusandae ut perferendis molestiae.',
        "image": 'https://picsum.photos/300?random=1',
        "like": '50'
    },
    {
        "nome_autore": 'Federico Signorelli',
        "foto_profilo": 'https://picsum.photos/seed/picsum/200/200',
        "data": '4 giorni',
        "text_post": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel rem dolorum nihil soluta ab deleniti minus provident, illo odit facere odio consectetur culpa quam sed recusandae ut perferendis molestiae.',
        "image": 'https://picsum.photos/300?random=2',
        "like": '1k'
    },
    {
        "nome_autore": 'Flavius Muratti',
        "foto_profilo": 'https://picsum.photos/seed/picsum/200/200',
        "data": '1 anno',
        "text_post": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel rem dolorum nihil soluta ab deleniti minus provident, illo odit facere odio consectetur culpa quam sed recusandae ut perferendis molestiae.',
        "image": 'https://picsum.photos/300?random=3',
        "like": '2M'
    },
    {
        "nome_autore": 'Gaia Petrinelli',
        "foto_profilo": 'https://picsum.photos/seed/picsum/200/200',
        "data": '12 giorni fa',
        "text_post": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel rem dolorum nihil soluta ab deleniti minus provident, illo odit facere odio consectetur culpa quam sed recusandae ut perferendis molestiae.',
        "image": 'https://picsum.photos/300?random=4',
        "like": '3,4k'
    },
    {
        "nome_autore": 'Michele Magri',
        "foto_profilo": 'https://picsum.photos/seed/picsum/200/200',
        "data": '8 ore fa',
        "text_post": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel rem dolorum nihil soluta ab deleniti minus provident, illo odit facere odio consectetur culpa quam sed recusandae ut perferendis molestiae.',
        "image": 'https://picsum.photos/300?random=5',
        "like": '1.1k'
    },
]

const Team = document.querySelector('.posts-list')

for (let i = 0; i < post.length; i++) {
    console.log(post[i]);
    CardsTeam(post[i])
}

// Funzione creazione card

function CardsTeam(object) {
    Team.innerHTML += `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${object.foto_profilo}" alt="${object.nome_autore}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${object.nome_autore}</div>
                    <div class="post-meta__time">${object.data}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${object.text_post}</div>
        <div class="post__image">
            <img src="${object.image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up"aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${object.like}</b> persone
                </div>
            </div> 
        </div>            
        </div>`
}