import { auth } from "../firebase";

export function useReadToken() {
  if (auth.currentUser) {
    return true;
  }
  return false;
}
