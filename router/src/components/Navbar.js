import { Link ,NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
     <ul>
        {/* <li> <a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li> */}


        {/* <li><Link to="/" >Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}

        <li><NavLink to="/"  style={({isActive})=>{return{
            backgroundColor: isActive ? "red" : ""
        }}}>Home</NavLink></li>
        <li><NavLink to="/about" style={({isActive})=>{return{
            backgroundColor: isActive ? "Highlight" :""
        }}} >About</NavLink></li>
        <li><NavLink to="/contact" style={({isActive})=>{return{
            backgroundColor: isActive ? "Highlight":""
        }}} >Contact</NavLink></li>
        <li><NavLink to="/post/mobile" style={({isActive})=>{return{
            backgroundColor:isActive? "Highlight" :""
        }}}>Post</NavLink></li>
        <li><NavLink to="/post/mobile/1" style={({isActive})=>{return{
            backgroundColor:isActive? "Highlight" :""
        }}}>Post with id</NavLink></li>
        <li><NavLink to="/login" style={({isActive})=>{return {backgroundColor:isActive ? "Highlight":""}}}>Login</NavLink></li>
        <li><NavLink to="/dashboard" style={({isActive})=>{return{backgroundColor:isActive ? "Highlight":""}}}>Dashboard</NavLink></li>
        <li><NavLink to="/logout" style={({isActive})=>{return{backgroundColor:isActive ? "Highlight":""}}}>Logout</NavLink></li>

     </ul>
    </>
  )
}

export default Navbar