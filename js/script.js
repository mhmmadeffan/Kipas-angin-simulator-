// Mengambil elemen-elemen dari HTML
const fanBlades = document.getElementById('fan-blades');
const btnSwing = document.getElementById('btn-swing');
const fanHead = document.getElementById('fan-head');
const fanSystem = document.getElementById('fan-system');
const audioTombol = document.getElementById('audio-tombol');
const audioKipas = document.getElementById('audio-kipas');

let currentSpeed = 0;
let isSwinging = false;

// Kecepatan putaran untuk audio
const rateMap = { 1: 0.5, 2: 0.8, 3: 1.1, 4: 1.4, 5: 1.7, 6: 2.0, 7: 2.5 };

// Fungsi untuk mengganti kecepatan
function changeSpeed(speedClass, level) {
    audioTombol.currentTime = 0;
    audioTombol.play();
    
    fanBlades.className = 'blades-wrapper';
    
    if (level === 0) {
        fadeOut(audioKipas);
    } else {
        fanBlades.classList.add(speedClass);
        audioKipas.playbackRate = rateMap[level];

        if (audioKipas.paused) {
            audioKipas.volume = 1;
            audioKipas.play();
        }
    }
}

// Fungsi untuk memudarkan suara saat dimatikan
function fadeOut(audio) {
    const step = 0.05;
    const interval = setInterval(() => {
        if (audio.volume > step) {
            audio.volume -= step;
        } else {
            audio.volume = 1;
            audio.pause();
            audio.currentTime = 0;
            clearInterval(interval);
        }
    }, 60);
}

// Fungsi untuk mengganti tipe kipas (duduk, atap, dinding)
function changeType(typeClass) {
    audioTombol.currentTime = 0;
    audioTombol.play();
    fanSystem.className = typeClass;
}

// Fungsi untuk membuat kipas menggeleng
function toggleSwing() {
    audioTombol.currentTime = 0;
    audioTombol.play();
    isSwinging = !isSwinging;
    if (isSwinging) {
        fanHead.classList.add('swinging');
        btnSwing.innerText = 'Geleng: ON';
        btnSwing.style.backgroundColor = '#20c997';
    } else {
        fanHead.classList.remove('swinging');
        btnSwing.innerText = 'Geleng: OFF';
        btnSwing.style.backgroundColor = '#ffc107';
    }
}
