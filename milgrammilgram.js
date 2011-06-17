$(document).ready(
    function(){
	$('#result').val(milgram($('#texttext').val()));
        $('#texttext').keyup(
            function(){
                $('#result').val(milgram($('#texttext').val()));
            }
        );     
    }
);

function milgram(source){
    return source.replace(/[^\s\,\.\;\!\@\"\#\№\$\%\^\:\&\?\*\(\)\_\+\=\/\[\]\{\}\'\|\\\<\>\`\~]{2,}/ig, '$&-$&');
}

