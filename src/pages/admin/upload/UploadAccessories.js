import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { setDoc, updateDoc, doc } from "firebase/firestore";
import styles from "./upload.module.css";
import { useState, useEffect } from "react";
import { accessory } from "../../../data/data";
import { db, storage } from "../../../firebase/FirebaseApp";

const UploadAccessories = () => {
  const [imgProps, setImgProps] = useState({});
  const [uploads, setUploads] = useState({});
  const [dialogues, setDialogues] = useState({});
  const [imgSrc, setImgSrc] = useState("");

  const { name, brand, model, id } = uploads;
  const { image, imgType, imgName } = imgProps;
  const { progress, status, error } = dialogues;

  // Functions
  const handleSubmit = (event) => {
    // Prevent Refresh On Submit
    event.preventDefault();

    const metadata = {
      contentType: imgType,
    };

    // Image Upload Functions
    const computerRef = ref(storage, `accessoryImages/${id}`);
    const uploadTask = uploadBytesResumable(computerRef, image, metadata);

    //Image Upload Events
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressNumber =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setDialogues((newProgress) => ({
          ...newProgress,
          progress: progressNumber,
        }));
        switch (snapshot.state) {
          case "running":
            setDialogues((newUpload) => ({
              ...newUpload,
              status: "uploading...",
            }));
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        switch (error.code) {
          case "storage/quota-exceeded":
            setDialogues((newError) => ({
              ...newError,
              error:
                "contact ifeanyi okoloma, you have exceeded your quota limit",
            }));
            break;
          case "storage/retry-limit-exceeded":
            setDialogues((newError) => ({
              ...newError,
              error:
                "the maximum time limit on upload has been excceded. try uploading again",
            }));
            break;
          case "storage/cannot-slice-blob":
            setDialogues((newError) => ({
              ...newError,
              error: "upload a valid image",
            }));
            break;
          default:
            setDialogues((newError) => ({
              ...newError,
              error: "unknown Error",
            }));
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((imgURL) => {
            setImgSrc(imgURL);
            setDialogues((newStatus) => ({
              ...newStatus,
              status: "image uploaded",
            }));
            event.target.reset();
          })
          .catch((error) => {
            setDialogues({ ...dialogues, error: error.message });
          });
      }
    );
  };

  useEffect(() => {
    if (imgSrc) {
      const Ref = doc(db, "products", id);

      setDoc(Ref, uploads).then(() => {
        setDialogues((newStatus) => ({
          ...newStatus,
          status: "inputs uploaded",
        }));
      });

      updateDoc(Ref, { imgSrc: imgSrc }).then(() => {
        setDialogues((newStatus) => ({
          ...newStatus,
          status: "image added to inputs",
        }));
        setDialogues((newStatus) => ({
          ...newStatus,
          status: "upload completed",
        }));
      });
    }

    setImgSrc("");

    setTimeout(() => {
      setDialogues((newDialogue) => ({
        ...newDialogue,
        progress: 0,
        status: "",
      }));
      setImgProps({});
    }, 3000);
  }, [imgSrc]);

  const handleChange = (e) => {
    if (name && brand && model) {
      const id = `${name}-${brand}-${model}`.replace(/\s+/g, "");
      setUploads((newUpload) => ({ ...newUpload, id, type: "accessory" }));
    }
    const element = e.target;
    if (element.type === "text" || element.type === "number") {
      const name = element.name;
      const value = element.value;
      if (name && value) {
        setUploads((newUpload) => ({ ...newUpload, [name]: value }));
      }
    }
    if (element.type === "file" && element.files[0]) {
      const image = element.files[0];
      const imgName = element.files[0].name;
      const imgType = element.files[0].type;
      setImgProps((newProps) => ({ ...newProps, image, imgType, imgName }));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        {accessory.map((property) => (
          <div key={property.name} className={styles.inputContent}>
            {property.name === "image" ? (
              <label
                style={{
                  border: "2px solid black",
                  margin: "3rem",
                  padding: "1rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                  textTransform: imgName && "lowercase",
                  backgroundColor: imgName && "green",
                  color: imgName && "white",
                }}
                htmlFor={property.name}
              >
                {imgName ? imgName : "Choose Image to upload"}
              </label>
            ) : (
              <label htmlFor={property.name}>Enter {property.name}</label>
            )}
            <input
              style={{ display: property.name === "image" && "none" }}
              name={property.name}
              id={property.name}
              type={property.type}
              placeholder={property.name}
              onChange={handleChange}
              accept={property.name === "image" ? property.image : undefined}
              required={true}
            />
          </div>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <button className="rounded btn-outline-primary" type="reset">
          reset
        </button>
        <button
          type="submit"
          disabled={status && true}
          className="btn-primary"
          style={{
            position: "relative",
            width: "50%",
            backgroundColor: progress ? "white" : "blue",
            border: "none",
            borderRadius: "5px",
            overflow: "hidden",
            color: "white",
            height: "60px",
            textShadow: "1px 1px 2px black",
          }}
        >
          <span
            style={{
              width: `${progress}%`,
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              backgroundColor: "green",
              zIndex: 1,
            }}
          ></span>
          <span className={styles.btnTxt}>{status ? status : "submit"}</span>
        </button>
        {error && <p style={{ backgroundColor: "red" }}>{error}</p>}
      </div>
    </form>
  );
};

export default UploadAccessories;
