<template>
    <div>
        <el-row>
            <el-col style="margin-bottom: 10px"  v-if="strategyList.length > 0" v-for="(item) in strategyList" :key="item.id">
                <el-card :body-style="{ padding: '0px'}">
                    <div style="padding: 14px;">
                                <span style="font-size: 20px;margin-left: 5px">
                                    {{item.title}}</span>
                        <p style="margin-left: 7px;margin-top: 5px;">{{item.content| ellipsis}}</p>
                        <div style="display: flow;margin-bottom: 10px;padding: 10px 10px 10px 5px">
                            <div class="time">
                                撰写时间：{{item.time}}
                                <p>关键词：{{item.keyword}}</p>
                            </div>
                            <el-button type="text" class="button" @click="toDetail(item)">详情</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "strategyList",

        props:{
            strategyList: {
                type: Array,
            }
        },

        filters: {
            ellipsis (value) {
                if (!value) return ''
                if (value.length > 64) {
                    return value.slice(0,64) + '...'
                }
                return value
            }
        },

        data(){
            return{

            }
        },

        mounted() {
        },

        methods:{
            toDetail(item){
                this.$router.push({path: `/strategy/`+item.strid+`/detail`})
            },
        }
    }
</script>

<style scoped>

    .time {
        font-size: 13px;
        color: #999;
        float: left;
    }

    .time p{
        float: right;
        margin-left: 20px;
    }

    .button {
        padding: 0;
        font-size: 15px;
        float: right;
        margin-bottom: 5px;
        margin-right: 5px;
    }

    /*.clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }*/
</style>