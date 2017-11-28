$(document).ready(function(){
   
    var country = document.getElementById("country");
    var lookup_button = document.getElementById("lookup");
    var url;
    let checkbox = document.getElementById("search_all");

    function search()
    {
        return country.value;
    }
    
    lookup_button.onclick = function()
    {
        lookup_button.preventDefault;
        var request_made = new XMLHttpRequest();
        var searchWord = search().toUpperCase();
        if (checkbox.checked)
        {
            url = "world.php?all=true";
        }
        else
        {
            url = "world.php?country=" + searchWord;
        }
        
        request_made.onreadystatechange = function()
        {
        if (this.readyState === XMLHttpRequest.DONE)
        {
            if (this.status === 200)
            {
                    document.getElementById("result").innerHTML = this.responseText;
                } 
            }
        };
        
        request_made.open('GET', url, true);
        request_made.send();
    };
});