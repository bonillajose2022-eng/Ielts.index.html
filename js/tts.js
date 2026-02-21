/* ════════════════════════════════════════════════════════════════════
   tts.js — Web Speech API Text-to-Speech controller
   ════════════════════════════════════════════════════════════════════ */

let ttsUtterance = null;
let ttsCurrentIndex = 0;
let ttsPlaying = false;

/** Build a plain-text string from the script for TTS */
function buildTTSText() {
  return LISTENING_SCRIPT
    .map(line => `${line.speaker} says: ${line.text}`)
    .join('. ');
}

/** Start or resume playback */
function ttsPlay() {
  if (!window.speechSynthesis) {
    alert('Sorry, your browser does not support Text-to-Speech. Try Chrome or Edge.');
    return;
  }

  if (ttsPlaying) return;

  // If paused, resume
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    ttsPlaying = true;
    setPlaybackUI(true);
    return;
  }

  // Fresh play
  window.speechSynthesis.cancel();
  const text = buildTTSText();
  ttsUtterance = new SpeechSynthesisUtterance(text);
  ttsUtterance.lang = 'en-US';
  ttsUtterance.rate = parseFloat(document.getElementById('tts-speed').value) || 1;
  ttsUtterance.pitch = 1;

  // Try to use a natural voice
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha'))
  ) || voices.find(v => v.lang.startsWith('en'));
  if (preferred) ttsUtterance.voice = preferred;

  ttsUtterance.onstart = () => {
    ttsPlaying = true;
    setPlaybackUI(true);
  };
  ttsUtterance.onend = () => {
    ttsPlaying = false;
    setPlaybackUI(false);
  };
  ttsUtterance.onerror = () => {
    ttsPlaying = false;
    setPlaybackUI(false);
  };

  window.speechSynthesis.speak(ttsUtterance);
}

/** Pause playback */
function ttsPause() {
  if (window.speechSynthesis && ttsPlaying) {
    window.speechSynthesis.pause();
    ttsPlaying = false;
    setPlaybackUI(false);
  }
}

/** Restart playback from the beginning */
function ttsRestart() {
  window.speechSynthesis.cancel();
  ttsPlaying = false;
  setPlaybackUI(false);
  setTimeout(ttsPlay, 150);
}

/** Update button states and waveform animation */
function setPlaybackUI(playing) {
  document.getElementById('btn-play').disabled = playing;
  document.getElementById('btn-pause').disabled = !playing;
  const waveform = document.getElementById('waveform');
  if (playing) {
    waveform.classList.add('playing');
  } else {
    waveform.classList.remove('playing');
  }
}

// Update rate on selection change
document.addEventListener('DOMContentLoaded', () => {
  const speedSel = document.getElementById('tts-speed');
  if (speedSel) {
    speedSel.addEventListener('change', () => {
      if (ttsUtterance) ttsUtterance.rate = parseFloat(speedSel.value);
    });
  }

  // Pre-load voices (required in some browsers)
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
});
