import { useState } from "react";

import "./App.css";

function App() {
  // 3 states liés aux différents input
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordCheck, setPasswordCheck] = useState("");
  /*  State pour envoyer un message d'erreur si les 2 mdp ne sont pas identiques : de base sur false et passera true en cas de différence*/
  const [errorMessage, setErrormessage] = useState(false);

  return (
    <main>
      <div>
        <h1>Create an account</h1>
        <form
          onSubmit={(event) => {
            /* on empêche le rafraichissement de la page */
            event.preventDefault();
            /* Comparaison des mdp */
            if (password === passwordCheck) {
              setErrormessage(false);
              alert("Votre formulaire a bien été envoyé");
            } else {
              setErrormessage(true);
            }
          }}
        >
          <label>
            Name
            <input
              onChange={(event) => {
                //console.log(event.target.value); OK : renvoie ce qu'on rentre dans le l'input
                //On veut stocker ce qu'on reçoit dans l'input dans la variable correspondante à l'input : ici Name
                name = setName(event.target.value);
              }}
              type="text"
              name="name"
              value={name}
            />
          </label>
          <label>
            Email
            <input
              onChange={(event) => {
                //console.log(event.target.value); OK : renvoie ce qu'on rentre dans le l'input
                //On veut stocker ce qu'on reçoit dans l'input dans la variable correspondante à l'input : ici email
                email = setEmail(event.target.value);
              }}
              type="email"
              name="email"
              value={email}
            />
          </label>
          <label>
            Password
            <input
              onChange={(event) => {
                //console.log(event.target.value); OK : renvoie ce qu'on rentre dans le l'input
                //On veut stocker ce qu'on reçoit dans l'input dans la variable correspondante à l'input : ici password
                password = setPassword(event.target.value);
              }}
              type="password"
              name="password"
            />
          </label>
          <label>
            Confirme your password
            <input
              onChange={(event) => {
                //console.log(event.target.value); OK : renvoie ce qu'on rentre dans le l'input
                //On veut stocker ce qu'on reçoit dans l'input dans la variable correspondante à l'input : confirmer password
                name = setPasswordCheck(event.target.value);
              }}
              type="password"
              name="password"
            />
          </label>
          {/* Message indiquant que les 2 mdp ne sont pas identiques */}
          {errorMessage && (
            <p style={{ color: "red" }}>
              Les mots de passe ne sont pas identiques
            </p>
          )}
          <input type="submit" value="Register" />
        </form>
      </div>
    </main>
  );
}

export default App;
