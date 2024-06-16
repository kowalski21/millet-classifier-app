const { create } = require("apisauce");

export const client = create({
  baseURL: "http://localhost:8000",
});

const uploadImage = async (name, uri, mimeType) => {
  let data = null;
  let error = null;
  const formData = new FormData();
  formData.append("file", { name: name, uri: uri, type: mimeType });

  const res = await client.post("/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
  if (!res.ok) {
    error = res.data["Error"];
  } else {
    data = res.data["Uploaded File Info "];
  }

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

  //   console.log(data);

  if (error) {
    return [null, error];
  }

  const [_data, _error] = await predictImage(name);

  return [_data, _error];
};
