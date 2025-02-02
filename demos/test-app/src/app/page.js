import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">🏠 Home Page</h1>
      <p>Welcome to the Next.js app!</p>
      <div className="mt-4 flex gap-4 justify-center">
        <Link href="/page1">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go to Page 1
          </button>
        </Link>
        <Link href="/page2">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Go to Page 2
          </button>
        </Link>
      </div>
    </div>
  );
}
