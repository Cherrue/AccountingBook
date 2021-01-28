
import propTypes from "prop-types";

class App extends React.Component {
	state = {
		isLoading:true,
		count:0
	};
	componentDidMount(){
		setTimeout(() => {
			this.setState({isLoading:false});
		},6000);
	}
	render(){
		const {isLoading, count} = this.state;
		return (
      <div>
        {friends.map(a=><Food key={a.name} name={a.name} something={a.something} rating={a.rating} />)}
        hi {isLoading ? "Loading" : "We are ready"} {this.state.count}
      </div>
    )
	}
}

function Food({name, something}){
    return (
      <div>
        <h3>I Love {name}</h3>
        <h4>one more {something}</h4>
      </div>
    )
  }
  Food.propTypes={
    name: propTypes.string.isRequired,
    something: propTypes.string.isRequired,
    rating: propTypes.string.isRequired,
  }
  
  function Potato(){
    return <h3>Potato</h3>;
  }
  const friends=[
    {
      name : "a",
      something : "나야",
      rating: 4.1
    },{
      name : "b",
      something : "머해",
      rating: 5.2
    },{
      name : "c",
      something : "나와",
      rating: 5.2
    },{
      name : "d",
      something : "집앞이야",
      rating: 5.2
    }
  ];