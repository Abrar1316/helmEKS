import React from 'react'
import { useForm } from "react-hook-form";
import { createTask } from '../services/TaskService'

export default function CreateTask(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createTask(data).then(response => {
            props.taskCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>Add Question</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Question</label>
                            <input {...register("task")} placeholder="Question" className="form-control" name="task" id="task" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Answer</label>
                            <input {...register("assignee")} placeholder="Answer" className="form-control" name="assignee" id="assignee" />
                        </div>
                    </div>
                    <div className='cc'><input type="submit" className="btn btn-danger mrgnbtm" /></div>
                    
                </form>
                </div>
            </div>
        </div>
    )
}