'use strict';

/**
 * Created by wealab04 on 2014-05-23.
 */

var connect = require('./controllers/dbconnect_v1.01.js');
var query = require('./controllers/query.js');
var c = connect.connection();

var express = require('express');
var router1 = express.Router()
    , board = require('./controllers/boardDAO');
var fs = require('fs');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var mkdirp = require('mkdirp');


/* GET home page. */

router1.get('/', function(req, res) {
    res.render('jade/010_main/010_00_main', { title: 'machine' });
});

router1.get('/main1', function(req, res) {
    res.render('jade/010_main/010_00_main', { title: 'machine' });
});

router1.get('/login', function(req, res) {
    res.render('jade/010_main/010_01_login', { title: 'machine' });
});


router1.get('/mainimg_edit', function(req, res) {
    res.render('jade/010_main/010_02_mainimg_edit', { title: 'machine' });
});


router1.get('/sitemap', function(req, res) {
    res.render('jade/010_main/010_03_siteMap', { title: 'machine' });
});

router1.get('/introduction', function(req, res) {
    res.render('jade/020_company/020_00_introduction', { title: 'machine' });
});

router1.get('/outline', function(req, res) {
    res.render('jade/020_company/020_01_outline', { title: 'machine' });
});

router1.get('/New_productList', function(req, res) {
    res.render('jade/030_New_product/030_00_List', { title: 'machine' });
});

router1.get('/New_productDetail', function(req, res) {
    res.render('jade/030_New_product/030_01_detail', { title: 'machine' });
});


router1.get('/New_productInsert', function(req, res) {
    res.render('jade/030_New_product/030_03_insert', { title: 'machine' });
});

router1.get('/New_productModification', function(req, res) {
    res.render('jade/030_New_product/030_02_modification', { title: 'machine' });
});

router1.get('/n_category_edit', function(req, res) {
    res.render('jade/030_New_product/030_04_catagory', { title: 'machine' });
});



router1.get('/Old_productList', function(req, res) {
    res.render('jade/040_Old_product/040_00_List', { title: 'machine' });
});

router1.get('/Old_productDetail', function(req, res) {
    res.render('jade/040_Old_product/040_01_detail', { title: 'machine' });
});

router1.get('/Old_productInsert', function(req, res) {
    res.render('jade/040_Old_product/040_03_insert', { title: 'machine' });
});

router1.get('/Old_productModification', function(req, res) {
    res.render('jade/040_Old_product/040_02_modification', { title: 'machine' });
});

router1.get('/Old_productRecommend', function(req, res) {
    res.render('jade/040_Old_product/040_04_recommend', { title: 'machine' });
});


router1.get('/customerWrite', function(req, res) {
    res.render('jade/050_QnA/050_00_write', { title: 'machine' });
});

router1.get('/customerList', function(req, res) {
    res.render('jade/050_QnA/050_01_List', { title: 'machine' });
});

router1.get('/customerDetail', function(req, res) {
    res.render('jade/050_QnA/050_02_detail', { title: 'machine' });
});



router1.get('/oldOrderwrite', function(req, res) {
    res.render('jade/060_Old_order/060_00_write', { title: 'machine' });
});

router1.get('/oldOrderList', function(req, res) {
    res.render('jade/060_Old_order/060_01_List', { title: 'machine' });
});

router1.get('/oldOrderDetail', function(req, res) {
    res.render('jade/060_Old_order/060_02_Detail', { title: 'machine' });
});



router1.get('/noticeList', function(req, res) {
    res.render('jade/070_notice/070_00_List', { title: 'machine' });
});

router1.get('/noticeDetail', function(req, res) {
    res.render('jade/070_notice/070_01_detail', { title: 'machine' });
});

router1.get('/noticeWrite', function(req, res) {
    res.render('jade/070_notice/070_03_write', { title: 'machine' });
});

router1.get('/noticeModification', function(req, res) {
    res.render('jade/070_notice/070_02_modification', { title: 'machine' });
});










router1.post('/getlist', board.list);
router1.post('/getlist1', board.list1);
router1.post('/getlist2', board.list2);
router1.post('/getlist3', board.list3);     // 신제품소개 물건창
router1.post('/getlist4', board.list4);     // 신제품소개 서브 메뉴

router1.post('/getsub', board.submenu1);    // 신제품소개 네비게이션바 갯수

router1.post('/getboard', board.get);
router1.post('/getboard2', board.get2);
router1.post('/getboard3', board.get3);
router1.post('/kang', board.get2);

router1.post('/customer_write11', board.insert);
router1.post('/old_write12', board.insert2);

router1.post('/notice_write', board.insert3);

router1.post('/getdata', board.chk);

router1.post('/insertboard', board.insert);

router1.post('/insertboard2', board.insert2);
router1.post('/insertboard2', board.insert3);

router1.post('/updateboard', multipartMiddleware , board.update);
router1.post('/updateboard2', multipartMiddleware , board.update2);
router1.post('/updateboard3', multipartMiddleware , board.update3);



/*채영범 코딩*/
router1.post('/getlist_cate', board.getlist_cate);


/**/

router1.post('/deleteboard', board.delete);
router1.post('/deleteboard2', board.delete2);
router1.post('/deleteboard3', board.delete3);

router1.post('/download', board.download);
router1.post('/download2', board.download2);

router1.post('/upload', multipartMiddleware, board.upload);
router1.post('/OldUpload', multipartMiddleware, board.OldUpload);
router1.post('/NoticeUpload', multipartMiddleware, board.NoticeUpload);



