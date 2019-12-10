import Profile from './pages/home/profile/Profile'

declare module './pages/home/profile/Profile' {
  interface Profile {
    camera: any
  }
}