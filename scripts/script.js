var content = document.getElementsByTagName("header")[0].children[0];
var navcontent = content.children[0];
var ulcontent = navcontent.children[0];
var licontent = ulcontent.children[0];


console.log(licontent.childNodes[0].nodeType);

//When download resume button is click this function will execute to display "Downloading..." inside the button then revert it to it's initial value after 2 seconds.
var btn = document.getElementById("emailBtn");
var btnTextInitial = btn.childNodes[0].nodeValue;
btn.onclick = function(){

    btn.childNodes[0].nodeValue = "Downloading..."

    function afterClick(){

        btn.childNodes[0].nodeValue = btnTextInitial;
    }

    setTimeout(afterClick,2000);
}
