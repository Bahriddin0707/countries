import loaderToggle from "./loader";

const request = async (resource) => {
  loaderToggle(true);
  const req = await fetch(resource);
  if (req.status !== 200) {
    loaderToggle(false);
    throw new Error("Data is not coming from server");
  }
  const data = await req.json();
  loaderToggle(false);
  return data;
};

export default request;
