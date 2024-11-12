
canvas.width = 1300;
canvas.height = 650;
rect.w = canvas.width;
rect.h = canvas.height;
rect.x = canvas.width / 2 - rect.w / 2;
rect.y = canvas.height / 2 - rect.h / 2;

function ontimeout1() {
    text.x = canvas.width / 2;
    text.y = canvas.height / 2 - 50;
    text.text = "西北风韵";
    context.font = '60px "华文行楷"';
    drawText(text, true);
}

function ontimeout2() {
    text.x = canvas.width / 2;
    text.y = canvas.height / 2 + 70;
    text.text = "丝路寻踪";
    context.font = '100px "华文行楷"';
    drawText(text, true);
}
function ontimeou3(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawImg(context, img, rect);
    drawWay();
    context.drawImage(img2, 30, 430, 0.1 * img2.width, 0.1 * img2.height);
}
function imagedelay(){
    context.drawImage(img2, 30, 430, 0.1 * img2.width, 0.1 * img2.height);
}
function onclicktitle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawImg(context, img, rect);
    canvas.onclick = null; // 禁用点击事件
    dynamic_way();

    // 确保在 img2 加载完成后绘制
    img2.onload = function () {};
    setTimeout(imagedelay,5000);
    canvas.onmousedown = onCanvasMousedown;
}

function drawtitle() {
    setTimeout(ontimeout1, 500);
    setTimeout(ontimeout2, 1000);
}

function drawLocation(x, y, name) {
    context.beginPath();
    context.arc(x, y, 8, 0, Math.PI * 2, true); 
    context.lineWidth = 0.5;
    context.fillStyle = 'yellow';
    context.fill();
    context.strokeStyle = 'black';
    context.stroke();

    context.fillStyle = 'black'; 
    context.font = '30px "华文行楷"';
    context.fillText(name, x + 10, y - 10); // 地点名称
    context.strokeStyle = 'white';
    context.strokeText(name, x + 10, y - 10);
}
function drawway1() {
    context.beginPath();
    context.moveTo(50, 500);
    context.lineWidth = 2.8;
    context.strokeStyle = '#5C3A29';
    context.bezierCurveTo(80, 470, 120, 450, 200, 440);
    context.stroke();
    drawLocation(200, 440, '长安'); // 显示第一个地点
}

function drawway2() {
    context.beginPath();
    context.strokeStyle = '#5C3A29';
    context.moveTo(200, 440);
    context.lineWidth = 2.5;
    context.bezierCurveTo(250, 430, 300, 450, 400, 430);
    context.stroke();
    drawLocation(400, 430, '宝鸡'); // 显示第二个地点
}

function drawway3() {
    context.beginPath();
    context.strokeStyle = '#5C3A29';
    context.moveTo(400, 430);
    context.lineWidth = 2;
    context.bezierCurveTo(450, 420, 500, 410, 600, 400);
    context.bezierCurveTo(650, 410, 700, 380, 800, 360);
    context.stroke();
    drawLocation(800, 360, '兰州'); // 显示第三个地点
}

function drawway4() {
    context.beginPath();
    context.strokeStyle = '#5C3A29';
    context.moveTo(800, 360);
    context.lineWidth = 1.5;
    context.bezierCurveTo(850, 350, 900, 340, 1000, 330);
    context.bezierCurveTo(1050, 335, 1100, 300, 1200, 275);
    context.stroke();
    drawLocation(1200, 275, '敦煌'); // 显示第四个地点
}

function drawway5() {
    context.beginPath();
    context.strokeStyle = '#5C3A29';
    context.moveTo(1200, 275);
    context.lineWidth = 1.2;
    context.bezierCurveTo(1250, 260, 1300, 250, 1400, 240);
    context.stroke();
}

function dynamic_way() {
    setTimeout(drawway1, 1000);  
    setTimeout(drawway2, 2000);  
    setTimeout(drawway3, 3000);  
    setTimeout(drawway4, 4000); 
    setTimeout(drawway5, 5000); 
}

