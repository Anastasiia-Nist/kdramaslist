import './Profile.scss'

function Profile() {
  return (
    <main className="profile">
      <section className="profile__container">
        <h1 className="profile__title">Привет, {'пользователь'}!</h1>
        <form className="profile__form" name="profile" >
          <div className="profile__inputs-container">
            <label>Имя</label>
            <input className="profile__input"></input>
          </div>
          <div className="profile__inputs-container">
            <label>Email</label>
            <input className="profile__input"></input>
          </div>
        </form>
      </section>
    </main>
  );
}
export default Profile;
