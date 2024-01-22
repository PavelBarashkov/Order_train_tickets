import { MainInfo } from "./component/MainInfo/MainInfo"
import { HeaderCustom } from "./component/HeaderCustom/HeaderCustom"
import { Logo } from "./component/Logo/Logo"
import { Menu } from "./component/Menu/Menu"

export const Header = () => {
  return (
    <HeaderCustom>
      <Logo />
      <Menu />
      <MainInfo />
    </HeaderCustom>
  )
}
