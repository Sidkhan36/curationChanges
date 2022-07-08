import React from "react";

const Form = (props) => {
  return (
    <div className="form-sec">
      <div className="container-fluid">
        <div style={{ textAlign: "center" }}>
          <img alt="" className="curation-img" src="assets/images/logo.png" />
        </div>
        <div
          className="join-community"
          style={{ backgroundColor: "transparent", border: "0" }}
        >
          <form onSubmit={props.createUser}>
            <div className="form-group">
              <input
                type="Artist Name"
                name=""
                placeholder={props.artistPlaceHolder}
                onChange={(e) => {
                  props.setNewName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="Instagram"
                name=""
                placeholder={props.titlePlaceHolder}
                onChange={(e) => {
                  props.setNewInstagram(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
