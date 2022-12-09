import { ReactComponent as LogoOrigin } from '../assets/icons/logo-origin.svg';
import { ReactComponent as MobileLogoOrigin } from '../assets/icons/mobile-logo-origin.svg';

export function Header() {
  return (
    <div className="bg-white">
      <div className="sm:hidden p-4">
        <MobileLogoOrigin />
      </div>
      <div className="hidden sm:block py-6 px-14">
        <LogoOrigin />
      </div>
    </div>
  );
}
