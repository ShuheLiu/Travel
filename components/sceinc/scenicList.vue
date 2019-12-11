<template>
    <div>
        <el-row>
            <el-col style="margin-bottom: 10px"  v-if="strategyList.length > 0" v-for="(item) in strategyList" :key="item.id">
                <el-card :body-style="{ padding: '0px'}">
                    <div style="padding: 14px;">
                                <span style="font-size: 20px;margin-left: 5px">
                                    {{item.title}}</span>
                        <p style="margin-left: 7px;margin-top: 5px;word-break:break-word;">{{item.content| ellipsis}}</p>
                        <div style="display: flow;margin-bottom: 10px;padding: 10px 10px 10px 5px">
                            <div class="time">
                                撰写时间：{{item.time}}
                                <p>关键词：{{item.keyword}}</p>
                            </div>
                            <el-button type="text" class="button">详情</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "scenicList"
    }
</script>

<style scoped>

</style>