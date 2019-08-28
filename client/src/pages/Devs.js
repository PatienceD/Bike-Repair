import React from 'react';
import PD from "./pic/patience.jpg"
import CR from "./pic/charlotte.jpg";

function Devs() {

    return (
        <div>
            <div className="header">
                <h2 style={{ fontSize: '45px', fontWeight: 'bolder' }}>Meet the Developers</h2>
                <hr></hr><br></br>
            </div>
            <div className="container">
                <div className="row">
                    <div className='col-md-6'>
                        <div class="card card-cascade wider">
                            <div class="view view-cascade overlay">
                                <img class="card-img-top" src={PD} alt="Card image cap" style={{height: '700px'}}></img>
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body card-body-cascade text-center">
                                <h4 class="card-title"><strong>Patience Deaton</strong></h4>
                                <h5 class="blue-text pb-2"><strong>Full Stack Web Developer</strong></h5>
                                <p class="card-text">Loves dogs and owns more than a dozen film cameras.</p>
                                <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>
                                <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
                                <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="card card-cascade wider">
                            <div class="view view-cascade overlay">
                                <img class="card-img-top" src={CR} style={{height: '700px'}} alt="Card image cap"></img>
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body card-body-cascade text-center">
                                <h4 class="card-title"><strong>Charlotte Rice</strong></h4>
                                <h5 class="blue-text pb-2"><strong>Full Stack Web Developer</strong></h5>
                                <p class="card-text">My family has hosted over 30 exchange students.</p>
                                <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"></i></a>
                                <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"></i></a>
                                <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br></br><br></br>
        </div>
    )
}

export default Devs;

