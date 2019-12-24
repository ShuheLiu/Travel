<template>
    <el-card class="box-card">
        <div slot="header" style="font-weight: bold;font-size: 20px">
            <span>景区推荐</span>
        </div>
        <div v-if="scenicList.length > 0 && index<3" v-for="(item,index) in scenicList" :key="item.sid" class="text item">
            <div style="padding: 0 5px 10px 5px;">
                <p style="font-size: 18px;color: darkblue">
                    {{item.sname}}</p>
                <p style="margin-top: 8px;font-size: 15px">{{item.introduction | ellipsis}}</p>
                <div style="display: flow;padding: 10px 0 0 0px;line-height: 15px">
                    <el-button type="text" class="button" @click="toDetail(item)">详情</el-button>
                </div>
            </div>
            <el-divider style="color: #abcdef"></el-divider>
        </div>
    </el-card>
</template>

<script>
    import API from '../api';
    export default {
        name: "sceRecom",
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
                scenicList: [],
            }
        },

        methods:{
            toDetail(item){
                this.$router.push({path: `/scenic/`+item.sid+`/detail`})
            },

            getScenicList(){
                let data ={
                }
                API.getSceList(data).then(res => {
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
            },
        },

        mounted() {
            this.getScenicList();
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