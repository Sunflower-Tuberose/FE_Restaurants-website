//<script>

      const btn = document.querySelector(".changethemes");
      const theme = document.querySelector("#mainthemes");

      btn.addEventListener("click", function() {
        // Swap out the URL for the different stylesheets
        if (theme.getAttribute("href") == "../R-main/css/C-themescolor1.css") {
          theme.href = "../R-main/css/C-themescolor2.css";
        } else {
          theme.href = "../R-main/css/C-themescolor1.css";
        }
      });
	  /*/     
const btn = document.querySelector(".changethemes");
const theme = document.querySelector("#mainthemes");
function themes(){
	  if (theme.getAttribute("href") == "../R-main/css/C-themescolor1.css") {
          theme.href = "../R-main/css/C-themescolor2.css";
        } else {
          theme.href = "../R-main/css/C-themescolor1.css";
        }
  }

function themes() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
	//</script>