'use strict';

/**
 * Created by wealab04 on 2014-05-23.
 */

var connect = require('../controllers/dbconnect_v1.01.js');
var query = require('../controllers/query.js');
var c = connect.connection();
var fs = require('fs'),
    path = require('path'),
    mime = require('mime');

//연결로그 출력
c.on('connect', function () {
    console.log('DataBase connected');
}).on('error', function (err) {
    console.log('Client error: ' + err);
}).on('close', function (hadError) {
    console.log('Client closed');
});

exports.chk = function (req, res) {
    var id = req.body.account;
    var pswd = req.body.pswd;
    var sending = [];
    console.log('1: ' + id);
    console.log('2: ' + pswd);
    c.query(query.chkAccount, [id, pswd]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {

        if (sending[0] != null) {
            req.session.role = sending[0].role;
            var obj = {sending: sending};
            res.send(200, obj);
        } else {
            res.send(200, null);
        }
    })
};


exports.getlist_cate = function (req, res) {                                                       // 신제품소개 서브 메뉴 시작
    var sending = [];

    c.query(query.getlist_cate, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};                                                                                               // 신제품소개 서브 메뉴 끝



exports.list = function (req, res) {
    var sending = [];
    console.log('this is get list000');
    c.query(query.boardlist, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.list1 = function (req, res) {
    var sending = [];
    console.log('this is get list111');
    c.query(query.boardlist1, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);

        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.list2 = function (req, res) {
    var sending = [];

    console.log('this is g22222et list222');
    c.query(query.boardlist2, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};

exports.list3 = function (req, res) {                                                       // 신제품소개 물건창 시작
    var sending = [];

    console.log('this is get list3333');
    c.query(query.boardlist3, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};                                                                                              // 신제품소개 물건창 ㄲㅌ


exports.list4 = function (req, res) {                                                       // 신제품소개 서브 메뉴 시작
    var sending = [];

    console.log('this is get list4444');
    c.query(query.boardlist4, null).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};                                                                                               // 신제품소개 서브 메뉴 끝


exports.get = function (req, res) {
    var id = req.body.id;
    var sending = [];
    c.query(query.boardget, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};
exports.get3 = function (req, res) {
    var id = req.body.id;
    var sending = [];
    c.query(query.boardget3, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};


exports.get2 = function (req, res) {
    var id = req.body.id;
    var sending = [];
    console.log("id는=");
    console.log(id);
    c.query(query.boardget2, [ id ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};


exports.submenu1 = function (req, res) {                                                         // 신제품 네비게이션바 갯수 시작
    var category1_code = "0" + req.body.id10;
    var sending = [];
    console.log("서브 id=");
    console.log(category1_code);
    c.query(query.boardlist4, [ category1_code ]).on('result', function (res) {
        res.on('row', function (row) {
            sending.push(row);
        });
    }).on('end', function () {
        var obj = {sending: sending};
        if (sending[0] != null) {
            res.send(200, obj);
        } else {
            res.send(500, obj);
        }
    });
};                                                                                                  // 신제품 네비게이션바 갯수 끝


exports.insert = function (req, res) {
    var title = req.body.usedInputTitle;
    var content = req.body.usedInputContent;
    var writer = req.body.usedInputname;
    var company = req.body.usedInputCompany;
    var contact = req.body.usedInputCall;
    var email = req.body.usedInputEmail;
    if (email == null || email == '') {
        email = '이메일 입력 안함';
    }
    console.log('title : ' + title)
    // title, content, file, writer, href
    c.query(query.boardinsert, [ title, content, writer, company, contact, email ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
    });
};

exports.insert2 = function (req, res) {
    var title = req.body.usedInputTitle;
    var content = req.body.usedInputContent;
    var writer = req.body.usedInputname;
    var company = req.body.usedInputCompany;
    var contact = req.body.usedInputCall;
    var email = req.body.usedInputEmail;
    if (email == null || email == '') {
        email = '이메일 입력 안함';
    }
    console.log('title2 : ' + title)
    // title, content, file, writer, href
    c.query(query.boardinsert2, [ title, content, writer, company, contact, email ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
    });
};

exports.insert3 = function (req, res) {
    var title = req.body.title;
    var content = req.body.content;
    console.log('title2 : ' + title)
    console.log('title2 : ' + content)
    // title, content, file, writer, href
    c.query(query.boardinsert3, [ title, content ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Mesong'});
    });
};

exports.insertF = function (req, res) {
    var file = req.files.file;
    var dir = '\public/images/';
    var name = new Date().getTime() + file.name;

    if (file.type == 'image/jpeg' || file.type == 'image/png') {
        fs.readFile(file.path, function (error, data) {
            fs.writeFile(dir + name, data, function (error) {
                if (error) {
                    throw error
                }
                res.send(name);
            });
        });

    } else {
        res.send(500, '이미지파일만 첨부가능합니다.');
    }
};

exports.update = function (req, res) {
    var imageLength = req.files.file.length;
    var MultiPath='';
    for (var i = 0; i != imageLength - 1; i++) {
        var memo = req.param('memo')
        var imageFile = req.files.file[i];
        /*console.log(req.files.file[i].name);*/
        if (imageFile) {
            // 변수를 선언합니다.
            var name = imageFile.name;
            var path = imageFile.path;
            var type = imageFile.type;
            /*console.log('sad' + name);
             console.log('sad ' + path);
             console.log('sad' + type);*/

            // 이미지 파일 확인
            /* if (type.indexOf('image') != -1) {*/

            console.log('성공');
            // 이미지 파일의 경우: 파일 이름을 변경합니다.
            var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
            MultiPath += outputPath + '*';
            console.log(outputPath);
            var ws = fs.createWriteStream(outputPath);
            fs.createReadStream(path).pipe(ws);
            /*res.redirect('/write');*/
            /* } else {
             // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
             console.log('실패1');
             fs.unlink(path, function (error) {
             res.send(400);
             });
             }
             }       */    } else {
            // 파일이 없을 경우
            console.log('실패2');
            res.send(404);
        }
    }
    var id = req.body.id;
    var title = req.body.title;
    var content = req.body.usedInputContent;
    var contact = req.body.contact;
    var writer = req.body.writer;
    var company = req.body.company;
    var email = req.body.email;

    console.log(title);
    console.log(content);
    console.log(id);

// title, content, file, href, id
    c.query(query.boardmodify, [ title, content, writer , company, contact, email, MultiPath, id ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '수정하였습니다.';
        res.render('machine/machine_jade/043-1_S_customer_List1_machine', {title: 'Ylease'});
    });
};
exports.update2 = function (req, res) {
    var imageLength = req.files.file.length;
    var MultiPath='';
    for (var i = 0; i != imageLength - 1; i++) {
        var memo = req.param('memo')
        var imageFile = req.files.file[i];
        /*console.log(req.files.file[i].name);*/
        if (imageFile) {
            // 변수를 선언합니다.
            var name = imageFile.name;
            var path = imageFile.path;
            var type = imageFile.type;
            /*console.log('sad' + name);
             console.log('sad ' + path);
             console.log('sad' + type);*/

            // 이미지 파일 확인
            /* if (type.indexOf('image') != -1) {*/

            console.log('성공');
            // 이미지 파일의 경우: 파일 이름을 변경합니다.
            var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
            MultiPath += outputPath + '*';
            console.log(outputPath);
            var ws = fs.createWriteStream(outputPath);
            fs.createReadStream(path).pipe(ws);
            /*res.redirect('/write');*/
            /* } else {
             // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
             console.log('실패1');
             fs.unlink(path, function (error) {
             res.send(400);
             });
             }
             }       */    } else {
            // 파일이 없을 경우
            console.log('실패2');
            res.send(404);
        }
    }
    var id = req.body.id;
    var title = req.body.title;
    var content = req.body.content;
    var contact = req.body.contact;
    var writer = req.body.writer;
    var company = req.body.company;
    var email = req.body.email;

    console.log(title);
    console.log(content);
    console.log(id);

// title, content, file, href, id
    c.query(query.boardmodify2, [ title, content, writer , company, contact, email, MultiPath, id ]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        var obj = '수정하였습니다.';
        res.render('machine/machine_jade/043-1_S_customer_List1_machine2', {title: 'Ylease'});
    });
};


exports.update3 = function (req, res) {
    var imageLength = req.files.file.length;
    var MultiPath = '';
    for (var i = 0; i != imageLength - 1; i++) {
        var memo = req.param('memo')
        var imageFile = req.files.file[i];
        /*console.log(req.files.file[i].name);*/
        if (imageFile) {
            // 변수를 선언합니다.
            var name = imageFile.name;
            var path = imageFile.path;
            var type = imageFile.type;
            /*console.log('sad' + name);
             console.log('sad ' + path);
             console.log('sad' + type);*/

            // 이미지 파일 확인
            /* if (type.indexOf('image') != -1) {*/

            console.log('성공');
            // 이미지 파일의 경우: 파일 이름을 변경합니다.
            var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
            MultiPath += outputPath + '*';
            console.log(outputPath);
            var ws = fs.createWriteStream(outputPath);
            fs.createReadStream(path).pipe(ws);
            /*res.redirect('/write');*/
            /* } else {
             // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
             console.log('실패1');
             fs.unlink(path, function (error) {
             res.send(400);
             });
             }
             }       */    } else {
            // 파일이 없을 경우
            console.log('실패2');
            res.send(404);
        }
    }
    if(req.body.oldimg.length > 1){
        for(var q=(req.body.oldimg.length-1); q>0;q--){
            MultiPath = (req.body.oldimg[q]+"*") + MultiPath;
        }
    }

        var id = req.body.id2;
        var title = req.body.title;
        var content = req.body.content;
        console.log(id);
        console.log(title);
        console.log(content);

// title, content, file, href, id
        c.query(query.boardmodify3, [title, content, MultiPath, id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            var obj = '수정하였습니다.';
            res.render('jade/070_notice/070_00_List', { title: 'machine' });
        });
    };

    exports.delete = function (req, res) {
        var id = req.body.id;
        console.log(id);
        c.query(query.boardremove, [id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            var obj = '삭제하였습니다.';
            res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Ylease'});
        });
    };

    exports.delete2 = function (req, res) {
        var id = req.body.id;
        console.log(id);
        c.query(query.boardremove2, [id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            var obj = '삭제하였습니다.';
            res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Ylease'});
        });
    };

    exports.delete3 = function (req, res) {
        var id = req.body.id;
        console.log('ss ' + id);
        c.query(query.boardremove3, [id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            res.render('machine/machine_jade/043-1_S_notice_List1_machine', {title: 'Ylease'});
        });
    };

    exports.download = function (req, res) {
        console.log('ss ' + req.body.up);
        var file = req.body.up, // file path
            filename = path.basename(file),
            mimetype = mime.lookup(file);

        res.setHeader('Content-disposition', 'attachment; filename=' + encodeURI(filename));
        res.setHeader('Content-type', mimetype);

        var filestream = fs.createReadStream(file);
        filestream.pipe(res);
    };

    exports.download2 = function (req, res) {
        console.log('ss ' + req.body.up);
        var file = req.body.up, // file path
            filename = path.basename(file),
            mimetype = mime.lookup(file);

        res.setHeader('Content-disposition', 'attachment; filename=' + encodeURI(filename));
        res.setHeader('Content-type', mimetype);

        var filestream = fs.createReadStream(file);
        filestream.pipe(res);
    };

    exports.upload = function (req, res) {
        var imageLength = req.files.file.length;
        var MultiPath = '';
        for (var i = 0; i != imageLength - 1; i++) {
            var memo = req.param('memo')
            var imageFile = req.files.file[i];
            /*console.log(req.files.file[i].name);*/
            if (imageFile) {
                // 변수를 선언합니다.
                var name = imageFile.name;
                var path = imageFile.path;
                var type = imageFile.type;
                /*console.log('sad' + name);
                 console.log('sad ' + path);
                 console.log('sad' + type);*/

                // 이미지 파일 확인
                /* if (type.indexOf('image') != -1) {*/

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath += outputPath + '*';
                console.log(outputPath);
                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                /*res.redirect('/write');*/
                /* } else {
                 // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                 console.log('실패1');
                 fs.unlink(path, function (error) {
                 res.send(400);
                 });
                 }
                 }       */    } else {
                // 파일이 없을 경우
                console.log('실패2');
                res.send(404);
            }
        }
        var title = req.body.usedInputTitle;
        var content = req.body.usedInputContent;
        console.log(content);
        var writer = req.body.usedInputname;
        var company = req.body.usedInputCompany;
        var contact = req.body.usedInputCall;
        var email = req.body.usedInputEmail;
        if (email == null || email == '') {
            email = '이메일 입력 안함';
        }
        console.log('title : ' + title)
        console.log('path : ' + MultiPath)
        // title, content, file, writer, href
        c.query(query.boardinsert, [ title, content, writer, company, contact, email, MultiPath ]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            res.render('jade/050_QnA/050_00_write', { title: 'machine' });
        });
    };

    exports.OldUpload = function (req, res) {
        var imageLength = req.files.file.length;
        var MultiPath = '';
        for (var i = 0; i != imageLength - 1; i++) {
            var memo = req.param('memo')
            var imageFile = req.files.file[i];
            /*console.log(req.files.file[i].name);*/
            if (imageFile) {
                // 변수를 선언합니다.
                var name = imageFile.name;
                var path = imageFile.path;
                var type = imageFile.type;
                /*console.log('sad' + name);
                 console.log('sad ' + path);
                 console.log('sad' + type);*/

                // 이미지 파일 확인
                /* if (type.indexOf('image') != -1) {*/

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath += outputPath + '*';
                console.log(outputPath);
                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                /*res.redirect('/write');*/
                /* } else {
                 // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                 console.log('실패1');
                 fs.unlink(path, function (error) {
                 res.send(400);
                 });
                 }
                 }       */    } else {
                // 파일이 없을 경우
                console.log('실패2');
                res.send(404);
            }
        }
        var title = req.body.usedInputTitle;
        var content = req.body.usedInputContent;
        var writer = req.body.usedInputname;
        var company = req.body.usedInputCompany;
        var contact = req.body.usedInputCall;
        var email = req.body.usedInputEmail;
        if (email == null || email == '') {
            email = '이메일 입력 안함';
        }
        console.log('title : ' + title)
        console.log('path : ' + MultiPath)
        // title, content, file, writer, href
        c.query(query.boardinsert2, [ title, content, writer, company, contact, email, MultiPath ]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            res.render('jade/060_Old_order/060_00_write', { title: 'machine' });
        });
    };

    exports.NoticeUpload = function (req, res) {
        var imageLength = req.files.file.length;
        var MultiPath = '';
        for (var i = 0; i != imageLength - 1; i++) {
            var memo = req.param('memo')
            var imageFile = req.files.file[i];
            /*console.log(req.files.file[i].name);*/
            if (imageFile) {
                // 변수를 선언합니다.
                var name = imageFile.name;
                var path = imageFile.path;
                var type = imageFile.type;
                /*console.log('sad' + name);
                 console.log('sad ' + path);
                 console.log('sad' + type);*/

                // 이미지 파일 확인
                /* if (type.indexOf('image') != -1) {*/

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath += outputPath + '*';
                console.log(outputPath);
                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                /*res.redirect('/write');*/
                /* } else {
                 // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                 console.log('실패1');
                 fs.unlink(path, function (error) {
                 res.send(400);
                 });
                 }
                 }       */    } else {
                // 파일이 없을 경우
                console.log('실패2');
                res.send(404);
            }
        }
        var title = req.body.title;
        var content = req.body.content;
        console.log('title : ' + title)
        console.log('path : ' + MultiPath)
        // title, content, file, writer, href
        c.query(query.boardinsert3, [ title, content, MultiPath ]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            res.render('jade/070_notice/070_03_write', { title: 'machine' });
        });
    };


    exports.newmenu = function (req, res) {                                                       // 신제품 서브 메뉴 시작 (10-10) 강문식
        var sending = [];                                                                           //
        //
        c.query(query.newmenu, null).on('result', function (res) {                              //
            res.on('row', function (row) {                                                         //
                sending.push(row);                                                                   //
            });                                                                                      //
        }).on('end', function () {                                                                 //
            var obj = {sending: sending};                                                          //
            if (sending[0] != null) {                                                               //
                res.send(200, obj);                                                                  //
            } else {                                                                                //
                res.send(500, obj);                                                                 //
            }
        });
    };                                                                                  // 신제품 서브 서브 메뉴 끝 (10-10) 강문식


    exports.newtitle = function (req, res) {                                                       // 신제품 경로 타이틀 (10-14) 강문식
        var sending = [];                                                                           //
        console.log("타이틀 성공");//
        c.query(query.newtitle, null).on('result', function (res) {                              //
            res.on('row', function (row) {                                                         //
                sending.push(row);                                                                   //
            });                                                                                      //
        }).on('end', function () {                                                                 //
            var obj = {sending: sending};                                                          //
            if (sending[0] != null) {                                                               //
                res.send(200, obj);                                                                  //
            } else {                                                                                //
                res.send(500, obj);                                                                 //
            }
        });
    };                                                                                  // 신제품 신제품 경로 타이틀 끝 (10-14) 강문식


    exports.newtitle1 = function (req, res) {                                                       // 중고제품 경로 타이틀 (10-14) 강문식
        var sending = [];                                                                           //
        console.log("타이틀 성공");//
        c.query(query.newtitle1, null).on('result', function (res) {                              //
            res.on('row', function (row) {                                                         //
                sending.push(row);                                                                   //
            });                                                                                      //
        }).on('end', function () {                                                                 //
            var obj = {sending: sending};                                                          //
            if (sending[0] != null) {                                                               //
                res.send(200, obj);                                                                  //
            } else {                                                                                //
                res.send(500, obj);                                                                 //
            }
        });
    };                                                                                  // 중고제품 신제품 경로 타이틀 끝 (10-14) 강문식


    exports.newcontent = function (req, res) {                                                      //신제품 컨텐츠 (10-10) 강문식 시작
        var sending = [];                                                                             //
        var category1_code = req.body.category1_code;                                              //
        var category2_code = req.body.category2_code;                                              //
        console.log("카타고리1,2");                                                                 //
        console.log(category1_code);                                                                  //
        console.log(category2_code);                                                                  //
        // title, content, file, writer, href                                                          //
        c.query(query.newcontent, [ category1_code, category2_code]).on('result', function (res) {   //
            res.on('row', function (row) {                                                           //
                sending.push(row);                                                                     //
            });                                                                                        //
        }).on('end', function () {                                                                   //
            var obj = {sending: sending};                                                            //
            if (sending[0] != null) {                                                                 //
                res.send(200, obj);                                                                    //
            } else {                                                                                   //
                res.send(500, obj);                                                                     //
            }                                                                                           //
        });                                                                                             //
    };                                                                                                   //신제품 컨텐츠 (10-10) 강문식 시작 끝


    exports.usemenu = function (req, res) {                                                       // 중고제품 서브 메뉴 시작 (10-10) 강문식
        var sending = [];                                                                           //
        console.log("리스트가 실행합니다");                                                       //
        c.query(query.usemenu, null).on('result', function (res) {                              //
            res.on('row', function (row) {                                                         //
                sending.push(row);                                                                    //
            });                                                                                       //
        }).on('end', function () {                                                                  //
            var obj = {sending: sending};                                                            //
            if (sending[0] != null) {                                                                 //
                res.send(200, obj);                                                                    //
            } else {                                                                                   //
                res.send(500, obj);                                                                     //
            }
        });
    };                                                                                      // 중고제품 서브 서브 메뉴 끝 (10-10) 강문식


    exports.usecontentimg = function (req, res) {                                                                   //중고제품 컨텐츠 (10-10) 강문식 시작
        var sending = [];                                                                                          //
        var category1_code = req.body.category1_code;                                                           //
        var category2_code = req.body.category2_code;
        //
        //
        c.query(query.usecontentimg, [ category1_code, category2_code]).on('result', function (res) {            //
            res.on('row', function (row) {                                                                       //
                sending.push(row);                                                                                 //
            });                                                                                                    //
        }).on('end', function () {                                                                               //
            var obj = {sending: sending};                                                                         //
            console.log(obj);
            if (sending[0] != null) {                                                                              //
                res.send(200, obj);                                                                                 //
            } else {                                                                                                //
                res.send(500, obj);                                                                                  //
            }                                                                                                         //
        })                                                                                                            //신제품 컨텐츠 (10-10) 강문식 끝
    };


    exports.newcontentimg = function (req, res) {                                                                   //신제품 컨텐츠 (10-14) 강문식 시작
        var sending = [];                                                                                          //
        var category1_code = req.body.category1_code;                                                           //
        var category2_code = req.body.category2_code;
        //
        //
        c.query(query.newcontentimg, [ category1_code, category2_code]).on('result', function (res) {            //
            res.on('row', function (row) {                                                                       //
                sending.push(row);                                                                                 //
            });                                                                                                    //
        }).on('end', function () {                                                                               //
            var obj = {sending: sending};                                                                         //

            if (sending[0] != null) {                                                                              //
                res.send(200, obj);                                                                                 //
            } else {                                                                                                //
                res.send(500, obj);                                                                                  //
            }                                                                                                         //
        })                                                                                                            //신제품 컨텐츠 (10-10) 강문식 끝
    };


    exports.newdetail = function (req, res) {                                                                       // 신제품 디테일 뷰 (10-10) 강문식 시작
        var sending = [];                                                                                             //
        var category1_code = req.body.code1;                                                                        //
        var category2_code = req.body.code2;                                                                        //
        var product_id = req.body.code3;                                                                            //
        //
        c.query(query.newdetail, [ category1_code, category2_code, product_id]).on('result', function (res) {      //
            res.on('row', function (row) {                                                                          //
                sending.push(row);                                                                                    //
            });                                                                                                       //
        }).on('end', function () {                                                                                  //
            var obj = {sending: sending};                                                                            //
            if (sending[0] != null) {                                                                                 //
                res.send(200, obj);                                                                                    //
            } else {                                                                                                   //
                res.send(500, obj);                                                                                    //
            }                                                                                                          //
        })                                                                                                             // 신제품 디테일 뷰 (10-10) 강문식 끝
    };


    exports.usedetail = function (req, res) {                                                                       // 중고제품 디테일 뷰 모달 (10-10) 강문식 시작
        var sending = [];                                                                                             //
        var category1_code = req.body.code1;                                                                        //
        var category2_code = req.body.code2;                                                                        //
        var product_id = req.body.code3;                                                                            //
        //
        c.query(query.usedetail, [ category1_code, category2_code, product_id]).on('result', function (res) {      //
            res.on('row', function (row) {                                                                          //
                sending.push(row);                                                                                    //
            });                                                                                                       //
        }).on('end', function () {                                                                                  //
            var obj = {sending: sending};                                                                            //
            if (sending[0] != null) {                                                                                 //
                res.send(200, obj);                                                                                    //
            } else {                                                                                                   //
                res.send(500, obj);                                                                                    //
            }                                                                                                          //
        });                                                                                                            // 중고제품 디테일 뷰 모달 (10-10) 강문식 끝
    };


    exports.newdetailimg = function (req, res) {                                                                    // 신제품 디테일 썸네일 이미지 (10-14) 강문식 시작
        var sending = [];                                                                                             //
        var category1_code = req.body.code1;                                                                        //
        var category2_code = req.body.code2;                                                                        //
        var product_id = req.body.code3;                                                                            //
        //
        c.query(query.newdetailimg, [ category1_code, category2_code, product_id]).on('result', function (res) {    //
            res.on('row', function (row) {                                                                          //
                sending.push(row);                                                                                    //
            });                                                                                                       //
        }).on('end', function () {                                                                                  //
            var obj = {sending: sending};                                                                            //
            if (sending[0] != null) {                                                                                 //
                res.send(200, obj);                                                                                    //
            } else {                                                                                                   //
                res.send(500, obj);                                                                                    //
            }                                                                                                          //
        });                                                                                                             // 신제품 디테일 썸네일 이미지 (10-14) 강문식 끝
    };


    exports.usedetailimg = function (req, res) {                                                                    // 중고제품 디테일 썸네일 이미지 (10-12) 강문식 시작
        var sending = [];                                                                                             //
        var category1_code = req.body.code1;                                                                        //
        var category2_code = req.body.code2;                                                                        //
        var product_id = req.body.code3;                                                                            //
        //
        c.query(query.usedetailimg, [ category1_code, category2_code, product_id]).on('result', function (res) {    //
            res.on('row', function (row) {                                                                          //
                sending.push(row);                                                                                    //
            });                                                                                                       //
        }).on('end', function () {                                                                                  //
            var obj = {sending: sending};                                                                            //
            if (sending[0] != null) {                                                                                 //
                res.send(200, obj);                                                                                    //
            } else {                                                                                                   //
                res.send(500, obj);                                                                                    //
            }                                                                                                          //
        });
    };                                                                                                             // 중고제품 디테일 썸네일 이미지 (10-12) 강문식 끝


    /*exports.usemenuimg = function (req, res) {                                                                       // 중고제품 메뉴 이미지 (10-10) 강문식 시작
     var sending = [];                                                                                             //
     var category1_code = req.body.code1;                                                                        //
     var category2_code = req.body.code2;                                                                        //
     var product_id = req.body.code3;                                                                            //
     console.log("중고제품 메뉴 이미지")                                                                       //
     c.query(query.usemenuimg, [ category1_code,category2_code,product_id]).on('result', function (res) {      //
     res.on('row', function (row) {                                                                          //
     sending.push(row);                                                                                    //
     });                                                                                                       //
     }).on('end', function () {                                                                                  //
     var obj = {sending: sending};                                                                            //
     if (sending[0] != null) {                                                                                 //
     res.send(200, obj);                                                                                    //
     } else {                                                                                                   //
     res.send(500, obj);                                                                                    //
     }                                                                                                          //
     })                                                                                                             // 중고제품 메뉴 이미지 (10-10) 강문식 끝
     };*/


    exports.viewtittle3 = function (req, res) {                                                                       // 중고제품 디테일 맨위 타이틀 (10-12) 강문식 시작
        var sending = [];                                                                                             //
        var category1_code = req.body.code1;                                                                        //
        var category2_code = req.body.code2;                                                                        //
        var product_id = req.body.code3;                                                                            //
        console.log(category1_code)                                                                                 //
        console.log(category2_code)                                                                                 //
        console.log(product_id)                                                                                     //
        c.query(query.viewtittle3, [ category1_code, category2_code, product_id]).on('result', function (res) {   //
            res.on('row', function (row) {                                                                          //
                sending.push(row);                                                                                    //
            });                                                                                                       //
        }).on('end', function () {                                                                                  //
            var obj = {sending: sending};                                                                            //
            if (sending[0] != null) {                                                                                 //
                res.send(200, obj);                                                                                    //
            } else {                                                                                                   //
                res.send(500, obj);                                                                                    //
            }                                                                                                          //
        })                                                                                                             // 중고제품 디테일 맨위 타이틀 (10-12) 강문식 끝
    };







exports.viewtittle4 = function (req, res) {                                                                       // 중고제품 디테일 맨위 타이틀 (10-12) 강문식 시작
    var sending = [];                                                                                             //
    var category1_code = req.body.code1;                                                                        //
    var category2_code = req.body.code2;                                                                        //
    var product_id = req.body.code3;                                                                            //
    console.log(category1_code)                                                                                 //
    console.log(category2_code)                                                                                 //
    console.log(product_id)                                                                                     //
    c.query(query.viewtittle4, [ category1_code, category2_code, product_id]).on('result', function (res) {   //
        res.on('row', function (row) {                                                                          //
            sending.push(row);                                                                                    //
        });                                                                                                       //
    }).on('end', function () {                                                                                  //
        var obj = {sending: sending};                                                                            //
        if (sending[0] != null) {                                                                                 //
            res.send(200, obj);                                                                                    //
        } else {                                                                                                   //
            res.send(500, obj);                                                                                    //
        }                                                                                                          //
    })                                                                                                             // 중고제품 디테일 맨위 타이틀 (10-12) 강문식 끝
};




    exports.mainnotice = function (req, res) {                                           // 메인화면 공지사항 공지사항 (10-14) 시작
        var sending = [];                                                                  //
        c.query(query.mainnotice).on('result', function (res) {                       //
            res.on('row', function (row) {                                               //
                sending.push(row);                                                         //
            });                                                                            //
        }).on('end', function () {                                                       //
            var obj = {sending: sending};                                                 //
            if (sending[0] != null) {                                                      //
                res.send(200, obj);                                                         //
            } else {                                                                       //
                res.send(500, obj);                                                         //
            }                                                                               //
        });                                                                                 //
    };                                                                                      // 메인화면 공지사항 (10-14) 끝


    exports.recommend = function (req, res) {                                           // 중고제품 추천매뉴 각각 1개씩 (10-14) 시작
        var sending = [];                                                                  //
        c.query(query.recommend).on('result', function (res) {                       //
            res.on('row', function (row) {                                               //
                sending.push(row);                                                         //
            });                                                                            //
        }).on('end', function () {                                                       //
            var obj = {sending: sending};                                                 //
            if (sending[0] != null) {                                                      //
                res.send(200, obj);                                                         //
            } else {                                                                       //
                res.send(500, obj);                                                         //
            }                                                                               //
        });                                                                                 //
    };                                                                                      // 중고제품 추천매뉴 각각 1개씩 (10-14) 끝


    exports.mainusecontentimg = function (req, res) {                                           // 메인화면 중고제품 컨텐츠 + 이미지 (10-14) 강문식 시작
        var sending = [];                                                                  //
        c.query(query.mainusecontentimg).on('result', function (res) {                       //
            res.on('row', function (row) {                                               //
                sending.push(row);                                                         //
            });                                                                            //
        }).on('end', function () {                                                       //
            var obj = {sending: sending};                                                 //
            if (sending[0] != null) {                                                      //
                res.send(200, obj);                                                         //
            } else {                                                                       //
                res.send(500, obj);                                                         //
            }                                                                               //
        });                                                                                 //
    };                                                                                      // 메인화면 중고제품 컨텐츠 + 이미지 (10-14) 강문식 끝





exports.Recommendation = function (req, res) {                                           // 중고제품 추천 물품 (12-04)
    var sending = [];                                                                  //
    c.query(query.Recommendation).on('result', function (res) {                       //
        res.on('row', function (row) {                                               //
            sending.push(row);                                                         //
        });                                                                            //
    }).on('end', function () {                                                       //
        var obj = {sending: sending};                                                 //
        if (sending[0] != null) {                                                      //
            res.send(200, obj);                                                         //
        } else {                                                                       //
            res.send(500, obj);                                                         //
        }                                                                               //
    });                                                                                 //
};














exports.product_catagory_Lmenu_c= function (req, res) {                                                          // 제품 및 기술 카타고리 편집 ( 대메뉴 생성 )
    var L_menu = req.body.n_C_Lmenu;
    var new_old = req.body.aa;

    if (new_old == 1) {

    c.query(query.n_product_catagory_Lmenu_c, [L_menu]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        c.query(query.n_product_catagory_Lmenu_c1, [L_menu]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            c.query(query.n_product_catagory_Lmenu_c2, [L_menu]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
            });
        });
    });
}

    if (new_old==2){
        c.query(query.d_product_catagory_Lmenu_c, [L_menu]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            c.query(query.d_product_catagory_Lmenu_c1, [L_menu]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                c.query(query.d_product_catagory_Lmenu_c2, [L_menu]).on('result', function (res) {
                    res.on('row', function (row) {
                    });
                }).on('end', function () {
                    res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
                });
            });
        });
    }
};










exports.product_Lmenu= function (req, res) {                                                             // 제품 및 기술 등록(select 대메뉴 보여주는곳)
    var sending = [];                                                                                      //
    var new_old = req.body.new_old;
if(new_old==1) {
    c.query(query.n_product_Lmenu, null).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            sending.push(row);                                                                              //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        var obj = {sending: sending};                                                                     //
        if (sending[0] != null) {                                                                          //
            res.send(200, obj);                                                                             //
        } else {                                                                                            //
            res.send(500, obj);                                                                              //
        }                                                                                                    //
    });                                                                                                      //
}

    if(new_old==2) {
        c.query(query.d_product_Lmenu, null).on('result', function (res) {                                  //
            res.on('row', function (row) {                                                                    //
                sending.push(row);                                                                              //
            });                                                                                                 //
        }).on('end', function () {                                                                            //
            var obj = {sending: sending};                                                                     //
            if (sending[0] != null) {                                                                          //
                res.send(200, obj);                                                                             //
            } else {                                                                                            //
                res.send(500, obj);                                                                              //
            }                                                                                                    //
        });
    }

};



