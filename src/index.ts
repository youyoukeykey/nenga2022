
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
var a:number;
var Engine:Matter.Engine;
var World:Matter.World;
var ball:Matter.Body;
var meiro:Matter.Body[];
function init(){
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
        
    });
    Matter.Engine.run(Engine);
}