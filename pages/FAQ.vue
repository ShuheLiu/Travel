<template>
    <div>
        <tra-menu :pageIndex="pageIndex"></tra-menu>
        <div class="bodyClass">
            <el-collapse style="width: 90%;margin-left: 5%;margin-top: 30px"
                         v-model="activeNames"
                         @change="handleChange">
                <el-collapse-item>
                    <template slot="title">
                        <p style="font-size: 20px;padding-left: 10px;color: #dd6161">关于购票</p>
                    </template>
                    <div>平台属于代售方，最终解释权归景区所有</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <p style="font-size: 20px;padding-left: 10px;color: #dd6161">攻略投稿原则</p>
                    </template>
                    <div>严禁抄袭！抄袭者视情况进行封号处理！</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <p style="font-size: 20px;padding-left: 10px;color: #dd6161">攻略投稿原则</p>
                    </template>
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <p style="font-size: 20px;padding-left: 10px;color: #dd6161">评论原则</p>
                    </template>
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <tra-footer style="position:absolute;"></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../components/TraMenu";
    import TraFooter from "../components/TraFooter";
    export default {
        name: "FAQ",
        components: {TraFooter, TraMenu},
        data() {
            return {
                activeNames: [],
                pageIndex:'5',
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped>

    .bodyClass{
        width: 100%;
        min-height: 555px;
    }
</style>