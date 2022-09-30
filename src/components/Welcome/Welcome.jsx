export const Welcome = ({ name }) => {
  console.log('{name}', { name });
  console.log('name', name);
  return <h1>Hello, {name}</h1>;
};
