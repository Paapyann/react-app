import React, { createContext, useState } from "react";
import ToDo from "./Components/ToDo";
import SingleTask from "./Components/singleTask/SingleTask";
import Navbar from "./Components/Navbar/Navbar";
// import A from "./functionalComponents/A";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./Components/AboutUS/About";
import Contact from "./Components/ContactUS/contact";
import Papyan from "./Components/papyan/papyan";
import Dnoyan from "./Components/dnoyan/dnoyan";
export const ContextProvider = createContext();

const App = () => {
  const types = ["success", "info", "warning", "error"];
  const addNotification = (text, type) => {
    toast(text, { type });
  };
  const [num, setNum] = useState(5);
  const [loadin, setLoading] = useState(5);
  const contextValue = {
    num,
    setNum,
    loadin,
    setLoading,
    addNotification,
  };
  const navigate = useNavigate();
  const containerStyles = { width: "90%", margin: "auto" };
  return (
    <>
      <Navbar />
      <div style={containerStyles}>
        <ContextProvider.Provider value={contextValue}>
          <Routes>
            <Route
              path="/"
              element={<ToDo addNotification={addNotification} />}
            />
            <Route path="/singleTask/:id" element={<SingleTask />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/papyan" element={<Papyan />} />
            <Route path="/about/dnoyan" element={<Dnoyan />} />
          </Routes>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ContextProvider.Provider>
        {/* <A /> */}
      </div>
    </>
  );
};

export default App;
