import React  from 'react'
import { Tabs } from "antd";
import "antd/dist/antd.css"
import ContentShowing from "./ContentShowing";
import ContentToShow from "./ContentToShow";
import "./TabDetail.scss"
function TabDetail(){
    return(
        <div>
            <Tabs className="tab">
                <Tabs.TabPane className="tab-pane" tab="Phim đang chiếu" key = "tab1">
                   <ContentShowing status={'showing'}/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Phim sắp chiếu" key = "tab2">
                   <ContentToShow status={'toshow'}/>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default TabDetail;