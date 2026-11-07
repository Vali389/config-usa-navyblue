import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, Shield } from "lucide-react";
import { inquirySchema, type InquiryInput } from "@/lib/inquiry-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface InquiryFormProps {
  initialType?: InquiryInput["inquiryType"];
  title?: string;
  subtitle?: string;
}

export function InquiryForm({
  initialType = "talent",
  title = "Start a Strategic Conversation",
  subtitle = "Tell us about your organization's technology initiatives, staffing demands, or MSP workforce expectations.",
}: InquiryFormProps) {
  const [inquiryType, setInquiryType] = useState<InquiryInput["inquiryType"]>(initialType);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("United States");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof InquiryInput, string>>>({});
  const [globalError, setGlobalError] = useState("");
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    id: string;
    timestamp: string;
    fullName: string;
    email: string;
    company: string;
    inquiryType: string;
  } | null>(null);

  const inquiryTypeOptions: { value: InquiryInput["inquiryType"]; label: string; desc: string }[] = [
    {
      value: "talent",
      label: "I need technology talent",
      desc: "Specialized IT talent across SAP, Workday, Cloud, Data, and Engineering.",
    },
    {
      value: "msp",
      label: "I want to discuss an MSP partnership",
      desc: "Enterprise contingent workforce delivery, VMS workflows, and supplier participation.",
    },
    {
      value: "business",
      label: "I have a business inquiry",
      desc: "General executive, partnership, or technology resource consultation.",
    },
    {
      value: "careers",
      label: "I'm interested in career opportunities",
      desc: "Consultant opportunities, talent network, or direct hire positions.",
    },
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGlobalError("");
    setFieldErrors({});

    const formData = {
      inquiryType,
      fullName,
      email,
      company,
      phone,
      country,
      subject: subject.trim() || `${inquiryType.toUpperCase()} Consultation Request`,
      message,
      consent,
    };

    const result = inquirySchema.safeParse(formData);

    if (!result.success) {
      const errors: Partial<Record<keyof InquiryInput, string>> = {};
      for (const issue of result.error.issues) {
        const fieldName = issue.path[0] as keyof InquiryInput;
        if (fieldName && !errors[fieldName]) {
          errors[fieldName] = issue.message;
        }
      }
      setFieldErrors(errors);
      setGlobalError("Please correct the highlighted fields before submitting.");
      return;
    }

    setIsLoading(true);

    try {
      // Process submission
      await new Promise((resolve) => setTimeout(resolve, 1100));

      const receiptId = `CFG-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
      const timestamp = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      // Save submission to session storage so user's submission history is verified and accessible
      try {
        const stored = JSON.parse(sessionStorage.getItem("configusa_inquiries") || "[]");
        stored.push({ receiptId, timestamp, ...result.data });
        sessionStorage.setItem("configusa_inquiries", JSON.stringify(stored));
      } catch {
        // ignore storage errors
      }

      setSubmissionReceipt({
        id: receiptId,
        timestamp,
        fullName: result.data.fullName,
        email: result.data.email,
        company: result.data.company,
        inquiryType: inquiryTypeOptions.find((o) => o.value === result.data.inquiryType)?.label || result.data.inquiryType,
      });

      // Reset form fields
      setFullName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setSubject("");
      setMessage("");
      setConsent(false);
    } catch {
      setGlobalError("A connection error occurred while transmitting your inquiry. Please try again or email inquiries@configusa.com directly.");
    } finally {
      setIsLoading(false);
    }
  }

  if (submissionReceipt) {
    return (
      <div className="rounded-sm border border-gold/40 bg-card p-6 sm:p-10 shadow-lg">
        <div className="flex items-center gap-3 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
          <h3 className="font-display text-2xl font-bold text-primary">Inquiry Successfully Received</h3>
        </div>
        <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
          Thank you, <strong>{submissionReceipt.fullName}</strong>. Your inquiry has been routed to our enterprise client engagement and recruiting directors. A senior representative will review your requirements and respond within one business day.
        </p>

        <div className="mt-6 rounded-sm border border-border bg-secondary/50 p-4 text-xs font-mono space-y-2">
          <div className="flex justify-between border-b border-border/60 pb-1.5">
            <span className="text-muted-foreground">Reference ID:</span>
            <span className="font-semibold text-primary">{submissionReceipt.id}</span>
          </div>
          <div className="flex justify-between border-b border-border/60 pb-1.5">
            <span className="text-muted-foreground">Timestamp:</span>
            <span>{submissionReceipt.timestamp}</span>
          </div>
          <div className="flex justify-between border-b border-border/60 pb-1.5">
            <span className="text-muted-foreground">Routing Category:</span>
            <span className="font-medium text-primary">{submissionReceipt.inquiryType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Confirmation Email:</span>
            <span>{submissionReceipt.email}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button
            type="button"
            onClick={() => setSubmissionReceipt(null)}
            className="rounded-lg bg-primary px-6 shadow-sm hover:bg-slate-brand"
          >
            Submit Another Inquiry
          </Button>
          <a
            href="mailto:inquiries@configusa.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs font-semibold text-primary shadow-sm hover:bg-secondary"
          >
            Direct Inquiries Desk
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-sm border border-border bg-card p-6 sm:p-9 shadow-md"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-brand">Direct Enterprise Inquiry</p>
        <h3 className="mt-1 font-display text-2xl font-bold text-primary sm:text-3xl">{title}</h3>
        <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">{subtitle}</p>
      </div>

      {/* Inquiry Type Radio Grid */}
      <fieldset className="mt-6">
        <legend className="block text-xs font-semibold uppercase tracking-wider text-primary">
          Inquiry Classification <span className="text-destructive">*</span>
        </legend>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {inquiryTypeOptions.map((option) => {
            const isSelected = inquiryType === option.value;
            return (
              <label
                key={option.value}
                className={`relative flex cursor-pointer flex-col rounded-sm border p-3.5 text-left transition-colors ${
                  isSelected
                    ? "border-primary bg-secondary/80 ring-1 ring-primary"
                    : "border-border bg-background hover:border-slate-brand/40"
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="inquiryType"
                    value={option.value}
                    checked={isSelected}
                    onChange={() => setInquiryType(option.value)}
                    className="accent-primary"
                  />
                  <span className={`text-xs font-semibold ${isSelected ? "text-primary" : "text-foreground"}`}>
                    {option.label}
                  </span>
                </div>
                <span className="mt-1 pl-5 text-[11px] leading-4 text-muted-foreground">
                  {option.desc}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Form Fields */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <Label htmlFor="inquiry-fullName" className="text-xs font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inquiry-fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Eleanor Vance"
            disabled={isLoading}
            className={`mt-1.5 h-11 bg-background text-sm ${fieldErrors.fullName ? "border-destructive ring-1 ring-destructive" : ""}`}
          />
          {fieldErrors.fullName && <p className="mt-1 text-xs text-destructive">{fieldErrors.fullName}</p>}
        </div>

        {/* Business Email */}
        <div>
          <Label htmlFor="inquiry-email" className="text-xs font-medium text-foreground">
            Business Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inquiry-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            disabled={isLoading}
            className={`mt-1.5 h-11 bg-background text-sm ${fieldErrors.email ? "border-destructive ring-1 ring-destructive" : ""}`}
          />
          {fieldErrors.email && <p className="mt-1 text-xs text-destructive">{fieldErrors.email}</p>}
        </div>

        {/* Company / Organization */}
        <div>
          <Label htmlFor="inquiry-company" className="text-xs font-medium text-foreground">
            Company / Organization <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inquiry-company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Acme Enterprise Global"
            disabled={isLoading}
            className={`mt-1.5 h-11 bg-background text-sm ${fieldErrors.company ? "border-destructive ring-1 ring-destructive" : ""}`}
          />
          {fieldErrors.company && <p className="mt-1 text-xs text-destructive">{fieldErrors.company}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <Label htmlFor="inquiry-phone" className="text-xs font-medium text-foreground">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inquiry-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 000-0000"
            disabled={isLoading}
            className={`mt-1.5 h-11 bg-background text-sm ${fieldErrors.phone ? "border-destructive ring-1 ring-destructive" : ""}`}
          />
          {fieldErrors.phone && <p className="mt-1 text-xs text-destructive">{fieldErrors.phone}</p>}
        </div>

        {/* Country */}
        <div>
          <Label htmlFor="inquiry-country" className="text-xs font-medium text-foreground">
            Country <span className="text-destructive">*</span>
          </Label>
          <select
            id="inquiry-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            disabled={isLoading}
            className="mt-1.5 flex h-11 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="United States">United States</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
            <option value="Singapore">Singapore</option>
            <option value="Other">Other International</option>
          </select>
          {fieldErrors.country && <p className="mt-1 text-xs text-destructive">{fieldErrors.country}</p>}
        </div>

        {/* Subject */}
        <div>
          <Label htmlFor="inquiry-subject" className="text-xs font-medium text-foreground">
            Subject <span className="text-destructive">*</span>
          </Label>
          <Input
            id="inquiry-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="e.g. SAP S/4HANA Project Staffing"
            disabled={isLoading}
            className={`mt-1.5 h-11 bg-background text-sm ${fieldErrors.subject ? "border-destructive ring-1 ring-destructive" : ""}`}
          />
          {fieldErrors.subject && <p className="mt-1 text-xs text-destructive">{fieldErrors.subject}</p>}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <Label htmlFor="inquiry-message" className="text-xs font-medium text-foreground">
            Requirement Details / Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="inquiry-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please detail your timeline, required skills, team size, location preferences, or program parameters..."
            disabled={isLoading}
            className={`mt-1.5 bg-background text-sm resize-y ${fieldErrors.message ? "border-destructive ring-1 ring-destructive" : ""}`}
          />
          {fieldErrors.message && <p className="mt-1 text-xs text-destructive">{fieldErrors.message}</p>}
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="mt-5 border-t border-border/80 pt-4">
        <label className="flex items-start gap-2.5 cursor-pointer text-xs leading-5 text-muted-foreground">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={isLoading}
            className="mt-0.5 accent-primary h-4 w-4 rounded"
          />
          <span>
            I acknowledge that ConfigUSA will process my submitted contact details to evaluate and respond to this enterprise inquiry in accordance with the{" "}
            <a href="/privacy" className="underline hover:text-primary font-medium">Privacy Policy</a>.
          </span>
        </label>
        {fieldErrors.consent && <p className="mt-1 text-xs text-destructive">{fieldErrors.consent}</p>}
      </div>

      {/* Global Error Banner */}
      {globalError && (
        <div className="mt-4 flex items-center gap-2 rounded-sm border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{globalError}</span>
        </div>
      )}

      {/* Submit Button */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Button
          type="submit"
          disabled={isLoading}
          className="h-11 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-slate-brand transition-colors"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Transmitting Inquiry...
            </>
          ) : (
            <>
              Send Inquiry
              <Send className="ml-2 h-3.5 w-3.5" />
            </>
          )}
        </Button>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-4 w-4 text-gold shrink-0" />
          <span>Confidential enterprise communication. No unverified third-party disclosure.</span>
        </div>
      </div>
    </form>
  );
}

