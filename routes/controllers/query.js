/**
 * Created by wealab04 on 2014-05-30.
 */
//쿼리를 나열하고 exports를 통해 배포하도록 한다.

exports.chkAccount = 'select * from account where id=? and pswd=?';

exports.boardlist = 'SELECT * FROM customer_board order by id desc';
exports.boardlist2 = 'SELECT * FROM old_customer_board order by id desc';

exports.boardlist1 = 'SELECT * FROM notice order by id desc';
/*
 exports.boardlist2 = 'select * from c_new_product_category_level1 where category2_code=00 order by category1_code asc';  //신제품 서브 대메뉴
 exports.boardlist4 = 'select * from c_new_product_category_level1 where category2_code!=00 order by category1_code asc';  // 신제품 서브 소메뉴*/

exports.list_menu = 'select *from c_new_product_category_level1 ORDER by category1_code,category2_code';              // 중고제품 리스트 순서

exports.boardlist3 = 'SELECT * FROM customer_board order by id desc'; //신제품 물건선택창

exports.boardlist4 = 'select count(DISTINCT c_new_product_category_level1.category2_code) count from c_new_product_category_level1 where c_new_product_category_level1.category1_code=? and c_new_product_category_level1.category2_code!=00';// 신제품 왼쪽 네비게이션바 갯수

exports.boardget3 = 'select * from notice where id=?';
exports.boardget = 'select * from customer_board where id=?';
exports.boardget2 = 'select * from old_customer_board where id=?';
/*exports.boardget2 = 'select * from notice where id=?';*/



// title, content, file, writer, href
exports.boardinsert = 'insert into customer_board(id, title, content, writer,company, contact, email, date, file) values(null,?,?,?,?,?,?,now(),?)';
exports.boardinsert2 = 'insert into old_customer_board(id, title, content, writer,company, contact, email, date, file) values(null,?,?,?,?,?,?,now(),?);';
// title, content, file, href, id

exports.boardinsert3 = 'insert into notice(id, title, content, date, file ) values(null,?,?,now(),?)';

exports.boardmodify = 'update customer_board set title=?, content=?, writer=?, company=?, contact=?, email=?, file=? where id=?';
exports.boardmodify2 = 'update old_customer_board set title=?, content=?, writer=?, company=?, contact=?, email=?, file=? where id=?';
exports.boardmodify3 = 'update notice set title=?, content=?, file=? where id=?';


exports.boardremove = 'delete from customer_board where id=?';
exports.boardremove2 = 'delete from old_customer_board where id=?';
exports.boardremove3 = 'delete from notice where id=?';

exports.getlist_cate = 'select *from test_category_level1 ORDER by category1_code,category2_code';















exports.newmenu = 'select * from n_category_lev2 where ISNULL(category_permission)'; // 신제품 메뉴 (10-10) 강문식
exports.newtitle = 'select * from n_category_lev2 where ISNULL(category_permission)'; // 신제품 경로 타이틀 (10-14) 강문식
exports.newtitle1 = 'select * from d_category_lev2 where ISNULL(category_permission)'; // 중고제품 경로 타이틀 (10-14) 강문식


exports.newcontent= "select * "+                // 신제품 컨텐츠 (10-10) 강문식 시작
"from c_product_list "+                          //
"where c_product_list.category1_code=? "+     //
"and c_product_list.category2_code=? "+       //
"and c_product_list.product_id like '1%' ";  // 신제품 컨텐츠 (10-10) 강문식 끝






exports.usemenu='select * from d_category_lev2 where ISNULL(category_permission)';   // 중고제품 메뉴 (10-10) 강문식





exports.newdetail = "select * "+                // 신제품 디테일 뷰 (10-10) 강문식 시작
"from n_product_model "+                        //
"where n_product_model.category1_code=? "+   //
"and n_product_model.category2_code=? "+     //
"and n_product_model.product_id=? " +
"and isnull(n_product_model.product_permission)";          // 신제품 디테일 뷰 (10-10) 강문식 끝






