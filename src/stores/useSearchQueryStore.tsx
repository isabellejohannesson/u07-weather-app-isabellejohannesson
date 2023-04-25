import { create } from "zustand";
import { produce } from "immer";

const useSearchQueryStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (query: any) =>
    set(
      produce((state) => {
        state.searchQuery = query;
      })
    ),
}));

export default useSearchQueryStore;
