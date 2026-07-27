import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createGoogleLoginClient,
  firebaseConfigFromEnv,
  GoogleLoginPage
} from 'login-with-google';
import 'login-with-google/base.css';
import 'login-with-google/vcv-theme.css';

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
          Package revision <code>98245b3</code>
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
