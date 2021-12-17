import React from 'react';

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = evt => {
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name:
          <input
            name='name'
            type='text'
            placeholder='Type your name here'
            maxLength='30'
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>Email:
          <input
            name='email'
            type='email'
            placeholder='Type your email here'
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>Role:
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
            <option value='Backend Engineer'>Backend Engineer</option>
            <option value='Designer'>Designer</option>
            <option value='SEO'>SEO</option>
            <option value='Marketing'>Marketing</option>
          </select>
        </label>
        <button>Submit</button>
      </div>
    </form>
  );
}