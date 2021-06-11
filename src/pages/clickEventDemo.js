/*
 * @Description: 左键点击
 * @Author: qxp
 * @Date: 2021-06-09 18:06:34
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-11 14:12:47
 */
import * as PIXI from 'pixi.js';

// pixi中常用的鼠标交互事件：

//兼容鼠标和触摸屏的共同触发
// type InteractionPointerEvents = "pointerdown" | "pointercancel" | "pointerup" | "pointertap" | "pointerupoutside" | "pointermove" | "pointerover" | "pointerout";
//触摸屏触发事件
// type InteractionTouchEvents = "touchstart" | "touchcancel" | "touchend" | "touchendoutside" | "touchmove" ;

export default function t(){
    let box = document.getElementById(this.id);
	
    if (!box) {
        return;
    }
	
    let app = new PIXI.Application({ width: 400, height: 200, transparent: true });

    //Add the canvas that Pixi automatically created for you to the HTML document
    box.appendChild(app.view);
    // app.stage.sortChildren = true;
    
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

    let message = new PIXI.Text("点我", style);
    message.interactive = true;
    // message.zIndex = 2;

    message.buttonMode = true;
    
    message.on('pointerdown', e => {
        message.text = Number(message.text).toString() === 'NaN' ? 0 : Number(message.text) + 1
        // 阻止事件冒泡
        e.stopPropagation();
    })

    let bg = new PIXI.Graphics();
    bg.beginFill(0x66CCFF);
    bg.drawRect(0, 0, 400, 200);
    bg.endFill();
    // bg.zIndex = 1;
    bg.interactive = true;

    
    // let container = new PIXI.Container();
    // // container.sortableChildren = true;
    // container.addChild(bg);
    // container.addChild(message);
    
    bg.on("pointerdown", e => {
        message.text = 0
    })

    app.stage.on('pointerdown', (e) => {
        // 这里做判断也可以对相应的 元素做响应
        console.log('触发了')
        // if (e.target === message) {
        //     message.text = Number(message.text).toString() === 'NaN' ? 0 : Number(message.text) + 1
        // } 
    })

    app.stage.addChild(bg);
    app.stage.addChild(message);
    // app.view.onclick = e => {
    //     message.text = 0
    // }
    
    // 浏览器支持 webgl 时，renderer才有效
    // app.renderer.plugins.interactive.on("pointerdown", e => {
    //     message.text = 0
    // })
}