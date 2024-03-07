<template>
  <div class="modal" ref="modalEl" v-if="modalVisible" @keyup.down="() => currentIndex++"
    @mouseleave="handleMouseLeave">
    <div v-if="hits.length == 0" class="empty">
      <svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor"
        stroke-linecap="round" stroke-linejoin="round">
        <path
          d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2">
        </path>
      </svg>
      <p>无法找到相关结果 “<strong>{{ query }}</strong>”</p>
    </div>
    <div v-else style="flex: 1; display: flex; flex-direction: column;  align-items: center;">
      <div :class="{ result: true, active: index == currentIndex }" v-for="(hit, index) in hits" :key="hit.objectID"
        @mouseenter="handleMouseEnter(hit, index)" @click="handleClick(hit)">
        <span>
          <span v-html="markKeyword(hit.hierarchy_lvl1)"></span>
          |
          <a v-html="markKeyword(hit.hierarchy_lvl2 ?? hit.hierarchy_lvl1)" :href="hit.url"> </a>
        </span>
        <p class="content" v-html="markKeyword(hit.content)"></p>
      </div>
    </div>
    <div class="footer">
      <div class="flex items-center">
        <kbd class="shortcut-key">↑</kbd>
        <kbd class="shortcut-key">↓</kbd>
        <span class="text">定位</span>
        <kbd class="shortcut-key">↩</kbd>
        <span class="text">选择</span>
      </div>
      <div>
        <div class="flex items-center">
          <kbd class="shortcut-key">ESC</kbd>
          <span class="text">关闭</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { MeiliSearch } from 'meilisearch'
// import keywordMark from 'keyword-mark';
import { currentIndex, modalVisible, query, hits, canHide } from '../global.js';
import { pluginOptions } from '../define.js';

const client = new MeiliSearch({
  host: pluginOptions.HOST,
  apiKey: pluginOptions.API_KEY,
})

const index = ref(pluginOptions.INDEX);
const modalEl = ref<HTMLDivElement>();

const handleChange = async () => {
  const result = await client.index(index.value).search(query.value, { limit: 5 });
  hits.value = result.hits;
}

const handleMouseEnter = (hit, index: number) => {
  canHide.value = false;
  currentIndex.value = index;
}

const handleMouseLeave = () => {
  canHide.value = true;
}

const handleClick = (hit) => {
  location.href = hit.url;
}

const markKeyword = (content: string) => {
  // return keywordMark(content, query.value, {
  // tag: 'strong',
  // ignoreCase: true,
  // handle(match: string) {
  //   return match;
  // }
  // })
  return content
}

watch(query, () => {
  handleChange();
})
</script>

<style scoped lang="scss">
$shadow: .3rem .3rem .6rem var(--greyLight-2),
  -.2rem -.2rem .5rem var(--white);
$inner-shadow: inset .2rem .2rem .5rem var(--greyLight-2),
  inset -.2rem -.2rem .5rem var(--white);

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.modal {
  box-sizing: border-box;
  overflow: auto;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 100%;
  right: 0;
  width: 556px;
  padding: 5px 5px;
  background-color: #E4EBF5;
  z-index: 999;
  border-radius: 0.25rem;

  .footer {
    display: flex;
    justify-content: space-between;
  }
}

.result {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  .content {
    text-align: center;
    font-size: 0.8rem;
    width: 516px;
  }
}

.active,
.active>a {
  opacity: 0.8;
  border-radius: 4px;
  background-color: green;
  color: #fff;
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  p {
    padding: 2rem 0;
  }
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.shortcut-key {
  margin-left: .5rem;
  font-size: .725rem;
}

.text {
  font-size: .725rem;
  margin-left: .5rem;
  margin-right: .5rem;
}

@media screen and (max-width: 719px) {
  .modal {
    width: 100vw;
    left: 0;
    right: 0;
    margin: 0 !important;
  }

  .result {
    width: 96vw;
  }

  .content {
    font-size: 0.8rem;
    width: 96vw;
    overflow: hidden;
  }
}
</style>