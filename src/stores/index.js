import { create } from 'zustand';

export const userStore = create((set) => ({
  userInfo: {
    userName: '超级管理员',
    count: 1,
  },
  getUserInfo: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));
