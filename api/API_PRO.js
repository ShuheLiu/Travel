export default {

    baseURL: 'http://192.168.43.19:8080/',

    method: 'post',

    //登录模块接口
    setAccount:{url:'register/visitor'},
    isSuccess:{url:'login/visitor'},
    settingCode:{},

    //旅游攻略模块接口
    getStraList:{url:'index/strategy/index/time'},
    getStraDetail:{url:'index/strategy/detail'},
    getcollStraList:{url:'index/strategy/index/collect'},
    getMyCollStraList:{url:'/visitor/mycollection'},
    collStra:{},
    uncollStra:{},
    newStrategy:{},

    //景区模块接口
    getSceList:{url:'index/scenic/index'},
    getSceDetail:{url:'index/scenic/detail'},
    getSceComment:{url:'index/scenic/comment'},
    writeSceComment:{},
    getTicket:{url:'index/ticket/searchbykeyword'},
    buySceTicket:{},

    //旅游线路模块接口
    getTripList:{url:'index/trip/index'},
    getTripDetail:{url:'index/trip/detail'},
    attendThisTrip:{url:'/visitor/attendtripstate'},
    getTraCommentList:{url:'index/trip/travelagencycomments'},

    //我的
    getMyMessage:{url:'/visitor/myinfo'},
    changeMyMessage:{url:'/visitor/modifyinfo'},
    changePwd:{},

}
