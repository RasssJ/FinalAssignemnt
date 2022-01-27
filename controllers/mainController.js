const date = require('../getDate.js');
const { fetchDatas } = require('../models/data');
const Data = require('../models/data');

exports.getMainPage =  (request, response)=>{
    Data.fetchDatas(Datas =>{
        console.log(Datas);



        let today = date.getDate();
        response.render('index', {dateToRender: today, myDatas: Datas});
    })


}




exports.getAdminPage = (req,res)=>{
    res.render('admin');
};



exports.postData = (req,res)=>{
    console.log(req.body.userData);
    const newData = new Data(req.body.personalinfo,req.body.education,req.body.technical_skills,req.body.soft_skills,req.file.filename);
    
    newData.saveData();

    res.redirect('/');
}


