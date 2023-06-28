<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="increment">{{ state.count }}</div>
    <div class="button" @click="increment">{{ $t('language') }}</div>
    <div class="button" @click="changMode">模式改变</div>
    <div class="button" @click="changLang">语言切换</div>
    <div class="button" @click="start">开始倒计时{{ countNum }}</div>
    <div class="button" @click="debounce(onDebounce, 1000)">防抖</div>
    <div class="button" @click="throttle(onThrottle, 1000)">节流</div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import { computed, reactive, ref } from 'vue';
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

import { setMode } from "../utils";

import useCountDown from "../hooks/useCountDown";
import useDebounce from "../hooks/useDebounce";
import useThrottle from "../hooks/useThrottle";

const store = useStore()
const { locale } = useI18n()
const { countNum, startCountDown } = useCountDown()
const { debounce } = useDebounce()
const { throttle } = useThrottle()
const state = reactive({ count: 0 });
const isTest = ref(false)

const isDark = computed(() => {
  return store.state.isDark
})

const onDebounce = () => {
  console.log('------');
}

const onThrottle = () => {
  console.log('++++++');
}

const start = () => {
  startCountDown(10)
}

const increment = () => {
  state.count++
  isTest.value = true
}

const changMode = ()=> {
  // setDark(!isDark.value)
  setMode(!isDark.value)
  store.commit('setDark', !isDark.value)
  console.log('isDark', isDark.value);
}

const changLang = () => {
  if (locale.value === 'zh') {
    locale.value = 'en'
  } else {
    locale.value = 'zh'
  }
}

function setDark(payload) {
  store.commit('setDark', payload)
}
</script>

<style lang="scss" scoped>
.home {
  .button {
    margin-top: 10px;
    width: fit-content;
    background: var(--blue-1);
    padding: 5px 50px;
    font-size: 14px;
    text-align: center;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
