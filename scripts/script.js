
var btn = document.getElementById("emailBtn");
var element = document.getElementById("emailBtn");
var idOfElement = element.getAttribute("id");



btn.onclick = function() {

    document.getElementById(idOfElement).setAttribute('style', 'background: azure; color: black;');
    setTimeout(afterClick, 50);

}
   
function afterClick(){
    document.getElementById('emailBtn').setAttribute('style', 'background: fdcb6e; color: azure');
}

