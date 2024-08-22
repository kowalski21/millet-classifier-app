const { create } = require("apisauce");
import AsyncStorage from "@react-native-async-storage/async-storage";

export const client = create({
  baseURL: "http://localhost:8001",
});

const uploadImage = async (name, uri, mimeType) => {
  let data = null;
  let error = null;
  const formData = new FormData();
  formData.append("file", { name: name, uri: uri, type: mimeType });

  const res = await client.post("/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
  // console.log(res);
  // handle network error
  if (!res.ok) {
    if ("error" in res.data) {
      error = res.data["error"];
    } else {
      error = "Error connecting to the api";
    }
  }
  if (res.ok) {
    // console.log(res.data);
    if ("Uploaded File Info " in res.data) {
      data = res.data["Uploaded File Info "];
    } else if ("error" in res.data) {
      error = res.data["error"];
    } else {
      error = "Error processing image,check your api logs";
    }
  }
  // console.log({ data, error });
  return [data, error];
};

const predictImage = async (imageName) => {
  let data = null;
  let error = null;
  const res = await client.get(`/predict/${imageName}`);
  if (!res.ok) {
    // console.log(res.data, "=====");
    error = res.data["Error"];
  } else {
    let obj = res.data;

    // console.log(obj);

    let errorInfo = obj["Error"] || null;

    // console.log(errorInfo);

    // console.log(res.data, "jjuiooo");
    if (errorInfo) {
      error = errorInfo;
    } else {
      data = res.data["Model Evaluation"];
    }
  }

  return [data, error];
};

export const utils_classify = async (name, uri, mimeType) => {
  const [data, error] = await uploadImage(name, uri, mimeType);

  // console.log({ data, error });

  //   console.log(data);

  if (error) {
    return [null, error];
  }

  const [_data, _error] = await predictImage(name);
  // console.log({ data: _data, error: _error });

  return [_data, _error];
  // return [0, 1];
};

// async storage

export const storePayloadInPredictions = async (payload) => {
  try {
    // Retrieve the current predictions array
    const predictions = await AsyncStorage.getItem("predictions");
    const predictionsArray = predictions ? JSON.parse(predictions) : [];

    // Add the new payload to the array
    predictionsArray.push(payload);

    // Store the updated array back in AsyncStorage
    await AsyncStorage.setItem("predictions", JSON.stringify(predictionsArray));

    console.log("Payload stored successfully!");
  } catch (error) {
    console.error("Error storing payload:", error);
  }
};

export const getPredictions = async () => {
  try {
    // Retrieve the predictions from AsyncStorage
    const predictions = await AsyncStorage.getItem("predictions");
    return predictions ? JSON.parse(predictions) : [];
  } catch (error) {
    console.error("Error retrieving predictions:", error);
    return [];
  }
};
