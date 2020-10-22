import React, { useState, useEffect  } from "react";
import { connect } from 'react-redux';


// components
import Msg from "./Msg";
import SearchBar from "./SearchBar";
import Loading from "./Loading"

const MsgList = (props) => {
  const [loading, setLoading] = useState(true);
  const [query, setQeury] = useState("");
  // here sould be a msg loop
  const msgs = props.msgs
  
  const filterMsgs = () => {
    return msgs.filter((msg) => {
      return `${msg.message}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  };

  const msgList = filterMsgs().map(msg => (
    <Msg key={msg.id} msg={msg}></Msg>
  ));
const x=props.x
  useEffect(()=> {
    setLoading(false);
  }, [x])
console.log(x)
  if (!msgList) return <Loading/>
 
  return (
    <div className="border border-warning m-5">
      <SearchBar onChange={setQeury} placeholder="Search for Message"/>
      <h1>this is the msg list</h1>
      {msgList}
      
    </div>
  );
}

const mapStateToProps = (state) => ({

  msgs: state.messeges,

})


export default connect(mapStateToProps)(MsgList);
