import React, { useEffect, useRef } from 'react';
import { Topology } from '@topology/core';
import data from './operationDesk/test.json';

import { Options, registerNode } from '@topology/core';
import { register as registerFlow } from '@topology/flow-diagram';
import { register as registerActivity } from '@topology/activity-diagram';
import { register as registerClass } from '@topology/class-diagram';
import { register as registerSequence } from '@topology/sequence-diagram';
// import { register as registerChart } from '@topology/chart-diagram';

function Canvas() {
  const dragRef = useRef(null);
  //画布参数选项：https://www.yuque.com/alsmile/topology/canvas
  const canvasOptions = {
    //是否显示网格标尺
    rule: true,
  };

  // const canvasRegister = () => {
  //   registerFlow(); // 流程图
  //   registerActivity(); //活动图
  //   registerClass(); //类图
  //   registerSequence(); //时序图
  //   // registerChart();
  //   // ... 其他图形库
  // };

  //初始化画布
  useEffect(() => {
    let canvas = new Topology('topology-canvas', canvasOptions);
    canvas.open(data);
  });

  return (
    <div>
      <div
        id="topology-canvas"
        style={{
          width: 1200,
          height: 800,
          boxShadow: '2px 0 10px rgb(0 0 0 / 20%)',
          position: 'relative',
          margin: '50px 50px',
        }}
      >
        <div
          ref={dragRef}
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 10,
            height: 10,
            zIndex: 999,
            background: 'gray',
            cursor: 'cell',
          }}
        ></div>
      </div>
    </div>
  );
}
export default Canvas;