exports.product_Smenu= function (req, res) {                                                             // 제품 및 기술 등록(select 소메뉴 보여주는곳)
    var sending = [];                                                                                      //
    var id = req.body.category_lv1_id;
    var new_old = req.body.new_old;

    if(new_old==1) {
        c.query(query.n_product_Smenu, [id]).on('result', function (res) {                                  //
            res.on('row', function (row) {                                                                    //
                sending.push(row);                                                                              //
            });                                                                                                 //
        }).on('end', function () {                                                                            //
            var obj = {sending: sending};                                                                     //
            if (sending[0] != null) {                                                                          //
                res.send(200, obj);                                                                             //
            } else {                                                                                            //
                res.send(500, obj);                                                                              //
            }                                                                                                    //
        });                                                                                                      //
    }


    if(new_old==2) {
        c.query(query.d_product_Smenu, [id]).on('result', function (res) {                                  //
            res.on('row', function (row) {                                                                    //
                sending.push(row);                                                                              //
            });                                                                                                 //
        }).on('end', function () {                                                                            //
            var obj = {sending: sending};                                                                     //
            if (sending[0] != null) {                                                                          //
                res.send(200, obj);                                                                             //
            } else {                                                                                            //
                res.send(500, obj);                                                                              //
            }                                                                                                    //
        });                                                                                                      //
    }


};