exports.usedetail = "select * "+                   // 중고제품 디테일 뷰 (10-10) 강문식 시작
"from d_product_model "+                        //
"where d_product_model.category1_code=? "+   //
"and d_product_model.category2_code=? "+     //
"and d_product_model.product_id=? " +
"and isnull(d_product_model.product_permission)";          // 중고제품 디테일 뷰 (10-10) 강문식 끝






exports.usedetailimg = "select * "+                         // 중고제품 디테일 이미지 (10-12) 강문식 시작
"from d_product_picture "+                                   //
"where d_product_picture.category1_code=? "+              //
"and d_product_picture.category2_code=? "+                //
"and d_product_picture.product_id=? " +
"and isnull(d_product_picture.product_permission)";                      // 중고제품 디테일 이미지 (10-12) 강문식 끝



exports.newdetailimg = "select * "+                             // 신제품 디테일 이미지 (10-14) 강문식 시작
"from n_product_picture "+                                   //
"where n_product_picture.category1_code=? "+              //
"and n_product_picture.category2_code=? "+                //
"and n_product_picture.product_id=? " +
"and isnull(n_product_picture.product_permission)";                      // 신제품 디테일 이미지 (10-14) 강문식 끝









exports.usecontentimg = " select * from d_product_list,d_product_picture  "+                                     // 중고제품 컨텐츠 + 이미지 (10-10) 강문식 시작
"where d_product_picture.representative_img='1'  "+                                              //
"and d_product_list.category1_code=? "+                                                          //
"and d_product_list.category2_code=? "+                                                         //
"and d_product_list.category1_code=d_product_picture.category1_code "+                                                                                      //
"and d_product_list.category2_code=d_product_picture.category2_code "+                                                                                      //
"and d_product_list.product_id=d_product_picture.product_id "+                                                                                 //
"and ISNULL(d_product_list.product_permission) "+
"and ISNULL(d_product_picture.product_permission) " +
"order by d_product_list.category1_code,d_product_list.category2_code,d_product_list.product_id desc";      //




exports.newcontentimg = " select * from n_product_list,n_product_picture  "+                                     // 신제품 컨텐츠 + 이미지 (10-10) 강문식 시작
"where n_product_picture.representative_img='1'  "+                                              //
"and n_product_list.category1_code=? "+                                                //
"and n_product_list.category2_code=? "+                                                         //
"and n_product_list.category1_code=n_product_picture.category1_code "+                                                                                      //
"and n_product_list.category2_code=n_product_picture.category2_code "+                                                                                      //
"and n_product_list.product_id=n_product_picture.product_id "+                                                                                 //
"and ISNULL(n_product_list.product_permission) "+
"and ISNULL(n_product_picture.product_permission) " +
"order by n_product_list.category1_code,n_product_list.category2_code,n_product_list.product_id desc";      //









exports.viewtittle3 = "select * "+                              // 중고제품 디테일뷰  맨 위에 제목  시작
"from n_product_list "+                                         //
"where n_product_list.category1_code=? "+                    //
"and n_product_list.category2_code=? "+                      //
"and n_product_list.product_id=? ";                            //  중고제품 디테일뷰  맨 위에 제목  끝


exports.viewtittle4 = "select * "+                              // 중고제품 디테일뷰  맨 위에 제목  시작
"from d_product_list "+                                         //
"where d_product_list.category1_code=? "+                    //
"and d_product_list.category2_code=? "+                      //
"and d_product_list.product_id=? ";                            //  중고제품 디테일뷰  맨 위에 제목  끝


exports.mainnotice = "SELECT * FROM notice order by id desc limit 3";       // 메인화면 공지사항 3개만 보이기








