<template>
    <div id="root">
        <div id="root_1">
            <div class="is_title">是否服从调剂</div>
            <el-switch
                v-model="$parent.send_form.isDispensing"
                active-text="是"
                inactive-text="否"
                active-color="#66ccff"
                inactive-color="#ff4949"
                class="switch"
            ></el-switch>
        </div>
    </div>
</template>

<script>
export default {
    name: "WhetherAdjustment",
}
</script>

<style scoped>
#root_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.is_title {
    margin: 10px;
    color: rgb(255, 255, 255);
}
.switch {
    margin: 10px;
}
</style>