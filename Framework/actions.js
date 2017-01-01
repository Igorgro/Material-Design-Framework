/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init(){
    setTheme ("Teal");
    var height = document.getElementById ('height');
    height.onmousedown = function(){
        this.onmousemove = function () {changeHeight (this);};
        this.onmouseup = function () {this.onmousemove = function () {};};
    };
    
    //Intialising textfields
    var textFields = document.getElementsByClassName('mtextfield');
    for (var i = 0; i< textFields.length; i++){
        textFields[i].setAttribute("contenteditable", "true");
    }
}

function changeHeight(regul) {
    var card = document.getElementById ('card');
    //var cardStyle = getComputedStyle(card);
    //
    //alert (regul.value);
    var str = (regul.value-1)/2+'px '+regul.value+'px '+(regul.value/2+2)+'px rgb(160, 160, 160)';
    //alert (str);
    card.style.boxShadow = str;
}


function setTheme (name){
    var bodyStyle = document.body.style;
    switch (name){
        case "Pink":
            bodyStyle.setProperty("--primary-color","#E91E63");
            bodyStyle.setProperty("--ripple-color","#EC407A");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
        case "Red":
            bodyStyle.setProperty("--primary-color","#F44336");
            bodyStyle.setProperty("--ripple-color","#EF5350");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
        case "Purple":
            bodyStyle.setProperty("--primary-color","#9C27B0");
            bodyStyle.setProperty("--ripple-color","#AB47BC");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
        case "Deep Purple":
            bodyStyle.setProperty("--primary-color","#673AB7");
            bodyStyle.setProperty("--ripple-color","#7E57C2");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
        case "Teal":
            bodyStyle.setProperty("--primary-color","#009688");
            bodyStyle.setProperty("--ripple-color","#26A69A");
            //bodyStyle.setProperty("--ripple-color2","#F8BBD0");
            break;
    }
}


function hideFAB (elem){
    //alert(elem.id);
    var elemStyle = elem.style;
    elemStyle.setProperty ("transform", "scale(0.1)");
    elemStyle.setProperty ("visibility", "hidden");
    //alert(elem.style.tranform);
    
}










window.onload = init;
