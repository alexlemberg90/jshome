// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         let mainDiv = document.createElement('div');
//         for (let post of value) {
//             let postDiv = document.createElement('div');
//             postDiv.style.border = '4mm ridge rgba(170, 50, 220, .6)';
//             postDiv.style.marginBottom = '5px'
//             postDiv.innerHTML = `<h4>ID - ${post.id}</h4><br>
//                                  <h2>Title - ${post.title}</h2><br>
//                                  <h3>Body - ${post.body}</h3>`
//             mainDiv.appendChild(postDiv);
//         }
//         mainDiv.style.backgroundColor = '#ffe6ff';
//         document.body.appendChild(mainDiv)
//     })
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(value => value.json())
    .then(value => {
        let mainDiv = document.createElement('div');
        for (let comment of value) {
            console.log(comment);
            let commentDiv = document.createElement('div');
            commentDiv.style.border = '4mm ridge rgba(160, 150, 120, .6)';
            commentDiv.style.marginBottom = '5px'
            commentDiv.innerHTML = `<h4>ID - ${comment.id}</h4><br>
                                 <h2>Post name - ${comment.name}</h2><br>
                                 <h3>Body - ${comment.body}</h3><br>
                                 <h5>Email - ${comment.email}</h5>`
            mainDiv.appendChild(commentDiv);
        }
        mainDiv.style.backgroundColor = '#ffe5e5';
        document.body.appendChild(mainDiv)
    })