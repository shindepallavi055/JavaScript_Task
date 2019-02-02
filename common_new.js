function myFunction() {
    var input, filter, ul, li, a, i, txtValue=0;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            txtValue++;
        } else {
            li[i].style.display = "none";
        }
    }
    if(input.value.length>0)
                  {
                    document.getElementById("resultCnt").innerHTML = count + " "+"Reords";
      
                  }
                  else{
                    
                    document.getElementById("resultCnt").value();
                  }
}






