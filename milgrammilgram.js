$(document).ready(
    function(){
        $('#texttext').keyup(
            function(){
                $('#result').text(milgram($('#texttext').val()));
            }
        );     
    }
);

function milgram(source){
    return source.replace(/[^\s\,\.\;\!\@\"\#\№\$\%\^\:\&\?\*\(\)\-\_\+\=\/\[\]\{\}\'\|\\\<\>\`\~]{2,}/ig, '$&-$&');
}

