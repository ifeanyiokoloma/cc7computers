export const getComputerReducer = (computers, action) => {
  switch (action.type) {
    case "STORE_COMPUTER_DATA":
      computers = [];
      return [...computers, action.payload];
    default:
      return computers;
  }
};

export const getAccessoryReducer = (accessories, action) => {
  switch (action.type) {
    case "STORE_ACCESSORY_DATA":
      accessories = [];
      return [...accessories, action.payload];
    default:
      return accessories;
  }
};

// export const storeProductReducer = (products, action) => {
//   switch (action.type) {
//     case "STORE_PRODUCT":
//       products = [];
//       return [...products, action.payload];
//     default:
//       return products;
//   }
// };

export const uploadReducer = (uploads, action) => {
  switch (action.type) {
    case "GRAB_TEXT_ENTRIES":
      return Object.assign(uploads, action.payload);
    case "GRAB_IMAGE_URL":
      return Object.assign(uploads, action.payload);
    case "CREATE_ID":
      return Object.assign(uploads, action.payload);
    default:
      return uploads;
  }
};

export const dialogueReducer = (dialogues, action) => {
  switch (action.type) {
    case "SET_UPLOAD_STATUS":
      return Object.assign(dialogues, action.payload);
    case "SET_UPLOAD_ERR":
      return Object.assign(dialogues, action.payload);
    case "SET_UPLOAD_PROGRESS":
      return Object.assign(dialogues, action.payload);
    default:
      return dialogues;
  }
};

export const imageReducer = (imageData, action) => {
  switch (action.type) {
    case "GRAB_IMAGE":
      return Object.assign(imageData, action.payload);
    case "GRAB_IMAGE":
      return Object.assign(imageData, action.payload);
    case "GRAB_IMAGE_NAME":
      return Object.assign(imageData, action.payload);
    case "GRAB_IMAGE_TYPE":
      return Object.assign(imageData, action.payload);
    default:
      return imageData;
  }
};
