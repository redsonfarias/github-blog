import { Outlet } from 'react-router-dom'
import { MainContainer } from './styles'
import { Header } from '@/components/Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  )
}
