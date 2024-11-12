let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
//let video=document.getElementById('baoji');
//对象定义
let rect={
    x:0,
    y:0,
    w:canvas.width,
    h:canvas.height
};
let circle={
    x:0,
    y:0,
    r:10,
    sAngle:0,
    eAngle:Math.PI*2,
    clockwise:true
}; //外框圆

let text={
    x:0,
    y:0,
    text:'',
    style:'red',
    align:'center',
    baseline:'middle',
    fontSize:40,
    font:'Arial'
};

let line={
    startPointX:0,
    startPointY:0,
    endPointX:0,
    endPointY:0,
};