function drawWay() {
    context.beginPath();
    context.moveTo(50, 500);
    context.lineWidth = 2.8;
    context.strokeStyle = '#5C3A29';
    context.bezierCurveTo(80, 470, 120, 450, 200, 440);
    context.stroke();
    context.lineWidth = 2.5;
    context.bezierCurveTo(250, 430, 300, 450, 400, 430);
    context.stroke();
    context.lineWidth = 2;
    context.bezierCurveTo(450, 420, 500, 410, 600, 400);
    context.bezierCurveTo(650, 410, 700, 380, 800, 360);
    context.stroke();
    context.lineWidth = 1.5;
    context.bezierCurveTo(850, 350, 900, 340, 1000, 330);
    context.bezierCurveTo(1050, 335, 1100, 300, 1200, 275);
    context.stroke();
    context.lineWidth = 1.2;
    context.bezierCurveTo(1250, 260, 1300, 250, 1400, 240);
    context.stroke();
    drawLocation(200, 440, '长安');
    drawLocation(400, 430, '宝鸡');
    drawLocation(800, 360, '兰州');
    drawLocation(1200, 275, '敦煌');
}

let grd = createLinearGradient(context, 300, 300, canvas.width - 350, canvas.height - 300, colors);

function onCanvasMousedown(e) {
    mousedown.x = e.clientX;
    mousedown.y = e.clientY;
    mousedown = convertWindowToCanvas(canvas, mousedown);

    if (distance(mousedown.x, 200, mousedown.y, 440) < 30) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawImg(context, img, rect);
        drawWay();
        context.drawImage(img2, 180, 420, 0.1 * img2.width, 0.1 * img2.height);
        context.save();
        jumptochangan();
        context.restore();
        setTimeout(changancheng,1000);
        
    } else if (distance(mousedown.x, 400, mousedown.y, 430) < 30) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawImg(context, img, rect);
        drawWay();
        context.drawImage(img2, 380, 410, 0.1 * img2.width, 0.1 * img2.height);
        context.save();
        jumptobaoji();
        context.restore();
        setTimeout(baojicheng,1000);
    
    } else if (distance(mousedown.x, 800, mousedown.y, 360) < 30) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawImg(context, img, rect);
        drawWay();
        context.drawImage(img2, 780, 340, 0.1 * img2.width, 0.1 * img2.height);
        context.save();
        jumptolanzhou();
        context.restore();
        setTimeout(lanzhoucheng,1000);
        
    } else if (distance(mousedown.x, 1200, mousedown.y, 275) < 30) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawImg(context, img, rect);
        drawWay();
        context.drawImage(img2, 1180, 255, 0.1 * img2.width, 0.1 * img2.height);
        context.save();
        jumptodunhuang();
        context.restore();
        setTimeout(dunhuangcheng,1000);
    } else {
        context.font = '30px "华文行楷"';
        context.fillStyle = 'white';
        context.fillText('请点击对应城市开启探索之旅', mousedown.x, mousedown.y);
        setTimeout(ontimeou3,1500);
    }
    //context.restore();
    //canvas.onkeydown=null;
}

