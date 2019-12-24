<template>
    <div>
        <el-row>
            <el-col style="margin-bottom: 10px"  v-if="tripList.length > 0" v-for="(item) in tripList" :key="item.id">
                <el-card :body-style="{ padding: '0px'}">
                    <div style="padding: 14px;">
                                <span style="font-size: 20px;margin-left: 5px">
                                    {{item.name}}</span>
                        <div style="display: flow;margin-bottom: 10px;padding: 10px 10px 10px 5px">
                            <div class="time">
                                行程内容：{{item.route}}
                            </div>
                            <el-button type="text" class="button" @click="toTripDetail(item)">详情</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "tripList",

        props:{
            tripList: {
                type: Array,
            }
        },

        methods:{
            toTripDetail(item){
                this.$router.push({path: `/trip/`+item.tripid+`/detail`})
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

</style>