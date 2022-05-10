<template>
    <div class="major">
        <div class="title">专业与班级（必填）</div>
        <div class="block">
            <el-cascader
                class="option"
                v-model="major_class"
                :options="majorData"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
            ></el-cascader>
        </div>
    </div>
</template>

<script>
import { majorData } from '../../assets/data/Major.js'
export default {
    name: 'MajorAndClass',
    data () {
        return {
            major_class: [],
            majorData
        }
    },
    methods: {

        handleChange (value) {
            console.log(value);
            this.$parent.send_form.major = String(value[0])
            this.$parent.send_form.classNum = String(value[1])
        }
    }

}
</script>

<style scoped>
.major {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title {
    font-size: 20px;
    color: rgb(255, 255, 255);
}
.option {
    width: 360px;
    margin: 10px;
}
</style>