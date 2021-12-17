import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TeamMember from './components/TeamMember';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
};

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      setError('All fields are required to submit');
    } else {
      setTeamMembers([ newTeamMember, ...teamMembers ]);
      setFormValues(initialFormValues);
      setError('');
    }
  }

  return (
    <div className='container'>
      <h1>Team Builder App</h1>
      <h2>{error}</h2>
      <Form values={formValues} update={updateForm} submit={submitForm} />
      {
        teamMembers.map((member, idx) => {
          return (
            <TeamMember key={idx} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
