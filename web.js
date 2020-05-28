/**
 * http://usejsdoc.org/
 */
//필요한 모듈 선언
var express = require('express');
var http = require('http');
var app = express();

//express 서버 포트 설정(cafe24 호스팅 서버는 8001 포트 사용)
app.set('view engine', "ejs");
app.use( express.static( __dirname + '/' ));

//로그인 화면
app.get( "/", function (req, res ){
  res.render( "login", {} );
})

//배달 대행 ( 메인화면 )
app.get( "/deliveryMain", function (req, res ){
  res.render( "deliveryMng/deliveryMain", {} );
})

// 상점
app.get( "/storeMain", function (req, res ){
  res.render( "storeMng/storeMain", {} );
})

/************************************기사***************************************/
// 기사 관리
app.get( "/riderMng", function (req, res ){
  res.render( "riderMng/riderMng", {} );
})

// 기사 설정
app.get( "/riderSetting", function (req, res ){
  res.render( "riderMng/riderSetting", {} );
})
/************************************기사***************************************/

/************************************정산***************************************/
// 지점출금 내역
app.get( "/branchPayRpt", function (req, res ){
  res.render( "report/branchPayRpt", {} );
})

// 기사 출금 요청
// app.get( "/riderPayReq", function (req, res ){
//   res.render( "rpt/riderPayReq", {} );
// })

// 기사 출금 내역
app.get( "/riderPayRpt", function (req, res ){
  res.render( "report/riderPayRpt", {} );
})

// 배달 내역
app.get( "/deliveryRpt", function (req, res ){
  res.render( "report/deliveryRpt", {} );
})

// 상점 통계
app.get( "/storeMonRpt", function (req, res ){
  res.render( "report/storeMonRpt", {} );
})

// 월별 현황
app.get( "/riderMonRpt", function (req, res ){
  res.render( "report/riderMonRpt", {} );
})
/************************************정산***************************************/


// 지점 설정
app.get( "/branchSetting", function (req, res ){
  res.render( "setting/branchSetting", {} );
})

// 공지사항
app.get( "/notice", function (req, res ){
  res.render( "notice/notice", {} );
})

// 공지
app.listen( 3000, function(){
  console.log( "starting..." );
})
