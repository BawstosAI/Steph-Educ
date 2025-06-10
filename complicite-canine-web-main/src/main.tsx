import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialiser l'application principale
createRoot(document.getElementById("root")!).render(<App />);

// Initialiser stagewise en mode développement seulement
if (import.meta.env.DEV) {
  // Import dynamique pour éviter l'inclusion en production
  import('@stagewise/toolbar-react').then(({ StagewiseToolbar }) => {
    // Configuration stagewise
    const stagewiseConfig = {
      plugins: [],
    };

    // Créer un conteneur pour stagewise
    const stagewiseContainer = document.createElement('div');
    stagewiseContainer.id = 'stagewise-root';
    document.body.appendChild(stagewiseContainer);

    // Créer un root séparé pour stagewise
    const stagewiseRoot = createRoot(stagewiseContainer);
    stagewiseRoot.render(<StagewiseToolbar config={stagewiseConfig} />);
  });
}
