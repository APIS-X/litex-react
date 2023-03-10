import React, { PureComponent } from 'react';

export default class extends PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
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

  render() {
    let { list = [], params = {} } = this.state;

    return <div>类组件模版</div>;
  }
}
