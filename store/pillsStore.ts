import create from 'zustand';

interface PillState {
  pillList: any;
  
}

export const useUserStore = create<PillState>((set) => ({
    pillList: '',
 
}));