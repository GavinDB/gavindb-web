document.getElementById("Navbar").innerHTML = `
<li><a href="Home.html">Home</a></li>
<li><a href="Updates.html">Updates</a></li>
<li><a href="MoreSoon.html">More Coming Soon!</a></li>
<li class="rightnav"><a href="About.html">Socials / About</a></li>`;

//Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

// Autoplay / Unhide on click
document.addEventListener('click', function() { document.getElementById("playAudio").play(); }, { once: true });
var rick = document.getElementById("playRick");
rick.style.display = "none";

function unhide() {
	document.getElementById("playAudio").pause();
	document.getElementById("content").style.display = "none";
	rick.play();
	rick.style.display = "block";
}