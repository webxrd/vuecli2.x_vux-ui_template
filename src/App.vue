<template>
    <div id="app">
        <img src="./assets/logo.png">
        <transition name="ab">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    /* 定义进入过渡的开始状态 */
    .ab-enter {
        transform: scale(0) rotate(180deg);
        opacity: 0;
    }
    /* 定义进入活动状态 */
    .ab-enter-active  {
        transition: 500ms;
    }
    /* 定义进入的结束状态 */
    .ab-enter-to  {
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
    /* 定义离开过渡的开始状态 */
    .ab-leave  {
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
    /* 定义离开活动状态 */
    .ab-leave-active  {
        transition: 500ms;
    }
    /* 定义离开的结束状态 */
    .ab-leave-to  {
        transform: scale(0) rotate(-180deg);
        opacity: 0;
    }
</style>