exports.product_catagory_Smenu_c= function (req, res) {                                                          // 제품 및 기술 카타고리 편집 ( 대메뉴 생성 )
    var L_menu_id = req.body.n_Lmenu;
    var S_menu_name = req.body.n_C_Smenu;
    var new_old = req.body.bb;

    if(new_old==1) {
        c.query(query.n_product_catagory_Smenu_c, [L_menu_id, L_menu_id, S_menu_name]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            c.query(query.n_product_catagory_Smenu_c1, [L_menu_id, L_menu_id, S_menu_name]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
            });
        });
    }



    if(new_old==2) {
        c.query(query.d_product_catagory_Smenu_c, [L_menu_id, L_menu_id, S_menu_name]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            c.query(query.d_product_catagory_Smenu_c1, [L_menu_id, L_menu_id, S_menu_name]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
            });
        });
    }
};







exports.product_catagory_Lmenu_A= function (req, res) {                                                          // 제품 및 기술 카타고리 편집 ( 대메뉴 이름 수정 )
    var L_menu_id = req.body.n_Lmenu1;
    var L_menu_name = req.body.n_A_Lmenu;
    var new_old = req.body.cc;

    if(new_old==1) {
        c.query(query.n_product_catagory_Lmenu_A, [L_menu_name, L_menu_id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            c.query(query.n_product_catagory_Lmenu_A1, [L_menu_name, L_menu_id]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
            });
        });
    }

    if(new_old==2) {
        c.query(query.d_product_catagory_Lmenu_A, [L_menu_name, L_menu_id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            c.query(query.d_product_catagory_Lmenu_A1, [L_menu_name, L_menu_id]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
            });
        });
    }

};




