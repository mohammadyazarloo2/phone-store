import React from "react";
import styled from "styled-components";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <InputWrapper>
        <div className="form-group">
          <label for="exampleInputEmail1" className="labels"> {this.props.label} </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={this.props.placeholder}
            style={{borderRadius:this.props.radius}}
          />
        </div>
      </InputWrapper>
    );
  }
}

export default Input;


const InputWrapper = styled.div`
  .labels {
    direction:rtl;
    text-align:right;
  }
`;