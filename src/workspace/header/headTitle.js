import React from 'react';

function HeadTitle() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        color: 'white',
        fontSize: '20px',
      }}
      // visible默认等于 visible={true} 控制该界面是否显示, 实际上里面默认true，父组件控制即可
    >
      Water like development
      <span style={{ fontSize: '15px', marginLeft: 'auto' }}> --particlec</span>
    </div>
  );
}
export default HeadTitle;
