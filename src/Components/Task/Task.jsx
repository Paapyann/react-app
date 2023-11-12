import Styles from "./styles.module.css";
import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Task = (props) => {
  const {
    handleDeleteTask,
    task,
    handleOnChange,
    checkedTasks,
    handleEditTask,
    setTasks,
    tasks,
  } = props;
  return (
    <div className={Styles.task}>
      <div>
        <input
          type="checkbox"
          onChange={() => handleOnChange(task._id)}
          checked={checkedTasks.has(task._id)}
        />
        <Link to={`/singleTask/${task._id}`} state={task}>
          <p>Title: {task.title}</p>
        </Link>
        <p>Description: {task.description}</p>
        <p>Date: {task.created_at}</p>
      </div>
      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleDeleteTask(task._id)}
          disabled={checkedTasks.has(task._id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        <button
          disabled={checkedTasks.has(task._id)}
          onClick={() => handleEditTask(task)}
        >
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      {/* <Form>
        <Form.Check // prettier-ignore
          checked={task.status === "done"}
          type="switch"
          id="custom-switch"
          label="Check this switch"
          onChange={async (e) => {
            const response = await fetch(
              `http://localhost:3001/task/${task._id}`,
              {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({
                  status: e.target.checked ? "done" : "active",
                }),
              }
            );
            const data = await response.json();
            const newTasks = tasks.map((i) => {
              //================== homework
            });
            console.log(newTasks, "newTasks");
            // setTasks(newTasks);
          }}
        />
      </Form> */}
    </div>
  );
};

export default Task;
