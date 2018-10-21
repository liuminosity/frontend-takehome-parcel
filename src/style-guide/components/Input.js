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
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const {
      ...rest,
    } = this.props;
    const {
      value,
    } = this.state;

    return (
      <InputStyled
        {...rest}
        ref={r => this.input = r}
        onChange={this.handleChange}
        type="text"
        value={value}
      />
    )
  }
}
