import { create } from 'zustand'

type Dates = {
    years: number;
    months: number;
    days: number;
}

type Input = {
    myYear: number;
    myMonth: number;
    myDay: number;
}

type Action = {
    updateMyYear: (myYear: Input['myYear']) => void;
    updateMyMonth: (myMonth: Input['myMonth']) => void;
    updateMyDay: (myDay: Input['myDay']) => void;
}

export const useStore = create<Dates & Input & Action>((set) => ({ 
    // Initial state
    years: 0,
    months: 0,
    days: 0,

    // User input
    myYear: 0,
    myMonth: 0,
    myDay: 0,
    
    updateMyYear: (myYear: number) => set(() => ({ myYear})),
    updateMyMonth: (myMonth: number) => set(() => ({ myMonth })),
    updateMyDay: (myDay: number) => set(() => ({ myDay })),

    
}))