import { useSnapshot } from "valtio"
import state from "../store"

const Tab = ({ tab, handleClick, isActiveTab, isFilterTab }) => {
  const snap = useSnapshot(state)
  const activeStyles = isActiveTab && isFilterTab 
    ? {backgoundColor: snap.color, opacity: .5}
    : {backgoundColor: 'transparent', opacity: 1}

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img src={tab.icon} alt={tab.name} className="h-8 w-8" />
    </div>
  )
}

export default Tab