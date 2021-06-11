/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-06-09 18:06:34
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-11 15:27:14
 */
import * as PIXI from 'pixi.js';
import { Scrollbox } from 'pixi-scrollbox';
import img from '@/images/bg.jpg';

export default function t(){
    let box = document.getElementById(this.id);
	
    if (!box) {
        return;
    }
	
    let app = new PIXI.Application({ width: 400, height: 200, transparent: true });

	box.appendChild(app.view);
    
    const scrollbox = new Scrollbox({ 
        boxWidth: 400, 
        boxHeight: 200, 
        fade: true, // 滚动条自动消失
        divWheel: app.view,
        interaction: app.renderer.plugins.interaction // 如果不加上，无法检测鼠标滚轮
    })

    app.loader.add(img).load(setup);

    app.stage.interactive = true;
    
    function setup() {
        let texture = PIXI.utils.TextureCache[img];
        let bg = new PIXI.Sprite(texture);
        const sprite = scrollbox.content.addChild(bg)
        sprite.width = 3840 / 4
        sprite.height = 2160 / 4
        // sprite.tint = 0xff0000
        scrollbox.update()
        app.stage.addChild(scrollbox)
    }
}