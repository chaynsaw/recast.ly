import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';

class App extends React.Component {
  constructor () { 
    super();
    this.state = ({
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    });
    this.myClick = this.myClick.bind(this);
  }
  myClick (selectedVideo) {
    console.log(selectedVideo);
    this.setState({
      currentVideo: selectedVideo,
    });
  }
  render () {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currentVideo}/>
        </div>
        <div className="col-md-5" >
          <VideoList videos = {this.state.videoList} onClick = {this.myClick}/>
        </div>
      </div>
    </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
