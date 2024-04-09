import { Recursive } from "next/font/google";
import Link from "next/link";
const recursive = Recursive({weight:["600"], subsets: ["latin"] });

export default function NotFound() {
  return (
    <div className={`${recursive.className} flex flex-col items-center justify-center h-[70vh]`}>
    <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
    <p className="text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
    
    {/* <div className="mt-6">
      <input
        type="text"
        placeholder="Search for content..."
        className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div> */}
    
    <div className="mt-4 text-center">
      <p className="text-gray-600 mb-3">Or, you might want to explore:</p>
      <a href="/" className="text-blue-500 hover:underline">Home</a>
      <a href="/livetv" className="text-blue-500 hover:underline ml-2">Live Tv</a>
      <a href="/contact" className="text-blue-500 hover:underline ml-2">Contact</a>
    </div>
  </div>
  );
}