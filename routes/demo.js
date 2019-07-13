const express=require('express');
const pool=require('../pool.js');
let router=express.Router();

router.get('/get_login',(req,res)=>{
    //获取参数
    //查询数据库，返回响应
    let $uname=req.query.uname;
    let $upwd=req.query.upwd;
    if(!$uname){
        res.send('用户名不能为空');
        return;
    };
    if(!$upwd){
        res.send('密码不能为空');
        return;
    };
    //查询数据库，返回响应
    let sql="select * from xz_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    })
})
//restful规则的登录
// /接口名称/:参数值&:参数值
/*
router.get("/login/:uname&:upwd",(req,res)=>{
    //获取用户名和密码
    let $uname=req.params.uname;
    let $upwd=req.params.upwd;
    //查询数据库，返回响应
    let sql="select * from xz_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    })
})
*/
//4.post登录
router.post("/post_login",(req,res)=>{
    //获取前台数据
    let $uname=req.body.uname;
    let $upwd=req.body.upwd;
    if(!$uname){
        res.send("用户名为空");
        return;
    }
    if(!$upwd){
        res.send("密码为空");
        return;
    }
    //查询数据库
    let sql="select * from xz_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
})

module.exports=router;