export interface profileState {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  profile: any | null
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  setProfile: (profile: any) => void
  resetProfileState: () => void
}