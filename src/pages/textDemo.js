/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-06-09 18:06:34
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-10 14:08:45
 */
import * as PIXI from 'pixi.js';

export default function t(){
    let box = document.getElementById(this.id);
	
    if (!box) {
        return;
    }

    let app = new PIXI.Application({ width: 400, height: 200, transparent: true });
	
    //Add the canvas that Pixi automatically created for you to the HTML document
    box.appendChild(app.view);

    let style = new PIXI.TextStyle({
        fontFamily: "Arial",
        fontSize: 36,
        fill: "white",
        stroke: '#ff3300',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    });

    let message = new PIXI.Text("Hello Pixi!", style);

    app.stage.addChild(message)
}