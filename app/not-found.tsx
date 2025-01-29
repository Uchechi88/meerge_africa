import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function NotFound(): JSX.Element {
  return (
    <div className="items-center text-center p-10 mt-10">
      <Logo />
      <div className="font-bold text-center my-10 text-3xl">Oops! Nothing here</div>
      <div>
        <Link href="/restaurant/dashboard">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Go back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
