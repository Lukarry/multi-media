/**
 * 绘制线段路径
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {Object} context 绘制的目标context
 * @param {Object} line 包含绘制线段的起始点(x1,y1)和终止点(x2,y2)
 * @param {*} isNewPath 是否开启新路径  是否开启新路径，true/1表示开启，反之不开启
 */
function drawLinePath(context,line,isNewPath,isClosePath){
    if(isNewPath) context.beginPath();
    //1 直线路径
    context.moveTo(line.startPointX,line.startPointY);  //起始点坐标
    context.lineTo(line.endPointX,line.endPointY);  //终止点坐标
    if(isClosePath) context.closePath();
}


/**
 * 根据矩形信息绘制矩形
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {Object} context 绘制的目标context
 * @param {Object} rect 包括绘制起始点坐标(x,y)、宽度width和高度height信息
 * @param {String} style 填充色/描边色/其他样式
 * @param {Boolean} isFill  是否填充，true/1表示填充，反之描边
 * @param {Number} lineWidth 绘制线条的宽度
 */
function drawRect(context,rect,style,isFill,lineWidth) {
    if(isFill){
        context.fillStyle=style;
        context.fillRect(rect.x,rect.y,rect.w,rect.h);
    }else{
        context.strokeStyle=style;
        context.lineWidth=lineWidth;
        context.strokeRect(rect.x,rect.y,rect.w,rect.h);
    }
}

/**
 * 绘制矩形路径
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {Object} context 绘制的目标context
 * @param {Object} rect 包括绘制起始点坐标(x,y)、宽度width和高度height信息
 * @param {*} isNewPath 是否开启新路径  是否开启新路径，true/1表示开启，反之不开启
 */
function drawRectPath(context,rect,isNewPath) {
   if(isNewPath) context.beginPath();
   context.rect(rect.x, rect.y, rect.w, rect.h);
}

/**
 * 设置路径样式
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {Object} context 绘制的目标context
 * @param {String} style 填充色/描边色/其他样式
 * @param {Number} isFill  是否填充，true/1表示填充，反之描边
 * @param {Number} lineWidth 绘制线条的宽度
 */
function putColorOnPath(context,style,isFill,lineWidth) {
    if(isFill){
        context.fillStyle=style;
        context.fill(); 
    }else{
        context.strokeStyle=style;
        context.lineWidth=lineWidth || 1;
        context.stroke();
    }
}

/**
 * 清除指定大小的canvas
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {Object} context 绘制的目标context
 * @param {Object} rect 指定要清除的矩形大小，包括起始点(x,y)和宽度w，高度h的信息
 */
function clearCanvas(context,rect) {
    context.clearRect(rect.x, rect.y, rect.w, rect.h);   
}

/**
 * 绘制圆形路径
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {Object} context 绘制的目标context
 * @param {Object} cirle包括绘制圆心坐标(x,y)、半径r、起始弧度startAngle、终止弧度endAngle和是否顺时针clockwise信息
 * @param {Boolean} isNewPath 是否开启新路径  是否开启新路径，true/1表示开启，反之不开启
 * @param {Boolean} isClosePath 是否闭合路径 true/1表示闭合，反之不闭合
 */
function drawCirclePath(context,circle,isNewPath,isClosePath){
    if(isNewPath) context.beginPath();
    context.arc(circle.x,circle.y,circle.r,circle.sAngle,circle.eAngle,!circle.clockwise);
    if(isClosePath) context.closePath();
}

/**
 * 绘制图像
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {Object} context 绘制的目标canvas
 * @param {Object} image 绘制的图像对象
 * @param {Object} rect 绘制图像的起始点坐标（x,y)和图像大小w和h 
 */
function drawImg(context,image,rect){
    if(image!==undefined && rect!==undefined) 
        context.drawImage(image, rect.x, rect.y, rect.w, rect.h);
}

/**
 * 设置路径阴影
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {Object} context 绘制的目标canvas
 * @param {String} color  阴影颜色
 * @param {*} offsetX 
 * @param {*} offsetY 
 * @param {*} blur 模糊度
 */
function putShadowOnPath(context,color,offsetX,offsetY,blur) {
    if(blur!==undefined) context.shadowBlur=blur;
    if(color!==undefined) context.shadowColor=color;
    if(offsetX!==undefined) context.shadowOffsetX=offsetX;
    if(offsetY!==undefined) context.shadowOffsetY=offsetY;
    
}


/**
 * 创建线性渐变对象
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {*} context 绘制目标context对象
 * @param {*} x1  起始点的x坐标
 * @param {*} y1  起始点的y坐标
 * @param {*} x2  终止点的x坐标
 * @param {*} y2  终止点的x坐标
 * @param {*} colors 颜色数组colors=[{pos:0,color:'orange'},...]
 * @returns 
 */
function createLinearGradient(context,x1,y1,x2,y2,colors){
    let grd=context.createLinearGradient(x1, y1, x2, y2);
   
    for(let i=0;i<colors.length;i++){
        grd.addColorStop(colors[i].pos, colors[i].color);
    }
    return grd;  
}

/**
 * 创建辐射渐变对象
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {*} context 绘制目标context对象
 * @param {*} x1 起始圆的x坐标
 * @param {*} y1 起始圆的y坐标
 * @param {*} r1 起始圆的r
 * @param {*} x2 终止圆的x坐标
 * @param {*} y2 终止圆的y坐标
 * @param {*} r2 终止圆的r
 * @param {*} colors 颜色数组colors=[{pos:0,color:'orange'},...]
 * @returns 
 */
function createRadialGradient(context,x1,y1,r1,x2,y2,r2,colors){
    let grd=context.createRadialGradient(x1, y1, r1, x2, y2, r2);
   
    for(let i=0;i<colors.length;i++){
        grd.addColorStop(colors[i].pos, colors[i].color);
    }
    return grd;  
}
/**
 * 创建图案对象
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {*} context 绘制目标context对象
 * @param {*} img 
 * @param {*} repeat 
 * @returns 
 */
function createPattern(context,img,repeat){
    let pattern=context.createPattern(img, repeat);
    return pattern;
}

/**
 * 设置阴影效果
 * @author zjvivi
 * @version 1.0
 * @buildDate 2024-9-22
 * @param {*} context 
 * @param {*} color 
 * @param {*} offsetX 
 * @param {*} offsetY 
 * @param {*} blur 
 */
function setShadowEffect(context,color,offsetX,offsetY,blur){
    context.shadowColor=color;
    context.shadowOffsetX=offsetX;
    context.shadowOffsetY=offsetY;
    context.shadowBlur=blur;
}




