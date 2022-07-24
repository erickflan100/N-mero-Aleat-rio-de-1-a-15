import './btn.css'

export default function Btn (props) {
  return <button className="btn" onClick={props.random}>{props.text}</button>    
}