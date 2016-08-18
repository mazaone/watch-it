window.onload=function(images){
var imgbtn = document.getElementById("image-button");
var lnkbtn = document.getElementById("link-button");
var inputs = document.getElementsByClassName("image-input");
var link = document.getElementsByClassName("link-input");

var names = ["http://i.imgur.com/SQAwdro.png",
"http://i.imgur.com/XLHGeJ7.png",
"http://i.imgur.com/3dpSL0y.png",
"http://i.imgur.com/7zjCOoC.png",
"http://i.imgur.com/iQyoZGB.png",
"http://i.imgur.com/baVsvhc.png",
"http://i.imgur.com/16FruAk.png",
"http://i.imgur.com/iWYpWu3.png",
"http://i.imgur.com/xIR4uDt.png",
"http://i.imgur.com/7MBESdh.png",
"http://i.imgur.com/jtPps7E.jpg",
"http://i.imgur.com/CRghRli.jpg",
"http://i.imgur.com/3n1dd1y.jpg",
"http://i.imgur.com/xt2jCWV.jpg",
"http://i.imgur.com/djPNIld.jpg",
"http://i.imgur.com/8cLugRG.jpg",
"http://i.imgur.com/VcdNHIb.jpg",
"http://i.imgur.com/wLtvFS8.jpg",
"http://i.imgur.com/gNTFrV2.jpg",
"http://i.imgur.com/j0Pmk8A.png",
"http://i.imgur.com/nGXPAh4.png",
"http://i.imgur.com/hMBcfuS.png",
"http://i.imgur.com/EtU7ZE8.png",
"http://i.imgur.com/BH85z9W.png",
"http://i.imgur.com/lDTx03G.jpg",
"http://i.imgur.com/0a6jo6D.jpg",
"http://i.imgur.com/XJM3l9c.jpg",
"http://i.imgur.com/cODtF6X.jpg",
"http://i.imgur.com/GzLGCNa.jpg",
"http://i.imgur.com/1srqcIM.jpg",
"http://i.imgur.com/JDqHhE6.jpg",
"http://i.imgur.com/OgZWOjS.jpg",
"http://i.imgur.com/BrfbIh0.jpg",
"http://i.imgur.com/oy8E0p7.jpg",
"http://i.imgur.com/PRx05HC.jpg",
"http://i.imgur.com/0CQbpm3.jpg",
"http://i.imgur.com/QjBTJax.jpg",
"http://i.imgur.com/jnvPgKK.jpg",
"http://i.imgur.com/kHt8PTB.jpg",
"http://i.imgur.com/H2cwFB8.jpg",
"http://i.imgur.com/sPAClO6.jpg",
"http://i.imgur.com/P0nA8Ya.jpg",
"http://i.imgur.com/rSkeaRV.jpg",
"http://i.imgur.com/TE8r5T6.jpg",
"http://i.imgur.com/mtM3zK0.jpg",
"http://i.imgur.com/WGvakWk.jpg",
"http://i.imgur.com/bxCUHad.jpg",
"http://i.imgur.com/tePQb4d.jpg",
"http://i.imgur.com/nIChSOm.jpg",
"http://i.imgur.com/S7nbQBN.png",
"http://i.imgur.com/lfM4JDH.jpg",
"http://i.imgur.com/1KkX1v2.jpg",
"http://i.imgur.com/supUC1y.jpg",
"http://i.imgur.com/0BabUMg.jpg",
"http://i.imgur.com/WONKyZD.jpg",
"http://i.imgur.com/Ah8iEmU.jpg",
"http://i.imgur.com/rs75L9R.jpg",
"http://i.imgur.com/W12hVdy.jpg",
"http://i.imgur.com/pihXpAf.jpg",
"http://i.imgur.com/99S4Jih.jpg",
"http://i.imgur.com/O7Cnaan.jpg",
"http://i.imgur.com/KySDHhc.jpg",
"http://i.imgur.com/30fSGX0.png",
"http://i.imgur.com/RLTTBsz.jpg",
"http://i.imgur.com/CCGv9Vi.jpg",
"http://i.imgur.com/Y5mYJKm.jpg",
"http://i.imgur.com/99Vl9Dn.png",
"http://i.imgur.com/BhHOfRP.jpg",
"http://i.imgur.com/gDeH4Qy.jpg",
"http://i.imgur.com/Tp6cadh.jpg",
"http://i.imgur.com/glHp2JQ.jpg",
"http://i.imgur.com/MPcZxSA.jpg",
"http://i.imgur.com/C5KQJGI.jpg",
"http://i.imgur.com/mddCrz3.jpg",
"http://i.imgur.com/zXv1uEi.jpg",
"http://i.imgur.com/vQ9GBjQ.jpg",
"http://i.imgur.com/kvq8DP0.png",
"http://i.imgur.com/YeD0MtF.jpg",
"http://i.imgur.com/M5GkWt7.jpg",
"http://i.imgur.com/5Dm50oD.jpg",
"http://i.imgur.com/RhpHwv5.jpg",
"http://i.imgur.com/sFXerqD.jpg",
"http://i.imgur.com/563eYgU.jpg",
"http://i.imgur.com/wgC4dgc.jpg",
"http://i.imgur.com/NDtkzwQ.jpg",
"http://i.imgur.com/jgWBk3T.jpg",
"http://i.imgur.com/Tcn2TyT.jpg",
"http://i.imgur.com/iWKgXT0.png",
"http://i.imgur.com/ExMc3TP.jpg",
"http://i.imgur.com/JFscYEI.png",
"http://i.imgur.com/Ex0SWTD.png",
"http://i.imgur.com/7ioo9tU.jpg",
"http://i.imgur.com/21KNVXP.jpg",
"http://i.imgur.com/5QPVuCG.jpg",
"http://i.imgur.com/IPll3bI.jpg",
"http://i.imgur.com/Gcc8mXc.jpg",
"http://i.imgur.com/nxjVNew.jpg",
"http://i.imgur.com/OLQvcly.png",
"http://i.imgur.com/qK0GyFA.jpg",
"http://i.imgur.com/8apISRs.jpg",
"http://i.imgur.com/y3LXA5T.png",
"http://i.imgur.com/H6rLlgr.png",
"http://i.imgur.com/3pXrDXF.png",
"http://i.imgur.com/5YYDKMp.png",
"http://i.imgur.com/x2oADre.png",
"http://i.imgur.com/BKK7OvD.png",
"http://i.imgur.com/PT18JpH.png",
"http://i.imgur.com/intODVU.png",
"http://i.imgur.com/QJD4IXQ.png",
"http://i.imgur.com/ui8LYeH.png",
"http://i.imgur.com/kvOanV4.png",
"http://i.imgur.com/cZlsnzp.png",
"http://i.imgur.com/Gy1jzFw.png",
"http://i.imgur.com/etIshBB.png",
"http://i.imgur.com/cvHnikX.png",
"http://i.imgur.com/Y6x7nC6.png",
"http://i.imgur.com/lIoIhIn.png",
"http://i.imgur.com/MySkC5f.png",
"http://i.imgur.com/0pZ6oCV.png",
"http://i.imgur.com/eotQHOn.png",
"http://i.imgur.com/jyzK8oA.png",
"http://i.imgur.com/g5j0Pxe.png",
"http://i.imgur.com/02IkFuq.png",
"http://i.imgur.com/q5mvi2u.png",
"http://i.imgur.com/JspKdpV.png",
"http://i.imgur.com/hTyH2RK.png",
"http://i.imgur.com/idYAfoO.png",
"http://i.imgur.com/Ir8U8lS.png",
"http://i.imgur.com/fztONBm.png",
"http://i.imgur.com/xPU1DdO.png",
"http://i.imgur.com/HCWjsya.png",
"http://i.imgur.com/Fajphp7.png",
"http://i.imgur.com/avPZrv8.png",
"http://i.imgur.com/N6LpjEz.png",
"http://i.imgur.com/lmJvrvt.png",
"http://i.imgur.com/sqIwvL8.png",
"http://i.imgur.com/StjrlWF.png",
"http://i.imgur.com/VCy0m6m.png",
"http://i.imgur.com/FpHZU9r.png",
"http://i.imgur.com/0c6Qy7P.png",
"http://i.imgur.com/DjLXVgY.png",
"http://i.imgur.com/NR3d1Mr.png",
"http://i.imgur.com/ZNAykXz.png",
"http://i.imgur.com/18sBYLf.png",
"http://i.imgur.com/CQ3Izch.png",
"http://i.imgur.com/KiywXPC.png",
"http://i.imgur.com/tlUruFn.png",
"http://i.imgur.com/0aijtkN.png",
"http://i.imgur.com/4PiYIfi.png",
"http://i.imgur.com/RHibTJE.png",
"http://i.imgur.com/UPevhBp.png",
"http://i.imgur.com/pec6PKp.png",
"http://i.imgur.com/YNYQ9Vj.png",
"http://i.imgur.com/1jWBKhY.png",
"http://i.imgur.com/WlbaDeA.png",
"http://i.imgur.com/UQu4uCu.png",
"http://i.imgur.com/8K3VEh7.png",
"http://i.imgur.com/t0UAgsY.png",
"http://i.imgur.com/3cHeMN1.png",
"http://i.imgur.com/Jitph9V.png",
"http://i.imgur.com/fuXT6WP.png",
"http://i.imgur.com/HtvsuIw.png",
"http://i.imgur.com/Ja6bGfX.png",
"http://i.imgur.com/WGuCbwm.png",
"http://i.imgur.com/suarYMJ.png",
"http://i.imgur.com/pQuCkEL.png",
"http://i.imgur.com/ZVTDvNP.png",
"http://i.imgur.com/maorvvi.png",
"http://i.imgur.com/t8jq2BK.png",
"http://i.imgur.com/Zdfyrte.png",
"http://i.imgur.com/5vXtaV9.png",
"http://i.imgur.com/Hj5wfSk.png",
"http://i.imgur.com/uQBC1mA.png",
"http://i.imgur.com/jN9qZGw.png",
"http://i.imgur.com/Vc96kv4.png",
"http://i.imgur.com/DEsjuyy.png",
"http://i.imgur.com/wLFtV3m.png",
"http://i.imgur.com/RcZQFaG.png",
"http://i.imgur.com/eH0uyK1.png",
"http://i.imgur.com/jYbBJfI.png",
"http://i.imgur.com/Vr1dRBR.png",
"http://i.imgur.com/aa3otD2.png",
"http://i.imgur.com/UgxCIPp.png",
"http://i.imgur.com/T53Pjxe.png",
"http://i.imgur.com/6VvOPkZ.png",
"http://i.imgur.com/aVLRyyh.png",
"http://i.imgur.com/gG7VdK3.png",
"http://i.imgur.com/kHytlwE.png",
"http://i.imgur.com/FQIoaFJ.png",
"http://i.imgur.com/EpwvH4W.png",
"http://i.imgur.com/D2337nD.png",
"http://i.imgur.com/d4hZquj.png",
"http://i.imgur.com/v1bv87K.png",
"http://i.imgur.com/S3xcGfs.png",
"http://i.imgur.com/R4izWsC.png",
"http://i.imgur.com/mSZTFEL.png",
"http://i.imgur.com/gaSGr0K.png",
"http://i.imgur.com/eIKzkGA.png",
"http://i.imgur.com/69OsWeG.png",
"http://i.imgur.com/aSTYo03.png",
"http://i.imgur.com/HLc798o.png",
"http://i.imgur.com/F432JU9.png",
"http://i.imgur.com/TTJhvyF.png",
"http://i.imgur.com/XZDBfMv.png",
"http://i.imgur.com/rMeWJ3V.png",
"http://i.imgur.com/L8wLdEu.png",
"http://i.imgur.com/2sPnptV.png",
"http://i.imgur.com/nR1QCkU.png",
"http://i.imgur.com/mi1r0eS.png",
"http://i.imgur.com/Ta1B8OQ.jpg",
"http://i.imgur.com/GJcZkuJ.png",
"http://i.imgur.com/scNUkgm.jpg",
"http://i.imgur.com/gidGq70.png",
"http://i.imgur.com/Yy0g2xS.png",
"http://i.imgur.com/CcHx3BT.png",
"http://i.imgur.com/tBOfrae.png",
"http://i.imgur.com/f9X2693.png",
"http://i.imgur.com/txz6lG1.png",
"http://i.imgur.com/kc0UJBT.png",
"http://i.imgur.com/T7LGPr9.png",
"http://i.imgur.com/t573CgB.png",
"http://i.imgur.com/1SGwc8z.png",
"http://i.imgur.com/QAyCoEE.png",
"http://i.imgur.com/swfVGT0.png",
"http://i.imgur.com/x2XJ8CW.png",
"http://i.imgur.com/duYQPne.png",
"http://i.imgur.com/mhRRdW8.png",
"http://i.imgur.com/e8SnT7R.png",
"http://i.imgur.com/rbDiNHB.png",
"http://i.imgur.com/gkVgXOX.png",
"http://i.imgur.com/G9tL6gq.png",
"http://i.imgur.com/S1MG90X.png",
"http://i.imgur.com/9G2KBOU.png",
"http://i.imgur.com/bPWmoxG.png",
"http://i.imgur.com/1cWrpK0.png",
"http://i.imgur.com/wuHgxrS.jpg"];
var links = ["https://t.co/1YnoaeivL1",
"http://bit.ly/1ndAbw1",
"https://t.co/G3NcL1YXtL",
"http://bit.ly/2azOk3t",
"https://t.co/tiqdjnxqJq",
"http://bit.ly/2aJolVu",
"https://t.co/gdJ3H049e2",
"http://bit.ly/2aVPTec",
"https://t.co/stzAgoEBsL",
"http://bit.ly/2aJoF6r",
"https://t.co/6Q2gKYCoa5",
"http://bit.ly/2aTaJdj",
"https://t.co/Js1ecxGXjv",
"http://bit.ly/2b0fCj1",
"https://t.co/q27btSU35p",
"http://bit.ly/2ayMufV",
"https://t.co/yFe8uBcJ4N",
"http://bit.ly/2aVPJDE",
"https://t.co/wVUx0ZbCcY",
"http://bit.ly/2azHUnP",
"https://t.co/x9zD7yVyEk",
"http://bit.ly/2b0gmEZ",
"https://t.co/F3lBIZp6dG",
"http://bit.ly/2aFzPch",
"https://t.co/XAf1DzRfuZ",
"http://bit.ly/2aFAzxY", 
"https://t.co/I0eGiKujh1",
"http://bit.ly/2aTbK4T",
"https://t.co/1YnoaeivL1",
"http://bit.ly/2azI66s",
"https://t.co/0m843Ke1eb",
"http://bit.ly/2aYk2u0",		
"https://t.co/D7m7lO3mVC",
"http://bit.ly/2aqHhaG",		
"https://t.co/LvN2aPvHIy",
"http://bit.ly/2aFAuKJ",		
"https://t.co/BixGUvNcco",
"http://bit.ly/2aFAHNP",		
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
"http://bit.ly/1Pn85LM",
"http://bit.ly/1SBsRHE",
"http://bit.ly/1nDpzXK",
"http://bit.ly/1Pn9Ubw",
"http://bit.ly/1KuAd8h",
"http://bit.ly/1RDoNGV",
"http://bit.ly/1nDzdd8",
"http://bit.ly/1NpBtcz",
"http://bit.ly/20khBAR",
"http://bit.ly/1Sbl6GW",
"http://bit.ly/1OOtPg5",
"http://bit.ly/1PRMlC3",
"http://bit.ly/1nxipVd",
"http://bit.ly/1lQT8Up",
"http://bit.ly/20rXO2G",
"http://bit.ly/1PRNCsA",
"http://bit.ly/1JDSZ2b",
"http://bit.ly/20rYzbK",
"http://bit.ly/1SJotqk",
"http://bit.ly/203XsCn",
"http://bit.ly/1PAsXJj",
"http://bit.ly/1PiWXgQ",
"http://bit.ly/1WNlYT0",
"http://bit.ly/1RNr5Dr",
"http://bit.ly/1Sjai9Q",
"http://bit.ly/1PDZDYr",
"https://t.co/YZYXEIr3qA",
"https://t.co/DDkyH4So7M",
"https://t.co/urlJtSnuWO",
"https://t.co/vB1eBW7kTR",
"https://t.co/TQwd1aNM1s",
"https://t.co/psJlBGsGNh",
"https://t.co/k2N7qy5NET",
"https://t.co/fBmduxPZxI",
"https://t.co/vhohZ5uoCm",
"https://t.co/3Aos0V5EW1",
"https://t.co/4ylD9l9spP",
"https://t.co/4sW8B7ispI",
"https://t.co/lHPKlXPqdx",
"https://t.co/VirLOufazI",
"https://t.co/m8g45aN3on",
"https://t.co/b2bUTMu9af",
"https://t.co/JtlQp3AT5w",
"https://t.co/C1oCyYu9Or",
"https://t.co/3w5yHr0oez",
"https://t.co/1uuykos5R1",
"https://t.co/vlrvAr5ISK",
"https://t.co/5APloBczVs",
"https://t.co/eSSAI89COr",
"https://t.co/pd59Ib6DO1",
"https://t.co/a2wvXfitDU",
"https://t.co/Vq9opNEM5M",
"https://t.co/XLA4eldG31",
"https://t.co/m3GgA4JKhW",
"https://t.co/6DyGVV77eG",
"https://t.co/jljz1N6owC",
"https://t.co/7fIRZ816g1",
"https://t.co/nkWk1cPjvF",
"https://t.co/gnz9eX2Y4U",
"https://t.co/IyvoKU1nFT",
"https://t.co/4eVLGEsgAu",
"https://t.co/OkxcBSwfCb",		
"https://t.co/2HqXPPNXik",
"https://t.co/IwZGU5SFZk",
"https://t.co/9FJLcTjbF8",
"https://t.co/Uns0FQSJSx",
"https://t.co/J8tFR0UMqL",
"https://t.co/OkxcBSwfCb",
"https://t.co/Uns0FQSJSx",
"https://t.co/J8tFR0UMqL",
"https://t.co/OkxcBSwfCb",	
"https://t.co/wlo5qkCnPr",		
"https://t.co/6lJnG3tzyD",		
"https://t.co/gne9pFwL4p",		
"https://t.co/yfvAzUMrb6",		
"https://t.co/s7FL4HVr0D",		
"https://t.co/ulPQLqtVJ2",		
"https://t.co/OLvZvK5JoH",		
"https://t.co/W9SmYKu6v4",		
"https://t.co/sK1PEV34tT",		
"https://t.co/uoz9Fml0b9",		
"https://t.co/M5FSwurlsz",		
"https://t.co/2gKhyNjICQ",		
"https://t.co/Ue6di3DZ5X",		
"https://t.co/hsRKoVLRHy",		
"https://t.co/DAhrFHxBJK",		
"https://t.co/GhBTaHCIer",		
"https://t.co/hRNpggOGjK",		
"https://t.co/jEonR1mrx1",		
"https://t.co/KaqvwcDIyz",		
"https://t.co/pDLhvPJJYm",		
"https://t.co/525MFLbiKo",		
"https://t.co/I69q2aaYO9",		
"https://t.co/rO6bqpobtM",		
"https://t.co/aJxJzmOENe",		
"https://t.co/81Qqh3z2Zl",		
"https://t.co/2tXN4rwXEe",		
"https://t.co/8qOkk5LMqk",		
"https://t.co/6drviVhGFB",		
"https://t.co/7MvSeBSVNZ",		
"https://t.co/pCajdrMEqs",
"https://t.co/pCajdrMEqs"];
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
