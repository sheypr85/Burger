$(function() {
  $('.eatit').on('click', function(event) {
    let id = $(this).data('id');

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
    }).then(
        function() {
          location.reload();
        }
    );
  });

  $('.create-form').on('submit', function(event) {
    event.preventDefault();

      burgerName = $('#burger_name').val().trim(),
    
    console.log(newBurger)

    if (burgerName != '')  {
      var newBurger = {
        burgerName
      };
      
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger,
    }). then(
        function() {
          console.log('Created one');
          location.reload();
        }
    );
      } else {
        alert("You must enter a burger name");
      }
  });
});
