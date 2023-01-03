import { Icon } from '../../components/Icon';

export function Header() {
  return (
    <header className="bg-white">
      <div className="sm:hidden p-4">
        <Icon name="logo-origin" title="Origin" width="75px" />
      </div>
      <div className="hidden sm:block py-6 px-14">
        <Icon name="logo-origin" title="Origin" />
      </div>
    </header>
  );
}
