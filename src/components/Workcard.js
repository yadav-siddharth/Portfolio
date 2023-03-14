import './Workcard.css';
import { NavLink } from 'react-router-dom';

function Workcard(props){
          return (
                  
                    
                    <div className='project-card'>
                              <img src={props.img} alt='project'></img>
                              <h2 className='project-title'>{props.title}</h2>
                              <div className='pro-details'>
                                        <p>{props.text}</p>
                              </div>
                              <div className='pro-btns'>
                                        <NavLink to={props.view} className='btn'>View</NavLink>
                                        <NavLink to='url.com' className='btn'>Source</NavLink>
                              </div>
                    </div>
          )
}

export default Workcard;