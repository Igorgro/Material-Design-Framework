/* 
 * 
 */


var SNACKBAR_LONG_DELAY = 3500;
var SNACKBAR_SHORT_DELAY = 2000;

function init(){    
    //Intialising textfields
    var textFields = document.getElementsByClassName('mtextfield');
    for (var i = 0; i< textFields.length; i++){
        textFields[i].setAttribute("contenteditable", "true");
    }
    
    
    //Initialising context menu
    document.body.oncontextmenu = function (){
        return false;
    };
    
    document.body.onclick = function () {
        var contextmenus = document.getElementsByClassName('contextmenu');
        for (var i = 0; i < contextmenus.length; i++){
            this.removeChild (contextmenus[i]);
        }
    };
    
    
    //Setting backdrop
    var backDrop = document.createElement('div');
    backDrop.className = "backdrop";
    backDrop.style.backgroundColor = "rgba(0, 0, 0, 0);";
    backDrop.style.visibility = "hidden";
    backDrop.id="backDrop";
    document.body.appendChild (backDrop);
    
    //Creating snackbar
    var snackbar = document.createElement('div');
    snackbar.className = 'snackbar';
    snackbar.id = 'snackbar';
    snackbar.style.bottom = '-48px';
    snackbar.style.left = '0px';
    snackbar.appendChild (document.createElement('p'));
    document.body.appendChild (snackbar);
    
    
    
    document.body.ondragstart = function (event){
        return false;
    };
    
    //Initialising ripple effect
    var buttonsWithRipple = document.getElementsByClassName('ripple-effect');
    
    for (var i = 0; i < buttonsWithRipple.length; i++){
        buttonsWithRipple[i].onclickaction = new Function(buttonsWithRipple[i].getAttribute ('onclick'));
        buttonsWithRipple[i].removeAttribute ('onclick');
        
        
        
        buttonsWithRipple[i].onclick = function (){
            var br = this.getBoundingClientRect();
            
            var ripple = document.createElement('div');
            ripple.className = 'ripple';
        

            
            
            ripple.style.left = event.clientX - br.left - 5+'px';
            ripple.style.top = event.clientY - br.top - 5+'px';
            
            ripple.className = "ripple ripple-active";
            
            this.appendChild (ripple);
            
            setTimeout (function (rip){
                rip.className = 'ripple';
                
                rip.parentNode.removeChild (rip);
            }, 500, ripple);
            
            this.onclickaction();
        };
        
    }
    
    //Initialising tabs
    /*var tabs = document.getElementsByClassName("tab");
    var percentage = (100/tabs.length)+'%';
   
    
    var style = document.createElement('style');
    style.innerHTML = '.tab{width: calc(' + percentage + " - " +'1px);}' ;
    document.head.appendChild (style);
    
    for(var i = 0; i < tabs.length; i++){
        tabs[i].innerHTML = "<input type='radio' class='tabber' id='tab"+i+"' name='tab'><label for='tab"+i+"'>"+tabs[i].getAttribute('label')+"</label>";
        
        var label = tabs[i].childNodes[1];
        //alert (parseInt(getComputedStyle(tabs[i]).width) - parseInt(label.offsetWidth));
        label.style.marginLeft = (parseInt(getComputedStyle(tabs[i]).width) - parseInt(label.offsetWidth))/2+'px';
        label.style.marginRight = label.style.marginLeft;
        label.style.marginTop = '200px';
    }*/
    
    
    //Allow user make document initialisation
    if (window["main"] !== undefined) window["main"]();
}




/**
 * 
 * @param {object} element Dom element which you are creating context menu for
 * @param {string[]} items Names of context menu's items
 * @param {function[]} functions Names of functions, which calling on clicking on context menus's items 
 */
function createContextMenu (element, items, functions){
    //alert (typeof functions[0]);
    element.oncontextmenu = function (){
        //if (document.getElementById('contextMenu') !== null) this.removeChild (document.getElementById('contextMenu'));
        if (document.getElementsByClassName('contextmenu')[0] !== undefined){
            document.body.removeChild(document.getElementsByClassName('contextmenu')[0]);
        }
        
        var contextMenu = document.createElement ('div');
        contextMenu.className = 'menu contextmenu';
        contextMenu.Caller = element;
        contextMenu.id = "contextMenu_"+element.id;
        
        for (var i = 0; i < items.length; i++){
            
            var contextMenuItem = document.createElement ('div');
            contextMenuItem.className = 'menu-item';
            contextMenuItem.innerHTML = items[i];
            contextMenuItem.function = functions[i]; 
            
            
            contextMenuItem.onclick = function () {
                this.function(this.parentElement.Caller);
            };
        
            contextMenu.appendChild (contextMenuItem);  
        }   
        
        contextMenu.style.left = parseInt(event.clientX-7)+'px';
        contextMenu.style.top = parseInt(event.clientY+2)+'px';
        document.body.appendChild (contextMenu);
        return false;
    };
    
}

/**
 * Sets color theme to webpage
 *  @see <a href="https://material.io/guidelines/style/color.html#color-color-palettetext">Material Colors</a>  for available themes
 *
 * @param {string} name name of the theme
 */
