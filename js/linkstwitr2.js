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
var links = ["https://t.co/1YnoaeivL1",
",https://t.co/ydVCWGIXn2",
",https://t.co/e9usTT3tka",
",https://t.co/Ju2cSCdvHJ",
"https://t.co/G3NcL1YXtL",
"https://t.co/tiqdjnxqJq",
"https://t.co/gdJ3H049e2",
"https://t.co/stzAgoEBsL",
"https://t.co/Js1ecxGXjv",
"https://t.co/q27btSU35p",
"https://t.co/yFe8uBcJ4N",
"https://t.co/wVUx0ZbCcY",
"https://t.co/x9zD7yVyEk",
"https://t.co/F3lBIZp6dG",
"https://t.co/XAf1DzRfuZ",
"https://t.co/I0eGiKujh1",
"https://t.co/1YnoaeivL1",
"https://t.co/0m843Ke1eb",		
"https://t.co/D7m7lO3mVC",		
"https://t.co/LvN2aPvHIy",
"https://t.co/BixGUvNcco",		
"https://t.co/gRfgeUsdgq",		
"https://t.co/oUP5OdfaBc",
"https://t.co/LpRpkbZbYO",		
"https://t.co/UqZCeLvbqT",		
"https://t.co/fHQyUG701k",
"https://t.co/WC26dyqC1q",	
"https://t.co/68kBbfg3h6",	
"https://t.co/Tp2qZQDATv",	
"https://t.co/8fFfNdbtpV",	
"https://t.co/ICN35ohZVS",	
"https://t.co/lGbiLZYu75",	
"https://t.co/0lkHya07fv",	
"https://t.co/G5MIAkHEp4",	
"https://t.co/fRjqhEEUYo",
"https://t.co/sNt9s2GiHN",	
"https://t.co/iLy4gZkh1B",	
"https://t.co/9g29Vd8KT1",
"https://t.co/aahQvcL33A",	
"https://t.co/E8N6xo3ObF",	
"https://t.co/juPnybD4ZI",	
"https://t.co/hiGt8A0UaC",	
"https://t.co/2N9bOCdKjo",	
"https://t.co/uRuGPjjl2c",	
"https://t.co/27LYqiEXH0",	
"https://t.co/r6vDxNGD8x",	
"https://t.co/vr6ePxURrq",	
"https://t.co/o7GxUEOkYU",	
"https://t.co/XVBYSKNyBQ",
"https://t.co/xYkgggDysH",	
"https://t.co/w6AIPKaE2E",
"https://t.co/jgbELcOEGY",	
"https://t.co/8AhLXExeRU",	
"https://t.co/tWGgVOleZ6",
"https://t.co/gqCzVwxjuL",	
"https://t.co/iFtvzvGbfi",	
"https://t.co/QXoxFhwXHL",
"https://t.co/KVyIbExJgM",	
"https://t.co/SJ2XVQGkTt",
"https://t.co/CUYfwJLRnH",	
"https://t.co/EHucUTADhfv",	
"https://t.co/pW1kCqBx1a",
"https://t.co/moKvgn5Ikr",	
"https://t.co/O0lQ0iPW6j",	
"https://t.co/yxoWeLRGJB",	
"https://t.co/hjGO9DCNZA",
"https://t.co/fH9NHNBLul",	
"https://t.co/clYL5upqia",	
"https://t.co/6GEnCPjmjj",
"https://t.co/wBUbRJnqXm",	
"https://t.co/PIh624c8HF",	
"https://t.co/MyjUiVAkWP",
"https://t.co/S1xfo2fDI0",	
"https://t.co/7hiaNERPRk",	
"https://t.co/j2SFy63apS",
"https://t.co/S3ElLTXC1U",	
"https://t.co/xWpQc4s0Tj",	
"https://t.co/C6kkj8KMsM",	
"https://t.co/UhWL1OqM6f",	
"https://t.co/caXAbhQK0b",
"https://t.co/zgc1jw2qBr",	
"https://t.co/NoUVhv7K7Q",
"https://t.co/aQvdWHFR3P",	
"https://t.co/ULI4KYBPNK",	
"https://t.co/aKN4kohJsw",
"https://t.co/65kNE546x9",	
"https://t.co/mW2fSyozLQ",	
"https://t.co/uSJadbZP92",
"https://t.co/JUlKLbcHUb",	
"https://t.co/ZITxX94XCX",	
"https://t.co/lPuxQPn2Wa",	
"https://t.co/DAzDMNIBVj",	
"https://t.co/PZKpsBjGG0",	
"https://t.co/nVwQVCxCae",
"https://t.co/re6HL4IUU6",	
"https://t.co/xCKkcBuYXx",	
"https://t.co/UFVtlbOfIO",
"https://t.co/jJ26UGsaHh",	
"https://t.co/sELAkGtd9u",	
"https://t.co/aUApHtuVOD",
"https://t.co/w94xZJXSmc",	
"https://t.co/I2nHanD8wl",	
"https://t.co/yQFLo0UGoF",
"https://t.co/csRb6gJ0e9",	
"https://t.co/vY0XDNonlm",
"https://t.co/YzscIbNnyB",	
"https://t.co/FCDRhb0wTJ",
"https://t.co/6Xpv8GGFiT",	
"https://t.co/DLHQAlITb6",	
"https://t.co/KVKJJyDkjy",
"https://t.co/a3Jb5Dc6nN",	
"https://t.co/RC0bOxzJBQ",	
"https://t.co/AlTXchZfsD",
"https://t.co/f1KmpykLLY",	
"https://t.co/6ibC03KRBh",	
"https://t.co/uruTfzHGk8",
"https://t.co/aP3elciOla",	
"https://t.co/rti1eG2Dxf",	
"https://t.co/CODymovSV3",	
"https://t.co/YZYXEIr3qA",
"https://t.co/YZYXEIr3qA"];
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
