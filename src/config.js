/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-06-10 13:51:38
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-11 14:41:03
 */
import textDemo from './pages/textDemo';
import imageDemo from './pages/imageDemo';
import polygonDemo from './pages/polygonDemo';
import containerDemo from './pages/containerDemo';
import clickEventDemo from './pages/clickEventDemo';
import rightEventDemo from './pages/rightEventDemo';
import dragEventDemo from './pages/dragEventDemo';
import scrollDemo from './pages/scrollDemo';

export default [
    {
        id: "text-demo-box", 
        title: "文本",
        render: textDemo,
        desc: ''
    },
    {
        id: "image-demo-box", 
        title: "图片",
        render: imageDemo,
        desc: '渲染一张精灵图'
    },
    {
        id: "polygon-demo-box", 
        title: "多边形",
        render: polygonDemo,
        desc: '绘制多边形'
    },
    {
        id: "container-demo-box", 
        title: "层级",
        render: containerDemo,
        desc: '默认层级关系根据addChild插入顺序计算，最后插入的层级最高，放在最上层，也可以给父级的container设置sortableChildren为true，对子级的显示对象设置zIndex'
    },
    {
        id: "click-demo-box", 
        title: "点击事件",
        render: clickEventDemo,
        desc: "点击文字，更改文字内容，点击空白处重置文字"
    },
    {
        id: "right-click-demo-box", 
        title: "右键点击事件",
        render: rightEventDemo,
        desc: "右键点击红色方块，弹出菜单，点击空白出菜单消失"
    },
    {
        id: "drag-demo-box", 
        title: "拖动事件",
        render: dragEventDemo,
        desc: "点击文字，按住拖动"
    },
    {
        id: "scroll-demo-box", 
        title: "滚动事件",
        render: scrollDemo,
        desc: "鼠标滚轮滚动内容，依赖pixi-scrollbox，pixi-viewport"
    }
]