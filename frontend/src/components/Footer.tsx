export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sport News. All rights reserved.
      </div>
    </footer>
  );
}
