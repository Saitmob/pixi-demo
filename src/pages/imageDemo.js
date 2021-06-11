/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-06-09 18:06:34
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-10 14:11:00
 */
import * as PIXI from 'pixi.js';
import imgSrc from '@/images/lion-check.png';

export default function t(){
    let box = document.getElementById(this.id);  

    if (!box) {
        return;
    }
    
    let app = new PIXI.Application({ width: 400, height: 200, transparent: true });

    box.appendChild(app.view);

    app.loader.add(imgSrc).load(setup);

    function setup() {
        //This code will run when the loader has finished loading the image
        let texture = PIXI.utils.TextureCache[imgSrc];
        let lion = new PIXI.Sprite(texture);
        app.stage.addChild(lion);
    }
}