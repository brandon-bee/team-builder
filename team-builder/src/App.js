import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TeamMember from './components/TeamMember';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className='container'>
      {
        teamMembers.map(member => {
          return (
            <TeamMember key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
