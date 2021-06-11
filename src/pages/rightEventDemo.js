/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-06-09 18:06:34
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-11 11:11:15
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
	
    box.oncontextmenu = (e) => {
        e.preventDefault();
        return false;
    }

    let app = new PIXI.Application({ width: 400, height: 200, transparent: true });

    //Add the canvas that Pixi automatically created for you to the HTML document
    box.appendChild(app.view);
    // app.stage.sortChildren = true;
    
    let rectangle = new PIXI.Graphics();
    rectangle.beginFill(0xFF3300);
    rectangle.lineStyle(4, 0xFF3300, 0.5);
    rectangle.drawRect(2, 2, 64, 64);
    rectangle.endFill();

    rectangle.interactive = true;
    // message.zIndex = 2;

    app.stage.buttonMode = true;
    
    // 绘制一个菜单
    let menu = new PIXI.Container();
    let menuBg = new PIXI.Graphics();
    menuBg.beginFill(0xFFFFFF);
    menuBg.lineStyle(4, 0xEEEEEE, 0.5);
    menuBg.drawRect(2, 2, 64, 84);
    menuBg.endFill();
    menu.interactive = true;

    menu.on('pointerdown', e => {
        console.log('菜单被点击')
        e.stopPropagation();
    })
    
    let menuText = new PIXI.Text('菜单项', {fontSize: 14})
    menu.addChild(menuBg);
    menu.addChild(menuText);

    rectangle.on('rightdown', e => {
        let { x, y } = e.data.global;
        
        menu.x = x
        menu.y = y

        app.stage.addChild(menu);
        // 阻止事件冒泡
        console.log('右键点击了')
        e.stopPropagation();
        return false;
    })

    app.stage.interactive = true;

    let bg = new PIXI.Graphics();
    bg.beginFill(0x66CCFF);
    bg.drawRect(0, 0, 400, 200);
    bg.endFill();
    // bg.zIndex = 1;
    bg.interactive = true;


    bg.on('pointerdown', (e) => {
        app.stage.removeChild(menu) 
    })

    app.stage.addChild(bg);
    app.stage.addChild(rectangle);
}