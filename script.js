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




  
}