exports.mainusecontentimg = "select d_product_list.*, d_product_picture.file_name "+
"from Recommendation inner join d_product_picture on Recommendation.category2_code = d_product_picture.category2_code "+
"and Recommendation.product_id = d_product_picture.product_id "+
"INNER JOIN d_product_list on Recommendation.category2_code = d_product_list.category2_code "+
"and Recommendation.product_id = d_product_list.product_id "+
"where Recommendation.category1_code = d_product_picture.category1_code "+
"and Recommendation.category2_code = d_product_picture.category2_code "+
"and Recommendation.product_id = d_product_picture.product_id "+
"and isnull(d_product_list.product_permission) and isnull(d_product_picture.product_permission) "+
"and isnull(Recommendation.product_permission) "+
"group by d_product_picture.category1_code,d_product_picture.category2_code,d_product_picture.product_id "+
"order by rand() limit 2 ";











exports.Recommendation = "select * from Recommendation "+
"inner join d_product_list "+
"on Recommendation.category1_code = d_product_list.category1_code "+
"and Recommendation.category2_code = d_product_list.category2_code "+
"and Recommendation.product_id = d_product_list.product_id "+
"inner join  d_product_picture "+
"on Recommendation.category1_code = d_product_picture.category1_code "+
"and Recommendation.category2_code = d_product_picture.category2_code "+
"and Recommendation.product_id = d_product_picture.product_id "+
"where d_product_picture.representative_img = '1' "+
"and isnull(Recommendation.product_permission) "+
"and isnull(d_product_list.product_permission) " +
"and isnull(d_product_picture.product_permission)";





exports.n_product_catagory_Lmenu_c="insert into n_category_lev1(n_category_lev1.category1_code,n_category_lev1.category1_name) "+                                         // 제품 및 기술 카타고리 편집 ( 대메뉴 생성 )
"select "+
"(select lpad(max(n_category_lev1.category1_code)+1,2,'0') from n_category_lev1),?";
exports.n_product_catagory_Lmenu_c1="insert into n_category_lev2(n_category_lev2.category1_code,n_category_lev2.category2_code,n_category_lev2.category2_name) "+      // 제품 및 기술 카타고리 편집 ( 대메뉴 생성 )
"select "+
"(select lpad(max(n_category_lev1.category1_code),2,'0') from n_category_lev1),'00',?";
exports.n_product_catagory_Lmenu_c2="insert into n_product_list(n_product_list.category1_code,n_product_list.category2_code,n_product_list.product_id) "+
"values((select lpad(max(n_category_lev1.category1_code),2,'0') from n_category_lev1),'00','00')";


exports.d_product_catagory_Lmenu_c="insert into d_category_lev1(d_category_lev1.category1_code,d_category_lev1.category1_name) "+                                         // 제품 및 기술 카타고리 편집 ( 대메뉴 생성 )
"select "+
"(select lpad(max(d_category_lev1.category1_code)+1,2,'0') from d_category_lev1),?";
exports.d_product_catagory_Lmenu_c1="insert into d_category_lev2(d_category_lev2.category1_code,d_category_lev2.category2_code,d_category_lev2.category2_name) "+      // 제품 및 기술 카타고리 편집 ( 대메뉴 생성 )
"select "+
"(select lpad(max(d_category_lev1.category1_code),2,'0') from d_category_lev1),'00',?";
exports.d_product_catagory_Lmenu_c2="insert into d_product_list(d_product_list.category1_code,d_product_list.category2_code,d_product_list.product_id) "+
"values((select lpad(max(d_category_lev1.category1_code),2,'0') from d_category_lev1),'00','00')";




exports.n_product_Lmenu="select * from n_category_lev1 where isnull(category_permission)";        // 제품 및 기술 등록(대메뉴 보여주는곳)
exports.d_product_Lmenu="select * from d_category_lev1 where isnull(category_permission)";        // 제품 및 기술 등록(대메뉴 보여주는곳)