exports.product_catagory_Smenu_A= function (req, res) {                                                          // 제품 및 기술 카타고리 편집 ( 소메뉴 이름 수정 )
    var L_menu_id = req.body.n_Lmenu2;
    var S_menu_id = req.body.n_Smenu;
    var S_menu_name = req.body.n_A_Smenu;
    var new_old = req.body.dd;

    if(new_old==1) {
        c.query(query.n_product_catagory_Smenu_A, [S_menu_name, L_menu_id, S_menu_id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
        });
    }


    if(new_old==2) {
        c.query(query.d_product_catagory_Smenu_A, [S_menu_name, L_menu_id, S_menu_id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
        });
    }
};






exports.product_catagory_Lmenu_D= function (req, res) {                                                          // 제품 및 기술 카타고리 편집 ( 대메뉴 삭제 )
    var L_menu_id = req.body.n_Lmenu3;
    var new_old = req.body.ee;

    if(new_old==1) {
        c.query(query.n_product_catagory_Lmenu_D, [L_menu_id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            c.query(query.n_product_catagory_Lmenu_D1, [L_menu_id]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
            });
        });
    }

    if(new_old==2) {
        c.query(query.d_product_catagory_Lmenu_D, [L_menu_id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            c.query(query.d_product_catagory_Lmenu_D1, [L_menu_id]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
            });
        });
    }

};




