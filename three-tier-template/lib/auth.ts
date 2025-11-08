const AUTH_KEY = "three-tier-template-auth";

export function login(username: string, password: string): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const valid = username === "demo" && password === "1234";
  if (valid) {
    window.localStorage.setItem(AUTH_KEY, "true");
    window.dispatchEvent(new StorageEvent("storage", { key: AUTH_KEY }));
  }
  return valid;
}

export function logout(): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.removeItem(AUTH_KEY);
  window.dispatchEvent(new StorageEvent("storage", { key: AUTH_KEY }));
}

export function isAuthed(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return window.localStorage.getItem(AUTH_KEY) === "true";
}
