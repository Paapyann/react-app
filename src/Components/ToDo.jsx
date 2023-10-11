import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import Styles from "./styles.module.css";
import { idGeneretor } from "../helpers/idGeneretor";

class ToDo extends React.Component {
  state = {
    tasks: [
      { name: "Task1", id: idGeneretor() },
      { name: "Task2", id: idGeneretor() },
      { name: "Task3", id: idGeneretor() },
    ],
    inputValue: "",
    checkedTasks: new Set(),
  };

  inputOnChange = (e) => {
    const value = e.target.value;
    this.setState({
      inputValue: value,
    });
  };

  submit = () => {
    if (this.state.inputValue === "") return;
    const tasks = this.state.tasks;
    tasks.push({ name: this.state.inputValue, id: idGeneretor() });
    // this.state.tasks = tasks;  sxal tarberak
    this.setState({
      ...this.state,
      inputValue: "",
      tasks,
    });
  };

  handleDeleteTask = (id) => {
    let tasks = this.state.tasks;
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      ...this.state,
      tasks,
    });
  };

  handleOnChange = (id) => {
    const { checkedTasks } = this.state;
    if (checkedTasks.has(id)) {
      checkedTasks.delete(id);
    } else {
      checkedTasks.add(id);
    }
    this.setState({
      ...this.state,
      checkedTasks,
    });
  };
  handleDeleteAllTasks = () => {
    let { tasks, checkedTasks } = this.state;
    // tasks = tasks.filter((task) => task.id !== checkedTasks.has(task.id));
    checkedTasks = Array.from(checkedTasks);
    tasks = checkedTasks.reduce(
      (acc, checkedTask) => acc.filter((task) => task.id !== checkedTask),
      tasks
    );

    this.setState({
      ...this.state,
      tasks,
      checkedTasks: new Set(),
    });
  };
  render() {
    console.log(this.state.checkedTasks);
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "green" }}>ToDo Project</h1>
        <AddTask
          inputOnChange={this.inputOnChange}
          submit={this.submit}
          inputValue={this.state.inputValue}
        />
        <div className={Styles.TasksContainer}>
          {this.state.tasks.map((item, index) => {
            return (
              <Task
                key={index}
                task={item}
                handleDeleteTask={this.handleDeleteTask}
                handleOnChange={this.handleOnChange}
                checkedTasks={this.state.checkedTasks}
              />
            );
          })}
          {this.state.tasks.length === 0 && <p>There are not tasks!</p>}
        </div>
        {this.state.tasks.length === 0 || (
          <div className={Styles.deleteAll}>
            <button onClick={this.handleDeleteAllTasks}>Delete All</button>
          </div>
        )}
      </div>
    );
  }
}

export default ToDo;
