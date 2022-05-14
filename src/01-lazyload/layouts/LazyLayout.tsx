import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Lazy1, Lazy2, Lazy3 } from '../pages';

const LazyLayout = () => {
  return (
    <div>
        
        <ul>
            <li>
                <NavLink to={"lazy1"}>Lazy 1</NavLink>
            </li>
            <li>
                <NavLink to={"lazy2"}>Lazy 2</NavLink>
            </li>
            <li>
                <NavLink to={"lazy3"}>Lazy 3</NavLink>
            </li>
        </ul>


        <Routes>
            <Route path="lazy1" element={ <Lazy1 /> } />
            <Route path="lazy2" element={ <Lazy2 /> } />
            <Route path="lazy3" element={ <Lazy3 /> } />

            <Route path="*" element={ <Navigate replace to="lazy1"  /> } />
        </Routes>
    </div>
  )
}

export default LazyLayout