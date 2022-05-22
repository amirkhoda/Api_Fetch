import React from 'react'
import './App.css';
function Setting() {
  

  return (
    <div className="container mt-5">
    <div className="row">
        <div className="col-lg-4 pb-5">
=            <div className="author-card pb-3">
                <div className="author-card-cover" style={{backgroundImage: "url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg)"}}><a className="btn btn-style-1 btn-white btn-sm" href="#" data-toggle="tooltip" title="" data-original-title="You currently have 290 Reward points to spend"><i className="fa fa-award text-md"></i>&nbsp;290 points</a></div>
                <div className="author-card-profile">
                    <div className="author-card-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams"/>
                    </div>
                    <div className="author-card-details">
                        <h5 className="author-card-name text-lg">Daniel Adams</h5><span className="author-card-position">Joined February 06, 2017</span>
                    </div>
                </div>
            </div>
            <div className="wizard">
                <nav className="list-group list-group-flush">
                    <a className="list-group-item" href="#">
                        <div className="d-flex justify-content-between align-items-center">
                            <div><i className="fe-icon-shopping-bag mr-1 text-muted"></i>
                                <div className="d-inline-block font-weight-medium text-uppercase">Orders List</div>
                            </div><span className="badge badge-secondary">6</span>
                        </div>
                    </a><a className="list-group-item active" href="#"><i className="fe-icon-user text-muted"></i>Profile Settings</a><a className="list-group-item" href="#"><i className="fe-icon-map-pin text-muted"></i>Addresses</a>
                    <a className="list-group-item" href="https://www.bootdey.com/snippets/view/bs4-wishlist-profile-page" target="__blank">
                        <div className="d-flex justify-content-between align-items-center">
                            <div><i className="fe-icon-heart mr-1 text-muted"></i>
                                <div className="d-inline-block font-weight-medium text-uppercase">My Wishlist</div>
                            </div><span className="badge badge-secondary">3</span>
                        </div>
                    </a>
                    <a className="list-group-item" href="https://www.bootdey.com/snippets/view/bs4-account-tickets" target="__blank">
                        <div className="d-flex justify-content-between align-items-center">
                            <div><i className="fe-icon-tag mr-1 text-muted"></i>
                                <div className="d-inline-block font-weight-medium text-uppercase">My Tickets</div>
                            </div><span className="badge badge-secondary">4</span>
                        </div>
                    </a>
                </nav>
            </div>
        </div>
        <div className="col-lg-8 pb-5">
            <form className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="account-fn">First Name</label>
                        <input className="form-control" type="text" id="account-fn" defaultValue="Daniel" required=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="account-ln">Last Name</label>
                        <input className="form-control" type="text" id="account-ln" defaultValue="Adams" required=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="account-email">E-mail Address</label>
                        <input className="form-control" type="email" id="account-email" defaultValue="daniel.adams@example.com" disabled=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="account-phone">Phone Number</label>
                        <input className="form-control" type="text" id="account-phone" defaultValue="+7 (805) 348 95 72" required=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="account-pass">New Password</label>
                        <input className="form-control" type="password" id="account-pass"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="account-confirm-pass">Confirm Password</label>
                        <input className="form-control" type="password" id="account-confirm-pass"/>
                    </div>
                </div>
                <div className="col-12">
                    <hr className="mt-2 mb-3"/>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <div className="custom-control custom-checkbox d-block">
                            <input className="custom-control-input" type="checkbox" id="subscribe_me" defaultChecked=""/>
                            <label className="custom-control-label" htmlFor="subscribe_me">Subscribe me to Newsletter</label>
                        </div>
                        <button className="btn btn-style-1 btn-primary" type="button" data-toast="" data-toast-position="topRight" data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!" data-toast-message="Your profile updated successfuly.">Update Profile</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Setting
