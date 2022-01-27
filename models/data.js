const fs = require ('fs')
const path = require ('path');
const filePath = path.join(path.dirname(require.main.filename), 'data','data.json');


module.exports = class Data {
    constructor(personalinfo,education,technical_skills,soft_skills,imageUrl){
        this.personalinfo= personalinfo;
        this.education = education;
       this.technical_skills=technical_skills;
       this.soft_skills=soft_skills;
       this.imageUrl = imageUrl;

    }


    saveData(){
        //read file content first
        fs.readFile(filePath,(error ,fileContent)=>{
            let datas = [];

            if(!error){
                datas = JSON.parse(fileContent);
            }
            else{
                console.log(error);
            }

            datas.push(this);  //newWish.saveWish();


            fs.writeFile(filePath, JSON.stringify(datas), (error)=>{
                if(!error){
                    console.log('Datas saved!!!');
                }
            })
        })
    }
    
static fetchDatas(callBack){
    fs.readFile(filePath,(error,fileContent)=>{
        if(error){
            callBack([]);
        }

        callBack (JSON.parse(fileContent));
    });
}
}