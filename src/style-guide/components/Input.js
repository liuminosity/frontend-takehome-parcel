import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import autobind from 'autobind-decorator';

const InputStyled = styled.input`
  height: 60px;
  width: 100px;
  border-radius: 2px;
`;

export default class Input extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
  }

  static defaultProps = {
    value: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
    };
  }

  @autobind
  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      value: this.state.value + e.target.value,
    });
  }

  render() {
    const {
      ...rest,
    } = this.props;
    const {
      value,
    } = this.state;

    console.log('value', value)

    return (
      <InputStyled
        ref={r => this.input = r}
        onChange={this.handleChange}
        type="text"
        value={value}
        {...rest}
      />
    )
  }
}