exports.product_catagory_Smenu_D= function (req, res) {                                                          // 제품 및 기술 카타고리 편집 ( 소메뉴 삭제 )
    var L_menu_id = req.body.n_Lmenu4;
    var S_menu_id = req.body.n_Smenu1;
    var new_old = req.body.ff;

    if(new_old==1) {
        c.query(query.n_product_catagory_Smenu_D, [L_menu_id, S_menu_id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
        });
    }

    if(new_old==2) {
        c.query(query.d_product_catagory_Smenu_D, [L_menu_id, S_menu_id]).on('result', function (res) {
            res.on('row', function (row) {
            });
        }).on('end', function () {
            res.render('jade/030_New_product/030_04_catagory', {title: 'machine'});
        });
    }
};





exports.product_insert = function (req, res) {                                                          // 고객문의 삭제
    var n = 1;
    var oldfile = req.body.oldfile;
    var imageLength = req.files.file.length;
    var lv1_id = req.body.nn_Lmenu;
    var lv2_id = req.body.nn_Smenu;
    var p_name = req.body.n_name;
    var p_company = req.body.n_company;
    var p_option = req.body.n_option;
    var MultiPath = '';
    var model_name = req.body.model_name;
    var model_option = req.body.model_option;



    c.query(query.product_insert, [lv1_id,lv2_id,lv1_id,lv2_id,p_name,p_company,p_option]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        for (var i = 0; i != imageLength - 1; i++) {
            var memo = req.param('memo')
            var imageFile = req.files.file[i];
            if (imageFile) {
                // 변수를 선언합니다.
                var name = imageFile.name;
                var path = imageFile.path;
                var type = imageFile.type;

                // 이미지 파일 확인
                /* if (type.indexOf('image') != -1) {*/

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath = outputPath;
                MultiPath=MultiPath.substring(77);
                console.log("파일 입력입니다"+MultiPath);
                if(oldfile[i]==1) {
                    c.query(query.product_insert_img, [lv1_id, lv2_id, lv1_id, lv2_id, n, MultiPath,"1"]).on('result', function (res) {
                        res.on('row', function (row) {
                        });
                    }).on('end', function () {

                    });
                }
                else{
                    c.query(query.product_insert_img, [lv1_id, lv2_id, lv1_id, lv2_id, n, MultiPath,null]).on('result', function (res) {
                        res.on('row', function (row) {
                        });
                    }).on('end', function () {

                    });
                }
                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                n++;
                /*res.redirect('/write');*/
                /* } else {
                 // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                 console.log('실패1');
                 fs.unlink(path, function (error) {
                 res.send(400);
                 });
                 }
                 }       */    } else {
                // 파일이 없을 경우
                console.log('실패2');
                res.send(404);
            }
        }
        for(var cc=0; cc<model_name.length;cc++) {
            var qq = cc+1;

            c.query(query.product_model, [lv1_id, lv2_id,lv1_id,lv2_id,qq,model_name[cc],model_option[cc]]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
            });
        }
        res.render('jade/030_New_product/030_03_insert', { title: 'machine' });
    });
};





