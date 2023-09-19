document.getElementById("Navbar").innerHTML = `
<li><a href="Home.html">Home</a></li>
<li><a href="Updates.html">Updates</a></li>
<li class="dropdown">
	<a href="games-overview.html" class="dropbtn">Games</a>
	<div class="dropdown-content">
		<a href="marsexplorer.html">Mars Explorer</a>
		<a href="botbrain.html">Bot Brain</a>
		<a href="downunder.html">Down Under</a>
		<a href="snowcraze.html">SnowCraze</a>
		<a href="radianceunseen.html">Radiance: Unseen (Alpha)</a>
	</div>
</li>
<li class="dropdown">
	<a href="gs-overview.html" class="dropbtn">Get Started In Game Dev</a>
	<div class="dropdown-content">
		<button class="dropdown-btn">Learn Coding In C# &#709;
		</button>
		<div class="dropdown-container">		
		<a href="learningcode.html">Introduction</a>
		<a href="c%23basics.html">Lesson 1: Basics</a>
		<a href="c%23variables.html">Lesson 2: Variables</a>
		<a href="c%23conditions.html">Lesson 3: Conditions</a>
		<a href="c%23loops.html">Lesson 4: Loops</a>
		<a href="c%23arrays.html">Lesson 5: Arrays</a>
		<a href="c%23methods.html">Lesson 6: Methods</a>
		<a href="c%23classes.html">Lesson 7: Classes</a>
		</div>

		<button class="dropdown-btn">Learning Unity (3D) &#709;
		</button>
		<div class="dropdown-container">
		<a href="3dIntroduction.html">Introduction</a>
		<a href="3dBasics.html">Lesson 1: Basics</a>
		<a href="3dProgramming.html">Lesson 2: Coding</a>
		<a href="3dMovement.html">Lesson 3: Movement</a>
		<a href="3dCameraFollow.html">Lesson 4: Camera</a>
		<a href="3dCollision.html">Lesson 5: Collision</a>
		<a href="3dGameplay.html">Lesson 6: Gameplay</a>
		<a href="3dScoreUI.html">Lesson 7: Score & UI</a>
		<a href="3dGameOver.html">Lesson 8: Game Over</a>
		<a href="3dWinning.html">Lesson 9: Winning</a>
		<a href="3dFinish.html">Lesson 10: Finishing</a>
		</div>

		<a href="moreSoon.html">More Coming Soon!</a>
	</div>
</li>
<li class="rightnav"><a href="About.html">Socials / About</a>`;

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