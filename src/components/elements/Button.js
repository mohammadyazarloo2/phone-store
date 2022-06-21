import React from "react";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        style={{
          width: this.props.width,
          background: `var(${this.props.bg})`,
          padding: "5px",
          marginTop:this.props.mt+`px`,
          outline:'0',
          border:'0px',
          borderRadius:'4px',
          color:this.props.color
        }}
      >
        {" "}
        {this.props.text}{" "}
      </button>
    );
  }
}

export default Buttons;
