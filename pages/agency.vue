<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>

        <el-tabs :tab-position="tabPosition" style="height: 600px; margin: 20px">
            <el-tab-pane label="信息管理" >用户管理</el-tab-pane>
            <el-tab-pane label="路线管理" >配置管理</el-tab-pane>
            <el-tab-pane label="数据中心" >
                <span style="font-size: 18px; padding: 60px">数据总览</span>
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>路线评论数</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
        <tra-footer style="position:absolute;"></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    import TraFooter from "../components/TraFooter";
    export default {
        name: "agency",
        components: {TraFooter, TraMenu},
        data() {
            return {
                tabPosition: 'left'
            };
        }
    }

</script>

<style scoped>
    .label{
        height: 200px;
        color: #1f6fb5;
    }
</style>