function showRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            // Do something with the random user data
            var user = data.results[0];
            var name = user.name.title + ' ' + user.name.first + ' ' + user.name.last;
            var gender = user.gender;
            var image = user.picture.large;

            // Update the UI with the random user's information
            document.getElementById("user-name").textContent = name;
            document.getElementById("user-gender").textContent = gender;
            document.getElementById("user-image").src = image;
        });
}