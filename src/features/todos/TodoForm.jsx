import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "./todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ id: "", title: "", completed: false }}
      onSubmit={(values, { resetForm }) => {
        const todo = { ...values, id: nanoid() };
        dispatch(addTodo(todo));
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field name="title" />
          </div>
          <div>
            <label htmlFor="completed">Completed</label>
            <Field type="checkbox" name="completed" />
          </div>
          <button type="submit">➕</button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;
