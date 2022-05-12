import { Skeleton } from "@mui/material";
import styles from "./manage.module.css";
import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase/app";
import useAdvancedFetch from "../../../hooks/useAdvancedFetch";
import Button from "../../../components/button/Button";
import Img from "react-cool-img";
import React from "react";

const ManageComputer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [computers] = useAdvancedFetch(
    "products",
    "computer",
    "timestamp",
    "desc",
    0,
    []
  );

  // Functions
  const activateEditMode = (id) => {
    console.log(id);
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
                <div className={styles.imageBox}>
                  <Img
                    className={styles.image}
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
                    <span className="name">Processor: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="processor"
                          onBlur={(e) => handleUpdate(e, computer.id)}
                          placeholder={computer.processor}
                        />
                      ) : (
                        computer.processor
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">Storage: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="Storage"
                          onBlur={(e) => handleUpdate(e, computer.id)}
                          placeholder={computer.storage}
                        />
                      ) : (
                        computer.storage
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">RAM: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          name="Ram"
                          type="text"
                          onBlur={(e) => handleUpdate(e, computer.id)}
                          placeholder={computer.ram}
                        />
                      ) : (
                        computer.ram
                      )}
                    </span>
                  </p>
                  <p>
                    <span className="name">OS: </span>
                    <span className="value">
                      {isEdit ? (
                        <input
                          className="card-input"
                          type="text"
                          name="os"
                          onBlur={(e) => handleUpdate(e, computer.id)}
                          placeholder={computer.os}
                        />
                      ) : (
                        computer.os
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
                        <Button
                          onClick={() => cancelEditMode(computer.id)}
                          btnColor="var(--pri-color)"
                        >
                          cancel edit
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => activateEditMode(computer.id)}
                        btnColor="var(--green-color)"
                      >
                        edit
                      </Button>
                    )}
                    <Button
                      type="button"
                      onClick={() => {
                        handleDelete(computer.id);
                      }}
                      btnColor="var(--red-color)"
                    >
                      delete
                    </Button>
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

export default ManageComputer;
