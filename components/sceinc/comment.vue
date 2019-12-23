<template>
    <div>
    <el-card>
        <p style="margin-left: 10px;margin-bottom: 15px;font-size: 35px;font-weight: 600;float: left">景区评论</p>
        <el-button style="float: right;margin-top: 10px;margin-right: 10px" icon="el-icon-edit" @click="writeComment=true">写评论</el-button>
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

        <el-dialog title="收货地址" :visible.sync="writeComment">
            <el-form :model="form">
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "comment",

        data(){
            return{
                writeComment:false,
                commentList:[{
                    vname:'用户1',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },{
                    vname:'用户2',
                    time:'1234-11-11',
                    content:'这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜这是一个这是一个哈哈哈哈哈哈的哇呜呜呜呜',
                },{
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

        },
    }
</script>

<style scoped>

    .time {
        font-size: 13px;
        color: #999;
        float: right;
    }

    /*.time p{
        float: right;
        margin-left: 20px;
    }*/
</style>