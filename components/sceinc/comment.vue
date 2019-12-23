<template>
    <div>
    <el-card>
        <p style="margin-left: 10px;margin-bottom: 15px;font-size: 35px;font-weight: 600;float: left">景区评论</p>
        <el-button style="float: right;margin-top: 10px;margin-right: 10px;background-color: #accfff;color: black" icon="el-icon-edit" @click="writeComment=true">写评论</el-button>
        <el-row style="pointer-events: none;">
            <el-col style="margin-bottom: 10px"  v-if="commentList.length > 0" v-for="(item) in commentList" :key="item.id">
                <el-card :body-style="{ padding: '10px'}">
                        <div style="display: flow;margin-bottom: 10px;padding: 10px 10px 10px 5px">
                            <i class="el-icon-s-custom" style="margin-left: 10px;margin-right: 5px;color: #995c53"></i>{{item.vname}}
                            <p style="margin-left: 7px;margin-top: 5px;">{{item.content}}</p>
                            <div class="time">
                                撰写时间：{{item.time}}
                            </div>
                        </div>
                </el-card>
            </el-col>
        </el-row>
    </el-card>

        <el-dialog title="评论" :visible.sync="writeComment">
            <el-form :model="form">
                <el-form-item label="撰写评论（450字以内）">
                    <el-input type="textarea" v-model="form.content"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="writeComment = false">取 消</el-button>
                <el-button type="primary" @click="submitComment">提交</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import API from '../../api'
    import Cookies from 'js-cookie'
    export default {
        name: "comment",

        data(){
            return{
                identity:Cookies.get('identity'),
                writeComment:false,
                form:{
                    content:'',
                },
                commentList:[{
                    sid:'',
                    vname:'用户1',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },{
                    sid:'',
                    vname:'用户2',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },{
                    sid:'',
                    vname:'用户3',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },{
                    vname:'用户4',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },{
                    vname:'用户5',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },{
                    vname:'用户6',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },{
                    vname:'用户7',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },{
                    vname:'用户8',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },],
            }
        },

        methods:{
            submitComment(){
                let data ={
                    identity:this.identity,
                    sid:this.commentList[0].sid,
                    content:this.form.content,
                }
                API.writeSceComment(data).then(res => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert("提交成功")
                    this.writeComment=false;
                }).catch(msg => {
                    if(res.code){
                        alert(res.message);
                        return;
                    }
                    alert(msg)
                })
            }
        },
    }
</script>

<style scoped>

    .time {
        font-size: 13px;
        color: #999;
        float: right;
    }
</style>