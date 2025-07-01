import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default Location",
      },
    };
    this.interval = null;
    // console.log("Constructor Called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shriyansh2305");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
    // console.log("Component Did Mount");
    // This will keep on calling even after unmounting, a cons of SPA
    // this.interval = setInterval(() => {
    //     console.log("Namaste React OP");
        
    // }, 1000);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
    // to achieve the effect of [var1, var2]
    // when these variable change, do this
  }
  componentWillUnmount() {
    // console.log("Component will unmount");
    // Need to clear the interval after unmount
    // clearInterval(this.interval);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log("Render Called");

    return (
      <div className="userCard">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

/*
---- MOUNTING ------

Constructor(dummy)
Render(dummy)
    <HTML dummy>
Component Did Mount
    <API call>
    <this.setState> -> State variable is updated

-----UPDATE ------
    render(API data)
    <HTML new API data>
    Component Did Update

*/
export default UserClass;
