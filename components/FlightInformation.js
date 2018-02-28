import React from 'react'
import ReactDOM from 'react-dom'

import FlightDetails from './FlightDetails'
import CommentPage from './CommentPage'
import Tabs from './Tabs'

const tabs = [{
  name: 'TAB 1',
  content: <FlightDetails/>
}, {
  name: 'TAB 2',
  content: <CommentPage/>

}];
export default class FlightInformation extends React.Component {
	render() {
		 return (
    <Tabs selected={0}>

    {tabs.map(tab =>
      <Pane label={tab.name}>{tab.content}</Pane>)
    }
    </Tabs>
  );
	}
 
}

const Pane = (props) => {
  return <div key={props.label}>{props.children}</div>;
}
