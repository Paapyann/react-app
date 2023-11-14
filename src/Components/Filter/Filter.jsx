import { useState } from "react";
import { Form, Button } from "react-bootstrap";
const Filter = ({ tasks, setTasks }) => {
  const [searchData, setSearchData] = useState();
  const filterByTitle = () => {
    console.log(searchData, "searchData");
    const filteredTasks = tasks.filter((task) => task.title === searchData);
    console.log(filteredTasks, "filteredTasks");
    setTasks(filteredTasks);
  };
  return (
    <div style={{ display: "flex", marginTop: "50px" }}>
      <Form.Control
        placeholder="search ..."
        onChange={(e) => setSearchData(e.target.value)}
      />
      <Button style={{ marginLeft: "15px" }} onClick={filterByTitle}>
        Search
      </Button>
    </div>
  );
};

export default Filter;
