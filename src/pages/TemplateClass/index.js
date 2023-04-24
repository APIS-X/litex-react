import React, { PureComponent } from 'react';
import { Button } from 'antd';

export default class extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
    list: [],
    params: {
      curPage: 1,
      pageSize: 10,
    },
  };

  componentDidMount() {
    // 组件已经挂载
    // 示例：执行 this 里的方法
    this.getList();
  }

  componentDidUpdate(prevProps, prevState) {
    // 组件更新
    // 示例
    // if ( prevState.flag !== this.state.flag ){}
  }

  componentWillUnmount() {
    // 组件卸载
  }

  getList = (obj) => {};

  increment = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  };

  render() {
    let { list = [], params = {} } = this.state;

    return (
      <div>
        <Button type='primary' onClick={this.increment}>
          {this.state.count}
        </Button>
      </div>
    );
  }
}
