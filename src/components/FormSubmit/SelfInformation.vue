<template>
    <div id="self_inf">
        <div id="title">个人信息（必填）</div>
        <el-input
            class="ipt"
            placeholder="学号（必填）"
            suffix-icon="el-icon-bank-card"
            v-model="$parent.send_form.stdId"
        ></el-input>
        <el-input
            class="ipt"
            placeholder="姓名（必填）"
            suffix-icon="el-icon-user"
            v-model="$parent.send_form.stdName"
        ></el-input>
        <el-input
            class="ipt"
            placeholder="QQ（必填）"
            suffix-icon="el-icon-s-opportunity"
            v-model="$parent.send_form.stdQQ"
        ></el-input>
        <el-input
            class="ipt"
            placeholder="手机（必填）"
            suffix-icon="el-icon-phone-outline"
            v-model="$parent.send_form.stdPhone"
        ></el-input>
    </div>
</template>

<script>
export default {
    name: 'SelfInformation',
    data () {
        return {
            self_student_id: "",
            self_student_name: "",
            self_student_qq: "",
            self_student_phone: "",
        }
    },
}
</script>

<style scoped>
#title {
    font-size: 20px;
    color: rgb(255, 255, 255);
}
#self_inf {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ipt {
    width: 360px;
    margin: 10px;
}
</style>