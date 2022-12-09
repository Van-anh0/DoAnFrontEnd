import { Tabs } from "antd";
import "antd/dist/antd.css"
import ContentShowing from "./ContentShowing";
import ContentToShow from "./ContentToShow";
import "./TabCT.scss"
function TabCT(){
    return(
        <div>
            <Tabs className="tab">
                <Tabs.TabPane className="tab-pane" tab="Phim đang chiếu" key = "tab1">
                   <ContentShowing/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Phim sắp chiếu" key = "tab2">
                   <ContentToShow/>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default TabCT;