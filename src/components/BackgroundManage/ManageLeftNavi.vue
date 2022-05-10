<template>
    <div id="root">
        <div id="inner_root">
            <div class="OneGrade">
                <span class="OneInnerSpan">后台管理</span>
            </div>
            <div class="ChildGrade">
                <button @click="show(0,$event)" class="ChildSpan" :class="ManageList[0]">学生信息</button>
                <button
                    @click="showHope('敬请期待~（只是没写完）')"
                    class="ChildSpan"
                    :class="ManageList[1]"
                >报名查询</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ManageLeftNavi",
    data () {
        return {
            ManageList: ['btnTrue', 'btnFalse'],
        }
    },
    methods: {
        show (val) {
            // console.log(this.ManageList);
            let i = 0
            for (i in this.ManageList) {
                this.ManageList[i] = 'btnFalse';
            }
            this.$set(this.ManageList, val, 'btnTrue')
            // this.ManageList[val] = 'btnTrue'; 
            //这行代码并不会被Vue检测
        },
        EmitGetData () {
            // console.log('我被点了');
            this.$emit("MountedGetData")
        },
        showHope (msg) {
            this.$message({
                showClose: true,
                message: msg,
            });
        }
    },
}
</script>

<style scoped>
#root {
    width: 300px;
    height: 90%;
    border-radius: 30px 0px 0px 30px;
    background-color: rgba(255, 255, 255, 0.658);
    margin: 10px;
    margin-right: 0px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.479);
}
.OneGrade {
    width: 300px;
    height: 60px;
    border: 1px solid rgb(173, 173, 173);
    border-top: none;
    border-left: none;
    border-right: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.ChildGrade {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ChildSpan {
    width: 300px;
    height: 60px;
    border: #ffffff00;
    background-color: rgba(255, 255, 255, 0.055);
    color: #181818;
    font-size: 20px;
    padding: 9px 20px 14px 20px;
    text-decoration: none;
}
.ChildSpan:hover {
    background: #1f1f1f;
    color: rgb(255, 255, 255);
    text-decoration: none;
}
.btnTrue {
    background: #1f1f1f;
    color: rgb(255, 255, 255);
    text-decoration: none;
}
.OneInnerSpan {
    font-size: 30px;
    font-style: oblique;
    color: rgb(0, 0, 0);
}
</style>