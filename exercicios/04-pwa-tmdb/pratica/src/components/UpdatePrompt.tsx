
import { useRegisterSW } from 'virtual:pwa-register/react';

export function UpdatePrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!offlineReady && !needRefresh) {
    return null;
  }

  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        maxWidth: '340px',
        padding: '20px',
        backgroundColor: '#0d253f',
        color: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
      }}
    >
      {needRefresh ? (
        <>
          <p>Nova versão disponível</p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="button"
              onClick={() => updateServiceWorker(true)}
            >
              Atualizar
            </button>

            <button
              type="button"
              onClick={() => setNeedRefresh(false)}
            >
              Depois
            </button>
          </div>
        </>
      ) : (
        <>
          <p>App pronto para uso offline</p>

          <button
            type="button"
            onClick={() => setOfflineReady(false)}
          >
            Entendi
          </button>
        </>
      )}
    </div>
  );
}
