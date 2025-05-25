const messages = {
  DummyPage: {
    text: "Witaj świecie!",
    description: {
      text: "To jest przykładowy tekst na stronie DummyPage.",
      text2: "To jest drugi przykładowy tekst na stronie DummyPage.",
    },
  },
  common: {
    appName: "Bridge Crossroad",
    appNameWords: {
      first: "Bridge",
      second: "Crossroad",
    },
  },
  Auth: {
    LoginPage: {
      title: "Zaloguj się",
      noAccount: {
        text: "Nie masz jeszcze konta?",
        link: "Zarejestruj się",
      },
      form: {
        loginOrEmailField: {
          placeholder: "Login lub email",
          errorMessage: "Podaj poprawny login lub email",
        },
        passwordField: {
          placeholder: "Hasło",
          errorMessage: "Podaj poprawne hasło",
        },
      },
      utilities: {
        rememberMe: "Zapamiętaj mnie",
        forgotPassword: "Zapomniałeś hasła?",
      },
      submitButtons: {
        loginWithGoogle: "Zaloguj się z Google",
        login: "Zaloguj się",
      },
    },
    RegisterPage: {
      title: "Zarejestruj się",
      hasAccount: {
        text: "Masz już konto?",
        link: "Zaloguj się",
      },
      form: {
        nameField: {
          placeholder: "Imię",
        },
        surnameField: {
          placeholder: "Nazwisko",
        },
        emailField: {
          placeholder: "E-mail",
        },
        passwordField: {
          placeholder: "Hasło (8-16 znaków)",
        },
        repeatPasswordField: {
          placeholder: "Powtórz hasło",
        },
      },
      utilities: {
        rememberMe: "Zapamiętaj mnie",
      },
      submitButtons: {
        registerWithGoogle: "Zarejestruj się z Google",
        register: "Zarejestruj się",
      },
    },
  },
};

export default messages;

// This type is used to ensure that the messages object matches the expected structure
// pl version is the main version
export type IAppMessagesForLanguage = typeof messages;
