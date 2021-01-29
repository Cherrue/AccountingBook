import React, {useState} from "react";
import {TabView, TabPanel} from 'primereact/tabview';
import {PrimeTable} from "./components/PrimeTable";
import {PrimeInputForm} from "./components/PrimeInputForm";
import {PrimeCalendar} from "./components/PrimeCalendar";

class App extends React.Component {
	state = {
		activeIndex:0,
	};
	render(){
		const {activeIndex} = this.state;
		return (
      <div className="app">
      <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
        <TabPanel header="신규자료 입력">
          <div class="p-grid p-fluid">
            <div class="p-col-12 p-lg-4">
              <PrimeInputForm></PrimeInputForm>
            </div>
            <div class="p-col-12 p-lg-8">
              <PrimeTable></PrimeTable>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="자료 수정 및 삭제">
          Content II
        </TabPanel>
        <TabPanel header="자료검색 및 출력">
          Content III
        </TabPanel>
        <TabPanel header="악덕업체관리">
          Content 4
        </TabPanel>
    </TabView>
    </div>
    )
	}
}
/*
function App(){
  const [activeIndex] = useState(0);
  return(
    <div className="app">
      <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
        <TabPanel header="">
          Content I
          <PrimeTable></PrimeTable>
          <PrimeCalendar></PrimeCalendar>
        </TabPanel>
        <TabPanel header="Header II">
          Content II
        </TabPanel>
        <TabPanel header="Header III">
          Content III
        </TabPanel>
    </TabView>
    </div>
  );
}*/

export default App;
