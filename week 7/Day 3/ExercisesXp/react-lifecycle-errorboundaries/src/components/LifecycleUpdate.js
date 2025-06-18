import React, { Component } from 'react';

class LifecycleUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
  }

  static getDerivedStateFromProps() {
    return null;
  }

  shouldComponentUpdate() {
    return true; // try false to see the effect
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('after update');
  }

  render() {
    return <h2>{this.state.favoriteColor}</h2>;
  }
}

export default LifecycleUpdate;
