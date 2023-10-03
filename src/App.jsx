import { useState } from "react";
import "./App.css";
import MemberListing from "./components/MemberListing";
import MemberForm from "./components/MemberForm";

function App() {
  const [memberList, setMemberList] = useState([]);

  const addMember = (member) => {
    const newMember = [...memberList, member];
    setMemberList(newMember);
  };
  return (
    <div className="App">
      <div className="App-landing">
        {memberList.length === 0 ? (
          <div> Henuz uyemiz yok</div>
        ) : (
          <MemberListing memberProp={memberList} />
        )}
        <MemberForm addMemberFn={addMember} />
      </div>
    </div>
  );
}

export default App;
