<template>
    <div id="LoginRoot">
        <div id="OutInterface">
            <img src="../../assets/LoginHeadIMG.png" class="log_head_img" />
            <div class="InputAndButton">
                <el-input placeholder="账号" v-model="account" size="large" class="innerIpt">
                    <i slot="prefix" class="el-input__icon el-icon-user inner_icon"></i>
                </el-input>
                <el-input
                    placeholder="密码"
                    v-model="passWord"
                    size="large"
                    class="innerIpt"
                    show-password
                >
                    <i slot="prefix" class="el-input__icon el-icon-edit inner_icon"></i>
                </el-input>

                <el-button
                    type="success"
                    class="btn"
                    style="margin-left: 0; margin:5px;"
                    @click="LogInBack"
                    round
                >登录</el-button>
                <el-button
                    type="primary"
                    class="btn"
                    style="margin-left: 0; margin:5px;"
                    round
                    @click="GoToMessage"
                >返回注册信息页面</el-button>
                <!-- <el-button type="info" class="btn" style="margin-left: 0; margin:5px;" round>信息按钮</el-button> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            account: '',
            passWord: '',
            router: false
        }
    },
    methods: {
        msgMissingRequiredFields (war) {
            this.$message({
                showClose: true,
                message: war,
                type: 'warning'
            });
        },
        msgSucceedRegist (msg) {
            this.$message({
                showClose: true,
                message: msg,
                type: 'success'
            });
        },
        LogInBack () {
            if (this.account === '' || this.passWord === '') {
                this.msgMissingRequiredFields('您是不是没有输入账号或密码呢~检查一下吧~')
            } else {
                const logEvent = new XMLHttpRequest;
                logEvent.open('POST', 'http://47.94.90.140:8000/login');
                let sendData = JSON.stringify({
                    username: this.account,
                    password: this.passWord,
                });
                logEvent.setRequestHeader('Content-type', 'application/json');
                logEvent.send(sendData);
                logEvent.onreadystatechange = () => {
                    if (logEvent.readyState === 4) {
                        if (logEvent.status === 200) {
                            if (JSON.parse(logEvent.response).code === '0000') {
                                // console.log(JSON.parse(logEvent.response));
                                sessionStorage.setItem('log_token', JSON.parse(logEvent.response).data.token);
                                this.msgSucceedRegist('登录成功！')
                                // window.router = true
                                this.$router.push('/backgroundmanage')
                            } else {
                                this.msgMissingRequiredFields('账户名或密码错误，请重试~')
                            }
                        }
                    }
                };
            }
        },
        GoToMessage () {
            this.$router.push('/FormSubmitApp')
        }
    }
}
</script>

<style scoped>
#LoginRoot {
    margin: 100px;
}
#OutInterface {
    width: 500px;
    height: 600px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.959);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.247), 0 0 6px rgba(0, 0, 0, 0.04);
}
.InputAndButton {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.innerIpt {
    width: 360px;
    margin: 10px;
}
.inner_icon {
    height: auto;
}
.log_head_img {
    width: 160px;
    height: 160px;
    margin: 20px;
}
.btn {
    width: 360px;
}
</style>