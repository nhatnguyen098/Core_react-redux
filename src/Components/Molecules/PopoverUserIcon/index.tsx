import React from "react";
import { OverlayTrigger, Popover, Tabs, Tab } from "react-bootstrap";

const Index = (
<Popover id={`popover-positioned-bottom`}>
  <Popover.Content>
    <Tabs defaultActiveKey="user" id="uncontrolled-tab-example">
      <Tab eventKey="user" title="User">
        zxc123
      </Tab>
      <Tab eventKey="favorite" title="Favorite">
        zxc
      </Tab>
    </Tabs>
  </Popover.Content>
</Popover>
)

export default Index;
