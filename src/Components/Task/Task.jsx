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
      <div className={Styles.chckboxdiv}>
        <input
          type="checkbox"
          onChange={() => handleOnChange(task._id)}
          checked={checkedTasks.has(task._id)}
          style={{ margin: "5px" }}
        />
        <Link
          style={{ textDecoration: "none" }}
          to={`/singleTask/${task._id}`}
          state={task}
        >
          <p
            style={{
              borderBottom: "2px dotted rgb(255, 255, 255, 0.7)",
              color: "rgb(255, 255, 255, 0.69)",
            }}
          >
            {task.title}
          </p>
        </Link>
        <p style={{ color: "rgb(255, 255, 255, 0.7)" }}>
          Description: {task.description}
        </p>
        <p style={{ color: "rgb(255, 255, 255, 0.7)" }}>
          Date: {task.created_at.split("T", 1)[0]}
        </p>
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
      <br />
      <Form className={Styles.form}>
        <Form.Check
          style={{marginLeft: '10px', color: 'rgb(255, 255, 255, 0.8)'}} // prettier-ignore
          checked={task.status === "done"}
          type="switch"
          id="custom-switch"
          // label="Check this switch"
          onChange={async (e) => {
            console.log(e.target.checked);
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
            const newTasks = tasks.map((item) => {
              if (item._id === task._id) {
                return { ...item, status: data.status };
              }
              return item;
            });
            setTasks(newTasks);
          }}
        />
      </Form>
    </div>
  );
};

export default Task;
