<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>攻略推荐</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            <el-col style="margin-bottom: 10px"  v-if="strategyList.length > 0" v-for="(item) in strategyList" :key="item.id">

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
            </el-col>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "recommended",

        data(){
            return{
                strategyList: [{
                    strid:'0001',
                    title:'攻略1',
                    content:'xxxxxx,xxxxxxx,xxxxxxx,xxxxxx,xxxxxxx,xxxxxxx,xxxxxx,xxxxxxx,xxxxxxx',
                    time:'2019-11-1',
                    likenum:20,
                    keyword:'北京 故宫 圆明园',
                }],
            }
        }
    }
</script>

<style scoped>

</style>