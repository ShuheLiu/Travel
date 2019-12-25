export default {

    //baseURL: 'http://192.168.43.19:8080/',

    baseURL: 'http://127.0.0.1:8080/',
    method: 'post',

    //登录模块接口
    setAccount:{url:'register/visitor'},
    isSuccess:{url:'login/visitor'},
    settingCode:{},

    //旅游攻略模块接口
    getStraList:{url:'index/strategy/index/time'},
    getStraDetail:{url:'index/strategy/detail'},
    getcollStraList:{url:'index/strategy/index/collect'},
    getMyCollStraList:{url:'visitor/mycollection'},//未测v
    collState:{url:'visitor/collectstrategystate'},//未测v
    collStra:{url:'visitor/collectstrategy'},//未测v
    uncollStra:{url:'visitor/collectstrategy'},//未测v
    newStrategy:{url:'visitor/newstrategy'},//未测v
    like:{url:'visitor/likestrategy'},//undo v

    //景区模块接口
    getSceList:{url:'index/scenic/index'},
    getSceDetail:{url:'index/scenic/detail'},
    getSceComment:{url:'index/scenic/comment'},
    writeSceComment:{url:'visitor/commentscenic'},//未测v
    getTicket:{url:'index/ticket/searchbykeyword'},
    buySceTicket:{url:'visitor/buyticket'},//未测v
    writeSceState:{url:'visitor/commentscenicstate'},//未测v
    changeSceComment:{url:'visitor/modifysceniccomment'},//未测v

    //旅游线路模块接口
    getTripList:{url:'index/trip/index'},
    getTripDetail:{url:'index/trip/detail'},
    attendThisTrip:{url:'visitor/attendtrip'},//未测v
    getTraCommentList:{url:'index/trip/travelagencycomments'},
    attendState:{url:'visitor/attendtripstate'},//未测v

    //我的
    getMyMessage:{url:'visitor/myinfo'},//未测v
    changeMyMessage:{url:'visitor/modifyinfo'},//未测v
    changePwd:{},//undo v
    deleteself:{url:'visitor/deleteself'},//未测v
    getMyTicket:{url:'visitor/myticket'},//未测v
    getMyTr:{url:'visitor/mytrip'},//未测v
    commentTrip:{url:'visitor/commenttrip'},//未测v
    changeCommentTrip:{url:'visitor/modifytripcomment'},//未测v

}
