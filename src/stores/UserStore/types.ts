export interface userState {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  user: any | null
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  setUser: (user: any) => void
  resetUserState: () => void
}