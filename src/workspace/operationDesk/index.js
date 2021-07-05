import { Tabs } from 'antd';
import SystemComponent from './systemComponet';

function OperationDesk() {
  return (
    <div style={{ theme: 'light' }}>
      <Tabs>
        <Tabs.TabPane tab="系统组件" key="1">
          <SystemComponent />
        </Tabs.TabPane>
        <Tabs.TabPane tab="自定义图片" key="2" style={{ margin: 0 }}>
          <CustomPicture />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
export default OperationDesk;
