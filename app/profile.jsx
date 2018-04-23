import React from 'react';
import PropTypes from 'prop-types';
import Hobby from './hobby';

const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: 0,
      hobbies: ['skateboarding', 'rock music'],
    };
    this.likedCallback = () => {
      let { liked } = this.state;
      liked += 1;
      this.setState({
        liked,
      });
    };
    this.addHobbyCallback = () => {
      const hobbyInput = this.hobby;
      const val = hobbyInput.value;
      if (val) {
        let { hobbies } = this.state;
        hobbies = [...hobbies, val];
        this.setState(
          {
            hobbies,
          },
          () => {
            hobbyInput.value = '';
          },
        );
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.likedCallback();
    }, 1000);
  }
  // componentDidUpdate() {
  //   setTimeout(() => {
  //     this.likedCallback();
  //   }, 1000);
  // }
  // componentWillUnmount() {}

  render() {
    return (
      <div className="profile-component">
        <h1>我的名字叫 {this.props.name}</h1>
        <h2>我今年 {this.props.age} 岁</h2>
        <button onClick={this.likedCallback}>给我点赞</button>
        <h2>总点赞数：{this.state.liked}</h2>
        <h2>我的爱好：</h2>
        <ul>
          {this.state.hobbies.map(hobby => <Hobby key={hobby} hobby={hobby} />)}
        </ul>
        <input type="text" ref={(c) => { this.hobby = c; }} />
        <button onClick={this.addHobbyCallback}>添加爱好</button>
      </div>
    );
  }
}

Profile.propTypes = propTypes;
