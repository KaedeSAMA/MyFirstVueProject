<template>
    <div class="root">
        <el-button @click="emitReg" class="reg_btn" type="success" round>报名</el-button>
    </div>
</template>

<script>
export default {
    name: "RegistButton",
    methods: {
        emitReg () {
            // alert('按钮组件知道你点了')
            this.$emit('regist')
        },
    }
}
</script>

<style scoped>
.root {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.reg_btn {
    margin: 10px;
    width: 360px;
}
</style>