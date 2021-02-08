import React from "react";
import NameList from "./NameList";

class RenderList extends React.Component {
  constructor() {
    super();
    this.items = ["ross", "monica", "chandler", "rachel", "phoebe", "joe"];
  }
  render() {
    return (
      <div>
        <ul>
          <NameList names={this.items} />
        </ul>
      </div>
    );
  }
}

export default RenderList;
