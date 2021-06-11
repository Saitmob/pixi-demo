/*
 * @Description: 
 * @Author: qxp
 * @Date: 2021-06-08 16:59:23
 * @LastEditors: qxp
 * @LastEditTime: 2021-06-11 15:32:06
 */
import { useEffect } from 'react';
// import { Layer } from '@pixi/layers';
import config from './config';

export default () => {
    useEffect(() => {
        config.map(d => {
            d.render()
        })
    }, [])

    return {
        config
    }
}