exports.product_insert2 = function (req, res) {                                                          // 고객문의 삭제
    var n = 1;
    var oldfile = req.body.oldfile;
    var imageLength = req.files.file.length;
    var lv1_id = req.body.nn_Lmenu;
    var lv2_id = req.body.nn_Smenu;
    var p_name = req.body.n_name;
    var p_company = req.body.n_company;
    var p_option = req.body.n_option;
    var MultiPath = '';
    var model_name = req.body.model_name;
    var model_option = req.body.model_option;


    c.query(query.product_insert2, [lv1_id,lv2_id,lv1_id,lv2_id,p_name,p_company,p_option]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {
        for (var i = 0; i != imageLength - 1; i++) {
            var memo = req.param('memo')
            var imageFile = req.files.file[i];
            if (imageFile) {
                // 변수를 선언합니다.
                var name = imageFile.name;
                var path = imageFile.path;
                var type = imageFile.type;

                // 이미지 파일 확인
                /* if (type.indexOf('image') != -1) {*/

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath = outputPath;
                MultiPath=MultiPath.substring(77);
                console.log("파일 입력입니다"+MultiPath);
                if(oldfile[i]==1) {
                    c.query(query.product_insert_img2, [lv1_id, lv2_id, lv1_id, lv2_id, n, MultiPath,"1"]).on('result', function (res) {
                        res.on('row', function (row) {
                        });
                    }).on('end', function () {

                    });
                }
                else{
                    c.query(query.product_insert_img2, [lv1_id, lv2_id, lv1_id, lv2_id, n, MultiPath,null]).on('result', function (res) {
                        res.on('row', function (row) {
                        });
                    }).on('end', function () {

                    });
                }
                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                n++;
                /*res.redirect('/write');*/
                /* } else {
                 // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                 console.log('실패1');
                 fs.unlink(path, function (error) {
                 res.send(400);
                 });
                 }
                 }       */    } else {
                // 파일이 없을 경우
                console.log('실패2');
                res.send(404);
            }
        }
        for(var cc=0; cc<model_name.length;cc++) {
            var qq = cc+1;

            c.query(query.product_model2, [lv1_id, lv2_id,lv1_id,lv2_id,qq,model_name[cc],model_option[cc]]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
            });
        }
        res.render('jade/040_Old_product/040_03_insert', { title: 'machine' });
    });
};




exports.get_product_Amend= function (req, res) {                                                             // 제품 및 기술 등록(select 대메뉴 보여주는곳)
    var sending = [];                                                                                      //
    var lv1_id = req.body.lv1_id;
    var lv2_id = req.body.lv2_id;
    var p_id = req.body.p_id;


 c.query(query.get_product_Amend, [lv1_id,lv2_id,p_id]).on('result', function (res) {                                  //
            res.on('row', function (row) {                                                                    //
                sending.push(row);                                                                              //
            });                                                                                                 //
        }).on('end', function () {                                                                            //
            var obj = {sending: sending};                                                                     //
            if (sending[0] != null) {                                                                          //
                res.send(200, obj);                                                                             //
            } else {                                                                                            //
                res.send(500, obj);                                                                              //
            }                                                                                                    //
        });                                                                                                      //
};





exports.get_product_Amend2= function (req, res) {                                                             // 제품 및 기술 등록(select 대메뉴 보여주는곳)
    var sending = [];                                                                                      //
    var lv1_id = req.body.lv1_id;
    var lv2_id = req.body.lv2_id;
    var p_id = req.body.p_id;


    c.query(query.get_product_Amend2, [lv1_id,lv2_id,p_id]).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            sending.push(row);                                                                              //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        var obj = {sending: sending};                                                                     //
        if (sending[0] != null) {                                                                          //
            res.send(200, obj);                                                                             //
        } else {                                                                                            //
            res.send(500, obj);                                                                              //
        }                                                                                                    //
    });                                                                                                      //
};







exports.product_oldfile= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var sending = [];                                                                                      //
    var lv1_id = req.body.lv1_id;
    var lv2_id = req.body.lv2_id;
    var p_id = req.body.p_id;

    c.query(query.product_oldfile,[lv1_id,lv2_id,p_id]).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            sending.push(row);                                                                              //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        var obj = {sending: sending};                                                                     //
        if (sending[0] != null) {                                                                          //
            res.send(200, obj);                                                                             //
        } else {                                                                                            //
            res.send(500, obj);                                                                              //
        }                                                                                                    //
    });                                                                                                      //
};






exports.product_oldfile2= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var sending = [];                                                                                      //
    var lv1_id = req.body.lv1_id;
    var lv2_id = req.body.lv2_id;
    var p_id = req.body.p_id;

    c.query(query.product_oldfile2,[lv1_id,lv2_id,p_id]).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            sending.push(row);                                                                              //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        var obj = {sending: sending};                                                                     //
        if (sending[0] != null) {                                                                          //
            res.send(200, obj);                                                                             //
        } else {                                                                                            //
            res.send(500, obj);                                                                              //
        }                                                                                                    //
    });                                                                                                      //
};





