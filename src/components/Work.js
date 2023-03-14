import './Workcard.css';
import Workcard from './Workcard';
import Workdata from './Workdata';



function work(){

          return (
                    <div className='work-container'>
                              <h1 className='project-heading'>
                                                  Projects.  
                              </h1>

                              <div className='project-container'>
                                        {Workdata.map((val,ind)=>{
                                                  return (
                                                            <Workcard key={ind} 
                                                            img={val.imgsrc}  
                                                            title={val.title}
                                                            text={val.text}
                                                            view={val.view}/>
                                                  )
                                        })}
                              </div>


                    </div>
          )
}

export default work;