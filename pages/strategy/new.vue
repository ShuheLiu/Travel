<template>
    <div class="bodyClass">
        <tra-menu :page-index="pageIndex"></tra-menu>
        <el-button type="text" style="margin-left: 13%;margin-top: 10px;font-size: 15px" @click="clickBack">{{this.pos}}</el-button>
        <el-card style="width: 70%;margin-left: 15%;margin-top: 6px;margin-bottom: 20px;padding: 10px" class="cardClass">
            <h2 style="margin-bottom: 10px">新增攻略</h2>
            <el-form :label-position="labelPosition" label-width="80px" :model="newStra" style="margin-bottom: 10px">
                <el-form-item label="攻略名称">
                    <el-input v-model="newStra.title"></el-input>
                </el-form-item>
                <el-form-item label="景区关键字（请以空格分隔）">
                    <el-input v-model="newStra.keyword"></el-input>
                </el-form-item>
                <el-form-item label="攻略内容（950字以内）">
                    <el-input
                            type="textarea"
                            :rows="10"
                            placeholder="请输入内容"
                            v-model="newStra.content">
                    </el-input>
                </el-form-item>

                <el-form-item style="float: right;margin-top: 40px">
                    <el-button @click="clear">清空</el-button>
                    <el-button type="primary" @click="submitStra">发布</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import API from '../../api'
    import Cookies from 'js-cookie'
    export default {
        name: "new",
        components: {TraFooter, TraMenu},
        data(){
            return{
                identity:Cookies.get('identity'),
                pos:"<< 返回",
                pageIndex:'3',
                newStra:{
                    title:'',
                    keyword:'',
                    content:'',
                },
                labelPosition: 'top',
            }
        },

        methods:{
            clickBack(){
                this.$router.push({path: `/strategy`})
            },

            submitStra(){
                let data={
                    identity:this.identity,
                    title:this.newStra.title,
                    keyword:this.newStra.keyword,
                    content:this.newStra.content,
                }
                API.newStrategy(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(res);
                    this.$router.push({path: `/strategy`})
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            clear(){
                this.newStra.title='';
                this.newStra.keyword='';
                this.newStra.content='';
            }
        }
    }
</script>

<style scoped>

    .bodyClass{
        display: flow;
        width: 100%;
        background: rgba(244, 247, 252, 0.82);
    }

    .cardClass{
        background-image: url("../../assets/image/detailback43.png");
        background-size: 400px;
        background-repeat: no-repeat;
        background-position-x: 500px;
        background-position-y: 10px;
    }
</style>