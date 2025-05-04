import Container from "./container";
import { auth } from "@/auth";
import LogoutBtn from "./logout-btn";
import LoginBtn from "./login-btn";
import UserMenu from "./user-menu";

const Header = async () => {
  const session = await auth();

  console.log(session);

  return (
    <Container className="py-4">
      <header className="flex justify-between items-center sm:px-4">
        {UserMenu()}
        {session ? <LogoutBtn /> : <LoginBtn />}
      </header>
    </Container>
  );
};

export default Header;
