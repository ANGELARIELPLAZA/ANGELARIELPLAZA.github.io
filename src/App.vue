<template>
  <div>
    <div :class="['hint', { show: hintVisible }]">Recorrido en curso… toca para pausar</div>
    <main id="root" ref="rootEl">
      <audio
        id="bgMusic"
        ref="bgMusic"
        src="/mp3/musica.mp3"
        preload="auto"
        loop
        aria-hidden="true"
      ></audio>

      <MusicPlayer :audio-ref="bgMusic" />

      <section class="section" id="s1">
        <article class="card card--hero">
          <img
            src="/img/Fondo_portada_arriba.png"
            alt=""
            class="card__media2  flower flower--tl"
            aria-hidden="true"
            role="presentation"
          />

          <img class="card__media1" alt="Pareja al atardecer" src="/img/IMAGEN1.jpeg" />

          <div class="overlay">
            <blockquote>
              <p class="quote-text">“Mi amado es mío, y yo soy suya.”</p>
              <footer class="quote-ref">— Cantares 2:16</footer>
            </blockquote>
            <h1 class="iniciales" aria-label="Iniciales de los novios">S|A</h1>
            <h2 class="textnoscasamos">¡Nos casamos!</h2>
            <div class="countdown" id="countdown">
              <template v-if="!countdown.finished">
                <div class="box" v-for="item in countdownDisplay" :key="item.label">
                  <div class="number">{{ item.value }}</div>
                  <div class="labelcount">{{ item.label }}</div>
                </div>
              </template>
              <p v-else>¡Llegó el gran día!</p>
            </div>
            <div class="start-wrap">
              <button id="startBtn" class="start-btn" type="button" @click="handleStartClick">
                {{ startLabel }}
              </button>
            </div>
          </div>
        </article>
      </section>

      <section id="s2" class="section" aria-labelledby="s2-title">
        <article class="card card--family">
          <picture aria-hidden="true">
            <source srcset="/img/Fondo_Sec2_arriba.png" media="(min-width: 768px)" />
            <img
              class="card__media card__media--top"
              src="/img/Fondo_Sec2_arriba.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </picture>

          <header class="family-header">
            <h2 id="s2-title" class="family-title font-tangerine">Con la bendición de nuestros queridos padres</h2>
            <div class="family-divider" aria-hidden="true"></div>
          </header>

          <div class="parents-grid" aria-label="Padres de los novios">
            <section class="parents-col" aria-labelledby="parents-bride">
              <h3 id="parents-bride" class="parents-title font-tangerine">Padres de la novia</h3>
              <ul class="parents-list">
                <li class="font-great">Crisóforo Molina H.</li>
                <li aria-hidden="true" class="amp font-italianno">&amp;</li>
                <li class="font-great">Enriqueta Cazarin L.</li>
              </ul>
            </section>

            <section class="parents-col" aria-labelledby="parents-groom">
              <h3 id="parents-groom" class="parents-title font-tangerine">Padres del novio</h3>
              <ul class="parents-list">
                <li class="font-great">Ángel Alberto Plaza R.</li>
                <li aria-hidden="true" class="amp font-italianno">&amp;</li>
                <li class="font-great">Ángela Janely Acuña G.</li>
              </ul>
            </section>
          </div>

          <div class="couple-wrap" aria-live="polite">
            <p class="couple-eyebrow">Nosotros</p>
            <p class="couple-names font-italianno">Sinai <span class="amp" aria-hidden="true">&amp;</span> Ariel</p>
          </div>

          <p class="invite-line">
            Con gran alegría, les invitamos a compartir un nuevo capítulo de nuestra historia de amor:
          </p>
          <p class="invite-cta font-italianno">Nuestra boda.</p>

          <picture aria-hidden="true">
            <source srcset="/img/Fondo_Sec2_abajo.png" media="(min-width: 768px)" />
            <img
              class="card__media card__media--bottom"
              src="/img/Fondo_Sec2_abajo.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </picture>
        </article>
      </section>

      <section class="section" id="s6">
        <article class="card card--venue" aria-labelledby="s6-title">
          <div class="venue-media">
            <img class="card__media" alt="Salón decorado con luces cálidas" src="/img/salon.jpg" />
          </div>

          <div class="venue-body">
            <header class="venue-header">
              <h2 id="s6-title" class="venue-title font-tangerine">Nuestro lugar especial</h2>
              <p class="venue-intro">
                Acompáñanos a celebrar la ceremonia civil y la recepción en un espacio acogedor donde cada detalle está
                pensado para compartir con ustedes.
              </p>
            </header>

            <div class="venue-highlight" aria-label="28 de diciembre de 2025, 4:00 pm">
              <img src="/img/flor_1.png" alt="" class="flower2 flower--tr" aria-hidden="true" role="presentation" />
              <div class="venue-calendar" aria-hidden="true">
                <span class="venue-day">28</span>
                <span class="venue-month">Dic</span>
                <span class="venue-year">2025</span>
              </div>
              <div class="venue-schedule">
                <h3 class="venue-event" itemprop="name">Ceremonia Civil y Recepción</h3>
                <time class="venue-time" datetime="2025-12-28T16:00:00-06:00" itemprop="startDate">4:00 pm</time>
                <p class="venue-place" itemprop="location" itemscope itemtype="https://schema.org/Place">
                  <span itemprop="name">Salón de eventos California</span><br />
                  <span itemprop="address">Hueyapan de Ocampo, Veracruz</span>
                </p>
              </div>
            </div>

            <ul class="venue-details">
              <li>
                <span class="venue-detail-title">Ambiente</span>
                <span class="venue-detail-text">Jardines iluminados y espacios al aire libre.</span>
              </li>
            </ul>

            <div class="venue-actions">
              <a class="venue-btn" href="https://maps.app.goo.gl/J2DysbKQvpvysB4r6" target="_blank" rel="noopener">
                Cómo llegar
              </a>
            </div>
          </div>
        </article>
      </section>

      <section class="section" id="s7">
        <div class="card">
          <div class="card-body">
            <h2 class="section4">Itinerario</h2>
            <img src="/img/flor_2.png" alt="" class="flower--bl" aria-hidden="true" role="presentation" />

            <div class="timeline">
              <div
                v-for="event in timeline"
                :key="event.time"
                class="timeline-item"
                :class="event.align"
              >
                <div class="timeline-content">
                  <h3>{{ event.time }}</h3>
                  <img :src="event.icon" :alt="event.alt" class="timeline-icon" />
                  <p>{{ event.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="s8">
        <div class="card">
          <div class="card-body">
            <h2 class="section5">Momentos</h2>
            <div class="g-stack-wrap">
              <div class="g-stack" id="gStack" ref="stackEl" aria-live="polite">
                <div class="g-card" v-for="(image, index) in galleryImages" :key="image">
                  <img :src="`/img/${image}`" :alt="`Foto ${index + 1}`" />
                </div>
              </div>
              <div class="g-hint">Desliza a la izquierda o derecha para ver las fotos</div>
              <div class="g-actions">
                <button class="g-btn" id="gReset" type="button" @click="resetGallery">⟲ Reiniciar</button>
              </div>
              <div class="g-empty" id="gEmpty" v-show="galleryEmpty">¡Sin más fotos! Presiona “Reiniciar”.</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="s9">
        <div class="card">
          <div class="card-body">
            <img src="/img/Fondo_portada_arriba.png" alt="" class="mirror-x" aria-hidden="true" role="presentation" />

            <div class="dc-in">
              <h2 class="dc-eyebrow">Código de Vestimenta:</h2>
              <p class="dc-style" id="dc-title">Formal</p>
              <p class="dc-note">
                <span class="dc-highlight">Evitar</span> vestimenta completa de los siguientes colores:
              </p>

              <ul class="dc-grid" role="list" aria-label="Colores a evitar">
                <li class="dc-chip" v-for="color in dressCode" :key="color.label" :aria-label="color.label">
                  <span class="dc-swatch" :class="color.swatch"><span class="dc-x">✕</span></span>
                  <span class="dc-chip-label">{{ color.label }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="s10">
        <div class="card">
          <div class="card-body">
            <div class="card-title section10">
              Tu presencia es muy importante para nosotros, por lo que nos gustaría que nos confirmaras antes del 2 de
              diciembre
            </div>
            <div class="actions">
              <a
                href="https://wa.me/5219211024671?text=%C2%A1Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20boda.%20Mi%20nombre%20es%20[Tu%20Nombre]."
                target="_blank"
                rel="noopener"
                class="btn"
              >
                Confirmar por WhatsApp
              </a>
            </div>
          </div>
          <img src="/img/Fondo_Sec2_abajo.png" alt="" class="card__media card__media--bottom" aria-hidden="true" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import MusicPlayer from './components/MusicPlayer.vue';

const countdown = reactive({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
  finished: false,
});

const countdownDisplay = computed(() => [
  { label: 'Días', value: countdown.days },
  { label: 'Horas', value: countdown.hours },
  { label: 'Min', value: countdown.minutes },
  { label: 'Seg', value: countdown.seconds },
]);

const timeline = [
  { time: '04:00 pm', icon: '/icons/wedding-arch.png', alt: 'Icono ceremonia civil', title: 'Ceremonia civil', align: 'left' },
  { time: '05:00 pm', icon: '/icons/wine.png', alt: 'Icono recepción', title: 'Recepción', align: 'right' },
  { time: '07:00 pm', icon: '/icons/restaurant.png', alt: 'Icono cena', title: 'Cena', align: 'left' },
  { time: '09:00 pm', icon: '/icons/dance.png', alt: 'Icono baile', title: 'Bailes', align: 'right' },
];

const dressCode = [
  { label: 'Blanco', swatch: 'dc-white' },
  { label: 'Verde olivo claro', swatch: 'dc-olive' },
  { label: 'Beige / arena', swatch: 'dc-beige' },
  { label: 'Azul marino', swatch: 'dc-navy' },
];

const rootEl = ref(null);
const bgMusic = ref(null);
const stackEl = ref(null);
const hintVisible = ref(false);
const startLabel = ref('Iniciar recorrido');

const galleryInitial = [
  'IMG1.jpeg',
  'IMG2.jpeg',
  'IMG3.jpeg',
  'IMG4.jpeg',
  'IMG5.jpeg',
  'IMG6.jpeg',
  'IMG7.jpeg',
  'IMG8.jpeg',
  'IMG9.jpeg',
  'IMG10.jpeg',
  'IMG11.jpeg',
];

const galleryImages = ref([...galleryInitial]);
const galleryEmpty = ref(false);

const running = ref(false);
let stopRequested = false;

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

let countdownTimer = null;
let pointerUpListener;
let prefersCleanup;

const THRESHOLD = 90;
const ROTATION = 18;
let currentCard = null;
let startX = 0;
let startY = 0;
let dx = 0;
let dy = 0;
let dragging = false;

const countdownDate = new Date('2025-12-28T17:00:00');

const countdownUpdater = () => {
  const now = Date.now();
  const distance = countdownDate.getTime() - now;

  if (distance <= 0) {
    countdown.finished = true;
    countdown.days = '00';
    countdown.hours = '00';
    countdown.minutes = '00';
    countdown.seconds = '00';
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.days = String(days).padStart(2, '0');
  countdown.hours = String(hours).padStart(2, '0');
  countdown.minutes = String(minutes).padStart(2, '0');
  countdown.seconds = String(seconds).padStart(2, '0');
  countdown.finished = false;
};

function showHint(show) {
  hintVisible.value = show;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForSettle(timeoutMs) {
  return new Promise((resolve) => {
    const root = rootEl.value;
    if (!root) {
      resolve(true);
      return;
    }

    const start = performance.now();
    let lastY = root.scrollTop;
    let sameCount = 0;

    function tick() {
      if (stopRequested) {
        resolve(true);
        return;
      }

      const now = performance.now();
      const y = root.scrollTop;

      if (Math.abs(y - lastY) < 0.5) {
        sameCount += 1;
        if (sameCount > 6) {
          resolve(true);
          return;
        }
      } else {
        sameCount = 0;
        lastY = y;
      }

      if (now - start > timeoutMs) {
        resolve(false);
        return;
      }

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

function getSections() {
  return rootEl.value ? Array.from(rootEl.value.querySelectorAll('.section')) : [];
}

function getStartIndex(sections) {
  let startIndex = 0;
  let bestRatio = 0;
  const viewportH = window.innerHeight || document.documentElement.clientHeight;

  sections.forEach((sec, index) => {
    const rect = sec.getBoundingClientRect();
    const visible = Math.max(0, Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0));
    const ratio = visible / Math.max(1, rect.height);
    if (ratio > bestRatio) {
      bestRatio = ratio;
      startIndex = index;
    }
  });

  return startIndex;
}

async function playMusic() {
  const audio = bgMusic.value;
  if (!audio || !audio.paused) return;

  try {
    await audio.play();
  } catch (err) {
    console.warn('[audio] No se pudo reproducir automáticamente:', err);
  }
}

function pauseMusic() {
  const audio = bgMusic.value;
  if (!audio || audio.paused) return;
  audio.pause();
}

async function slowScrollTo(section, duration = 2400) {
  const root = rootEl.value;
  if (!root) return;

  const targetTop = section.offsetTop;
  const startTop = root.scrollTop;
  const distance = targetTop - startTop;
  const startTime = performance.now();
  const originalSnap = root.style.scrollSnapType;
  root.style.scrollSnapType = 'none';

  await new Promise((resolve) => {
    function step(now) {
      if (stopRequested) {
        root.style.scrollSnapType = originalSnap;
        resolve();
        return;
      }

      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      root.scrollTop = startTop + distance * eased;

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        root.style.scrollSnapType = originalSnap;
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}

async function autoTour() {
  if (prefersReduced.matches) return;
  const sections = getSections();
  if (!sections.length) return;

  running.value = true;
  stopRequested = false;
  showHint(true);
  startLabel.value = 'Pausar recorrido';

  await playMusic();

  const startIndex = getStartIndex(sections);

  for (let i = startIndex; i < sections.length; i += 1) {
    if (stopRequested) break;

    await slowScrollTo(sections[i]);
    const settled = await waitForSettle(1800);
    if (!settled) await sleep(800);
    await sleep(1200);
  }

  running.value = false;
  stopRequested = false;
  showHint(false);
  startLabel.value = 'Repetir recorrido';
}

function handleStartClick() {
  if (!running.value) {
    autoTour();
  } else {
    stopRequested = true;
    pauseMusic();
    showHint(false);
    startLabel.value = 'Reanudar recorrido';
  }
}

function handlePointerDownRoot() {
  if (running.value) {
    stopRequested = true;
    pauseMusic();
    showHint(false);
    startLabel.value = 'Reanudar recorrido';
  }
}

function handleVisibilityChange() {
  if (document.hidden && running.value) {
    stopRequested = true;
    pauseMusic();
    showHint(false);
    startLabel.value = 'Reanudar recorrido';
  }
}

function handlePrefersChange(event) {
  if (event.matches && running.value) {
    stopRequested = true;
    pauseMusic();
    showHint(false);
    startLabel.value = 'Reanudar recorrido';
  }
}

function applyTransform(el, x, y) {
  const rot = (x / Math.max(320, window.innerWidth)) * ROTATION;
  el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;
}

function handlePointerStart(event) {
  currentCard = stackEl.value?.querySelector('.g-card');
  if (!currentCard) return;
  dragging = true;
  const pointer = event.touches?.[0] || event;
  startX = pointer.clientX;
  startY = pointer.clientY;
  dx = 0;
  dy = 0;
  currentCard.style.transition = 'none';
}

function handlePointerMove(event) {
  if (!dragging || !currentCard) return;
  const pointer = event.touches?.[0] || event;
  dx = pointer.clientX - startX;
  dy = pointer.clientY - startY;
  if (Math.abs(dx) > Math.abs(dy)) {
    event.preventDefault();
  }
  applyTransform(currentCard, dx, dy);
}

function removeTopCard(direction) {
  if (!currentCard) return;
  currentCard.classList.add(direction);
  currentCard.style.transition = '';
  const cardToRemove = currentCard;
  currentCard = null;

  const handleTransitionEnd = () => {
    cardToRemove.removeEventListener('transitionend', handleTransitionEnd);
    galleryImages.value = galleryImages.value.slice(1);
  };

  cardToRemove.addEventListener('transitionend', handleTransitionEnd);
}

function handlePointerEnd() {
  if (!dragging || !currentCard) return;
  dragging = false;

  if (Math.abs(dx) > THRESHOLD) {
    removeTopCard(dx > 0 ? 'g-right' : 'g-left');
  } else {
    currentCard.style.transition = 'transform .25s ease';
    currentCard.style.transform = '';
    currentCard = null;
  }
}

function resetGallery() {
  galleryImages.value = [...galleryInitial];
  galleryEmpty.value = false;
  if (currentCard) {
    currentCard.style.transition = '';
    currentCard.style.transform = '';
  }
  currentCard = null;
  dragging = false;
}

watch(
  galleryImages,
  (images) => {
    galleryEmpty.value = images.length === 0;
  },
  { deep: true, immediate: true }
);

onMounted(() => {
  countdownUpdater();
  countdownTimer = window.setInterval(countdownUpdater, 1000);

  rootEl.value?.addEventListener('pointerdown', handlePointerDownRoot, { passive: true });
  document.addEventListener('visibilitychange', handleVisibilityChange);

  if (typeof prefersReduced.addEventListener === 'function') {
    prefersReduced.addEventListener('change', handlePrefersChange);
    prefersCleanup = () => prefersReduced.removeEventListener('change', handlePrefersChange);
  } else if (typeof prefersReduced.addListener === 'function') {
    prefersReduced.addListener(handlePrefersChange);
    prefersCleanup = () => prefersReduced.removeListener(handlePrefersChange);
  }

  const stack = stackEl.value;
  if (stack) {
    stack.addEventListener('mousedown', handlePointerStart);
    stack.addEventListener('mousemove', handlePointerMove);
    pointerUpListener = handlePointerEnd;
    document.addEventListener('mouseup', pointerUpListener);

    stack.addEventListener('touchstart', handlePointerStart, { passive: false });
    stack.addEventListener('touchmove', handlePointerMove, { passive: false });
    stack.addEventListener('touchend', handlePointerEnd);
    stack.addEventListener('touchcancel', handlePointerEnd);
  }
});

onUnmounted(() => {
  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  rootEl.value?.removeEventListener('pointerdown', handlePointerDownRoot);
  document.removeEventListener('visibilitychange', handleVisibilityChange);
  if (prefersCleanup) {
    prefersCleanup();
    prefersCleanup = undefined;
  }

  const stack = stackEl.value;
  if (stack) {
    stack.removeEventListener('mousedown', handlePointerStart);
    stack.removeEventListener('mousemove', handlePointerMove);
    document.removeEventListener('mouseup', pointerUpListener);
    stack.removeEventListener('touchstart', handlePointerStart);
    stack.removeEventListener('touchmove', handlePointerMove);
    stack.removeEventListener('touchend', handlePointerEnd);
    stack.removeEventListener('touchcancel', handlePointerEnd);
  }
});
</script>
