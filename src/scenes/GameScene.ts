import * as Matter from 'matter-js';

export class GameScene extends Phaser.Scene{
    constructor(){
        super({key:'GameScene',active:false});
        }
    preload(){

    }
    create(){
        this.init();
        this.gameinit();
    }
    update(){
        Matter.Engine.update(this.Engine);
    }
    public MAP:number[][];
    public a:number;
    public Engine:Matter.Engine;
    public World:Matter.World;
    public ball:Matter.Body;
    public meiro:Matter.Body[];
    public init(){
            this.a=0;
            this.meiro=new Array(0);
        }
    public gameinit(){
            this.Engine=Matter.Engine.create();
            this.World=this.Engine.world;
            this.ball = Matter.Bodies.circle(200, 0,100,{
                isStatic: false, 
                friction:1
            });
            Matter.World.add(this.Engine.world,this.ball);
            var cnt=0;
            for(var i=0;i<this.MAP.length;i++){
                for(var j=0;j<this.MAP[i].length;j++){
                    if(this.MAP[i][j]==1){
                        var bd=Matter.Bodies.rectangle(100+i*50, 400+j*50, 50, 50, {
                            isStatic: true, 
                            friction:1,
                            angle:100
                        });
                        Matter.World.add(this.Engine.world,bd);
                    this.meiro.push(bd);
                    
                }
                }
            }
    }
    public itiupde(){
    
    }
}