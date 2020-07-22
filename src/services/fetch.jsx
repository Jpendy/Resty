
export const fetchFunc = ({ url }) => {
  return fetch(url)
    .then(res => res.json());
};