exports.n_product_Smenu="select * from n_category_lev2 where n_category_lev2.category1_code=? and isnull(category_permission)";        // 제품 및 기술 등록(대메뉴 보여주는곳)
exports.d_product_Smenu="select * from d_category_lev2 where d_category_lev2.category1_code=? and isnull(category_permission)";        // 제품 및 기술 등록(대메뉴 보여주는곳)

exports.n_product_catagory_Smenu_c="insert into n_category_lev2(n_category_lev2.category1_code,n_category_lev2.category2_code,n_category_lev2.category2_name) "+
"select "+
"?,(select lpad(max(n_category_lev2.category2_code)+1,2,'0') from n_category_lev2 where n_category_lev2.category1_code=?),? ";
exports.n_product_catagory_Smenu_c1="insert into n_product_list(n_product_list.category1_code,n_product_list.category2_code,n_product_list.product_id) "+
"values(?,(select lpad(max(n_category_lev2.category2_code),2,'0') from n_category_lev2 where n_category_lev2.category1_code=?),'00')";


exports.d_product_catagory_Smenu_c="insert into d_category_lev2(d_category_lev2.category1_code,d_category_lev2.category2_code,d_category_lev2.category2_name) "+
"select "+
"?,(select lpad(max(d_category_lev2.category2_code)+1,2,'0') from d_category_lev2 where d_category_lev2.category1_code=?),? ";
exports.d_product_catagory_Smenu_c1="insert into d_product_list(d_product_list.category1_code,d_product_list.category2_code,d_product_list.product_id) "+
"values(?,(select lpad(max(d_category_lev2.category2_code),2,'0') from d_category_lev2 where d_category_lev2.category1_code=?),'00')";


exports.asd="select * from aaa";

exports.n_product_catagory_Lmenu_A="update n_category_lev1 set n_category_lev1.category1_name=? where n_category_lev1.category1_code=?";       // 제품 및 기술 카타고리 편집 ( 대메뉴 이름 수정 )
exports.n_product_catagory_Lmenu_A1="update n_category_lev2 set n_category_lev2.category2_name=? where n_category_lev2.category1_code=? and n_category_lev2.category2_code='00'";
exports.d_product_catagory_Lmenu_A="update d_category_lev1 set d_category_lev1.category1_name=? where d_category_lev1.category1_code=?";       // 제품 및 기술 카타고리 편집 ( 대메뉴 이름 수정 )
exports.d_product_catagory_Lmenu_A1="update d_category_lev2 set d_category_lev2.category2_name=? where d_category_lev2.category1_code=? and d_category_lev2.category2_code='00'";
exports.n_product_catagory_Smenu_A="update n_category_lev2 set n_category_lev2.category2_name=? where n_category_lev2.category1_code=? and n_category_lev2.category2_code=?";    // 제품 및 기술 카타고리 편집 ( 대메뉴 이름 수정 )
exports.d_product_catagory_Smenu_A="update d_category_lev2 set d_category_lev2.category2_name=? where d_category_lev2.category1_code=? and d_category_lev2.category2_code=?";    // 제품 및 기술 카타고리 편집 ( 대메뉴 이름 수정 )
exports.n_product_catagory_Lmenu_D="update n_category_lev2 set n_category_lev2.category_permission='1' where n_category_lev2.category1_code=?";    // 제품 및 기술 카타고리 편집 ( 대메뉴 삭제 )
exports.n_product_catagory_Lmenu_D1="update n_category_lev1 set n_category_lev1.category_permission='1' where n_category_lev1.category1_code=?";    // 제품 및 기술 카타고리 편집 ( 대메뉴 삭제 )
exports.d_product_catagory_Lmenu_D="update d_category_lev2 set d_category_lev2.category_permission='1' where d_category_lev2.category1_code=?";    // 제품 및 기술 카타고리 편집 ( 대메뉴 삭제 )
exports.d_product_catagory_Lmenu_D1="update d_category_lev1 set d_category_lev1.category_permission='1' where d_category_lev1.category1_code=?";    // 제품 및 기술 카타고리 편집 ( 대메뉴 삭제 )
exports.n_product_catagory_Smenu_D="update n_category_lev2 set n_category_lev2.category_permission='1' where n_category_lev2.category1_code=? and n_category_lev2.category2_code=?";    // 제품 및 기술 카타고리 편집 ( 대메뉴 삭제 )
exports.d_product_catagory_Smenu_D="update d_category_lev2 set d_category_lev2.category_permission='1' where d_category_lev2.category1_code=? and d_category_lev2.category2_code=?";    // 제품 및 기술 카타고리 편집 ( 대메뉴 삭제 )
exports.product_insert="insert into n_product_list select ?,?,(select lpad(max(n_product_list.product_id)+1,2,'0') from n_product_list where n_product_list.category1_code=? and n_product_list.category2_code=?),?,?,?,NULL;";    // 제품 등록

