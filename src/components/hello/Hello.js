function Hello({ username }) {
  return (
    <div className="user">
      <h1>
        Bonjour
        <span className="username"> {username} </span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
export default Hello;
