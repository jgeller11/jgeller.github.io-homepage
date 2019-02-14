function loadReminder() {
    var reminder = localStorage.getItem('reminderMain');
    var reminder2 = localStorage.getItem('reminderTw');
    var reminder3 = localStorage.getItem('reminderTh');
    var reminder4 = localStorage.getItem('reminderFo');
    var reminder5 = localStorage.getItem('reminderFi');
    var reminder6 = localStorage.getItem('reminderSi');
    var reminder7 = localStorage.getItem('reminderSe');
    var reminder8 = localStorage.getItem('reminderEi');
    var reminder9 = localStorage.getItem('reminderNi');
    document.getElementById("r1").innerHTML = reminder;
    document.getElementById("r2").innerHTML = reminder2;
    document.getElementById("r3").innerHTML = reminder3;
    document.getElementById("r4").innerHTML = reminder4;
    document.getElementById("r5").innerHTML = reminder5;
    document.getElementById("r6").innerHTML = reminder6;
    document.getElementById("r7").innerHTML = reminder7;
    document.getElementById("r8").innerHTML = reminder8;
    document.getElementById("r9").innerHTML = reminder9;
    reloadLinks()
}

function changeReminder() {
    var reminder = prompt("", "");
    if (reminder == "clear"){
        localStorage.setItem('reminderNi', '');
        localStorage.setItem('reminderEi', '');
        localStorage.setItem('reminderSe', '');
        localStorage.setItem('reminderSi', '');
        localStorage.setItem('reminderFi', '');
        localStorage.setItem('reminderFo', '');
        localStorage.setItem('reminderTh', '');
        localStorage.setItem('reminderTw', '');
        localStorage.setItem('reminderMain', '');
        var reminder = localStorage.getItem('reminderMain');
        var reminder2 = localStorage.getItem('reminderTw');
        var reminder3 = localStorage.getItem('reminderTh');
        var reminder4 = localStorage.getItem('reminderFo');
        var reminder5 = localStorage.getItem('reminderFi');
        var reminder6 = localStorage.getItem('reminderSi');
        var reminder7 = localStorage.getItem('reminderSe');
        var reminder8 = localStorage.getItem('reminderEi');
        var reminder9 = localStorage.getItem('reminderNi');
        document.getElementById("r1").innerHTML = reminder;
        document.getElementById("r2").innerHTML = reminder2;
        document.getElementById("r3").innerHTML = reminder3;
        document.getElementById("r4").innerHTML = reminder4;
        document.getElementById("r5").innerHTML = reminder5;
        document.getElementById("r6").innerHTML = reminder6;
        document.getElementById("r7").innerHTML = reminder7;
        document.getElementById("r8").innerHTML = reminder8;
        document.getElementById("r9").innerHTML = reminder9;
    } else if (reminder == "home"){
        window.open("index.html", "_blank");
    } else if (reminder == "yt" || reminder == "youtube"){
        window.open("https://www.youtube.com", "_self");
    } else if (reminder == "reddit" || reminder == "rd"){
        window.open("https://reddit.com", "_self");
    } else if (reminder == "hbogo" || reminder == "hbo"){
        window.open("https://play.hbogo.com/", "_self");
    } else if (reminder == "netflix" || reminder == "nt"){
        window.open("https://www.netflix.com/", "_self");
    } else if (reminder == "google photos" || reminder == "photos"){
        window.open("https://photos.google.com/", "_self");
    } else if (reminder == "twitter" || reminder == "tw"){
        window.open("https://twitter.com/", "_self");
    } else if (reminder == "ls"){
        var linkNum = prompt("", "");
        var linkTxt = prompt("", "");
        var linkDes = prompt("", "");
        var currentNum = parseInt(localStorage.getItem('linkQuant'))
        if (linkNum=='clear'){
            var i = prompt("", "")
            localStorage.setItem('reminderLinkDes' + i.toString(), '')
            localStorage.setItem('reminderLinkTxt' + i.toString(), '')
            localStorage.setItem('linkQuant', '0')
        } else if (parseInt(linkNum)>=currentNum+1){
            localStorage.setItem('reminderLinkTxt' + linkNum, linkTxt)
            localStorage.setItem('reminderLinkDes' + linkNum, linkDes)
            if (parseInt(linkNum)==currentNum+1){
                localStorage.setItem('linkQuant', (currentNum+1).toString())
            }
        }
        reloadLinks()
    } else if (reminder != "" && reminder != null){
        var reminderMain = localStorage.getItem('reminderMain');
        var reminder2 = localStorage.getItem('reminderTw');
        var reminder3 = localStorage.getItem('reminderTh');
        var reminder4 = localStorage.getItem('reminderFo');
        var reminder5 = localStorage.getItem('reminderFi');
        var reminder6 = localStorage.getItem('reminderSi');
        var reminder7 = localStorage.getItem('reminderSe');
        var reminder8 = localStorage.getItem('reminderEi');
        var reminder9 = localStorage.getItem('reminderNi');
        localStorage.setItem('reminderNi', reminder8);
        localStorage.setItem('reminderEi', reminder7);
        localStorage.setItem('reminderSe', reminder6);
        localStorage.setItem('reminderSi', reminder5);
        localStorage.setItem('reminderFi', reminder4);
        localStorage.setItem('reminderFo', reminder3);
        localStorage.setItem('reminderTh', reminder2);
        localStorage.setItem('reminderTw', reminderMain);
        localStorage.setItem('reminderMain', reminder);
        var reminder2 = localStorage.getItem('reminderTw');
        var reminder3 = localStorage.getItem('reminderTh');
        var reminder4 = localStorage.getItem('reminderFo');
        var reminder5 = localStorage.getItem('reminderFi');
        var reminder6 = localStorage.getItem('reminderSi');
        var reminder7 = localStorage.getItem('reminderSe');
        var reminder8 = localStorage.getItem('reminderEi');
        var reminder9 = localStorage.getItem('reminderNi');
        document.getElementById("r1").innerHTML = reminder;
        document.getElementById("r2").innerHTML = reminder2;
        document.getElementById("r3").innerHTML = reminder3;
        document.getElementById("r4").innerHTML = reminder4;
        document.getElementById("r5").innerHTML = reminder5;
        document.getElementById("r6").innerHTML = reminder6;
        document.getElementById("r7").innerHTML = reminder7;
        document.getElementById("r8").innerHTML = reminder8;
        document.getElementById("r9").innerHTML = reminder9;
    }
}

