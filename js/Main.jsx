import React, {PropTypes} from 'react';
import LinkStore from "./stores/LinkStore";
import API from "./services/Api";

let _getAppState = ()=>{
  return { links : LinkStore.getAll() };
}

class Main extends React.Component {

  static propTypes = {
    limit : React.PropTypes.number,
  };

  static defaultProps = {
    limit: 3
  };

  state = _getAppState();

  onchange = ()=>{
    console.log("4. I'm in Main's onChange");
    this.setState(_getAppState());
  };

  constructor(props) {
    super(props);
    //this.state= _getAppState();
    this.onChange= this.onchange.bind(this);
  }


  componentDidMount() {
    API.fetchLinks();
    LinkStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    //LinkStore.removeListener("change",this.onchange);
    LinkStore.removeChangeListener(this.onChange);
  }

  // onchange(){
  //   console.log("4. I'm in Main's onChange");
  //   this.setState(_getAppState());
  //
  // }

  render() {
    let content = this.state.links.slice(0,this.props.limit).map((link) => {
      return <li key={link._id}> <a href={link.url}>{link.title}</a> </li>;
    })
    return (
      <div>
        <h3>Links</h3>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

export default Main;

// Main.propTypes = {
//   limit : React.PropTypes.number,
// };
//
// Main.defaultProps = {
//   limit: 5
// }
