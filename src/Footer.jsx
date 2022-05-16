import React from 'react'

function Footer() {
    function MouseEnter(event) {
        event.target.style.color = '#ea4c89';
      }
      function MouseLeave(event){
        event.target.style.color="";
      }
      
  return (
    <div>
     
<footer className={"bg-dark"}>
  
  <div className="container p-4  ">
    <section className="mb-4 text-right ">
      <a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className="btn btn-outline-light btn-floating m-2" href="#!" role="button" ><i className="fab fa-telegram"></i
      ></a>

      <a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className="btn btn-outline-light btn-floating m-2" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

      <a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className="btn btn-outline-light btn-floating m-2" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></a>

      <a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className="btn btn-outline-light btn-floating m-2" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></a>

      <a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className="btn btn-outline-light btn-floating m-2" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      <a onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className="btn btn-outline-light btn-floating m-2" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>

    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong style={{color:'white'}}>Sign up for our newsletter</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              
            </div>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>

    <section className="mb-4 " style={{color:"white"}}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>

    <section className="">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </section> 
  </div>

  <div className="text-center p-3 bg-dark text-white" >
    © 2020 Copyright:  
    <a className="text-white" href="https://mdbootstrap.com/"></a>
  </div>
</footer>
    </div>
  )
}

export default Footer
 
 