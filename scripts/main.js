function createUser(element) {
    return document.createElement(element);
}

function append(parent, element) {
    return parent.appendChild(element);
}

function addComment(element) {
    let textarea = createUser('textarea');
    textarea.setAttribute("placeholder", "Add your comments");
    element.insertBefore(textarea, element.childNodes[6]);
    let button = element.childNodes[7];
    button.innerHTML = "post comment";
    button.setAttribute("onclick", "postComment(this.parentNode, this)");
    return 1;
}

function postComment(element, child) {
    let div = createUser('div'),
        arrow = createUser('div'),
        h4 = createUser('h4'),
        img = createUser('img'),
        name = createUser('div'),
        desig = createUser('div'),
        comments = createUser('div');
    comments.innerHTML = child.previousSibling.value;
    div.classList.add('comments');
    comments.classList.add('managerComments');
    h4.innerHTML = "Comment";
    arrow.classList.add('arrow');
    img.src = "./images/batman.png";
    name.innerHTML = "Batman";
    desig.innerHTML = "Finance is my Minister!!";
    img.classList.add("managerImg");
    name.classList.add("managerName");
    desig.classList.add("managerDesig");
    append(div, arrow);
    append(div, h4);
    append(div, comments);
    append(element, div); 
    append(element, img);
    append(element, name);
    append(element, desig);
    child.previousSibling.remove();
    child.remove();
    return 1;
}

function randomDate(date) {
    var d = new Date(date);
    var td = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var commentDate = d.getDate() + " " + months[d.getMonth()] + " " + (td.getFullYear() - 1);
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
            button.setAttribute("onclick", "addComment(this.parentNode)");
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