<template>
  <div class="meilisearch">
    <form class="search-box" role="search" @submit="handleSubmit">
      <span style="position: relative; display: inline-block; direction: ltr;">
        <input @blur="() => hideModal()" @keyup.down="handleCurrentIndex('+')" @keyup.up="handleCurrentIndex('-')"
          @keyup.esc="hideModal" @input="handleInput" v-model="query" placeholder="Search..." autocomplete="off"
          spellcheck="false" role="combobox" dir="auto" style="position: relative; vertical-align: top;">
      </span>
    </form>
  </div>
</template>

<script setup lang="ts">
import { query, currentIndex, hits, hideModal, showModal } from '../global.js';

const handleInput = () => {
  showModal();
}

const handleCurrentIndex = (operator: '+' | '-') => {
  if (operator == '+' && currentIndex.value < hits.value.length - 1) {
    currentIndex.value++;
  }
  if (operator == '-' && currentIndex.value > 0) {
    currentIndex.value--;
  }
}

const handleSubmit = (e: Event) => {
  const url = hits.value[currentIndex.value].url;
  location.href = url;
  e.preventDefault();
}
</script>

<style>
.meilisearch {
  line-height: 2rem;
}

.search-box {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  line-height: 2.2rem;
  white-space: nowrap;
  font-size: .9rem;
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  vertical-align: top;
}

.search-box input:focus {
  cursor: auto;
  border-color: #3eaf7c;
}

.search-box input {
  vertical-align: middle !important;
  cursor: text;
  width: 10rem;
  height: 2rem;
  color: #4e6e8e;
  display: inline-block;
  border: 1px solid #cfd4db;
  border-radius: 2rem;
  font-size: .9rem;
  padding: 0 .5rem 0 2rem;
  outline: none;
  transition: all .2s ease;
  background: url(../assets/search.svg) .6rem .5rem no-repeat;
  background-size: 1rem;
}

@media screen and (max-width: 719px) {
  .search-box input {
    padding: 0 1rem 0 1rem;
    width: 0rem;
    background-position: center center;
    border: none;
  }

  .search-box input:focus {
    width: 5rem;
    padding: 0 .5rem 0 2rem;
    border: 1px solid #cfd4db;
    background-position: .6rem center;
  }

  .search-box input:focus {
    cursor: auto;
    border-color: #3eaf7c;
  }
}
</style>