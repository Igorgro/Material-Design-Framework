var moveElem;
var isResizing = false;
var resizeElem;
var dx = 0;
var dy = 0;

function dragging (){
    if (!isResizing) {
        moveElem.style.left = event.clientX - dx;
        moveElem.style.top = event.clientY - dy;
    }
}


function init(){
    //Initialising daggable objects
    initDraggables();
    //Initialising resizeable objects
    initResizeables();
}

function initDraggables(){
    var Draggables = document.getElementsByClassName('draggable');
    for (var i = 0; i < Draggables.length; i++){
        initDraggable (Draggables [i]);

    }
}

function initResizeables(){
    var Resizeables = document.getElementsByClassName('resizeable');
    for (var i = 0; i < Resizeables.length; i++){
        initResizeable (Resizeables [i]);

    }
}


function initDraggable (elem) {
    elem.onmousedown = function (){
        if (!isResizing) {
            moveElem = this;
            dx = event.clientX - parseInt(this.style.left);
            dy = event.clientY - parseInt(this.style.top);
            document.body.onmousemove = function () { dragging();};
            document.body.onmouseup = function () {cument.body.onmousemove = function () {}; dx = 0; dy = 0;};
        }
    };

}


function initResizeable (elem) {
    var resizer = document.createElement('div');
    resizer.style.position = 'relative';
    resizer.style.top='calc(100% + 4px)';
    resizer.style.left='calc(100% + 4px)';
    resizer.style.width = '8px';
    resizer.style.height = '8px';
    resizer.style.backgroundColor = 'black';
    resizer.style.cursor = 'nwse-resize';

    resizer.onmousedown = function () {
        resizeElem = this.parentNode;
        isResizing = true;
        document.body.onmousemove = function () {resizing();};
        document.body.onmouseup = function () { document.body.onmousemove = function () {}; isResizing = false;};


    }

    elem.appendChild(resizer);

}

function resizing() {
    resizeElem.style.width = (event.clientX - parseInt(resizeElem.style.left)-9)+'px';
    resizeElem.style.height = (event.clientY - parseInt(resizeElem.style.top)-9)+'px';
}




window.onload = init;
































