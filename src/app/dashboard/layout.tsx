export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Routes are protected by middleware in middleware.ts
  return <>{children}</>;
}
