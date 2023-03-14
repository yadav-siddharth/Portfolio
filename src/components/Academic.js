import { Link } from 'react-router-dom';
import './Academic.css'


function Academic(){
          return(
                    <div className='grades'>
                              <div className='card-container'>
                                        <div className='card'>
                                                  <h3>ENGINEERING EDUCATION</h3>
                                                  <span className='bar'></span>
                                                  <p className='btc'>9.57</p>
                                                  <p>From : Thadomal Shahni Engineering College</p>
                                                  <p>Year : 2021-Present</p>
                                                  <Link to='/contact' className='btn'>View MarkSheet</Link>
                                        </div>

                                        <div className='card'>
                                                  <h3>HSC EDUCATION</h3>
                                                  <span className='bar'></span>
                                                  <p className='btc'> 82.46%</p>
                                                  <p>From : Swami Vivekanad Junior College</p>
                                                  <p>Year : 2018-2020</p>
                                                  <Link to='/contact' className='btn'>View MarkSheet</Link>
                                        </div>

                                        <div className='card'>
                                                  <h3>SSC EDUCATION</h3>
                                                  <span className='bar'></span>
                                                  <p className='btc'> 90.80%</p>
                                                  <p>From : Swami Vivekanad High School</p>
                                                  <p>Year : 2017-2018</p>
                                                  <Link to='/contact' className='btn'>View MarkSheet</Link>
                                        </div>
                              </div>
                    </div>
          )
}

export default Academic;