import * as Matter from 'matter-js';
import * as Phaser from 'phaser';
const MAP = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]
];
export class GameScene extends Phaser.Scene {
     a: number;
 Engine: Matter.Engine;
 World: Matter.World;
 ball: Matter.Body;
 meiro: Matter.Body[];
    constructor() {
        super({ key: 'GameScene', active: false });
    }
    preload(){
        this.load.spritesheet('chips', '\images\simples_pimples.png', { frameWidth: 16, frameHeight: 16 });
    }
    create(){
        this.Engine = Matter.Engine.create();
        this.World = this.Engine.world;
        this.ball = Matter.Bodies.circle(200, 0, 100, {
            isStatic: false,
            friction: 1
        });
        this.a = 0;
        console.log("init");
        this.meiro = new Array(0);
        Matter.World.add(this.Engine.world, this.ball);
        for (var i = 0; i < MAP.length; i++) {
            for (var j = 0; j < MAP[i].length; j++) {
                if (MAP[i][j] == 1) {
                    var bd = Matter.Bodies.rectangle(100 + i * 50, 400 + j * 50, 50, 50, {
                        isStatic: true,
                        friction: 1,
                        angle: 100
                    });
                    Matter.World.add(this.Engine.world, bd);
                    this.meiro.push(bd);
                }
            }
        }
    }
    update(){

    }
}
class brock{
    image: Phaser.GameObjects.Sprite;
    body: Matter.Body;
    constructor(image:Phaser.GameObjects.Sprite,body:Matter.Body) {
        this.image=image;
        this.body=body;
    }
    update(){
        this.byogaupdate();
    }
    byogaupdate(){
        this.image.setPosition(100,100);
    }
}