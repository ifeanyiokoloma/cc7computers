import { Skeleton } from "@mui/material";
import styles from "./manage.module.css";
import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase/FirebaseApp";
import useAdvancedFetch from "../../../hooks/useAdvancedFetch";

const ManageAccessory = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [computers] = useAdvancedFetch("products", "accessory", "timestamp", 0, []);

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
        {computers.length > 0 ? (
          computers.map((computer) => {
            return (
              <form className="card" key={computer.id}>
                <div className="card-img">
                  <img
                    className="img"
                    src={computer.imgSrc}
                    alt={computer.id}
                  />
                </div>
                <div className="card-txt">
                  <p>
                    <span className="name">Brand: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="Brand"
                          onBlur={(e) => handleUpdate(e, computer.id)}
                          placeholder={computer.brand}
                        />
                      ) : (
                        computer.brand
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">Model: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="Model"
                          onBlur={(e) => handleUpdate(e, computer.id)}
                          placeholder={computer.model}
                        />
                      ) : (
                        computer.model
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">Type: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="Model"
                          onBlur={(e) => handleUpdate(e, computer.id)}
                          placeholder={computer.type}
                        />
                      ) : (
                        computer.type
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">Name: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="Model"
                          onBlur={(e) => handleUpdate(e, computer.id)}
                          placeholder={computer.name}
                        />
                      ) : (
                        computer.name
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">Quantity: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="number"
                          name="quantity"
                          placeholder={computer.quantity}
                          onBlur={(e) => handleUpdate(e, computer.id)}
                        />
                      ) : (
                        computer.quantity
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">Price: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="number"
                          name="price"
                          placeholder={computer.price}
                          onBlur={(e) => handleUpdate(e, computer.id)}
                        />
                      ) : (
                        computer.price
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
                        handleDelete(computer.id);
                      }}
                      className="btn-pri-color"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </form>
            );
          })
        ) : (
          <>
            <Skeleton sx={{ bgcolor: "black" }} height={500} />
            <Skeleton sx={{ bgcolor: "black" }} height={500} />
            <Skeleton sx={{ bgcolor: "black" }} height={500} />
          </>
        )}
      </div>
    </section>
  );
};

export default ManageAccessory;
