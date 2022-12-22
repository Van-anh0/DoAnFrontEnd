import React  from 'react'
import { Tabs } from "antd";
import "antd/dist/antd.css"
import ShowContentFilms from "./ShowContentFilms"
import "./TabDetail.scss"
import {MOVIE_STATUS_SHOWING, MOVIE_STATUS_TOSHOW} from '../../utils/constants'

function TabDetail(){
    return(
        <div>
            <Tabs className="tab">
                <Tabs.TabPane className="tab-pane" tab="Phim đang chiếu" key = "tab1">
                   <ShowContentFilms status={MOVIE_STATUS_SHOWING}/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Phim sắp chiếu" key = "tab2">
                   <ShowContentFilms status={MOVIE_STATUS_TOSHOW}/>
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default TabDetail;