var express = require('express');
var router = express.Router();
var getProject=require('../server/getProject');
/* GET home page. */
router.get('/monitor', function(req, res) {
    let role_id=req.user[0].role_id,
        owner_id=req.user[0].owner_id,
        user_id=req.user[0].id;
    switch (role_id){
        case 1:
            getProject.getAllProject(function (result) {
                res.render('index/monitor',result);
            });
            break;
        case 2:
            getProject.getAllProject(function (result) {
                res.render('index/monitor',result);
            });
            /*getProject.getSuperAdminProject(user_id,function (result) {
                res.render('index/monitor',result);
            });*/
            break;
        case 3:
            getProject.getSuperAdminProject(user_id,function (result) {
                res.render('index/monitor',result);
            });
            break;
        case 4:
            getProject.getAdminProject(user_id,function (result) {
                res.render('index/monitor',result);
            });
            break;
        case 5:
            getProject.getAdminProject(user_id,function (result) {
                res.render('index/monitor',result);
            });
            break;
    }


});
router.get('/control', function(req, res) {
    let role_id=req.user[0].role_id,
        owner_id=req.user[0].owner_id,
        user_id=req.user[0].id;
    switch (role_id){
        case 1:
            getProject.getAllProject(function (result) {
                res.render('index/control',result);
            });
            break;
        case 2:
            getProject.getAllProject(function (result) {
                res.render('index/control',result);
            });
            // getProject.getSuperAdminProject(user_id,function (result) {
            //     res.render('index/control',result);
            // });
            break;
        case 3:
            getProject.getSuperAdminProject(user_id,function (result) {
                res.render('index/control',result);
            });
            break;
        case 4:
            getProject.getAdminProject(user_id,function (result) {
                res.render('index/control',result);
            });
            break;
        case 5:
            getProject.getAdminProject(user_id,function (result) {
                res.render('index/control',result);
            });
            break;
    }


});
router.get('/monitored', function(req, res) {
    let role_id=req.user[0].role_id,
        owner_id=req.user[0].owner_id,
        user_id=req.user[0].id;
    switch (role_id){
        case 1:
            getProject.getAllCameraProject(function (result) {
                res.render('index/monitored',result);
            });
            break;
        case 2:
            getProject.getAllCameraProject(function (result) {
                res.render('index/monitored',result);
            });
            // getProject.getSuperAdminProject(user_id,function (result) {
            //     res.render('index/monitored',result);
            // });
            break;
        case 3:
            getProject.getSuperAdminProject(user_id,function (result) {
                res.render('index/monitored',result);
            });
            break;
        case 4:
            getProject.getAdminProject(user_id,function (result) {
                res.render('index/monitored',result);
            });
            break;
        case 5:
            getProject.getAdminProject(user_id,function (result) {
                res.render('index/monitored',result);
            });
            break;
    }

    // res.render('index/monitored');
 });
module.exports = router;
