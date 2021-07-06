import React from 'react';
import { Tools } from '../data';
import { Col, Menu, Row } from 'antd';
function SystemComponent({}) {
  const onDrag = (event, node) => {
    event.dataTransfer.setData('Topology', JSON.stringify(node.data));
  };
  return Tools.map((item, index) => (
    <div key={index}>
      <Menu mode="inline" theme="light">
        <Menu.SubMenu key={index} title={item.group}>
          <Row gutter={[16, 16]}>
            {item.children.map((item, ids) => {
              return (
                <Col span={8}>
                  <span
                    key={ids}
                    title={item.name}
                    draggable
                    onDragStart={ev => onDrag(ev, item)}
                  >
                    <img
                      style={{ height: 40, width: 40, margin: '20' }}
                      src={item.data.image}
                      alt="img"
                    />
                  </span>
                </Col>
              );
            })}
          </Row>
        </Menu.SubMenu>
      </Menu>
      {/*<div className="button">*/}
      {/*  return (*/}
      {/*  <a*/}
      {/*    key={ids}*/}
      {/*    title={item.name}*/}
      {/*    //大部分html有可拖动属性*/}
      {/*    draggable*/}
      {/*    href="/#"*/}
      {/*    onDragStart={ev => onDrag(ev, item)}*/}
      {/*  >*/}
      {/*    */}
      {/*  </a>*/}
      {/*  ); })} )*/}
      {/*</div>*/}
    </div>
  ));
}
export default SystemComponent;
