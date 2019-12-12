<template>
    <div style="display: flow;width: 100%;margin-top: 20px">

        <el-input v-model="inputMsg"
                  placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  class="inputClass"
        >
        </el-input>
        <el-button type="primary"  class="inputButton">搜索</el-button>

    </div>
</template>

<script>
    export default {
        name: "search",

        props:{
            pageIndex: {
                type: String
            }
        },

        data(){
            return{
                inputMsg:'',
            }
        },

        methods:{
            search(){
                if(this.pageIndex==='1'){

                }else if(this.pageIndex==='2'){

                }
            },
        }
    }
</script>

<style scoped>

    .inputClass{
        float: left;
        width: 60%;
        margin-left: 20%;
    }

    .inputButton{
        margin-left: 20px;
    }
</style>