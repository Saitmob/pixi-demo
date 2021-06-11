/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-06-09 18:06:34
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-10 16:39:21
 */
import * as PIXI from 'pixi.js';

export default function t() {
    let box = document.getElementById(this.id);

    if (!box) {
        return;
    }

    let app = new PIXI.Application({ width: 400, height: 200, transparent: true });

    box.appendChild(app.view);

    // 文本部分
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

    let message = new PIXI.Text("我在上面!", style);
    // 设置文本层级
    message.zIndex = 2

    let rectangle = new PIXI.Graphics();
    rectangle.beginFill(0x66CCFF);
    rectangle.lineStyle(4, 0xFF3300, 0.5);
    rectangle.drawRect(2, 2, 64, 64);
    rectangle.endFill();

    rectangle.zIndex = 1;
    // 创建一个 container 容器，将 文本以及矩形放入该容器
    // 将 sortableChildren 设置为 true，即可对容器内部元素设置层级关系
    let container = new PIXI.Container();
    container.sortableChildren = true;
    container.addChild(message)
    container.addChild(rectangle)

    app.stage.addChild(container)

    // 右边不一样的层级，默认 text 展示在下面
    message = new PIXI.Text("我在下面!", style)
    message.x = 200

    rectangle = new PIXI.Graphics();
    rectangle.beginFill(0x66CCFF);
    rectangle.lineStyle(4, 0xFF3300, 0.5);
    rectangle.drawRect(200, 2, 64, 64);
    rectangle.endFill();

    container = new PIXI.Container();
    container.sortableChildren = true;
    container.addChild(message)
    container.addChild(rectangle)

    app.stage.addChild(container)
}