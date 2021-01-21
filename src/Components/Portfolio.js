import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">

        <div>
          <img src="pic.jpg" class="img-responsive" alt=""></img>
          <h3 class="h5">Chatterbox</h3>
          <a href="https://chatterbox-project-07.herokuapp.com/">Website</a>
          <br></br>
          <a href="https://github.com/rjwrightme/chatterbox">GitHub Repository</a>
        </div>

        <div>
          <img src="./image/vibe.jpg" class="img-responsive" alt=""></img>
          <h3 class="h5">TV Movie Vibe</h3>
          <a href="https://manneu.github.io/TVMovieVibe/">Website</a>
          <br></br>
          <a href="https://github.com/ManNeu/TVMovieVibe">GitHub Repository</a>
        </div>

        <div>
          <img src="../public/images/portfolio/note.jpg" class="img-responsive" alt=""></img>
          <h3 class="h5">Note Taker</h3>
          <a href="https://fast-anchorage-47240.herokuapp.com/">Website</a>
          <br></br>
          <a href="https://github.com/brandpower/Note-Taker">GitHub Repository</a>
        </div>

        <div>
          <img src="../public/images/portfolio/note.jpg" class="img-responsive" alt=""></img>
          <h3 class="h5">Good ReadMe Generator</h3>
          <a href="https://www.youtube.com/watch?v=NI1yIFRQ2VA&feature=youtu.be">Demo</a>
          <br></br>
          <a href="https://github.com/brandpower/Good-README-Generator">GitHub Repository</a>
        </div>

        <div>
          <img src="../public/images/portfolio/note.jpg" class="img-responsive" alt=""></img>
          <h3 class="h5">Employee Directory</h3>
          <a href="https://github.com/brandpower/Employee-Directory">Website</a>
          <br></br>
          <a href="https://github.com/brandpower/Employee-Directory">GitHub Repository</a>
        </div>

        <div>
          <img src="../public/images/portfolio/note.jpg" class="img-responsive" alt=""></img>
          <h3 class="h5">Employee Tracker</h3>
          <a href="https://www.youtube.com/watch?v=MOO4M2iXqcI&feature=youtu.be">Demo</a>
          <br></br>
          <a href="https://github.com/brandpower/Employee-Tracker">GitHub Repository</a>
        </div>


      </section >

    );
  }
}

export default Portfolio;
