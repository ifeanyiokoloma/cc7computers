import { Skeleton } from "@mui/material";
import styles from "./manage.module.css";
import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase/app";
import useAdvancedFetch from "../../../hooks/useAdvancedFetch";
import Button from "../../../components/button/Button";
import Img from "react-cool-img";
import React from "react";

const ManageAccessory = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [accessories] = useAdvancedFetch(
    "products",
    "accessory",
    "timestamp",
    "desc",
    0,
    []
  );

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
      const accessoryRef = doc(db, "products", id);
      const name = input.name;
      const value = input.value;
      const inputObj = {
        [name]: value,
      };
      try {
        await updateDoc(accessoryRef, inputObj);
      } catch (error) {
        console.log(error.code);
      }
    }
  };

  async function handleDelete(id) {
    const accessoryRef = doc(db, "products", id);
    try {
      await deleteDoc(accessoryRef, id);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {accessories.length > 0 ? (
          accessories.map((accessory) => {
            return (
              <form className="card" key={accessory.id}>
                <div className={styles.imageBox}>
                  <Img
                    className={styles.image}
                    src={accessory.imgSrc}
                    alt={accessory.id}
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
                          onBlur={(e) => handleUpdate(e, accessory.id)}
                          placeholder={accessory.brand}
                        />
                      ) : (
                        accessory.brand
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
                          onBlur={(e) => handleUpdate(e, accessory.id)}
                          placeholder={accessory.model}
                        />
                      ) : (
                        accessory.model
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
                          onBlur={(e) => handleUpdate(e, accessory.id)}
                          placeholder={accessory.type}
                        />
                      ) : (
                        accessory.type
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
                          onBlur={(e) => handleUpdate(e, accessory.id)}
                          placeholder={accessory.name}
                        />
                      ) : (
                        accessory.name
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
                          placeholder={accessory.quantity}
                          onBlur={(e) => handleUpdate(e, accessory.id)}
                        />
                      ) : (
                        accessory.quantity
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
                          placeholder={accessory.price}
                          onBlur={(e) => handleUpdate(e, accessory.id)}
                        />
                      ) : (
                        accessory.price
                      )}
                    </span>
                  </p>
                  <div className="card-btn">
                    {isEdit ? (
                      <>
                        <Button
                          onClick={() => cancelEditMode()}
                          btnColor="var(--pri-white)"
                        >
                          cancel edit
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => activateEditMode()}
                        btnColor="var(--green-color)"
                      >
                        edit
                      </Button>
                    )}
                    <Button
                      type="button"
                      onClick={() => {
                        handleDelete(accessory.id);
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

export default ManageAccessory;
