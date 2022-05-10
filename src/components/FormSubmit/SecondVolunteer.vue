<template>
    <div class="root">
        <div id="title">第二志愿</div>
        <div class="block">
            <el-cascader
                class="option"
                v-model="second_org_data"
                :options="orginazationData"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
            ></el-cascader>
        </div>
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入加入此组织的理由"
            v-model="$parent.send_form.secondWill.reason"
            class="fst_oth"
        ></el-input>
    </div>
</template>

<script>
import { orginazationData } from '../../assets/data/orginazationData.js'
export default {
    name: "SecondVolunteer",
    data () {
        return {
            second_org_data: [],
            orginazationData,
            second_others: '',
        }
    },
    methods: {
        handleChange (value) {
            this.$parent.send_form.secondWill.organization = String(value[0])
            this.$parent.send_form.secondWill.branch = String(value[1])
        }
    },
}
</script>

<style scoped>
#title {
    font-size: 20px;
    color: rgb(255, 255, 255);
}
.root {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.block {
    margin: 10px;
}
.option {
    width: 360px;
}
.fst_oth {
    width: 360px;
}
</style>