import * as Phaser from 'phaser';
import {GameScene} from "./scenes/GameScene";
window.addEventListener("load", init);
function init(){
    //createjs.Ticker.addEventListener("tick", handleTick);
    const game = new Game(config);
}
const config: Phaser.Types.Core.GameConfig = {
    //画面サイズ
    width: 320,
    height: 740,
    type: Phaser.AUTO,
    //ゲーム画面を描画するcanvasを書き出す先
    parent: 'roguelike',
    //ゲーム画面を伸縮して表示させるための設定
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'roguelike',
    },
    //あとでコメントアウトを解除する
    //必要なシーンを読み込む
    scene: [GameScene],
};
export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
        this.scene.start('GameScene');
    }
}