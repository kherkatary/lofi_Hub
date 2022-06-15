//fullscreen

$("#full").click(function () {
    var screen = document.documentElement;

    //fullscreen-true
    if (screen.requestFullscreen) {
        screen.requestFullscreen();
    }

    else if (screen.exitFullscreen) {
        screen.exitFullscreen();
    }

})

//function to toggle hide/show the scene menu
function toggleSceneGrid(){

    $("#photos").toggle(400);
}

//scene channger function
$(".sceneChange").click(function () {

    let sceneNumber = $(this).attr("id");  //extracting Id /scene number 


    if (sceneNumber == 0) {
        $("#change").attr("src", "scenes/home.gif");
        //hide heading
        $("#heading").css("display","block");
        
        

    }

    else {

        $("#change").attr("src", "scenes/scene" + sceneNumber + ".gif");
        //hide heading
        $("#heading").css("display","none");
         
    }

})

$("#menuCloseButton").click(function(){
    $("#photos").toggle(400);
    $(this).hide();

})




    $("#sceneGrid").click(function(){

        toggleSceneGrid();
        $("#menuCloseButton").toggle(1000);
    })


//MODAL CLOSE
$("#modalCloseBtn").click(function () {
    $("#modal").css("display", "none");
})
//modal automatic close--10sec
setTimeout(() => {
    $("#modal").css("display", "none");

}, 15000);


     

















