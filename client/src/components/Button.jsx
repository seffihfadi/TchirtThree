import { useSnapshot } from "valtio"
import state from "../store"
import { getContrastingColor } from '../config/helpers';
const Button = ({ type, title, handleClick, customStyles }) => {

  const snap = useSnapshot(state)
  const generateStyle = (type) => {
    if (type === 'filled'){
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    }else if(type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }

  return (
    <button
      className={`rounded-md font-bold w-fit px-4 py-2 flex-1 ${customStyles}`}
      onClick={handleClick}
      style={generateStyle(type)}
    >
      {title}
    </button>
  )
}

export default Button