import React from 'react';
import { Menu, Icon } from 'antd';
import menuConfig from '../../resource/menuConfig';
import './index.less';

const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTreeNode: []
    }
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="" alt=""/>
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}