const WelcomeFunc = ({ bname, name, address }) => (
    <div>
      <h2>{bname}, Welcome {name}!</h2>
      <p>Address: {address}</p>
    </div>
  );

export default WelcomeFunc;