/*
 * @Description: 鼠标拖动
 * @Author: qxp
 * @Date: 2021-06-09 18:06:34
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-11 14:11:54
 */
import * as PIXI from 'pixi.js';

// pixi中常用的鼠标交互事件：

//兼容鼠标和触摸屏的共同触发
// type InteractionPointerEvents = "pointerdown" | "pointercancel" | "pointerup" | "pointertap" | "pointerupoutside" | "pointermove" | "pointerover" | "pointerout";
//触摸屏触发事件
// type InteractionTouchEvents = "touchstart" | "touchcancel" | "touchend" | "touchendoutside" | "touchmove" ;
//鼠标触发事件
// type InteractionMouseEvents = "rightdown" | "mousedown" | "rightup" | "mouseup" | "rightclick" | "click" | "rightupoutside" | "mouseupoutside" | "mousemove" | "mouseover" | "mouseout";

export default function t(){
    let box = document.getElementById(this.id);
	
    if (!box) {
        return;
    }
	
    let app = new PIXI.Application({ width: 400, height: 200, transparent: true });

    //Add the canvas that Pixi automatically created for you to the HTML document
    box.appendChild(app.view);
    
    let style = new PIXI.TextStyle({
        fill: "white",
        fontFamily: "Arial",
        fontSize: 36,
        stroke: '#ff3300',
        strokeThickness: 4,
        dropShadow: true,
        dropShadowColor: "#000000",
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    });

    let message = new PIXI.Text("我可以拖动", style);
    message.interactive = true;
    message.buttonMode = true;
    app.stage.interactive = true;

    let selectedTarget;
    let offsetX = 0;
    let offsetY = 0;

    message.on('pointerdown', e => {
        e.target.alpha = 0.5;
        selectedTarget = e.target;
        let { x, y } = e.data.global;
        // 计算出鼠标坐标相对于元素内部的坐标，便于之后设置偏移
        offsetX = x - selectedTarget.x;
        offsetY = y - selectedTarget.y;
        app.stage.on('pointermove', onMove)
    })

    function onMove(e) {
        let { x, y } = e.data.global;
        let point = {
            x: x - offsetX,
            y: y - offsetY
        }
        selectedTarget.parent.toLocal(point, null, selectedTarget.position);
    }
    message.on('pointerup', e => {
        selectedTarget.alpha = 1;
        app.stage.removeListener('pointermove', onMove)
    })
    
    app.stage.addChild(message);
}