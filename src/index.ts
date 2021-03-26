/// <reference path="..\node_modules\@types\createjs\index.d.ts" />
import * as createjs from 'createjs-module';
import * as Matter from 'matter-js';
window.addEventListener("load", init);
var stage = new createjs.Stage("myCanvas");
var a:number;
var Engine:Matter.Engine;
var World:Matter.World;
var floor:Matter.Body;
var ball:Matter.Body;
function init(){
    stage = new createjs.Stage("myCanvas");
    a=0;
    gameinit();
    console.log("init");
    //createjs.Ticker.addEventListener("tick", handleTick);
}
function gameinit(){
    Engine=Matter.Engine.create();
    World=Engine.world;
    floor = Matter.Bodies.rectangle(170, 300, 600, 20, {
        isStatic: true, 
        id: 100,
        friction:100,
        angle:3.28
    });
    ball = Matter.Bodies.circle(200, 0,100,{
        isStatic: false, 
        id: 1,
        friction:100
    });
    Matter.World.add(Engine.world,floor);
    Matter.World.add(Engine.world,ball);
    Matter.Events.on(Engine, 'afterUpdate', function () {
        handleTick();
    });
    Matter.Engine.run(Engine);
}
function handleTick(){
    var shape = new createjs.Shape();
    shape.graphics.beginFill("DarkRed"); // 赤色で描画するように設定
    shape.graphics.drawCircle(ball.position.x, ball.position.y, ball.circleRadius); //半径100pxの円を描画
    console.log("anglel:"+ball.angle);
    stage.addChild(shape); // 表示リストに追加
    const vertices = floor.vertices;
    var obj = new createjs.Shape();
    obj.graphics.beginFill("#EA6163");
    obj.graphics.beginStroke("#5984BE");
    obj.graphics.moveTo(vertices[0].x, vertices[0].y);
    for (var j = 1; j < vertices.length; j += 1) {
        obj.graphics.lineTo(vertices[j].x, vertices[j].y);
    }
    obj.graphics.lineTo(vertices[0].x, vertices[0].y);
    stage.addChild(obj); // 表示リストに追加
    stage.update();
    stage.removeChild(obj);
    stage.removeChild(shape);
}