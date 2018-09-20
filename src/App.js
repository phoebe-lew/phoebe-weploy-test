import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import PanelContainer from './components/PanelContainer.js'
import { getPositionsByState } from './data/mappedData.js'
import 'react-tabs/style/react-tabs.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>Requested</Tab>
            <Tab>Accepted</Tab>
            <Tab>Awaiting Timesheet Approval</Tab>
          </TabList>
          <TabPanel>
            <PanelContainer positions={getPositionsByState('requested')} />
          </TabPanel>
          <TabPanel>
            <PanelContainer positions={getPositionsByState('accepted')} />
          </TabPanel>
          <TabPanel>
            <PanelContainer
              positions={getPositionsByState('awaiting-approval')}
            />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default App
