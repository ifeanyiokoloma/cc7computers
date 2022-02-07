import useFetchLive from "../../../hooks/useFetchLive";
import { Skeleton } from "@mui/material";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase/app";
import styles from "./manage.module.css";

const ManageEmployee = () => {
  const [employees] = useFetchLive("employees", []);
    const [isEdit, setIsEdit] = useState(false);
    
    // Functions
    const activateEditMode = () => {
      setIsEdit(true);
    };

    const cancelEditMode = () => {
      setIsEdit(false);
    };

    const handleUpdate = async (e, id) => {
      const input = e.target;
      if (input.value === "") {
        return console.log("enter something to update");
      } else {
        const computerRef = doc(db, "products", id);
        const name = input.name;
        const value = input.value;
        const inputObj = {
          [name]: value,
        };
        try {
          await updateDoc(computerRef, inputObj);
        } catch (error) {
          console.log(error.message);
        }
      }
    };

    const handleDelete = async (id) => {
      const computerRef = doc(db, "products", id);
      try {
        await deleteDoc(computerRef, id);
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
      {employees.length > 0 ? (
        employees.map((employee) => (
          <form className="card" key={employee.id}>
                <div className="card-img">
                  <img
                    className="img"
                    src={employee.imgSrc}
                    alt={employee.id}
                  />
                </div>
                <div className="card-txt">
                  <p>
                    <span className="name">Name: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="Brand"
                          onBlur={(e) => handleUpdate(e, employee.id)}
                          placeholder={employee.names}
                        />
                      ) : (
                        employee.names
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">Skills: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="Model"
                          onBlur={(e) => handleUpdate(e, employee.id)}
                          placeholder={employee.skills}
                        />
                      ) : (
                        employee.skills
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">Job: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="Model"
                          onBlur={(e) => handleUpdate(e, employee.id)}
                          placeholder={employee.job}
                        />
                      ) : (
                        employee.job
                      )}
                    </span>
                  </p>
                  <div className="card-btn">
                    {isEdit ? (
                      <>
                        <button
                          onClick={() => cancelEditMode()}
                          className="btn-sec-color"
                        >
                          cancel edit
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => activateEditMode()}
                        className="btn-pri-color"
                      >
                        edit
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        handleDelete(employee.id);
                      }}
                      className="btn-pri-color"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </form>
            ))
      ) : (
        <Skeleton />
      )}
      </div>
    </section>
  );
};

export default ManageEmployee;