function setTheme (name){
    var bodyStyle = document.body.style;
    switch (name){
        case "Red":
            bodyStyle.setProperty("--primary-color","#F44336");
            bodyStyle.setProperty("--hover-color","#EF5350");
            bodyStyle.setProperty("--ripple-color", "#D32F2F");
            break;
        case "Pink":
            bodyStyle.setProperty("--primary-color","#E91E63");
            bodyStyle.setProperty("--hover-color","#EC407A");
            bodyStyle.setProperty("--ripple-color", "#C2185B");
            break;
        case "Purple":
            bodyStyle.setProperty("--primary-color","#9C27B0");
            bodyStyle.setProperty("--hover-color","#AB47BC");
            bodyStyle.setProperty("--ripple-color", "#7B1FA2");
            break;
        case "Deep Purple":
            bodyStyle.setProperty("--primary-color","#673AB7");
            bodyStyle.setProperty("--hover-color","#7E57C2");
            bodyStyle.setProperty("--ripple-color", "#512DA8");
            break;
        case "Indigo":
            bodyStyle.setProperty("--primary-color","#3F51B5");
            bodyStyle.setProperty("--hover-color","#5C6BC0");
            bodyStyle.setProperty("--ripple-color", "#303F9F");
            break;
        case "Blue":
            bodyStyle.setProperty("--primary-color","#2196F3");
            bodyStyle.setProperty("--hover-color","#42A5F5");
            bodyStyle.setProperty("--ripple-color", "#1976D2");
            break;
        case "Light Blue":
            bodyStyle.setProperty("--primary-color","#03A9F4");
            bodyStyle.setProperty("--hover-color","#29B6F6");
            bodyStyle.setProperty("--ripple-color", "#0288D1");
            break;
        case "Cyan":
            bodyStyle.setProperty("--primary-color","#00BCD4");
            bodyStyle.setProperty("--hover-color","##26C6DA");
            bodyStyle.setProperty("--ripple-color", "#0097A7");
            break;
        case "Teal":
            bodyStyle.setProperty("--primary-color","#009688");
            bodyStyle.setProperty("--hover-color","#26A69A");
            bodyStyle.setProperty("--ripple-color", "#00796B");
            break;
        case "Green":
            bodyStyle.setProperty("--primary-color","#4CAF50");
            bodyStyle.setProperty("--hover-color","#66BB6A");
            bodyStyle.setProperty("--ripple-color", "#388E3C");
            break;
        case "Light Green":
            bodyStyle.setProperty("--primary-color","#8BC34A");
            bodyStyle.setProperty("--hover-color","#9CCC65");
            bodyStyle.setProperty("--ripple-color", "#689F38");
            break;
        case "Lime":
            bodyStyle.setProperty("--primary-color","#CDDC39");
            bodyStyle.setProperty("--hover-color","#D4E157");
            bodyStyle.setProperty("--ripple-color", "#AFB42B");
            break;
        case "Yellow":
            bodyStyle.setProperty("--primary-color","#FFEB3B");
            bodyStyle.setProperty("--hover-color","#FFEE58");
            bodyStyle.setProperty("--ripple-color", "#FBC02D");
            break;
        case "Amber":
            bodyStyle.setProperty("--primary-color","#FFC107");
            bodyStyle.setProperty("--hover-color","#FFCA28");
            bodyStyle.setProperty("--ripple-color", "#FFA000");
            break;
        case "Orange":
            bodyStyle.setProperty("--primary-color","#FF9800");
            bodyStyle.setProperty("--hover-color","#FFA726");
            bodyStyle.setProperty("--ripple-color", "#F57C00");
            break;
        case "Deep Orange":
            bodyStyle.setProperty("--primary-color","#FF5722");
            bodyStyle.setProperty("--hover-color","#FF7043");
            bodyStyle.setProperty("--ripple-color", "#E64A19");
            break;
        default :
            bodyStyle.setProperty("--primary-color","#000000");
            bodyStyle.setProperty("--hover-color","#FFFFFF");
            break;
    }
}

/**
 * Sets accent color for webpage
 * @param {string} name Color name
 */
