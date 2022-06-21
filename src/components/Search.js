import React from "react";
import styled from "styled-components";
import Input from "./elements/Input";
import Buttons from "./elements/Button";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SearchWrapper className="col-12 mx-auto my-1">
        <div className="cat-items">
          <form>
            <div className="row">
              <div className="col-3">
                <Input radius="10px" label="نام کاربری" placeholder="نام کاربری" />
              </div>
              <div className="col-3">
                <Input radius="10px" label="پست الکترونیک" placeholder="پست الکترونیک" />
              </div>
              <div className="col-3">
                <Input radius="10px" label="دسته بندی" placeholder="نام کاربری" />
              </div>
              <div className="col-3 d-flex align-items-center">
                <Buttons bg='--mainBlue' mt={15} color="white" width="40%" text='جستجو' />
              </div>
            </div>
          </form>
        </div>
      </SearchWrapper>
    );
  }
}

export default Search;

const SearchWrapper = styled.div`
  .cat-items {
    background: #fff;
    padding:20px;
    border-radius:7px;
    direction:rtl;
    text-align:right;
    width: 100%;
    height: auto;
    border-color: transparent;
    transition: all 1s linear;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
