var selectedDiv = "";
var x = document.getElementsByClassName('innerFlashcard');
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(){

    /* var selectedEl = document.querySelector(".is-flipped");
    if(selectedEl){
        selectedEl.classList.remove("is-flipped");
    }
    */
    
    this.classList.toggle("is-flipped");


    }/*, false*/);
}
