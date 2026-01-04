import { Logo } from "./Logo";

export function LoginAdmin() {
  return (
    <>
      <Logo />
      <div className="bg-mainGray w-full min-h-screen flex justify-center items-center p-10 overflow-hidden">
        <div className="bg-white rounded-lg shadow-lg p-8 w-96 max-w-sm">
          <h2 className="text-center text-md font-semibold text-mainOrange mb-6">Login Admin</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              className="bg-mainGray rounded-full border border-zinc-200 text-xs text-zinc-500 p-2 focus:outline-none focus:ring-2 focus:ring-mainOrange transition duration-200"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              className="bg-mainGray rounded-full border border-zinc-200 text-xs text-zinc-500 p-2 focus:outline-none focus:ring-2 focus:ring-mainOrange transition duration-200"
            />
            <button className="bg-mainOrange rounded-full text-sm text-white py-2 hover:bg-black transition duration-300">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
