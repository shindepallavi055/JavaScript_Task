    $(function(){
      $(".mainDiv").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        forceHelperSize: true
      });  
      $( "#menu-content" ).sortable();
      $( "#menu-content" ).disableSelection();
      $(".deleteBtn").click(function(){
        var confirmBox = confirm("Are you sure?");
        if (confirmBox == true) {
          $(this).parent().parent().addClass("hiddenLi");
          $(this).parent().parent().hide("slow", function(){ 
             $(".hiddenLi").remove();
          }); 
       }   
     });
  });

  