export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-navy rounded-full animate-spin"></div>
    </div>
  );
}
