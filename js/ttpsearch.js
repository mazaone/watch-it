window.onload=function(images){
var imgbtn = document.getElementById("image-button");
var lnkbtn = document.getElementById("link-button");
var inputs = document.getElementsByClassName("image-input");
var link = document.getElementsByClassName("link-input");

var names = ["https://i.imgur.com/U8Uteoe.png","https://i.imgur.com/U1Fi72h.png","https://i.imgur.com/fSJcH6A.png",
"https://i.imgur.com/0E3OXJ0.png",
"https://i.imgur.com/8K8njZa.png",
"https://i.imgur.com/oe5lfK9.png",
"https://i.imgur.com/UyJ91ZJ.png",
"https://i.imgur.com/CCXxQHH.png",
"https://i.imgur.com/ZOTU5sZ.png",
"https://i.imgur.com/DSVeCLV.png",
"https://i.imgur.com/1o3SKY6.png",
"https://i.imgur.com/tbSTA3T.png",
"https://i.imgur.com/flXMAKK.png",
"https://i.imgur.com/WgxGGU0.png",
"https://i.imgur.com/whzALsM.png",
"https://i.imgur.com/QgR9DcY.png",
"https://i.imgur.com/xY18Uxs.png",
"https://i.imgur.com/Cy5ZA6b.png",
"https://i.imgur.com/9gCf3yX.png",
"https://i.imgur.com/WvUIDEO.png",
"https://i.imgur.com/DLV2qDW.png",
"https://i.imgur.com/EEMnRzK.png",
"https://i.imgur.com/XDGSitm.png",
"https://i.imgur.com/owvoHAr.png",
"https://i.imgur.com/MxCIcJn.png",
"https://i.imgur.com/l4ql7Fj.png",
"https://i.imgur.com/N6ymY4T.png",
"https://i.imgur.com/KfeJcFN.png",
"https://i.imgur.com/fXI5yMR.png",
"https://i.imgur.com/4TpVaaS.png",
"https://i.imgur.com/4bvF2us.png",
"https://i.imgur.com/CWS41i8.png",
"https://i.imgur.com/Qt2WJvF.png",
"https://i.imgur.com/8yFc5kB.png",
"https://i.imgur.com/3R5sMPi.png",
"https://i.imgur.com/enr7LCc.png",
"https://i.imgur.com/CCG9eBh.png",
"https://i.imgur.com/FNWFMtw.png",
"https://i.imgur.com/vKeBhJR.png",
"https://i.imgur.com/PNk4Njn.png",
"https://i.imgur.com/wMI7Agy.png",
"https://i.imgur.com/8hvG1Jg.png",
"https://i.imgur.com/CVC2FEy.png",
"https://i.imgur.com/Tz2OQmj.png"];
var links = ["http://bit.ly/rentacdupm",
"http://bit.ly/lifeinsurnce",
"http://bit.ly/rentacdupm",
"http://bit.ly/lifeinsurnce",
"http://bit.ly/2SRiRP2",
"http://bit.ly/2K4a1KJ"
"http://bit.ly/rentacdupm",
"http://bit.ly/lifeinsurnce",
"http://bit.ly/rentacdupm",
"http://bit.ly/lifeinsurnce",
"http://bit.ly/2SRiRP2",
"http://bit.ly/2K4a1KJ"
"http://bit.ly/2SRiRP2",
"http://bit.ly/2K4a1KJ",
"http://bit.ly/2SRiRP2",
"http://bit.ly/2K4a1KJ"];
imgbtn.addEventListener("click", function(images) {
    Array.prototype.forEach.call(inputs, function (input) {
        input.value = names[Math.floor(Math.random() * names.length)];
    });
});
lnkbtn.addEventListener("click", function(images) {
    Array.prototype.forEach.call(link, function (input) {
        input.value = links[Math.floor(Math.random() * links.length)];
    });
});
}
