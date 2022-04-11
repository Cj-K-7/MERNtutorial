import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../goals/goalSlice";

function GoalForm() {
    const [text, setText] = useState<string>('');
    const dispatch = useDispatch();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
      setText(event.currentTarget.value)
      dispatch(createGoal({text}));
      setText('');
  }
  return (
    <section className="from">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input type="text" name='text' id='text' onChange={onChange}/>
        </div>
      </form>
      <div className="form-group">
          <button className="btn btn-blcok" type="submit">Add Goal</button>
      </div>
    </section>
  );
}

export default GoalForm;
