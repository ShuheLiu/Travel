<template>
    <el-card class="box-card">
        <div slot="header" style="font-weight: bold;font-size: 20px">
            <span>攻略推荐</span>
        </div>
        <div v-if="strategyList.length > 0 && index<3" v-for="(item,index) in strategyList" :key="item.strid" class="text item">
            <div style="padding: 0 5px 10px 5px;">
                <p style="font-size: 18px;color: darkblue">
                    {{item.title}}</p>
                <p style="margin-top: 8px;font-size: 15px">{{item.content| ellipsis}}</p>
                <div style="display: flow;padding: 10px 0 0 0px;line-height: 15px">
                    <p style="float:left;font-size: 12px;width: 70%;color: #7F828B">关键词：{{item.keyword}}</p>
                    <el-button type="text" class="button" @click="toDetail(item)">详情</el-button>
                </div>
            </div>
            <el-divider style="color: #abcdef"></el-divider>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "recommended",

        filters: {
            ellipsis (value) {
                if (!value) return ''
                if (value.length > 12) {
                    return value.slice(0,12) + '...'
                }
                return value
            }
        },

        data(){
            return{
                strategyList: [],
            }
        },

        methods:{
            toDetail(item){
                this.$router.push({path: `/strategy/`+item.strid+`/detail`})
            },
        }
    }
</script>

<style scoped>

    .button {
        width: 20%;
        padding: 0;
        font-size: 12px;
        float: right;
        margin-right: 5px;
    }
</style>