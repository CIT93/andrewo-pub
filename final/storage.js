const saveLS = (fastingData) => {
  const serializedArr = JSON.stringify(fastingData);
  localStorage.setItem("fastingData", serializedArr);
};

const getLS = () => {
  const retrievedArr = localStorage.getItem("fastingData");
  if (retrievedArr !== null) {
    return JSON.parse(retrievedArr);
  } else {
    return [];
  }
};

export { saveLS, getLS };