exports.product_insert2="insert into d_product_list select ?,?,(select lpad(max(d_product_list.product_id)+1,2,'0') from d_product_list where d_product_list.category1_code=? and d_product_list.category2_code=?),?,?,?,NULL;";    // 제품 등록




exports.product_insert_img="insert into n_product_picture(n_product_picture.category1_code , n_product_picture.category2_code ,n_product_picture.product_id,n_product_picture.pic_id ,n_product_picture.file_name,n_product_picture.representative_img,n_product_picture.product_permission) "+
"select ?,?,(select lpad(max(n_product_list.product_id),2,'0') from n_product_list where n_product_list.category1_code = ? and n_product_list.category2_code = ?),(select lpad(?,2,'0')),?,?,null"
exports.product_insert_img2="insert into d_product_picture(d_product_picture.category1_code , d_product_picture.category2_code ,d_product_picture.product_id,d_product_picture.pic_id ,d_product_picture.file_name,d_product_picture.representative_img,d_product_picture.product_permission) "+
"select ?,?,(select lpad(max(d_product_list.product_id),2,'0') from d_product_list where d_product_list.category1_code = ? and d_product_list.category2_code = ?),(select lpad(?,2,'0')),?,?,null"


exports.product_model="insert into n_product_model select ?,?,(select lpad(max(n_product_list.product_id),2,'0') from n_product_list where n_product_list.category1_code=? and n_product_list.category2_code=?),(select lpad(?,2,'0')),?,?,null";
exports.product_model2="insert into d_product_model select ?,?,(select lpad(max(d_product_list.product_id),2,'0') from d_product_list where d_product_list.category1_code=? and d_product_list.category2_code=?),(select lpad(?,2,'0')),?,?,null";

exports.get_product_Amend="select * from n_product_list where n_product_list.category1_code=? and n_product_list.category2_code=? and n_product_list.product_id=?";
exports.get_product_Amend2="select * from d_product_list where d_product_list.category1_code=? and d_product_list.category2_code=? and d_product_list.product_id=?";
exports.product_oldfile="select * from n_product_picture where n_product_picture.category1_code=? and n_product_picture.category2_code=? and n_product_picture.product_id=? and ISNULL(product_permission)";
exports.product_oldfile2="select * from d_product_picture where d_product_picture.category1_code=? and d_product_picture.category2_code=? and d_product_picture.product_id=? and ISNULL(product_permission)";

exports.n_product_representative_img_update="update n_product_picture set n_product_picture.representative_img=? where category1_code=? and category2_code=? and product_id=? and pic_id=?;";
exports.n_product_representative_img_update2="update d_product_picture set d_product_picture.representative_img=? where category1_code=? and category2_code=? and product_id=? and pic_id=?;";
exports.n_product_permission_false="update n_product_picture set n_product_picture.product_permission='01' where category1_code=? and category2_code=? and product_id=? and pic_id=?;";
exports.n_product_permission_false2="update d_product_picture set d_product_picture.product_permission='01' where category1_code=? and category2_code=? and product_id=? and pic_id=?;";

