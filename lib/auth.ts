import { getPartnerByEmail, Partner } from "./mockData";

const STORAGE_KEY = "clx_partner_email";

export function login(email: string, password: string): Partner | null {
  const partner = getPartnerByEmail(email);
  if (!partner || partner.password !== password) return null;
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, email);
  }
  return partner;
}

export function logout(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function getLoggedInEmail(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
}

export function getLoggedInPartner(): Partner | null {
  const email = getLoggedInEmail();
  if (!email) return null;
  return getPartnerByEmail(email) ?? null;
}
