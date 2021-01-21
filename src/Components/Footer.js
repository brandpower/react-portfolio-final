import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">

            <ul className="copyright">
              <li> This is a stunning footer</li>
              <li>Wow this deserves full marks</li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer >
    );
  }
}

export default Footer;
