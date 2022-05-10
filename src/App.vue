<template>
    <div id="app">
        <RockStorm />
        <router-view class="inner_app move_in" />
    </div>
</template>

<script>
import FormSubmitApp from './components/FormSubmit/FormSubmitApp.vue'
import LogIn from './components/Login/LogIn';
import BackgroundManage from './components/BackgroundManage/BackgroundManageApp.vue';
import RockStorm from './components/Effects/RockStorm.vue';
export default {
    name: 'App',
    components: {
        FormSubmitApp,
        LogIn,
        BackgroundManage,
        RockStorm,
    },

}

</script>

<style>
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.inner_app {
    position: absolute;
    top: 20px;
    z-index: 1;
}
.move_in {
    animation: go_in 1s;
}
@keyframes go_in {
    from {
        top: -800px;
        opacity: 0;
    }
    to {
        top: 50px;
        opacity: 1;
    }
}
</style>
