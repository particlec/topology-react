import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Button, Layout } from 'antd';
import Canvas from '../workspace/canvas';
import HeadTitle from '../workspace/header/headTitle';
import OperationDesk from '../workspace/operationDesk';

const { Header, Content, Sider } = Layout;

const WebRouter = () => {
  return (
    <HashRouter basename="/topology">
      <Switch>
        <Route path="/view">
          <Layout style={{ height: '100%' }}>
            <Header>
              <HeadTitle />
            </Header>
            <Layout>
              <Sider>
                <OperationDesk />
              </Sider>
              <Content>
                {/*<Button type="primary">123</Button>*/}
                <Canvas />
              </Content>
            </Layout>
          </Layout>
        </Route>

        <Redirect to="/view" />
      </Switch>
    </HashRouter>
  );
};
export default WebRouter;
