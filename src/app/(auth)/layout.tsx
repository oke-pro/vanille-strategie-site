export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      <div className="w-full max-w-md px-4">
        {/* Logo VS centré */}
        <div className="text-center mb-8">
          <a href="/" className="inline-block">
            <span className="font-heading text-2xl font-semibold tracking-tight text-slate-900">
              Vanille Stratégie
            </span>
          </a>
          <p className="mt-2 text-sm text-slate-500">Portail client sécurisé</p>
        </div>
        {children}
      </div>
    </div>
  );
}
