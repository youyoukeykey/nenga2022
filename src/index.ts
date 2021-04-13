/// <reference path="..\node_modules\@types\createjs\index.d.ts" />
import * as createjs from 'createjs-module';
import * as Matter from 'matter-js';
window.addEventListener("load", init);
const MAP=[
[1,1,1,1,1,1],
[1,0,0,0,0,1],
[1,0,0,0,0,1],
[1,0,0,0,0,1],
[1,0,0,0,0,1],
[1,1,1,1,1,1]
];
var stage = new createjs.Stage("myCanvas");
var a:number;
var Engine:Matter.Engine;
var World:Matter.World;
var ball:Matter.Body;
var meiro:Matter.Body[];
function init(){
    stage = new createjs.Stage("myCanvas");
    a=0;
    console.log("init");
    meiro=new Array(0);
    gameinit();
    //createjs.Ticker.addEventListener("tick", handleTick);
}
function gameinit(){
    Engine=Matter.Engine.create();
    World=Engine.world;
    ball = Matter.Bodies.circle(200, 0,100,{
        isStatic: false, 
        friction:1
    });
    Matter.World.add(Engine.world,ball);
    var cnt=0;
    for(var i=0;i<MAP.length;i++){
        for(var j=0;j<MAP[i].length;j++){
            if(MAP[i][j]==1){
                var bd=Matter.Bodies.rectangle(100+i*50, 400+j*50, 50, 50, {
                    isStatic: true, 
                    friction:1,
                    angle:100
                });
                Matter.World.add(Engine.world,bd);
            meiro.push(bd);
        }
        }
    }
    Matter.Events.on(Engine, 'afterUpdate', function () {
        handleTick();
    });
    Matter.Engine.run(Engine);
}
function handleTick(){
    var container = new createjs.Container();
    stage.addChild(container);
    var shape = new createjs.Shape();
    shape.graphics.beginFill("DarkRed"); // 赤色で描画するように設定
    shape.graphics.drawCircle(ball.position.x, ball.position.y, ball.circleRadius); //半径100pxの円を描画
    console.log("anglel:"+ball.angle);
    container.addChild(shape); // 表示リストに追加
    meiro.forEach(Element=>{
    const vertices = Element.vertices;
    var obj = new createjs.Shape();
    obj.graphics.beginFill("#EA6163");
    obj.graphics.beginStroke("#5984BE");
    obj.graphics.moveTo(vertices[0].x, vertices[0].y);
    for (var j = 1; j < vertices.length; j += 1) {
        obj.graphics.lineTo(vertices[j].x, vertices[j].y);
    }
    obj.graphics.lineTo(vertices[0].x, vertices[0].y);
    container.addChild(obj); // 表示リストに追加
    console.log("updating id "+Element.id);
    });
    stage.update();
    stage.removeChild(container);
}