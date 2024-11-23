export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            {children}
          </div>
       </div>
      </div>
    );
  }
  