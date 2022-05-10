<template>
    <div class="root">
        <ManageLeftNavi />
        <ManageRight :dataTotal="total" @SendPost="GetData" />
    </div>
</template>

<script>
import ManageLeftNavi from './ManageLeftNavi.vue';
import ManageRight from './ManageRight.vue';
export default {
    name: "BackgroundManageApp",
    data () {
        return {
            stdData: [],
            rawData: {},
            total: 0,
            MyPages: 9,
            NowPage: 1,
            MyKey: '',
        }
    },
    components: {
        ManageLeftNavi,
        ManageRight,
    },
    methods: {
        // GetData () {
        //     // console.log('Get被调用了');
        //     const xhr_ID = new XMLHttpRequest;
        //     let log_token = sessionStorage.getItem("log_token");
        //     let sendData = JSON.stringify({
        //         token: log_token,
        //         page: 1,    //第几⻚,不传默认为1   
        //         pageSize: 1 //每⻚数据的数量
        //     })
        //     console.log(sendData);
        //     xhr_ID.open('POST', 'http://47.94.90.140:8000/getAllStuInfo?page=2&pageSize=10');
        //     xhr_ID.setRequestHeader('Content-type', 'application/json');
        //     xhr_ID.send(sendData);
        //     xhr_ID.onreadystatechange = () => {
        //         if (xhr_ID.readyState === 4) {
        //             if (xhr_ID.status === 200) {
        //                 // alert(JSON.parse(xhr_ID.response).msg);
        //                 console.log(JSON.parse(xhr_ID.response).data.students);
        //                 this.stdData = JSON.parse(xhr_ID.response).data.students;
        //                 this.rawData = JSON.parse(xhr_ID.response);
        //             }
        //         }
        //     };
        // }
        GetData () {
            new Promise((resolve, reject) => {
                const xhr_ID = new XMLHttpRequest();
                let log_token = sessionStorage.getItem("log_token");
                let sendData = JSON.stringify({
                    token: log_token,
                    page: this.NowPage, //第几⻚,不传默认为1
                    pageSize: this.MyPages, //每⻚数据的数量
                });
                xhr_ID.open(
                    "POST",
                    "http://47.94.90.140:8000/getAllStuInfo?page=" + this.NowPage + "&pageSize=" + this.MyPages
                );
                xhr_ID.setRequestHeader("Content-type", "application/json");
                xhr_ID.send(sendData);
                xhr_ID.onreadystatechange = () => {
                    if (xhr_ID.readyState === 4) {
                        if (xhr_ID.status === 200) {
                            resolve(JSON.parse(xhr_ID.response));
                        } else {
                            reject(new Error("Ajax request is error"));
                        }
                    }
                };
            }).then((res) => {
                // console.log(res);
                // console.log(res.data);
                // console.log("stdData变了");
                this.stdData = res.data.students;
                let ele = 0;
                for (ele in this.stdData) {
                    // console.log(this.stdData[ele]);
                    if (this.stdData[ele].isDispensing) {
                        this.stdData[ele].isDispensing = '是'
                    } else {
                        this.stdData[ele].isDispensing = '否'
                    }
                }
                this.total = res.data.total;
            });
        },
        GetDataByKey () {
            new Promise((resolve, reject) => {
                const xhr_ID = new XMLHttpRequest();
                let log_token = sessionStorage.getItem("log_token");
                let sendData = JSON.stringify({
                    token: log_token,
                    keyWord: this.MyKey,
                });
                xhr_ID.open(
                    "POST",
                    "http://47.94.90.140:8000/getAllStuInfo?page=" + this.NowPage + "&pageSize=" + this.MyPages
                );
                xhr_ID.setRequestHeader("Content-type", "application/json");
                xhr_ID.send(sendData);
                xhr_ID.onreadystatechange = () => {
                    if (xhr_ID.readyState === 4) {
                        if (xhr_ID.status === 200) {
                            resolve(JSON.parse(xhr_ID.response));
                        } else {
                            reject(new Error("Ajax request is error"));
                        }
                    }
                };
            }).then((res) => {
                // console.log(res);
                // console.log(res.data);
                this.stdData = res.data.students;
                // console.log("stdData变了");
                this.total = res.data.total;
            });
        },
    },
    mounted () {
        this.GetData();
    },
    watch: {
        MyKey () {
            this.GetDataByKey()
        }
    }
}

</script>

<style scoped>
.root {
    background-color: rgba(122, 168, 255, 0.301);
    border-radius: 10px;
    width: 98%;
    height: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>