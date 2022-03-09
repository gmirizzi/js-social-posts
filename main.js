//ARRAYS
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil",
            "surname": "Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia",
            "surname": "Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara", 
            "surname":"Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca",
            "surname": "Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro", 
            "surname": "Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
//Array per gli ID dei post piaciuti
const likedPostIDs = [];

function addPost(content, media, authorImg, name, inizialeName, surname, inizialeSurname, likes, date, id) {
    const post = document.createElement("div");
    post.classList.add("post");

    if (authorImg == null) {
        post.innerHTML =
            `<div class="post__header">
        <div class="post-meta">                    
        <div class="post-meta__icon">
                    <div class="profile-pic-default"><span>${inizialeName}${inizialeSurname}</span></div>                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name} ${surname}</div>
                    <div class="post-meta__time">${date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
        <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
            </div> 
        </div>`;
    } else {
        post.innerHTML =
            `<div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                <img class="profile-pic" src="${authorImg}" alt="${name} ${surname}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name} ${surname}</div>
                    <div class="post-meta__time">${date}</div>
                </div>                    
            </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
        <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                        </a>
                        </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                    </div> 
                    </div>`;
    }
    document.getElementById("container").append(post);
}

//ciclo x convertire tutte le date in formato italiano
for (let index = 0; index < posts.length; index++) {
    const americanDate = posts[index].created;
    const aaaa = americanDate.charAt(0) + americanDate.charAt(1) + americanDate.charAt(2) + americanDate.charAt(3);
    const mm = americanDate.charAt(5) + americanDate.charAt(6);
    const gg = americanDate.charAt(8) + americanDate.charAt(9);
    const italianDate = gg + "-" + mm + "-" + aaaa;
    posts[index].created = italianDate;
}

//ciclo con il quale vengono aggiunti i post nell'html, prendendo i dati dall'array
for (let index = 0; index < posts.length; index++) {
    addPost(posts[index].content, posts[index].media, posts[index].author.image, posts[index].author.name, posts[index].author.name.charAt(0), posts[index].author.surname, posts[index].author.surname.charAt(0), posts[index].likes, posts[index].created, posts[index].id);
}

//Aggiunge la funzionalità a tutti i tasti "mi piace"
for (let index = 0; index < document.querySelectorAll(".like-button").length; index++) {
    document.querySelectorAll(".like-button")[index].addEventListener('click', function (event) {
        event.preventDefault();
        
        if(Array.from(this.classList).includes("like-button--liked")){
            this.classList.remove("like-button--liked");
            this.parentNode.parentNode.querySelector(".js-likes-counter").innerHTML = parseInt(this.parentNode.parentNode.querySelector(".js-likes-counter").innerHTML) - 1;
            for(let index in posts){
                if(this.getAttribute("data-postid")==posts[index].id){
                    posts[index].likes--;
                }
            }
        } else {
            this.classList.add("like-button--liked");
            this.parentNode.parentNode.querySelector(".js-likes-counter").innerHTML = parseInt(this.parentNode.parentNode.querySelector(".js-likes-counter").innerHTML) + 1;
            for(let index in posts){
                if(this.getAttribute("data-postid")==posts[index].id){
                    posts[index].likes++;
                }
            }
            if (!likedPostIDs.includes(this.getAttribute("data-postid"))){
                likedPostIDs.push(this.getAttribute("data-postid"));
            }
        }
    })
}