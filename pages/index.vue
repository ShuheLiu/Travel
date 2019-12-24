<template>
  <div>
    <tra-menu :pageIndex="pageIndex"></tra-menu>
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
  import API from '../api'
  export default {
    components: {StrategyList, ScenicList, TraFooter, TraMenu},

    data(){
      return{
        pageIndex:'1',
        tripList:[],
        scenicList: [{
          sid:'11111',
          sname:'景区a',
          province:'北京',
          city:'北京',
          introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
          worktime:'10:00-18:00',
        },{
          sid:'11112',
          sname:'景区a',
          province:'北京',
          city:'重庆',
          introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
          worktime:'10:00-18:00',
        },{
          sid:'11113',
          sname:'景区a',
          province:'北京',
          city:'某某',
          introduction:'北京故宫博物院建立于1925年，是在明朝、清朝两代皇宫及其收藏的基础上建立起来的中国综合性博物馆，也是中国最大的古代文化艺术博物馆，其文物收藏主要来源于清代宫中旧藏。',
          worktime:'10:00-18:00',
        }],

        strategyList: [{
          strid:'0010',
          title:'攻略a',
          content:'xxxxxx,xxxxxxx,xxxxxxx',
          time:'2018-11-1',
          likenum:20,
          keyword:'北京 故宫 圆明园',
        },{
          strid:'0011',
          title:'攻略b',
          content:'xxxxxx,xxxxxxx,xxxxxxx',
          time:'2016-10-1',
          likenum:20,
          keyword:'北京 故宫 圆明园',
        },{
          strid:'0012',
          title:'攻略c',
          content:'xxxxxx,xxxxxxx,xxxxxxx',
          time:'2019-10-1',
          likenum:20,
          keyword:'北京 故宫 圆明园',
        },],
      }
    },

    mounted:function () {
      this.interesting();
      //this.getScenic();
      //this.getStrategy();
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
        let data={};

        API.getSceList(data).then(res => {
          if(res.code){
            alert(res.message);
            return;
          }
          for(var i=0;i<3;i++){
            this.scenicList.push(res.scenicList[i]);
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
        let data={};

        API.getStraList(data).then(res => {
          if(res.code){
            alert(res.message);
            return;
          }
          for(var i=0;i<3;i++){
            this.strategyList.push(res.strategyList[i]);
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
            this.tripList.push(res.tripList[i]);
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
    background-image: url("../assets/image/3.jpg");
  }

  .el-carousel__item:nth-child(4n+3) {
    background-image: url("../assets/image/4.jpg");
  }

  .scenic{
    width: 80%;
    margin-left: 10%;
    display: flow;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

