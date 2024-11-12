/**
 * 绘制文本
 * @param {Object} textObj - 文本对象
 * @param {boolean} isFill - 是否绘制描边
 */
function drawText(textObj, isFill) {
    //context.font = '80px "华文行楷"';
    context.textAlign = textObj.align;
    context.textBaseline = textObj.baseline;

    if (isFill) {
        context.strokeStyle = textObj.strokeStyle;
        context.lineWidth = 1; // 默认的线宽
        context.strokeText(textObj.text, textObj.x, textObj.y);
    }

    context.fillStyle = textObj.fillStyle;
    context.fillText(textObj.text, textObj.x, textObj.y);
}
/**
 * 绘制网格背景
 * @param {number} margin - 网格间距
 * @param {string} color - 网格颜色
 */
function drawBg(margin, color) {
    const horizontalNums = canvas.height / margin;
    const verticalNums = canvas.width / margin;

    for (let i = 1; i <= horizontalNums; i++) {
        drawLine(0, i * margin, canvas.width, i * margin, color);
    }

    for (let i = 1; i <= verticalNums; i++) {
        drawLine(i * margin, 0, i * margin, canvas.height, color);
    }
}

/**
 * 绘制一条线
 * @param {number} xs - 起点x坐标
 * @param {number} ys - 起点y坐标
 * @param {number} xe - 终点x坐标
 * @param {number} ye - 终点y坐标
 * @param {string} style - 线的颜色
 */
function drawLine(xs, ys, xe, ye, style) {
    context.beginPath();
    context.moveTo(xs, ys);
    context.lineTo(xe, ye);
    context.strokeStyle = style;
    context.stroke();
}

/**
 * 绘制圆形
 * @param {number} x - 圆心x坐标
 * @param {number} y - 圆心y坐标
 * @param {number} radius - 圆的半径
 * @param {string} strokeColor - 描边颜色
 */
function drawCircle(x, y, radius, strokeColor) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2); // 绘制圆
    context.strokeStyle = strokeColor; // 设置描边颜色
    context.stroke(); // 描边圆
}
/***
 * @param {boolean} isBig 设置画框大小
 */

function setCanvasRect(isBig){
    if(isBig){
        canvasRect.w=BIG_CANVAS_WIDTH;
        canvasRect.h=BIG_CANVAS_HEIGHT;
    }else{
        canvasRect.w=SMALL_CANVAS_WIDTH;
        canvasRect.h=SMALL_CANVAS_HEIGHT;
    }
}
/**
 * 
 * @param {*} context 操作的画布对象
 * @param {*} rect 矩形对象
 * @param {*} grd 渐变方式
 */
function drawGradientRect(context,rect,grd){
    drawRect(context,rect,grd,1);
}
function onCanvasMousedown(e){

    mousedown.x=e.clientX;
    mousedown.y=e.clientY;
    mousedown=convertWindowToCanvas(bakCanvas,mousedown);
    rect.x=mousedown.x;
    rect.y=mousedown.y;
    bakCanvas.onmousemove=onCanvasMousemove;
    bakCanvas.onmouseup=onCanvasMouseup;
    bakCanvas.onmousedown=null;
}

function onCanvasMousemove(e){
    clearCanvas(bakContext,canvasRect);
    drawGradientRect(bakContext,canvasRect,grd);

    mousemove.x=e.clientX;
    mousemove.y=e.clientY;
    mousemove=convertWindowToCanvas(bakCanvas,mousemove);
    rect.w=mousemove.x-mousedown.x;
    rect.h=mousemove.y-mousedown.y;
    drawRect(bakContext,rect,BORDER_COLOR,0,LINE_WIDTH);
    
}
function onCanvasMouseup(e){
    clearCanvas(bakContext,canvasRect);
    drawGradientRect(bakContext,canvasRect,grd);

    drawRect(bakContext,rect,BORDER_COLOR,0,LINE_WIDTH);
    bakCanvas.onmousemove=null;
    bakCanvas.onmouseup=null;
    bakCanvas.onmousedown=onCanvasMousedown;

}
function onImgLoad(){
   grd=createPattern(bakContext,img,'no-repeat');
   drawGradientRect(bakContext,canvasRect,grd);
}