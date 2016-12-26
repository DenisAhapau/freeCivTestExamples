/**
 * Created by Denis Ahapau on 11/16/2016.
 */
var fs = require ('fs');
const path =require('path');
var moment = require('moment');


function screenDatePostfix() {
    let date = moment().format('DMMMYYYY-hh-mm-ss');
    date = date.toString().toLowerCase();
    //     .slice(0, 17)
    //     .replace(/ /g, '')
    //     .replace(/:/g, '')
    //     .toLowerCase()
    return date;
}

const folderName = "TestRun-" + screenDatePostfix();

module.exports = {
    folderName,
    takeScreenShotNow : function (name, folderType) {
        if (!fs.existsSync(path.join(__dirname,'../../screens/' + folderName))){
            fs.mkdirSync(path.join(__dirname,'../../screens/' + folderName));
        }
        if (!fs.existsSync(path.join(__dirname,'../../screens/' + folderName+'/'+ folderType))){
            fs.mkdirSync(path.join(__dirname,'../../screens/' + folderName+'/'+ folderType));
        }
        driver.takeScreenshot().then(function (data) {
            var stream = fs.createWriteStream(path.join(__dirname,'../../screens/' + folderName + '/'+ folderType + '/' + name + screenDatePostfix()+ '.png' ));
            stream.write(new Buffer(data, 'base64'));
            stream.end();
        });
    },
}