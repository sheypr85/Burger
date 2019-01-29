$(function(){
    $(".eatit").on("click", function(event){
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
                location.reload();
            }
        );
    });
   
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burgerName: $("#burger_name").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST", 
            data: newBurger
        }). then(
            function() {
                console.log("Created one");
                location.reload();
            }
        );
    });

 








});