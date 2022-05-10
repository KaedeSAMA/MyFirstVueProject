<template>
    <div class="root">
        <el-button class="support_btn" type="primary" @click="LogInBack" round>后台登录</el-button>
    </div>
</template>

<script>
export default {
    name: "SupportButton",
    methods: {
        LogInBack () {
            this.$router.push('/login')
        }
    },
}
</script>

<style scoped>
.root {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.support_btn {
    margin: 10px;
    width: 360px;
}
</style>