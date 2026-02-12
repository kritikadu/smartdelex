import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12 mx-auto md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                <span className="text-lg font-bold">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight font-heading">SmartDealX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered tender management and vendor rating solution for modern enterprises.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tenders">Browse Tenders</Link></li>
              <li><Link href="/vendor">Vendor Portal</Link></li>
              <li><Link href="/admin">Admin Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@smartdealx.com</li>
              <li>+91 22 1234 5678</li>
              <li>Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          © 2025 SmartDealX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