exports.product_update1= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var n = 1;
    var imageLength = req.files.file.length;
    var MultiPath = '';
    var p_name = req.body.n_name;
    var p_company = req.body.n_company;
    var p_option = req.body.n_option;
    var lv1_id = req.body.n_aaa;
    var lv2_id = req.body.n_bbb;
    var product_id = req.body.n_ccc;
    var oldfile = req.body.oldfile;
    var oldfile_number =[];
    var newfile = req.body.newfile;
    var req_oldfile = req.body.req_oldfile;
    var old_model_del = req.body.old_model_del;
    var old_model_id = req.body.old_model_id;
    var old_model_name = req.body.old_model_name1;
    var old_model_option = req.body.old_model_option1;
    var model_name = req.body.model_name;
    var model_option = req.body.model_option;

    for(var i=0;i<oldfile.length;i++){

        oldfile_number=String(oldfile[i]).split('+');

        if(oldfile_number[1]== "1"){
            c.query(query.n_product_permission_false,[lv1_id,lv2_id,product_id,oldfile_number[0]]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                /*res.render('jade/060_notice/060_00_notice_List', {title: 'List'});*/
            });
        }

        else if(req_oldfile[i]=="1"){
            c.query(query.n_product_representative_img_update,["1",lv1_id,lv2_id,product_id,oldfile[i]]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                /*res.render('jade/060_notice/060_00_notice_List', {title: 'List'});*/
            });
        }

        else if(req_oldfile[i]=="0"){
            c.query(query.n_product_representative_img_update,[null,lv1_id,lv2_id,product_id,oldfile[i]]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                /*res.render('jade/060_notice/060_00_notice_List', {title: 'List'});*/
            });
        }

    }                                                                                              //
    c.query(query.n_product_update,[p_name,p_company,p_option,lv1_id,lv2_id,product_id]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {

        for (var i = 0; i != imageLength - 1; i++) {
            var memo = req.param('memo')
            var imageFile = req.files.file[i];
            if (imageFile) {
                // 변수를 선언합니다.
                var name = imageFile.name;
                var path = imageFile.path;
                var type = imageFile.type;

                // 이미지 파일 확인
                /* if (type.indexOf('image') != -1) {*/

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath = outputPath;
                MultiPath=MultiPath.substring(77);
                console.log("파일 입력입니다"+MultiPath);

                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                n++;
                /*res.redirect('/write');*/
                /* } else {
                 // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                 console.log('실패1');
                 fs.unlink(path, function (error) {
                 res.send(400);
                 });
                 }
                 }       */    } else {
                // 파일이 없을 경우
                console.log('실패2');
                res.send(404);
            }
            if(newfile[i]==1) {
                c.query(query.product_Amend_insert_img, [lv1_id, lv2_id, product_id, lv1_id, lv2_id, product_id,MultiPath,"1"]).on('result', function (res) {
                    res.on('row', function (row) {
                    });
                }).on('end', function () {

                });
            }
            else{
                c.query(query.product_Amend_insert_img, [lv1_id, lv2_id, product_id, lv1_id, lv2_id, product_id,MultiPath,null]).on('result', function (res) {
                    res.on('row', function (row) {
                    });
                }).on('end', function () {

                });
            }
        }


        for(var qa=0;qa<old_model_del.length;qa++) {
            if(old_model_del[qa]==0){


            c.query(query.n_model_update, [null,old_model_name[qa],old_model_option[qa],lv1_id, lv2_id,product_id, old_model_id[qa]]).on('result', function (res) {                                  //
                res.on('row', function (row) {                                                                    //
                });                                                                                                 //
            }).on('end', function () {                                                                            //
                //
            });
        }
            else if(old_model_del[qa]==1){
                c.query(query.n_model_update_del, [1,lv1_id, lv2_id,product_id,old_model_id[qa]]).on('result', function (res) {                                  //
                    res.on('row', function (row) {                                                                    //
                    });                                                                                                 //
                }).on('end', function () {                                                                            //
                    //
                });
            }
        }


        for(var cc=0; cc<model_name.length;cc++) {
            if (cc == 0) {

            }
            else {
                c.query(query.product_model_insert, [lv1_id, lv2_id, product_id, lv1_id, lv2_id, product_id, model_name[cc], model_option[cc]]).on('result', function (res) {
                    res.on('row', function (row) {
                    });
                }).on('end', function () {
                });
            }
        }

        res.render('jade/030_New_product/030_03_insert', { title: 'machine' });
    });
};






exports.product_update2= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var n = 1;
    var imageLength = req.files.file.length;
    var MultiPath = '';
    var p_name = req.body.n_name;
    var p_company = req.body.n_company;
    var p_option = req.body.n_option;
    var lv1_id = req.body.n_aaa;
    var lv2_id = req.body.n_bbb;
    var product_id = req.body.n_ccc;
    var oldfile = req.body.oldfile;
    var oldfile_number =[];
    var newfile = req.body.newfile;
    var req_oldfile = req.body.req_oldfile;
    var old_model_del = req.body.old_model_del;
    var old_model_id = req.body.old_model_id;
    var old_model_name = req.body.old_model_name1;
    var old_model_option = req.body.old_model_option1;
    var model_name = req.body.model_name;
    var model_option = req.body.model_option;

    for(var i=0;i<oldfile.length;i++){

        oldfile_number=String(oldfile[i]).split('+');

        if(oldfile_number[1]== "1"){
            c.query(query.n_product_permission_false2,[lv1_id,lv2_id,product_id,oldfile_number[0]]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                /*res.render('jade/060_notice/060_00_notice_List', {title: 'List'});*/
            });
        }

        else if(req_oldfile[i]=="1"){
            c.query(query.n_product_representative_img_update2,["1",lv1_id,lv2_id,product_id,oldfile[i]]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                /*res.render('jade/060_notice/060_00_notice_List', {title: 'List'});*/
            });
        }

        else if(req_oldfile[i]=="0"){
            c.query(query.n_product_representative_img_update2,[null,lv1_id,lv2_id,product_id,oldfile[i]]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {
                /*res.render('jade/060_notice/060_00_notice_List', {title: 'List'});*/
            });
        }

    }                                                                                              //
    c.query(query.n_product_update2,[p_name,p_company,p_option,lv1_id,lv2_id,product_id]).on('result', function (res) {
        res.on('row', function (row) {
        });
    }).on('end', function () {

        for (var i = 0; i != imageLength - 1; i++) {
            var memo = req.param('memo')
            var imageFile = req.files.file[i];
            if (imageFile) {
                // 변수를 선언합니다.
                var name = imageFile.name;
                var path = imageFile.path;
                var type = imageFile.type;

                // 이미지 파일 확인
                /* if (type.indexOf('image') != -1) {*/

                console.log('성공');
                // 이미지 파일의 경우: 파일 이름을 변경합니다.
                var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
                MultiPath = outputPath;
                MultiPath=MultiPath.substring(77);
                console.log("파일 입력입니다"+MultiPath);

                var ws = fs.createWriteStream(outputPath);
                fs.createReadStream(path).pipe(ws);
                n++;
                /*res.redirect('/write');*/
                /* } else {
                 // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
                 console.log('실패1');
                 fs.unlink(path, function (error) {
                 res.send(400);
                 });
                 }
                 }       */    } else {
                // 파일이 없을 경우
                console.log('실패2');
                res.send(404);
            }
            if(newfile[i]==1) {
                c.query(query.product_Amend_insert_img2, [lv1_id, lv2_id, product_id, lv1_id, lv2_id, product_id,MultiPath,"1"]).on('result', function (res) {
                    res.on('row', function (row) {
                    });
                }).on('end', function () {

                });
            }
            else{
                c.query(query.product_Amend_insert_img2, [lv1_id, lv2_id, product_id, lv1_id, lv2_id, product_id,MultiPath,null]).on('result', function (res) {
                    res.on('row', function (row) {
                    });
                }).on('end', function () {

                });
            }
        }



        for(var qa=0;qa<old_model_del.length;qa++) {
            if(old_model_del[qa]==0){
                c.query(query.n_model_update2, [null,old_model_name[qa],old_model_option[qa],lv1_id, lv2_id,product_id, old_model_id[qa]]).on('result', function (res) {                                  //
                    res.on('row', function (row) {                                                                    //
                    });                                                                                                 //
                }).on('end', function () {                                                                            //
                    //
                });
            }
            else if(old_model_del[qa]==1){
                c.query(query.n_model_update2_del, [1,lv1_id, lv2_id,product_id,old_model_id[qa]]).on('result', function (res) {                                  //
                    res.on('row', function (row) {                                                                    //
                    });                                                                                                 //
                }).on('end', function () {                                                                            //
                    //
                });
            }
        }


        for(var cc=0; cc<model_name.length;cc++) {
            if (cc == 0) {

            }
            else {
                c.query(query.product_model_insert2, [lv1_id, lv2_id, product_id, lv1_id, lv2_id, product_id, model_name[cc], model_option[cc]]).on('result', function (res) {
                    res.on('row', function (row) {
                    });
                }).on('end', function () {
                });
            }
        }

        res.render('jade/040_Old_product/040_03_insert', { title: 'machine' });
    });
};







