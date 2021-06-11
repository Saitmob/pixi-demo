/*
 * @Description: 多边形
 * @Author: qxp
 * @Date: 2021-06-09 18:06:34
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-11 11:44:58
 */
import * as PIXI from 'pixi.js';
let Graphics = PIXI.Graphics,
    Application = PIXI.Application;

export default function t() {
    let box = document.getElementById(this.id);

    if (!box) {
        return;
    }

    let app = new Application({ width: 400, height: 200, transparent: true });

    box.appendChild(app.view);

    // 矩形
    let rectangle = new Graphics();
    rectangle.beginFill(0x66CCFF);
    rectangle.lineStyle(4, 0xFF3300, 0.5);
    rectangle.drawRect(2, 2, 64, 64);
    rectangle.endFill();

    rectangle.zIndex = 1;

    // 圆形
    let circle = new Graphics();
    circle.beginFill(0x9966FF);
    circle.drawCircle(0, 0, 32);
    circle.endFill();
    circle.x = 64;
    circle.y = 130;

    // 椭圆
    let ellipse = new Graphics();
    ellipse.beginFill(0xFFFF00);
    ellipse.drawEllipse(0, 0, 50, 20);
    ellipse.endFill();
    ellipse.x = 180;
    ellipse.y = 130;

    // 圆角矩形
    let roundBox = new Graphics();
    roundBox.lineStyle(4, 0x99CCFF, 1);
    roundBox.beginFill(0xFF9933);
    roundBox.drawRoundedRect(0, 0, 84, 36, 10)
    roundBox.endFill();
    roundBox.x = 48;
    roundBox.y = 190;

    // 线段
    let line = new Graphics();
    line.lineStyle(4, 0xFF0000, 1);
    line.moveTo(60, 0);
    line.lineTo(80, 50);
    line.x = 60;
    line.y = 32;

    // 多边形
    let triangle = new Graphics();
    triangle.beginFill(0x66FF33);

    triangle.drawPolygon([
        -32, 64,             //First point
        32, 64,              //Second point
        0, 0                 //Third point
    ]);

    //Fill shape's color
    triangle.endFill();
    triangle.x = 180;
    triangle.y = 22;
    
    // 创建一个 container 容器，将 文本以及矩形放入该容器
    // 将 sortableChildren 设置为 true，即可对容器内部元素设置层级关系
    let container = new PIXI.Container();
    container.sortableChildren = true;

    container.addChild(rectangle)
    container.addChild(circle)
    container.addChild(ellipse)
    container.addChild(line)
    container.addChild(triangle)

    app.stage.addChild(container)
}