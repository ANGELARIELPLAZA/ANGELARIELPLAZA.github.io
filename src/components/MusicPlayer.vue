<template>
  <div class="music-player" role="region" aria-label="Controles de música de fondo">
    <button
      class="music-player__button"
      type="button"
      :aria-pressed="isPlaying"
      @click="togglePlayback"
    >
      <span class="music-player__icon" aria-hidden="true">
        <svg v-if="isPlaying" viewBox="0 0 24 24" focusable="false">
          <path
            d="M8 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm7 0a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z"
            fill="currentColor"
          />
        </svg>
        <svg v-else viewBox="0 0 24 24" focusable="false">
          <path
            d="M7.25 5.1c0-.82.86-1.34 1.57-.92l9.12 5.41c.68.4.68 1.43 0 1.83l-9.12 5.41c-.71.42-1.57-.1-1.57-.92z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span class="music-player__label">{{ isPlaying ? 'Pausar música' : 'Reproducir música' }}</span>
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps({
  audioRef: {
    type: Object,
    required: true,
  },
});

const audioElement = computed(() => props.audioRef?.value ?? null);
const isPlaying = ref(false);

function updateState() {
  const audio = audioElement.value;
  if (!audio) {
    isPlaying.value = false;
    return;
  }
  isPlaying.value = !audio.paused;
}

function attachListeners(audio) {
  if (!audio) return;
  audio.addEventListener('play', updateState);
  audio.addEventListener('pause', updateState);
  audio.addEventListener('ended', updateState);
}

function detachListeners(audio) {
  if (!audio) return;
  audio.removeEventListener('play', updateState);
  audio.removeEventListener('pause', updateState);
  audio.removeEventListener('ended', updateState);
}

async function togglePlayback() {
  const audio = audioElement.value;
  if (!audio) return;

  if (audio.paused) {
    try {
      await audio.play();
    } catch (error) {
      console.warn('No se pudo reproducir la música:', error);
    }
  } else {
    audio.pause();
  }
}

onMounted(() => {
  const audio = audioElement.value;
  attachListeners(audio);
  updateState();
});

onUnmounted(() => {
  const audio = audioElement.value;
  detachListeners(audio);
});

watch(
  audioElement,
  (audio, prevAudio) => {
    if (prevAudio !== audio) {
      detachListeners(prevAudio);
      attachListeners(audio);
      updateState();
    }
  }
);
</script>

<style scoped>
.music-player {
  position: fixed;
  right: clamp(0.75rem, 3vw, 1.5rem);
  bottom: clamp(0.75rem, 3vw, 1.5rem);
  z-index: 1000;
}

.music-player__button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1rem;
  border: none;
  border-radius: 999px;
  background: rgba(181, 122, 106, 0.92);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(181, 122, 106, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.music-player__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(181, 122, 106, 0.4);
}

.music-player__button:active {
  transform: translateY(0);
  box-shadow: 0 10px 20px rgba(181, 122, 106, 0.35);
}

.music-player__button:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.75);
  outline-offset: 2px;
}

.music-player__icon {
  display: inline-flex;
  width: 1.1rem;
  height: 1.1rem;
}

.music-player__icon svg {
  width: 100%;
  height: 100%;
}

.music-player__label {
  white-space: nowrap;
}

@media (max-width: 480px) {
  .music-player__button {
    padding: 0.6rem 0.85rem;
    font-size: 0.85rem;
  }

  .music-player__label {
    display: none;
  }

  .music-player__icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