exports.get_n_model= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var sending = [];                                                                                      //
    var lv1_id = req.body.lv1_id;
    var lv2_id = req.body.lv2_id;
    var p_id = req.body.p_id;

    c.query(query.get_n_model,[lv1_id,lv2_id,p_id]).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            sending.push(row);                                                                              //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        var obj = {sending: sending};                                                                     //
        if (sending[0] != null) {                                                                          //
            res.send(200, obj);                                                                             //
        } else {                                                                                            //
            res.send(500, obj);                                                                              //
        }                                                                                                    //
    });                                                                                                      //
};







exports.get_n_model2= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var sending = [];                                                                                      //
    var lv1_id = req.body.lv1_id;
    var lv2_id = req.body.lv2_id;
    var p_id = req.body.p_id;

    c.query(query.get_n_model2,[lv1_id,lv2_id,p_id]).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            sending.push(row);                                                                              //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        var obj = {sending: sending};                                                                     //
        if (sending[0] != null) {                                                                          //
            res.send(200, obj);                                                                             //
        } else {                                                                                            //
            res.send(500, obj);                                                                              //
        }                                                                                                    //
    });                                                                                                      //
};





exports.d_product_del= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var lv1_id = req.body.code1;
    var lv2_id = req.body.code2;
    var p_id = req.body.code3;

    console.log(lv1_id+lv2_id+p_id);
    c.query(query.d_product_del,[lv1_id,lv2_id,p_id]).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
                                                                                 //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        res.render('machine/machine_jade/n_product_insert', {title: 'machine'});
    });                                                                                                      //
};


exports.n_product_del= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var lv1_id = req.body.code1;
    var lv2_id = req.body.code2;
    var p_id = req.body.code3;

    console.log(lv1_id+lv2_id+p_id);
    c.query(query.n_product_del,[lv1_id,lv2_id,p_id]).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        res.render('machine/machine_jade/n_product_insert', {title: 'machine'});
    });                                                                                                      //
};




exports.product_view= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var sending = [];                                                                                      //
    var lv1_id = req.body.lv1_id;
    var lv2_id = req.body.lv2_id;

    c.query(query.product_view,[lv1_id,lv2_id]).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            sending.push(row);                                                                              //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        var obj = {sending: sending};                                                                     //
        if (sending[0] != null) {                                                                          //
            res.send(200, obj);                                                                             //
        } else {                                                                                            //
            res.send(500, obj);                                                                              //
        }                                                                                                    //
    });                                                                                                      //
};



exports.recommend_menu= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var sending = [];                                                                                      //
    c.query(query.recommend_menu).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            sending.push(row);                                                                              //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        var obj = {sending: sending};                                                                     //
        if (sending[0] != null) {                                                                          //
            res.send(200, obj);                                                                             //
        } else {                                                                                            //
            res.send(500, obj);                                                                              //
        }                                                                                                    //
    });                                                                                                      //
};





exports.recommend_insert= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var old_lv1 = req.body.old_lv1;
    var old_lv2 = req.body.old_lv2;
    var old_lv3 = req.body.old_lv3;
    var old_permission = req.body.old_permission;


    var new_lv1 = req.body.new_lv1;
    var new_lv2 = req.body.new_lv2;
    var new_lv3 = req.body.new_lv3;

    console.log(old_lv1.length);
    console.log(old_lv1[1]);
    console.log(old_lv2[1]);
    console.log(old_lv3[1]);
    console.log(old_permission[1]);


    console.log("  ");
    console.log(new_lv1[0]);
    console.log(new_lv2[0]);
    console.log(new_lv3[0]);

if(old_lv1.length!==1){
for(var i=1; i<old_lv1.length+1;i++) {

    if (old_permission[i] == 1) {
        c.query(query.recommend_insert_update, [old_lv1[i], old_lv2[i], old_lv3[i]]).on('result', function (res) {                                  //
            res.on('row', function (row) {                                                                                                       //
                //
            });                                                                                                                                    //
        }).on('end', function () {                                                                                                               //

        });
    }
    else {
        c.query(query.recommend_insert_update2, [old_lv1[i], old_lv2[i], old_lv3[i]]).on('result', function (res) {                                  //
            res.on('row', function (row) {                                                                                                       //
                //
            });                                                                                                                                    //
        }).on('end', function () {                                                                                                               //

        });
    }
}
}
    if(new_lv1.length!==1){
    for(var i=1; i<new_lv1.length;i++) {
console.log("aaaaaa"+new_lv1[i]);
        console.log("aaaaaa"+new_lv2[i]);
        console.log("aaaaaa"+new_lv3[i]);
            c.query(query.recommend_insert, [new_lv1[i], new_lv2[i], new_lv3[i]]).on('result', function (res) {                                  //
                res.on('row', function (row) {                                                                                                       //
                                                                                                                                                         //
                });                                                                                                                                    //
            }).on('end', function () {                                                                                                               //

            });

    }
}

    res.render('jade/040_Old_product/040_04_recommend', { title: 'machine' });
};








exports.main_img_list= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var sending = [];                                                                                      //
    c.query(query.main_img_list).on('result', function (res) {                                  //
        res.on('row', function (row) {                                                                    //
            sending.push(row);                                                                              //
        });                                                                                                 //
    }).on('end', function () {                                                                            //
        var obj = {sending: sending};                                                                     //
        if (sending[0] != null) {                                                                          //
            res.send(200, obj);                                                                             //
        } else {                                                                                            //
            res.send(500, obj);                                                                              //
        }                                                                                                    //
    });                                                                                                      //
};






exports.main_img_insert= function (req, res) {                                                             // 제품 및 기술 등록 기존에 있는 파일 불러옴
    var old_file_order = req.body.old_file_order;
    var old_file_id = req.body.old_file_id;
    var old_file_del = req.body.old_file_del;
    var new_file_order = req.body.new_file_order;
    var imageLength = req.files.file.length;

    var MultiPath = '';

    for (var i = 0; i != imageLength - 1; i++) {
        var memo = req.param('memo')
        var imageFile = req.files.file[i];
        if (imageFile) {
            // 변수를 선언합니다.
            var name = imageFile.name;
            var path = imageFile.path;
            var type = imageFile.type;

            // 이미지 파일 확인
            /* if (type.indexOf('image') != -1) {*/

            console.log('성공');
            // 이미지 파일의 경우: 파일 이름을 변경합니다.
            var outputPath = __dirname + '/../../public/files/' + Date.now() + '_' + name;
            MultiPath = outputPath;
            MultiPath=MultiPath.substring(77);
            console.log("파일 입력입니다"+MultiPath);

            var ws = fs.createWriteStream(outputPath);
            fs.createReadStream(path).pipe(ws);
            /*res.redirect('/write');*/
            /* } else {
             // 이미지 파일이 아닌 경우: 파일 이름을 제거합니다.
             console.log('실패1');
             fs.unlink(path, function (error) {
             res.send(400);
             });
             }
             }       */    } else {
            // 파일이 없을 경우
            console.log('실패2');
            res.send(404);
        }
            c.query(query.main_img_insert, [MultiPath,new_file_order[i]]).on('result', function (res) {
                res.on('row', function (row) {
                });
            }).on('end', function () {

            });
    }

    if(old_file_del[0]!==99) {
        for (var i = 0; i < old_file_del.length; i++) {

            if (old_file_del[i] == 0) {
                c.query(query.main_img_update, [old_file_order[i], null, old_file_id[i]]).on('result', function (res) {
                    res.on('row', function (row) {
                    });
                }).on('end', function () {

                });
            }
            else {
                c.query(query.main_img_update, [old_file_order[i], 1, old_file_id[i]]).on('result', function (res) {
                    res.on('row', function (row) {
                    });
                }).on('end', function () {

                });
            }
        }
    }


    res.render('jade/010_main/010_02_mainimg_edit', { title: 'machine' });
};