function setAccentColor (name){
    var bodyStyle = document.body.style;
    switch (name){
        case "Red":
            bodyStyle.setProperty("--accent-color","#FF5252");
            bodyStyle.setProperty("--accent-hover-color","#FF8A80");
            bodyStyle.setProperty("--accent-ripple-color","#D50000");
            break;
        case "Pink":
            bodyStyle.setProperty("--accent-color","#FF4081");
            bodyStyle.setProperty("--accent-hover-color","#FF80AB");
            bodyStyle.setProperty("--accent-ripple-color","#C51162");
            break;
        case "Purple":
            bodyStyle.setProperty("--accent-color","#E040FB");
            bodyStyle.setProperty("--accent-hover-color","#EA80FC");
            bodyStyle.setProperty("--accent-ripple-color","#AA00FF");
            break;
        case "Deep Purple":
            bodyStyle.setProperty("--accent-color","#7C4DFF");
            bodyStyle.setProperty("--accent-hover-color","#B388FF");
            bodyStyle.setProperty("--accent-ripple-color","#6200EA");
            break;
        case "Indigo":
            bodyStyle.setProperty("--accent-color","#536DFE");
            bodyStyle.setProperty("--accent-hover-color","#8C9EFF");
            bodyStyle.setProperty("--accent-ripple-color","#304FFE");
            break;
        case "Blue":
            bodyStyle.setProperty("--accent-color","#448AFF");
            bodyStyle.setProperty("--accent-hover-color","#82B1FF");
            bodyStyle.setProperty("--accent-ripple-color","#2962FF");
            break;
        case "Light Blue":
            bodyStyle.setProperty("--accent-color","#40C4FF");
            bodyStyle.setProperty("--accent-hover-color","#80D8FF");
            bodyStyle.setProperty("--accent-ripple-color","#0091EA");
            break;
        case "Cyan":
            bodyStyle.setProperty("--accent-color","#18FFFF");
            bodyStyle.setProperty("--accent-hover-color","#84FFFF");
            bodyStyle.setProperty("--accent-ripple-color","#00B8D4");
            break;
        case "Teal":
            bodyStyle.setProperty("--accent-color","#64FFDA");
            bodyStyle.setProperty("--accent-hover-color","#A7FFEB");
            bodyStyle.setProperty("--accent-ripple-color","#00BFA5");
            break;
        case "Green":
            bodyStyle.setProperty("--accent-color","#69F0AE");
            bodyStyle.setProperty("--accent-hover-color","#B9F6CA");
            bodyStyle.setProperty("--accent-ripple-color","#00C853");
            break;
        case "Light Green":
            bodyStyle.setProperty("--accent-color","#B2FF59");
            bodyStyle.setProperty("--accent-hover-color","#CCFF90");
            bodyStyle.setProperty("--accent-ripple-color","#64DD17");
            break;
        case "Lime":
            bodyStyle.setProperty("--accent-color","#EEFF41");
            bodyStyle.setProperty("--accent-hover-color","#F4FF81");
            bodyStyle.setProperty("--accent-ripple-color","#AEEA00");
            break;
        case "Yellow":
            bodyStyle.setProperty("--accent-color","#FFFF00");
            bodyStyle.setProperty("--accent-hover-color","#FFFF8D");
            bodyStyle.setProperty("--accent-ripple-color","#FFD600");
            break;
        case "Amber":
            bodyStyle.setProperty("--accent-color","#FFD740");
            bodyStyle.setProperty("--accent-hover-color","#FFE57F");
            bodyStyle.setProperty("--accent-ripple-color","#FFAB00");
            break;
        case "Orange":
            bodyStyle.setProperty("--accent-color","#FFAB40");
            bodyStyle.setProperty("--accent-hover-color","#FFD180");
            bodyStyle.setProperty("--accent-ripple-color","#FF6D00");
            break;
        case "Deep Orange":
            bodyStyle.setProperty("--accent-color","#FF6E40");
            bodyStyle.setProperty("--accent-hover-color","#FF9E80");
            bodyStyle.setProperty("--accent-ripple-color","#DD2C00");
            break;
    }
}


//This function is just an animation test, don't use it in real projects
function hideFAB (elem){
    //alert(elem.id);
    var elemStyle = elem.style;
    elemStyle.setProperty ("transform", "scale(0.1)");
    elemStyle.setProperty ("visibility", "hidden");
    //alert(elem.style.tranform);
    
}


//Unstable
function transformFab (width, height){
    var FAB = document.getElementById("FAB");
    //alert ("THIS IS FAB!!!! "+FAB+ " "+ "calc(50% + "+parseInt(height/2)+"px)");
    
    document.getElementById("backDrop").style.visibility = "visible";
    document.getElementById("backDrop").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    //alert ("this");
    FAB.className ="FloatingActionButton";
    FAB.style.bottom = "calc(50% - "+parseInt(height/2)+"px)";
    FAB.style.right = "calc(50% - "+parseInt(width/2)+"px)";
    FAB.style.transition = getComputedStyle(FAB).transition+", border-radius 0.5s linear 0s, width 0.5s linear 0s, height 0.5s linear 0s";
    FAB.style.backgroundColor = "white";
    FAB.style.borderRadius = "2px";
    FAB.style.width = width+"px";
    FAB.style.height = height+"px";
}

/**
 *  Shows snackbar with text
 * @param {string} text Text on snackbar
 * @param {number} duration Duration of snakbar display
 * @returns {undefined}
 */
function showSnackbar (text, duration){
    var snackbar = document.getElementById('snackbar');
    
    snackbar.firstChild.innerHTML = text;
    snackbar.style.bottom = '0px';
    snackbar.style.left = 'calc(50% - '+parseInt(parseInt(getComputedStyle(snackbar).width)/2)+'px)';
    
    setTimeout(function (snackbar1){
        snackbar1.style.bottom = '-48px';
    }, duration, snackbar);
}


window.onload = init;









