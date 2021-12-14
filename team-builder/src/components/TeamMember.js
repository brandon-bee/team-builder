import React from 'react';

export default function TeamMember(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working on fetching your team member&apos;s details...</h3>
  }

  return (
    <div className='team-member container'>
      <h2>{details}</h2>
    </div>
  )
}
