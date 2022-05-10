<template>
    <div>
        <SelfInformation />
        <MajorAndClass />
        <FirstVolunteer />
        <SecondVolunteer />
        <WhetherAdjustment />
        <RegistButton @regist="post_form" />
    </div>
</template>

<script>
import SelfInformation from "../FormSubmit/SelfInformation.vue"
import MajorAndClass from '../FormSubmit/MajorAndClass.vue'
import FirstVolunteer from '../FormSubmit/FirstVolunteer.vue'
import SecondVolunteer from '../FormSubmit/SecondVolunteer.vue'
import WhetherAdjustment from '../FormSubmit/WhetherAdjustment.vue'
import RegistButton from './RegistButton.vue';

export default {
    name: "Form",
    components: {
        SelfInformation,
        MajorAndClass,
        FirstVolunteer,
        SecondVolunteer,
        WhetherAdjustment,
        RegistButton,

    },
    data () {
        return {
            send_form: {
                stdId: '', //学号 必填 重复学号会覆盖之前的信息
                stdName: '', //姓名 必填
                major: '', //专业 必填
                classNum: '', //班级 必填
                stdQQ: '', //学⽣qq 必填
                stdPhone: '', //学⽣⼿机号 必填
                firstWill: { //第⼀志愿 必填
                    organization: '', //组织名 必填
                    branch: '', //下属部⻔ 必填
                    reason: '', //加⼊该组织的原因
                },
                secondWill: { //第⼆志愿
                    organization: '', //组织名
                    branch: '', //下属部⻔
                    reason: '', //加⼊该组织的原因
                },
                isDispensing: true //是否调剂 不填默认为true
            },
            backMsgJudge: false,
        }
    },
    methods: {
        msgSucceedRegist (msg) {
            this.$message({
                showClose: true,
                message: msg,
                type: 'success'
            });
        },
        msgMissingRequiredFields (war) {
            this.$message({
                showClose: true,
                message: war,
                type: 'warning'
            });
        },
        post_form () {
            // alert('你按的按钮已经传到父组件Form上了')

            // 判断是否有未填的必填项
            if (this.send_form.stdId === '' || this.send_form.stdName === '' || this.send_form.major === '' || this.send_form.classNum === '' || this.send_form.stdQQ === "" || this.send_form.stdPhone === "" || this.send_form.firstWill.organization === '' || this.send_form.firstWill.branch === "") {
                this.msgMissingRequiredFields('您有必填项没有填哦~');
            } else {
                if (/^2021\d{4}/.test(this.send_form.stdId)) {
                    if (/\d/.test(this.send_form.stdQQ)) {
                        if ((/^1[3456789]\d{9}$/.test(this.send_form.stdPhone))) {
                            //通过了前端表单检测，开始发请求
                            const regEvent = new XMLHttpRequest;
                            regEvent.open('POST', 'http://47.94.90.140:8000/post');
                            let stringfiedData = JSON.stringify(this.send_form);
                            regEvent.setRequestHeader('Content-type', 'application/json');
                            regEvent.send(stringfiedData);
                            regEvent.onreadystatechange = () => {
                                if (regEvent.readyState === 4) {
                                    if (regEvent.status === 200) {
                                        this.msgSucceedRegist('好耶！报名成功！')
                                    }
                                }
                            };
                            // console.log(stringfiedData);
                            // console.log(this.send_form);
                        } else {
                            this.msgMissingRequiredFields("您输入的手机号不是正确格式哦~")
                        }
                    } else {
                        this.msgMissingRequiredFields("您输入的QQ不是纯数字格式哦~")
                    }
                } else {
                    this.msgMissingRequiredFields('您输入的学号不满足格式哦~试试以2021开头的八位学号吧')
                }
            }
        },

    },

};

</script>

<style>
/* .alert_common {
    position: absolute !important;
} */
</style>