import React from 'react'
import './app.scss'
import WelcomeGreetings from './Pages/WelcomeGreetings'
import Headers from './Components/Header/Headers'
import Opening from './Components/Opening/Opening'
import CardContainer from './Components/CardContainer/CardContainer'
import TernaryCondition from './Components/TernaryCondition/TernaryCondition'
import ConditioningRendering from './Components/ConditioningRendering/ConditioningRendering'
import ListContainer from './Components/ListRendering/ListContainer'
import ClickEventContainer from './Components/ClickEvent/ClickEventContainer'
import MyComponent from './Components/MyComponent/MyComponent'
import OnChangeEvent from './Components/OonChangeEvent/OnChangeEvent'


const App = () => {
  return (
    <div className="app">
      <WelcomeGreetings />
      <Headers />
      <Opening />
      <CardContainer />
      <TernaryCondition />
      <ConditioningRendering />
      <ListContainer />
      <ClickEventContainer />
      <MyComponent />
      <OnChangeEvent />
    </div>
  )
}

export default App