import Container from "@/components/Container";
import { Placeholder } from "@/components/Placeholder";

/**
 * /admin — Admin Dashboard
 * Objective: Protected internal dashboard for managing inventory, leads, and content.
 * NOTE: No auth guard in Phase 1. Auth + role-based access added in Phase 3.
 */
const Admin = () => {
  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-primary px-4 py-4 shadow-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <span className="text-lg font-bold text-primary-foreground">
            Siri Auto Cars — Admin
          </span>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            Phase 1 — No Auth Yet
          </span>
        </div>
      </header>

      <Container className="py-10 space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Admin Dashboard
        </h1>
        <p className="text-sm text-muted-foreground italic">
          [Developer note] Internal dashboard. Phase 3 will add: JWT/Supabase auth guard, role-based access (admin / staff), full CRUD for inventory, lead management, content editor, and analytics.
        </p>

        <Placeholder label="📊 Stats Overview — Total cars, leads today, pending inquiries, cars sold this month" />
        <Placeholder label="🚗 Inventory Manager — Add / Edit / Delete car listings with photo upload" />
        <Placeholder label="📥 Leads Inbox — View and manage buyer/seller leads with status tracking" />
        <Placeholder label="💬 Testimonials Manager — Approve, edit, or delete customer reviews" />
        <Placeholder label="⚙️ Settings — Business info, contact details, WhatsApp number, working hours" />
      </Container>
    </div>
  );
};

export default Admin;
