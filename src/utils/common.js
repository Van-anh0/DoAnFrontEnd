import moment from "moment";

export const trimDate = (str) => {
  return moment(str).subtract(10, "days").calendar();
};

export const trimTime = (str) => {
  return moment(str).format("LT");
};

export const renameKeys = (obj) => {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = trimDate(key);
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};
