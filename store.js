import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useForumStore = create(
  persist(
    (set) => ({
      forums: [],
      comments: {},
      users: null,
      addForum: (newForum) => {
        set((state) => ({ forums: [...state.forums, newForum] }));
      },
      addComment: (forumId, newComment) => {
        set((state) => {
          const updatedComments = state.comments[forumId]
            ? [...state.comments[forumId], newComment]
            : [newComment];

          return {
            comments: { ...state.comments, [forumId]: updatedComments },
          };
        });
      },
      login: () => {
        set({ loggedIn: true });
      },
      logout: () => {
        set({ loggedIn: false });
      },
      setUser: (user) => {
        set({ user });
      },
    }),
    {
      name: "forum-store",
      getStorage: () => createJSONStorage(() => AsyncStorage),
    }
  )
);
