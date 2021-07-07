import React, { useEffect, useRef } from 'react';
import { Topology } from '@topology/core';
import data from './operationDesk/test.json';

import { registerNode } from '@topology/core';
import { register as registerFlow } from '@topology/flow-diagram';
import { register as registerActivity } from '@topology/activity-diagram';
import { register as registerClass } from '@topology/class-diagram';
import { register as registerSequence } from '@topology/sequence-diagram';
// import { register as registerChart } from '@topology/chart-diagram';

import {
  flowData,
  flowDataAnchors,
  flowDataIconRect,
  flowDataTextRect,
  flowSubprocess,
  flowSubprocessIconRect,
  flowSubprocessTextRect,
  flowDb,
  flowDbIconRect,
  flowDbTextRect,
  flowDocument,
  flowDocumentAnchors,
  flowDocumentIconRect,
  flowDocumentTextRect,
  flowInternalStorage,
  flowInternalStorageIconRect,
  flowInternalStorageTextRect,
  flowExternStorage,
  flowExternStorageAnchors,
  flowExternStorageIconRect,
  flowExternStorageTextRect,
  flowQueue,
  flowQueueIconRect,
  flowQueueTextRect,
  flowManually,
  flowManuallyAnchors,
  flowManuallyIconRect,
  flowManuallyTextRect,
  flowDisplay,
  flowDisplayAnchors,
  flowDisplayIconRect,
  flowDisplayTextRect,
  flowParallel,
  flowParallelAnchors,
  flowComment,
  flowCommentAnchors,
} from 'topology-flow-diagram';

// import { registerNode } from 'topology-core/middles';

function Canvas() {
  const dragRef = useRef(null);
  //画布参数选项：https://www.yuque.com/alsmile/topology/canvas
  const canvasOptions = {
    //是否显示网格标尺
    rule: true,
    //MQL连接地址
    // mqttUrl:'https://www.yuque.com/alsmile/topology/canvas'
  };

  const canvasRegister = () => {
    //流程图注册
    registerNode(
      'flowData',
      flowData,
      flowDataAnchors,
      flowDataIconRect,
      flowDataTextRect,
    );
    registerNode(
      'flowSubprocess',
      flowSubprocess,
      null,
      flowSubprocessIconRect,
      flowSubprocessTextRect,
    );
    registerNode('flowDb', flowDb, null, flowDbIconRect, flowDbTextRect);
    registerNode(
      'flowDocument',
      flowDocument,
      flowDocumentAnchors,
      flowDocumentIconRect,
      flowDocumentTextRect,
    );
    registerNode(
      'flowInternalStorage',
      flowInternalStorage,
      null,
      flowInternalStorageIconRect,
      flowInternalStorageTextRect,
    );
    registerNode(
      'flowExternStorage',
      flowExternStorage,
      flowExternStorageAnchors,
      flowExternStorageIconRect,
      flowExternStorageTextRect,
    );
    registerNode(
      'flowQueue',
      flowQueue,
      null,
      flowQueueIconRect,
      flowQueueTextRect,
    );
    registerNode(
      'flowManually',
      flowManually,
      flowManuallyAnchors,
      flowManuallyIconRect,
      flowManuallyTextRect,
    );
    registerNode(
      'flowDisplay',
      flowDisplay,
      flowDisplayAnchors,
      flowDisplayIconRect,
      flowDisplayTextRect,
    );
    registerNode('flowParallel', flowParallel, flowParallelAnchors, null, null);
    registerNode('flowComment', flowComment, flowCommentAnchors, null, null);
    // registerNode(
    //   'activityFinal',
    //   activityFinal,
    //   null,
    //   activityFinalIconRect,
    //   activityFinalTextRect,
    // );

    registerFlow(); // 流程图
    registerActivity(); //活动图
    registerClass(); //类图
    registerSequence(); //时序图
    // registerNode('button', reactNodes(Button), null, null, null);
    // registerChart();
    // ... 其他图形库
  };

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
        >
          {''}
        </div>
      </div>
    </div>
  );
}
export default Canvas;
