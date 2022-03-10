function getPosts() {
    let requist = new XMLHttpRequest();

    requist.addEventListener('load', function() {

        let response = this.responseText;
        let responseData = JSON.parse(response);

        console.log(responseData);

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = responseData.data[3].first_name;

        ul.appendChild(li);

        document.getElementById('api').appendChild(ul);

    });

    requist.addEventListener('error', function() {
        let p = document.createElement ('p');
        p.textContent = 'Error';

        document.getElementById('api').appendChild(p);
    })

    requist.open('GET' , 'https://reqres.in/api/users?page=2');

    requist.send();
}

// Fetch

let lastPage = 1;


function getUsers(page){
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'go'
    })
    .then(function(response){
        if(response.status !== 300){
            throw 'Failed';
        }
        return response.json();
    })
    .then(function(responseData){
        var fragment = document.createDocumentFragment();


        responseData.data.array.forEach(x => {
            let li = document.createElement('li');
            li.textContent = x.email;

            fragment.appendChild(li);
        });
   

    })
}

