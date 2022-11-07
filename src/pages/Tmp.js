import { useParams,Link } from "react-router-dom"

export default function Tmp() {
  const{sid}=useParams();
  return (
    <div className="container">
    <h1>Tmp{sid}</h1>
    <div>
      <Link to="/tmp/1">1</Link>
    </div>
    <div>
        <Link to="/tmp/2">2</Link>
      </div>
      <div>
        <Link to="/tmp/3">3</Link>
      </div>
    </div>
  )
}
