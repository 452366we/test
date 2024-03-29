const express=require('express');
const pool=require('../pool.js');
let router=express.Router();

router.get("/v1/login/:uname&:upwd",(req,res)=>{
    let $uname=req.params.uname;
    let $upwd=req.params.upwd;

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

router.get("/v1/userlist/",(req,res)=>{
    let sql="select * from xz_user";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//根据uid删除用户
router.delete("/v1/deluser/:uid",(req,res)=>{
    let $uid=req.params.uid;
    let sql="delete from xz_user where uid=?";
    pool.query(sql,[$uid],(err,result)=>{
        if(err) throw err;
        res.send("1");
    })
})
//查询用户
router.get("/v1/queryuser/:uid",(req,res)=>{
    let $uid=req.params.uid;
    let sql="select * from xz_user where uid=?";
    pool.query(sql,[$uid],(err,result)=>{
        if(result.length>0){
            res.send(result);
        }else{
            res.send("0");
        }
    })
})
//修改用户信息的接口 put
router.put("/v1/updateuser",(req,res)=>{
    let $uid=req.body.uid;
    let $uname=req.body.uname;
    let $upwd=req.body.upwd;
    let $phone=req.body.phone;
    let $email=req.body.email;
    let $user_name=req.body.user_name;
    let $gender=req.body.gender;

    let sql="update xz_user set uname=?,upwd=?,phone=?,email=?,user_name=?,gender=? where uid=?";
    pool.query(sql,[$uname,$upwd,$phone,$email,$user_name,$gender,$uid],(err,result)=>{
        if(err) throw err;
        res.send("1");
    })
})

module.exports=router;