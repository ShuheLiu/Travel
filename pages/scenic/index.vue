<template>
    <div class="bodyClass">
        <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
        <div>
            <div style="display: flow;width: 100%;margin-top: 20px">
                <el-input v-model="inputMsg"
                          placeholder="请输入内容"
                          prefix-icon="el-icon-search"
                          class="inputClass"
                >
                </el-input>
                <el-button type="primary"  class="inputButton" @click="searchScenic">搜索</el-button>
            </div>

            <scenic-list :scenicList="scenicList" style="width: 80%;margin-left: 10%;padding-bottom: 20px;min-height: 505px;margin-top: 20px"></scenic-list>
        </div>

        <tra-footer></tra-footer>
    </div>
</template>

<script>
    import TraMenu from "../../components/TraMenu";
    import TraFooter from "../../components/TraFooter";
    import ScenicList from "../../components/sceinc/scenicList";
    import Search from "../../components/search";
    import API from '../../api';
    import Cookies from 'js-cookie';
    export default {
        name: "index",
        components: {Search, ScenicList, TraFooter, TraMenu},

        data(){
            return{
                pageIndex:'2',
                type:Cookies.get('type'),
                nickname:Cookies.get('nickname'),
                scenicList:[],
                scenicList2: [],
                inputMsg:'',
            }
        },

        methods:{
            getScenicList(){
                let data ={
                }
                API.getSceList(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.scenicList=res;
                    console.log(this.scenicList);
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            },

            searchScenic(){
                let data ={
                    keyword:this.inputMsg,
                }
                API.searchSce(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    this.scenicList=res;
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            }
        },

        mounted() {
            this.getScenicList();
        }
    }
</script>

<style scoped>

    .bodyClass{
        display: flow;
        width: 100%;
        /*background: -webkit-linear-gradient(bottom,rgb(250,255,235),#fffef3,white) no-repeat;*/
        background: rgba(244, 247, 252, 0.82);
    }

    .inputClass{
        float: left;
        width: 60%;
        margin-left: 20%;
    }

    .inputButton{
        margin-left: 20px;
    }
</style>