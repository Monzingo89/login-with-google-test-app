import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createGoogleLoginClient,
  firebaseConfigFromEnv,
  GoogleLoginPage
} from 'login-with-google';
import 'login-with-google/base.css';
import 'login-with-google-theme/theme.css';

const client = createGoogleLoginClient({
  firebaseConfig: firebaseConfigFromEnv(import.meta.env),
  mode: 'auto',
  customParameters: { prompt: 'select_account' }
});

function App() {
  return (
    <GoogleLoginPage
      client={client}
      title="VCV authentication test"
      subtitle="This separate public test app uses the existing VCV Firebase project."
      footer={
        <span>
          Auth <code>74b5ac3</code> + theme <code>a5fc199</code>
        </span>
      }
    />
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
