import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  loadingMessage: string;
  setLoading: (isLoading: boolean, message?: string) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  loadingMessage: 'Carregando...',
  setLoading: (isLoading: boolean, message = 'Carregando...') => 
    set({ isLoading, loadingMessage: message }),
}));
