function createUser(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}

function randomDate(date) {
    var d = new Date(date);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var commentDate = d.getDate() + " " + months[d.getMonth()] + " " + 2020;
    return commentDate;
}

function createRatings(element) {
    let like = createUser('i'),
        stars = [],
        starList = createUser('span'),
        starRate = createUser('span'),
        i = Math.floor(Math.random() * 6) + 1;
    
    like.classList.add('fa');
    if(Math.round(Math.random())) {
        like.classList.add('fa-thumbs-up');
    } else {
        like.classList.add('fa-thumbs-down');
    }
    append(element, like);
    for(var j = 0; j < 6; j++)
    {
        stars[j] = createUser('i');
        stars[j].classList.add('fa');
        stars[j].classList.add('fa-star');
        if(j + 1 > i) {
            stars[j].classList.add('starGrey');
        }
        append(starList, stars[j]);
    }
    starList.classList.add('starList');
    append(element, starList);
    starRate.classList.add('starRate');
    starRate.innerHTML = i + "/" + 6;
    append(element, starRate);
    return element;
}

fetch('https://randomuser.me/api/?results=4')
    .then((resp) => resp.json())
    .then(function (data) {
        let users = data.results;
        return users.map(function (user) {
            let div = createUser('div'),
                img = createUser('img'),
                name = createUser('div'),
                date = createUser('div'),
                commentHead = createUser('h2'),
                ratings = createUser('div'),
                p = createUser('p'),
                button = createUser('button');
            img.src = user.picture.medium;
            name.innerHTML = `${user.name.first} ${user.name.last}`;
            name.classList.add("name");
            date.innerHTML = randomDate(user.dob.date);
            date.classList.add("date");
            commentHead.innerHTML = "Lovely Place! Totally worth visiting.";
            ratings.classList.add("ratings");
            createRatings(ratings);
            p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, sunt numquam eveniet, debitis praesentium placeat corporis harum, consequatur alias provident tenetur voluptatem officia dolore eligendi. Facilis, molestias fuga iste cumque ipsam reprehenderit? Magnam voluptas, expedita soluta atque non praesentium optio corporis! Ipsam totam ipsa repudiandae tenetur? Natus dolor blanditiis aliquid.";
            button.innerHTML = "add comment";
            append(div, img);
            append(div, name);
            append(div, date);
            append(div, commentHead);
            append(div, ratings);
            append(div, p);
            append(div, button);
            append(document.getElementById('comments'), div);
            div.classList.add("userComments");
        })
    })
    .catch(function (error) {
        console.log(error);
    });