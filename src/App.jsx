import React from 'react';
import './app.less';
import hooks from './appHooks';
import { Anchor } from 'antd';
const { Link } = Anchor;

export default function App () {
    const {
        config
    } = hooks();

    return (
        <div className={'app'}>
            <div className={'left-box'}>
                <Anchor>
                    {config.map(d => {
                        const { id, title } = d;
                        return <Link href={`#${id}`} title={title} />
                    })}
                </Anchor>
            </div>
            <div className="right-box">
                {config.map(d => {
                    const { id, desc } = d;
                    return (
                        <div className="item-box">
                            <div id={id} className="item-box-canvas"></div>
                            <div className="desc" >{desc}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}