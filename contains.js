const containsDFS = (obj, value) => {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    } else if (typeof obj[key] === "object") {
      return containsDFS(obj[key], value);
    }
  }
  return false;
};

const containsBFS = (obj, value) => {
  if (obj === null || typeof obj !== "object") return false;
  if (Object.values(obj).includes(value)) return true;
  for (const key in obj) {
    if (containsBFS(obj[key], value)) return true;
  }
  return false;
};

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const hasIt = containsBFS(nestedObject, "foo2"); // true
console.log(hasIt);
const doesntHaveIt = containsDFS(nestedObject, "22"); // false
console.log(doesntHaveIt);