router1.post('/newtitle', board.newtitle);                                 //신제품 경로 타이틀                     (10-14) 강문식
router1.post('/newmenu', board.newmenu);                                 //신제품 리스트                            (10-10) 강문식
router1.post('/newcontent', board.newcontent);                          //신제품 컨텐츠                            (10-10) 강문식
router1.post('/newdetail', board.newdetail);                             //신제품 컨텐츠                           (10-10) 강문식
router1.post('/newcontentimg', board.newcontentimg);                    //신제품 컨텐츠                            (10-10) 강문식
router1.post('/newdetailimg', board.newdetailimg);                       //신제품 디테일 이미지                    (10-14) 강문식

router1.post('/newtitle1', board.newtitle1);                            //중고제품 경로 타이틀                     (10-14) 강문식
router1.post('/usemenu', board.usemenu);                                 //중고제품 리스트                          (10-10) 강문식
router1.post('/usecontentimg', board.usecontentimg);                    //중고제품 컨텐츠                           (10-10) 강문식
router1.post('/usedetail', board.usedetail);                             //중고제품 디테일                           (10-10) 강문식
router1.post('/usedetailimg', board.usedetailimg);                       //중고제품 디테일 이미지                    (10-10) 강문식
/*router1.post('/usemenuimg', board.usemenuimg);                              //중고제품 메뉴 이미지                       (10-10) 강문식*/
router1.post('/viewtittle3', board.viewtittle3);                         //중고제품 디테일 뷰 맨위에 타이틀           (10-10) 강문식
router1.post('/viewtittle4', board.viewtittle4);                         //중고제품 디테일 뷰 맨위에 타이틀           (10-10) 강문식
router1.post('/recommend', board.recommend);                            //중고제품 추천매뉴 각각 1개씩                 (10-14) 강문식
router1.post('/Recommendation',board.Recommendation);                  //중고제품 추천물품



router1.post('/mainnotice', board.mainnotice);                                             //메인 화면 공지사항 보기   (10-13) 강문식
router1.post('/mainusecontentimg', board.mainusecontentimg);                              //메인화면 중고제품 컨텐츠 + 이미지 (10-14) 강문식 끝




router1.post('/product_Lmenu',board.product_Lmenu);                                                                         // 제품 및 기술 등록(select 대메뉴 보여주는곳)
router1.post('/product_Smenu',board.product_Smenu);                                                                         // 제품 및 기술 등록(select소메뉴 보여주는곳)
router1.post('/product_catagory_Lmenu_c',board.product_catagory_Lmenu_c);               //카타고리 대메뉴 생성
router1.post('/product_catagory_Smenu_c',board.product_catagory_Smenu_c);                                       // 제품 및 기술 카타고리 편집 ( 소메뉴 생성 )
router1.post('/product_catagory_Lmenu_A',board.product_catagory_Lmenu_A);                                       // 제품 및 기술 카타고리 편집 ( 대메뉴 이름 수정 )
router1.post('/product_catagory_Smenu_A',board.product_catagory_Smenu_A);                                       // 제품 및 기술 카타고리 편집 ( 소메뉴 이름 수정 )
router1.post('/product_catagory_Lmenu_D',board.product_catagory_Lmenu_D);                                       // 제품 및 기술 카타고리 편집 ( 대메뉴 삭제 )
router1.post('/product_catagory_Smenu_D',board.product_catagory_Smenu_D);                                       // 제품 및 기술 카타고리 편집 ( 소메뉴 삭제 )
router1.post('/product_insert', multipartMiddleware ,board.product_insert);                       // 제품 및 기술 등록
router1.post('/product_insert2', multipartMiddleware ,board.product_insert2);                       // 제품 및 기술 등록
router1.post('/product_update1', multipartMiddleware ,board.product_update1);                       // 제품 및 기술 등록
router1.post('/product_update2', multipartMiddleware ,board.product_update2);                       // 제품 및 기술 등록

router1.post('/get_product_Amend',board.get_product_Amend);                                       // 신제품 수정 가져오기
router1.post('/get_product_Amend2',board.get_product_Amend2);                                       // 신제품 수정 가져오기
router1.post('/product_oldfile',board.product_oldfile);                                            // 신제품 수정 가져오기
router1.post('/product_oldfile2',board.product_oldfile2);                                            // 신제품 수정 가져오기
router1.post('/get_n_model',board.get_n_model);                                                    // 신제품 수정 가져오기
router1.post('/get_n_model2',board.get_n_model2);                                                    // 신제품 수정 가져오기
router1.post('/d_product_del',board.d_product_del);                                                    // 신제품 수정 가져오기
router1.post('/n_product_del',board.n_product_del);                                                    // 신제품 수정 가져오기

router1.post('/product_view',board.product_view);                                                    // 신제품 수정 가져오기
router1.post('/recommend_menu',board.recommend_menu);                                                    // 신제품 수정 가져오기
router1.post('/recommend_insert',multipartMiddleware,board.recommend_insert);                                                    // 신제품 수정 가져오기
router1.post('/main_img_list',board.main_img_list);                                                    // 신제품 수정 가져오기
router1.post('/main_img_insert',multipartMiddleware,board.main_img_insert);                                                    // 신제품 수정 가져오기


router1.get('/test', function(req, res) {
    res.render('test', { title: 'machine' });
});
module.exports = router1;
