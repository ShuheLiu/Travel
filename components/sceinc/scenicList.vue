<template>
    <div>
        <el-row :gutter="15">
            <el-col :span="6" style="margin-bottom: 15px;" v-if="scenicList.length > 0" v-for="(item) in scenicList" :key="item.id">
                <img :src="require('../../assets/image/scenicBackground'+getN()+'.png')" style="width: auto;position: absolute;margin-top: 160px;pointer-events: none;"/>
                <el-card :style="GetRandom(item)" :body-style="{ padding: '0px'}">
                    <div>
                        <div style="font-size: 20px;margin-left: 5px;margin-top: 5px;align-items:center; display: -webkit-flex">
                            <span><img src="../../assets/image/left.png" style="width:12px;margin-right: 2px;margin-top: 5px"></span>{{item.sname}}<span><img src="../../assets/image/right.png" style="width:12px;margin-left: 2px;margin-top: 5px"></span></div>
                        <p style="margin-top: 15px;margin-left: 5px"><span style="margin-right: 3px"><i class="el-icon-location-outline"></i></span>所在省份：<span>{{item.province}}</span></p>
                        <p style="margin-top: 5px;margin-left: 5px"><span style="margin-right: 3px"><i class="el-icon-place"></i></span>所在城市：<span>{{item.city}}</span></p>
                        <p style="margin-top: 5px;margin-left: 5px;"><span style="margin-right: 3px"><i class="el-icon-date"></i></span>开放时间：<span>{{item.opentime}} - {{item.closetime}}</span></p>
                        <p style="margin-left: 5px;margin-top: 15px;word-break:break-word;font-size: 13px">{{item.introduction| ellipsis}}</p>
                        <el-button type="text" class="button" @click="toScenicDetail(item)">详情</el-button>
                    </div>
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "scenicList",

        props:{
            scenicList: {
                type: Array,
            }
        },

        filters: {
            ellipsis (value) {
                if (!value) return '';
                if (value.length > 50) {
                    return value.slice(0,50) + '...';
                }
                return value;
            }
        },
        data(){
            return{
                identity:'1',
            }
        },

        methods:{
            GetRandom (item) {
                    var colorAll = ['#ffffff', '#fdf4ff', '#f5fff8', '#eeffff', '#fff8ee'];
                    var n = Math.floor(Math.random() * 5);
                    var color = colorAll[n];

                    return {
                        padding: 14 + 'px',
                        background: color,
                        minHeight:270+'px',
                    };
            },

            getN(){
                var n = Math.floor(Math.random() * 4)+1;
                return n;
            },

            toScenicDetail(item){
                this.$router.push({path: `/scenic/`+item.sid+`/detail`})
            },
        },

        mounted() {
        }
    }
</script>

<style scoped>

    .button {
        font-size: 15px;
        float: right;
        margin-top: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
</style>