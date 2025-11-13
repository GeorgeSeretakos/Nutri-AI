import { verifyAdmin } from "../api/_lib/auth";
import UnauthorizedRedirect from "@/app/components/UnauthorizedRedirect";
import AdminShell from "./AdminShell";

export const metadata = { robots: { index: false, follow: false } };

export default async function AdminLayout({ children }) {
  const admin = await verifyAdmin();
  if (!admin) return <UnauthorizedRedirect />;

  return <AdminShell adminExp={admin.exp}>{children}</AdminShell>;
}
