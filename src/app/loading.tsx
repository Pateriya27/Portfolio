export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Loading spinner */}
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        
        {/* Loading text */}
        <div className="mt-4 text-center">
          <p className="text-foreground font-medium">Loading...</p>
        </div>
      </div>
    </div>
  );
} 