function distance(x1, x2, y1, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
function jumptochangan(){
    changan.onload=function(){};
    drawCircle(200,440-120,80);
    context.clip();
    context.drawImage(changan,200-80,440-0.2*changan.height,0.2*changan.width,0.2*changan.height);
    
    
}
function jumptobaoji(){
    baoji.onload=function(){};
    drawCircle(400,430-120,80);
    context.clip();
    context.drawImage(baoji,400-80,430-0.2*baoji.height,0.2*baoji.width,0.2*baoji.height);
    
}
function jumptolanzhou(){
    lanzhou.onload=function(){};
    drawCircle(800,360-120,80);
    context.clip();
    context.drawImage(lanzhou,800-80,360-0.2*lanzhou.height,0.2*lanzhou.width,0.2*lanzhou.height);
    
}
function jumptodunhuang(){
    dunhuang.onload=function(){};
    drawCircle(1200,275-120,80);
    context.clip();
    context.drawImage(dunhuang,1200-80,275-0.2*dunhuang.height,0.2*dunhuang.width,0.2*dunhuang.height);
    
}
function init() {
    img.onload = function () {
        drawImg(context, img, rect);
        context.strokeStyle = 'white';
        text.fillStyle ='rgba(255, 255, 255, 0)';
        drawtitle();
    };
    canvas.onclick = onclicktitle;
   
}
function changancheng() {
    canvas.onclick = null;
    canvas.onmousedown = null;
    canvas.onkeydown = null;

    context.clearRect(0, 0, canvas.width, canvas.height);
    c1.onload = function() {};
    c2.onload = function() {};

    // 绘制左半部分的c1图像
    context.translate(canvas.width / 4, canvas.height / 2);
    context.drawImage(c1, 0 - canvas.width / 4, 0 - canvas.height / 2, canvas.width / 2, canvas.height);

    // 绘制右半部分的c2图像
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(3 * canvas.width / 4, canvas.height / 2);
    context.drawImage(c2, 0 - canvas.width / 4, 0 - canvas.height / 2, canvas.width / 2, canvas.height);

    // 重置坐标系以免影响文字绘制
    context.setTransform(1, 0, 0, 1, 0, 0);

    // 设置文字样式
    context.fillStyle = 'black';
    context.font = '30px "华文行楷"';

    // 定义要绘制的文字内容和位置
    const textLines = [
        "春风得意马蹄疾",
        "一日看尽长安花",
        "让我们来感受长安城的魅力吧"
    ];

    // 绘制竖向的文字，每列文字都逐行绘制
    const startX = 3 * canvas.width / 4 + 20; // 起始x坐标，位于c2区域
    const startY = 100;  // 起始y坐标，控制文字起点高度
    const lineHeight = 40;  // 每个字符之间的高度
    const columnSpacing = 50; // 列间距
    const delay = 500; // 每列延迟500毫秒

    // 使用 setTimeout 逐列绘制文字
    textLines.forEach((text, columnIndex) => {
        setTimeout(() => {
            const x = startX + columnIndex * columnSpacing; // 计算每列的x位置
            for (let i = 0; i < text.length; i++) {
                const y = startY + i * lineHeight;
                context.fillText(text[i], x, y);
            }
        }, columnIndex * delay);
    });

    // 计算总的延迟时间，等待所有文字绘制完成后再执行
    const totalDelay = textLines.length * delay;

    // 设置延时执行libai的加载
    setTimeout(() => {
        // 清除画布上的内容
        context.clearRect(0, 0, canvas.width, canvas.height);
        libai.onload = function() {};
        changan5.onload = function() {};
        
        
        // 绘制libai的图片
        drawImg(context, changan5, rect);

        // 绘制知识问答的文字
        context.fillStyle = 'red';
        context.font = '100px "华文行楷"';
        context.fillText('知识问答', canvas.width / 2 - 35, canvas.height / 4 + 10);
        context.font = '60px "华文行楷"';
        context.fillStyle = 'yellow';
        context.fillText("请问丝绸之路的起点是？", canvas.width / 2 - 35, canvas.height / 2);

        // 绘制选项的圆形按钮
        const options = ["长安", "宝鸡", "敦煌", "兰州"];
        const circleRadius = 50;
        const circleSpacing = 150;
        const baseX = canvas.width / 2 - (options.length - 1) * circleSpacing / 2;
        const baseY = canvas.height / 2 + 100;

        options.forEach((option, index) => {
            const x = baseX + index * circleSpacing;
            const y = baseY;

            // 绘制圆形
            context.beginPath();
            context.arc(x, y, circleRadius, 0, 2 * Math.PI);
            context.fillStyle = 'white';
            context.fill();
            context.strokeStyle = 'black';
            context.stroke();

            // 绘制圆内的文字
            context.fillStyle = 'black';
            context.font = '30px "华文行楷"';
            context.fillText(option, x - context.measureText(option).width / 2+30, y + 5);
            canvas.onmousedown=keyanswer;
            

        });
    }, totalDelay+2000);
    

}
function drawcq2(){
    changan1.onload=function(){};
    context.clearRect(0,0,canvas.width,canvas.height);
    drawImg(context, changan1, rect);
    context.fillStyle='red';
    context.fillText(`当前分数是：${score}`,canvas.width - 150, 40);
     // 绘制知识问答的文字
     context.fillStyle = 'red';
     context.font = '100px "华文行楷"';
     context.fillText('知识问答', canvas.width / 2 - 35, canvas.height / 4 + 10);
     context.font = '60px "华文行楷"';
     context.fillStyle = 'yellow';
     context.fillText("长安在什么朝代被称为国都？", canvas.width / 2 - 35, canvas.height / 2);

     // 绘制选项的圆形按钮
     const options = ["唐", "宋", "元", "明"];
     const circleRadius = 50;
     const circleSpacing = 150;
     const baseX = canvas.width / 2 - (options.length - 1) * circleSpacing / 2;
     const baseY = canvas.height / 2 + 100;

     options.forEach((option, index) => {
         const x = baseX + index * circleSpacing;
         const y = baseY;

         // 绘制圆形
         
         context.beginPath();
         context.arc(x, y, circleRadius, 0, 2 * Math.PI);
         context.fillStyle = 'white';
         context.fill();
         context.strokeStyle = 'black';
         context.stroke();

         // 绘制圆内的文字
         context.fillStyle = 'black';
         context.font = '30px "华文行楷"';
         context.fillText(option, x - context.measureText(option).width / 2+30, y + 5);
         

     });
     canvas.onmousedown=null;
     canvas.onmousedown=keyanswer3;

}
function drawcq3(){
    changan2.onload=function(){};
    context.clearRect(0,0,canvas.width,canvas.height);
    drawImg(context,changan2, rect);
    context.fillStyle='red';
    context.fillText(`当前分数是：${score}`,canvas.width - 150, 40);
     // 绘制知识问答的文字
     context.fillStyle = 'red';
     context.font = '100px "华文行楷"';
     context.fillText('知识问答', canvas.width / 2 - 35, canvas.height / 4 + 10);
     context.font = '60px "华文行楷"';
     context.fillStyle = 'yellow';
     context.fillText("丝绸之路主要通往哪个地方?", canvas.width / 2 - 35, canvas.height / 2);

     // 绘制选项的圆形按钮
     const options = ["东方", "西方", "南方", "北方"];
     const circleRadius = 50;
     const circleSpacing = 150;
     const baseX = canvas.width / 2 - (options.length - 1) * circleSpacing / 2;
     const baseY = canvas.height / 2 + 100;

     options.forEach((option, index) => {
         const x = baseX + index * circleSpacing;
         const y = baseY;

         // 绘制圆形
         
         context.beginPath();
         context.arc(x, y, circleRadius, 0, 2 * Math.PI);
         context.fillStyle = 'white';
         context.fill();
         context.strokeStyle = 'black';
         context.stroke();

         // 绘制圆内的文字
         context.fillStyle = 'black';
         context.font = '30px "华文行楷"';
         context.fillText(option, x - context.measureText(option).width / 2+30, y + 5);
         

     });
     canvas.onmousedown=null;
     canvas.onmousedown=keyanswer4;

}
function drawcq4(){
    changan2.onload=function(){};
    context.clearRect(0,0,canvas.width,canvas.height);
    drawImg(context, changan4, rect);
    context.fillStyle='red';
    context.fillText(`当前分数是：${score}`,canvas.width - 150, 40);
     // 绘制知识问答的文字
     context.fillStyle = 'red';
     context.font = '100px "华文行楷"';
     context.fillText('知识问答', canvas.width / 2 - 35, canvas.height / 4 + 10);
     context.font = '60px "华文行楷"';
     context.fillStyle = 'yellow';
     context.fillText("哪种产品是丝绸之路上的主要商品？", canvas.width / 2 - 35, canvas.height / 2);

     // 绘制选项的圆形按钮
     const options = ["陶瓷", "丝绸", "茶叶", "书法"];
     const circleRadius = 50;
     const circleSpacing = 150;
     const baseX = canvas.width / 2 - (options.length - 1) * circleSpacing / 2;
     const baseY = canvas.height / 2 + 100;

     options.forEach((option, index) => {
         const x = baseX + index * circleSpacing;
         const y = baseY;

         // 绘制圆形
         
         context.beginPath();
         context.arc(x, y, circleRadius, 0, 2 * Math.PI);
         context.fillStyle = 'white';
         context.fill();
         context.strokeStyle = 'black';
         context.stroke();

         // 绘制圆内的文字
         context.fillStyle = 'black';
         context.font = '30px "华文行楷"';
         context.fillText(option, x - context.measureText(option).width / 2+30, y + 5);
         

     });
     canvas.onmousedown=null;
     canvas.onmousedown=keyanswer5;

}
function drawcq5(){
    
    context.clearRect(0,0,canvas.width,canvas.height);
    drawImg(context, libai, rect);
    context.fillStyle='red';
    context.fillText(`当前分数是：${score}`,canvas.width - 150, 40);
     // 绘制知识问答的文字
     context.fillStyle = 'red';
     context.font = '100px "华文行楷"';
     context.fillText('知识问答', canvas.width / 2 - 35, canvas.height / 4 + 10);
     context.font = '60px "华文行楷"';
     context.fillStyle = 'yellow';
     context.fillText("哪位诗人写过关于长安的诗？", canvas.width / 2 - 35, canvas.height / 2);

     // 绘制选项的圆形按钮
     const options = ["李白", "杜甫", "王维", "白居易"];
     const circleRadius = 50;
     const circleSpacing = 150;
     const baseX = canvas.width / 2 - (options.length - 1) * circleSpacing / 2;
     const baseY = canvas.height / 2 + 100;

     options.forEach((option, index) => {
         const x = baseX + index * circleSpacing;
         const y = baseY;

         // 绘制圆形
         
         context.beginPath();
         context.arc(x, y, circleRadius, 0, 2 * Math.PI);
         context.fillStyle = 'white';
         context.fill();
         context.strokeStyle = 'black';
         context.stroke();

         // 绘制圆内的文字
         context.fillStyle = 'black';
         context.font = '30px "华文行楷"';
         context.fillText(option, x - context.measureText(option).width / 2+30, y + 5);
         

     });

     canvas.onmousedown=null;
     canvas.onmousedown=keyanswer6;


}
function keyanswer(e){
    mousedown.x = e.clientX;
    mousedown.y = e.clientY;
    mousedown = convertWindowToCanvas(canvas, mousedown);
    context.beginPath();
    
    if(distance(385, mousedown.x,440,mousedown.y)<100){
        score=score+20;
    }
    else{
        score+=0;
    }
    drawcq2();

}
function keyanswer3(e){
    mousedown.x = e.clientX;
    mousedown.y = e.clientY;
    mousedown = convertWindowToCanvas(canvas, mousedown);
    context.beginPath();
    
    if(distance(385, mousedown.x,440,mousedown.y)<100){
        score=score+20;
    }
    else{
        score+=0;
    }
    drawcq3();

}
function keyanswer4(e){
    mousedown.x = e.clientX;
    mousedown.y = e.clientY;
    mousedown = convertWindowToCanvas(canvas, mousedown);
    context.beginPath();
    
    if(distance(385, mousedown.x,440,mousedown.y)<100){
        score=score+20;
    }
    else{
        score+=0;
    }
    drawcq4();

}
function keyanswer5(e){
    mousedown.x = e.clientX;
    mousedown.y = e.clientY;
    mousedown = convertWindowToCanvas(canvas, mousedown);
    context.beginPath();
    
    if(distance(385, mousedown.x,440,mousedown.y)<100){
        score=score+20;
    }
    else{
        score+=0;
    }
    drawcq5();

}
function keyanswer6(e){
    mousedown.x = e.clientX;
    mousedown.y = e.clientY;
    mousedown = convertWindowToCanvas(canvas, mousedown);
    context.beginPath();
    
    if(distance(385, mousedown.x,440,mousedown.y)<100){
        score=score+20;
    }
    else{
        score+=0;
    }
    context.clearRect(0,0,canvas.width,canvas.height);
    drawImg(context, libai, rect);
    context.fillStyle = 'red';
    context.font = '60px "华文行楷"';
    context.fillText('恭喜你完成挑战',canvas.width/2,canvas.height/2);
    context.font = '30px "华文行楷"';
    context.fillText(`当前分数是：${score}`,canvas.width - 150, 40);
    canvas.onmousedown=null;
    //context.clearRect(0, 0, canvas.width, canvas.height);
    setTimeout( changancheng2,1000);
}
function changancheng2(){
    window.location.href = '长安/changan.html'; 
}
function baojicheng(){
    canvas.onclick = null;
    canvas.onmousedown = null;
    canvas.onkeydown = null;
    context.clearRect(0, 0, canvas.width, canvas.height);
    window.location.href = '宝鸡/baoji.html';
    //window.onkeydown=keydownbaoji;
   
    
}
function lanzhoucheng(){
    canvas.onclick = null;
    canvas.onmousedown = null;
    canvas.onkeydown = null;
    context.clearRect(0, 0, canvas.width, canvas.height);
    window.location.href = '兰州/lanzhou.html'; 
    window.onkeydown=keydownlanzhou;

    
}
function dunhuangcheng(){
    canvas.onclick = null;
    canvas.onmousedown = null;
    canvas.onkeydown = null;
    context.clearRect(0, 0, canvas.width, canvas.height);
    window.location.href = '敦煌/dunhuang.html'; 
    window.onkeydown=keydowndunhuang;
    
}


init();