function refresh() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('tim').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(refresh, 500);
}

function reloadLinks() {
    if (localStorage.getItem('linkQuant') != null){
        var currentNum = parseInt(localStorage.getItem('linkQuant'))
    } else {
        localStorage.setItem('linkQuant', '0')
        var currentNum = 0
    }
    container = document.getElementById('reminderLinkContainer')
    container.innerHTML='';
    var j;
    for (j = 1; j < currentNum+1; j++) {
        if (j%2==0){
            container.innerHTML += '<a id="reminderLink'+j.toString()+'"><div class="reminderLink" style="top: '+(3+15*(j/2)).toString()+'%; right: 5%;"><div class="centeringTable"><p class="linkText" id="reminderLinkName'+j.toString()+'"></p></div></div></a>'
        }
        if (j%2==1){
            container.innerHTML += '<a id="reminderLink'+j.toString()+'"><div class="reminderLink" style="top: '+(3+15*(j/2+0.5)).toString()+'%; left: 5%;"><div class="centeringTable"><p class="linkText" id="reminderLinkName'+j.toString()+'"></p></div></div></a>'
        }
    }
    var i;
    for (i = 1; i < currentNum+1; i++) {
        document.getElementById('reminderLink'+i.toString()).href=localStorage.getItem('reminderLinkDes' + i.toString())
        document.getElementById('reminderLinkName'+i.toString()).innerHTML=localStorage.getItem('reminderLinkTxt' + i.toString())
    }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

/*\                         how,,, does js even work
|*|
|*|
|*|
|*|
|*|
    window.requestAnimationFrame = window.requestAnimationFrame
     || window.mozRequestAnimationFrame
     || window.webkitRequestAnimationFrame
     || window.msRequestAnimationFrame
     || function(f){setTimeout(f, 1000/60)}

    var scrolldiv = document.getElementById('scrolldiv')
    var scrolldiv2 = document.getElementById('scrolldiv2')
    var scrolldiv3 = document.getElementById('scrolldiv3')
    var scrolldiv4 = document.getElementById('scrolldiv4')
    var scrolldiv5 = document.getElementById('scrolldiv5')
    var imag = document.getElementById('imag')
    var scrollOver = document.getElementById('scrollOver')

    var scrollheight = document.body.scrollHeight // height of entire document
    var windowheight = window.innerHeight // height of browser window

    function parallax(){
     var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
     var scrollamount = (scrolltop / windowheight) // get amount scrolled in percent of screen


//             scrolldiv2.style.top = ((3 - ((scrollamount-.2) * 2)))*100 + '%'
//             scrolldiv3.style.top = ((4 - ((scrollamount-.2) * 3)))*100 + '%'
//             scrolldiv4.style.top = ((5 - ((scrollamount-.2) * 4)))*100 + '%'
     scrollOver.style.top = (365 - scrollamount * 100) + '%'
     if (scrolltop/windowheight > 1.45){
         scrolldiv.style.zIndex = 60
         scrolldiv2.style.zIndex = 60
         scrolldiv3.style.zIndex = 61
         scrolldiv4.style.zIndex = 62
         scrolldiv5.style.zIndex = 59
         scrolldiv5.style.opacity = 1
         scrolldiv5.style.top = 0
         scrolldiv.style.top = (2.2 - scrollamount) * 100 + '%'
         scrolldiv2.style.top = (1.95 - scrollamount) * 100 + '%'
         scrolldiv3.style.top = (1.7 - scrollamount) * 100 + '%'
         scrolldiv4.style.top = (1.45 - scrollamount) * 100 + '%'
     } else {
         scrolldiv.style.top = ((2 - ((scrollamount-.2) * 1)))*100 + '%'
         scrolldiv2.style.top = ((3 - ((scrollamount-.2) * 2)))*100 + '%'
         scrolldiv3.style.top = ((4 - ((scrollamount-.2) * 3)))*100 + '%'
         scrolldiv4.style.top = ((5 - ((scrollamount-.2) * 4)))*100 + '%'
         scrolldiv.style.zIndex = 17
         scrolldiv2.style.zIndex = 16
         scrolldiv3.style.zIndex = 14
         scrolldiv4.style.zIndex = 10
         scrolldiv5.style.zIndex = 12
         scrolldiv5.style.opacity = 0
         scrolldiv5.style.top = 2000
         scrolldiv.style.opacity = 1
         scrolldiv2.style.opacity = 1
         scrolldiv3.style.opacity = 1
         scrolldiv4.style.opacity = 1


     }
    }

    window.addEventListener('scroll', function(){ // on page scroll
     requestAnimationFrame(parallax) // call parallax() on next available screen paint
    }, false)

    window.addEventListener('resize', function(){ // on window resize
     var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
     var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
     imag.style.left = ((100 - int(imag.style.width))/2).toString + '%'
    }, false)

*/
