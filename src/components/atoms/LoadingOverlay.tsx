import { useLoadingStore } from '../../stores/loadingStore';

export const LoadingOverlay = () => {
  const { isLoading, loadingMessage } = useLoadingStore();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 max-w-sm mx-4 shadow-2xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-zinc-600 border-t-primary-orange rounded-full animate-spin"></div>
          </div>
          <div className="text-center">
            <p className="text-white font-medium text-lg">{loadingMessage}</p>
            <p className="text-zinc-400 text-sm mt-1">Por favor, aguarde...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
