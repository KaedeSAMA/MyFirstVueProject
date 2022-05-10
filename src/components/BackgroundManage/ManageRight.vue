<template>
    <div id="RightRoot">
        <el-input placeholder="按关键字搜索（敬请期待）" style="width:95%" v-model="$parent.MyKey">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-table
            :data="$parent.stdData"
            height="200px"
            max-height="70%"
            :default-sort="{prop: 'date', order: 'descending'}"
        >
            <el-table-column type="index" label="序号" width="50"></el-table-column>
            <el-table-column prop="stdId" label="学号" sortable width="120"></el-table-column>
            <el-table-column prop="stdName" label="姓名" sortable width="120"></el-table-column>
            <el-table-column prop="major" label="专业" sortable width="150"></el-table-column>
            <el-table-column prop="classNum" label="班级" sortable width="100"></el-table-column>
            <el-table-column prop="stdQQ" label="QQ" sortable width="100"></el-table-column>
            <el-table-column prop="stdPhone" label="电话" sortable width="120"></el-table-column>
            <el-table-column prop="firstWill.organization" label="第一志愿" sortable width="120"></el-table-column>
            <el-table-column prop="firstWill.branch" label="部门" sortable width="100"></el-table-column>
            <el-table-column prop="firstWill.reason" label="理由" sortable width="150"></el-table-column>
            <el-table-column prop="secondWill.organization" label="第二志愿" sortable width="120"></el-table-column>
            <el-table-column prop="secondWill.branch" label="部门" sortable width="100"></el-table-column>
            <el-table-column prop="secondWill.reason" label="理由" sortable width="150"></el-table-column>
            <el-table-column prop="isDispensing" label="服从调剂" sortable width="150"></el-table-column>
            <el-table-column label="操作" fixed="right" width="120">
                <template slot-scope="scope">
                    <el-button type="text" @click="editForm(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[9, 12, 16]"
            :page-size="9"
            layout="total, sizes, prev, pager, next, jumper"
            :total="dataTotal"
        ></el-pagination>
        <el-dialog
            title="修改信息"
            :visible.sync="dialogFormVisible"
            :modal-append-to-body="false"
            style="background-color:rgba(80, 72, 72, 0.712)"
        >
            <FormToEdit :editInnerData="editData" @editBtnClick="editForm()" />
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import FormToEdit from '../FormSubmit/FormToEdit.vue';
export default {
    name: 'ManageRight',
    components: {
        FormToEdit,
    },
    data () {
        return {
            keyWordsIpt: '',
            dialogFormVisible: false,
            formLabelWidth: '120px',
            editData: null,
        }
    },
    props: ['data-total'],
    methods: {
        handleSizeChange (val) {
            this.$parent.MyPages = val;
            // console.log(`每页 ${val} 条`);
            this.$emit("SendPost")
        },
        handleCurrentChange (val) {
            this.$parent.NowPage = val
            // console.log(`当前页: ${val}`);
            this.$emit("SendPost")

        },
        editForm (val) {
            this.dialogFormVisible = true
            this.editData = val;
            console.log(this.editData);
        },
        editFormMounted (val) {
            this.editData = val;
            console.log(this.editData);
        },
    },

}
</script>

<style>
#RightRoot {
    width: 80%;
    height: 90%;
    border-radius: 0px 30px 30px 0px;
    background-color: rgb(255, 255, 255);
    /* background-color: rgba(80, 72, 72, 0.712); */

    margin: 10px;
    margin-left: 0px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.479);
}
</style>