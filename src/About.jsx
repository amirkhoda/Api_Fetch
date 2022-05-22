import React from 'react'
import {Card,CardHeader,CardBody} from 'reactstrap'

function About() {
  return (
    <div >
      <div className="container">
            <div className="row">
              
                <div className="col-12"  >
                    <h3 style={{color:"white"}}>About Us</h3>
                    <hr style={{color:"#ea4c89",height:"0.4rem",zIndex:"3"}}/>
                </div>
            </div>
            <div className="row row-content mt-4">
                <div className="col-12 col-md-6"style={{color:"white"}}>
                    <h2 className="mb-3">Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Iran. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Iran.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5 mt-3 ms-5">
                    <Card style={{border:" none"}}>
                        <CardHeader className=" text-white"style={{backgroundColor:"#ea4c89"}}>Facts At a Glance</CardHeader>
                        <CardBody className="bg-dark">
                            <dl className="row p-1 text-white">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
               
            </div>


            
        </div>
    </div>
  )
}

export default About
