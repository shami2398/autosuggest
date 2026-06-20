// //'https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8')

var apiurl = 'https://autosuggest-backend.onrender.com/api/autosuggest';
var searchbar=document.getElementById("searchInput");
var searchsuggestion=document.getElementById("search-suggestions");
searchbar.addEventListener("input", function() {
        //get user typed data
        //use user type data in the query to make api cll
        //third make that api call and get the data and show it in the suggestion box
        //append to all the such suggestions to div tag in UI.
    var query = searchbar.value.trim();
    console.log(query);
    fetchSuggestions(query);
});
function fetchSuggestions(query) {
    var fullapi=apiurl+'?q='+query+'&weighted=true&algorithm=trie&limit=8';
    fetch(fullapi)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // Process the API response and display suggestions
            displaySuggestions(data);
            console.log(data);
        })
        .catch(function(error) {
            console.error('Error fetching suggestions:', error);
        });
}
function displaySuggestions(data) {
    var values=data.results;
    if (data.catch== 0) {
        searchsuggestion.innerHTML = '<div>No suggestions found</div>';
    }
    else{
        var htmlstring = '';
        for (var i = 0; i < values.length; i++) {
            htmlstring += '<div> <span class="suggestion-item">' + values[i].text + '</span></div>';
        }
        searchsuggestion.innerHTML = htmlstring;
    }
}


