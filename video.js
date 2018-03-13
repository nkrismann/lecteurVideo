video = document.getElementById("Lecteur"); // récupération de l'ID de la video
timer = document.getElementById('progress'); // récupération de l'ID de la barre de progression
function Play() {
      if (video.paused)
{
video.play(); // lancement de la vidéo
}

else if (video.played)
{
video.pause(); // arrêt de la vidéo
}	
} 
function progressBar(){
	var pourcentage = Math.floor((100 / video.duration) * video.currentTime); // calcul de l'avancement de la lecture
	timer.value = pourcentage; // la valeur de la barre de progression prend la valeur de l'avancement de la lecture
}

video.addEventListener('timeupdate', progressBar, false); // ajout d'un evenement pour mettre a jour le temps de la barre

  
