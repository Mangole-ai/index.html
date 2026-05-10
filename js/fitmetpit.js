// FitmetPit — Gedeelde JavaScript utilities

function speelVideo(videoId, startSec) {
  const c = document.getElementById('video-container');
  if (!c) return;
  const sec = startSec || 60;
  c.outerHTML = `
    <div class="video-yt-frame">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${videoId}?start=${sec}&autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>`;
}

function roepHulp() {
  const modaal = document.getElementById('modaal');
  if (!modaal) return;
  modaal.classList.add('aan');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sluitModaal(e) {
  const modaal = document.getElementById('modaal');
  if (!modaal) return;
  if (!e || e.target === modaal) {
    modaal.classList.remove('aan');
  }
}