exports.n_product_update="update n_product_list set n_product_list.name=? , n_product_list.company=? , n_product_list.`option`=? " +
"where n_product_list.category1_code=? and n_product_list.category2_code=? and n_product_list.product_id=?";

exports.n_product_update2="update d_product_list set d_product_list.name=? , d_product_list.company=? , d_product_list.`option`=? " +
"where d_product_list.category1_code=? and d_product_list.category2_code=? and d_product_list.product_id=?";


exports.product_Amend_insert_img="insert into n_product_picture select ?,?,?,(select lpad(max(n_product_picture.pic_id)+1,2,'0') from n_product_picture " +
"where n_product_picture.category1_code=? and n_product_picture.category2_code=? and n_product_picture.product_id=?),?,?,null";
exports.product_Amend_insert_img2="insert into d_product_picture select ?,?,?,(select lpad(max(d_product_picture.pic_id)+1,2,'0') from d_product_picture " +
"where d_product_picture.category1_code=? and d_product_picture.category2_code=? and d_product_picture.product_id=?),?,?,null";


exports.get_n_model="select * from n_product_model where category1_code=? and category2_code=? and product_id=? and isnull(n_product_model.product_permission);";
exports.get_n_model2="select * from d_product_model where category1_code=? and category2_code=? and product_id=? and isnull(d_product_model.product_permission);";
exports.n_model_update="update n_product_model set n_product_model.product_permission=? , n_product_model.product_model_name=? , n_product_model.product_model_option=? where category1_code=? and category2_code=? and product_id=? and product_model_id=? ";
exports.n_model_update_del="update n_product_model set n_product_model.product_permission=? where category1_code=? and category2_code=? and product_id=? and product_model_id=? ";

exports.n_model_update2="update d_product_model set d_product_model.product_permission=? , d_product_model.product_model_name=? , d_product_model.product_model_option=? where category1_code=? and category2_code=? and product_id=? and product_model_id=? ";
exports.n_model_update2_del="update d_product_model set d_product_model.product_permission=? where category1_code=? and category2_code=? and product_id=? and product_model_id=? ";
exports.product_model_insert="insert into n_product_model select ?,?,?,(select lpad(max(n_product_model.product_model_id)+1,2,'0') from n_product_model where n_product_model.category1_code=? and n_product_model.category2_code=? and n_product_model.product_id=?),?,?,null";
exports.product_model_insert2="insert into d_product_model select ?,?,?,(select lpad(max(d_product_model.product_model_id)+1,2,'0') from d_product_model where d_product_model.category1_code=? and d_product_model.category2_code=? and d_product_model.product_id=?),?,?,null";

exports.d_product_del="update d_product_list set d_product_list.product_permission='1' where d_product_list.category1_code=? and d_product_list.category2_code=? and d_product_list.product_id=?";
exports.n_product_del="update n_product_list set n_product_list.product_permission='1' where n_product_list.category1_code=? and n_product_list.category2_code=? and n_product_list.product_id=?";


exports.product_view="select * from d_product_list where d_product_list.category1_code=? and d_product_list.category2_code=? " +
"and isnull(d_product_list.product_permission)";

exports.recommend_menu="select * from Recommendation where isnull(product_permission)";


exports.recommend_insert_update="update Recommendation set Recommendation.product_permission='1' where category1_code=? and category2_code=? and product_id=? and isnull(product_permission)";
exports.recommend_insert_update2="update Recommendation set Recommendation.product_permission=null where category1_code=? and category2_code=? and product_id=? and isnull(product_permission)";
exports.recommend_insert="insert into Recommendation(Recommendation.category1_code,Recommendation.category2_code,Recommendation.product_id) values(?,?,?)";



exports.main_img_list="select * from main_img where isnull(is_del) order by file_order ";

exports.main_img_insert="insert into main_img(id,file_name,file_order,is_del) values(null,?,?,null)";

exports.main_img_update="update main_img set file_order=?,is_del=? where id=?";

