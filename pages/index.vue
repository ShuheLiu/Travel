<template>
  <div>
    <tra-menu :pageIndex="pageIndex" :type="type" :nickname="nickname"></tra-menu>
    <div class="bodyClass">
      <el-carousel class="caro" height="500px">
        <el-carousel-item v-for="item in 4" :key="item">
        </el-carousel-item>
      </el-carousel>
      
      <el-card class="scenic">
        <img src="../assets/image/homeScenic.png" style="float: right;height: 300px">
        <scenic-list :scenicList="scenicList" style="width: 103%;margin-top: 15px"></scenic-list>
      </el-card>

      <el-card style="width: 35%;margin-left: 10%;float: left">
        <img src="../assets/image/homeStrategy.png" style="width: 100%">
        <strategy-list :strategyList="strategyList"></strategy-list>
      </el-card>

      <el-card style="float:right;width: 44%;margin-right: 10%">
          <img src="../assets/image/homeTrip.png" style="float: left;height: 300px">
          <trip-list :tripList="tripList" style="width: 70%;float: right;margin-bottom: 10px"></trip-list>
      </el-card>

      <el-card style="float:right;width: 44%;margin-right: 10%;margin-top: 20px">

      </el-card>
    </div>
    <tra-footer style="position: absolute;"></tra-footer>
  </div>
</template>

<script>
  import TraMenu from "../components/TraMenu";
  import TraFooter from "../components/TraFooter";
  import ScenicList from "../components/sceinc/scenicList";
  import StrategyList from "../components/strategy/strategyList";
  import API from '../api';
  import TripList from "../components/trip/tripList";
  import Cookies from 'js-cookie';
  export default {
    components: {TripList, StrategyList, ScenicList, TraFooter, TraMenu},

    data(){
      return{
        pageIndex:'1',
        type:Cookies.get('type'),
        nickname:Cookies.get('nickname'),
        tripList:[],
        scenicList: [],
        strategyList: [],
      }
    },

    mounted:function () {
      this.interesting();
      this.getScenic();
      this.getStrategy();
      //this.getTripList();
    },

    methods:{
      interesting(){
        onload = function() {
          var click_cnt = 0;
          var $html = document.getElementsByTagName("html")[0];
          var $body = document.getElementsByTagName("body")[0];
          $html.onclick = function(e) {
            var $elem = document.createElement("b");
            $elem.style.color = "#b9aafc";
            $elem.style.zIndex = 9999;
            $elem.style.position = "absolute";
            $elem.style.select = "none";
            var x = e.pageX;
            var y = e.pageY;
            $elem.style.left = (x - 10) + "px";
            $elem.style.top = (y - 20) + "px";
            clearInterval(anim);
            switch (++click_cnt) {
              case 3:
                $elem.innerText = "叔和";
                break;
              case 5:
                $elem.innerText = "长庚";
                break;
              case 8:
                $elem.innerText = "佛祖";
                break;
              case 10:
                $elem.innerText = "涛涛";
                break;
              case 15:
                $elem.innerText = "老师多给点分呗";
                break;
              case 20:
                $elem.innerText = "你已经点了20次了，要继续点点看吗？";
                break;
              case 25:
                $elem.innerText = "Hello World";
                break;
              case 42:
                $elem.innerText = "恭喜你发现了网站的奥秘";
                break;
              case 50:
                $elem.innerText = "emmmm真的这么无聊的嘛";
                break;
              case 80:
                $elem.innerText = "既然你诚心诚意点了这么多次就大发慈悲的告诉你后面真的没有别的彩蛋了";
                break;
              default:
                $elem.innerText = "景点信息系统";
                break;
            }
            $elem.style.fontSize = Math.random() * 10 + 15 + "px";
            var increase = 0;
            var anim;
            setTimeout(function() {
              anim = setInterval(function() {
                if (++increase == 150) {
                  clearInterval(anim);
                  $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
              }, 8);
            }, 70);
            $body.appendChild($elem);
          };
        };
      },

      getScenic(){
        let data={

        };

        API.getSceList(data).then(res => {
          if(res.code){
            alert(res.message);
            return;
          }
          for(var i=0;i<3 && i<res.length;i++){
            this.scenicList.push(res[i]);
          }
          //this.scenicList=res.scenicList;
        }).catch(msg => {
          if(res.code){
            alert(res.message);
            return;
          }
          alert(msg)
        })

      },

      getStrategy(){
        let data={

        };

        API.getStraList(data).then(res => {
          if(res.code){
            alert(res.message);
            return;
          }
          for(var i=0;i<3 && i<res.length;i++){
            this.strategyList.push(res[i]);
          }
          //this.scenicList=res.scenicList;
        }).catch(msg => {
          if(res.code){
            alert(res.message);
            return;
          }
          alert(msg)
        })

      },

      getTrip(){
        let data={};

        API.getTripList(data).then(res => {
          if(res.code){
            alert(res.message);
            return;
          }
          for(var i=0;i<3;i++){
            this.tripList.push(res[i]);
          }
        }).catch(msg => {
          if(res.code){
            alert(res.message);
            return;
          }
          alert(msg)
        })

      },
    },

  }
</script>

<style scoped>

  .bodyClass{
    width: 100%;
    min-height: 650px;
    background: rgba(244, 247, 252, 0.82);
    padding-bottom: 20px;
    overflow: hidden;
  }

  .caro{
    width: 100%;
    margin-top: 5px;
  }

  .el-carousel__item:nth-child(4n) {
    background-image: url("../assets/image/1.jpg");
  }

  .el-carousel__item:nth-child(4n+1) {
    background-image: url("../assets/image/2.jpg");
  }

  .el-carousel__item:nth-child(4n+2) {
    background-image: url("../assets/image/3.png");
  }

  .el-carousel__item:nth-child(4n+3) {
    background-image: url("../assets/image/4.png");
  }

  .scenic{
    width: 80%;
    margin-left: 10%;
    display: flow;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

