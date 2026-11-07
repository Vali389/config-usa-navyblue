import { useState, useMemo, type FormEvent } from "react";
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  ChevronRight,
  X,
  Upload,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileText,
  Filter,
} from "lucide-react";
import { jobOpportunities, type OpenJobPosition } from "@/lib/configusa-content";
import { jobApplicationSchema, type JobApplicationInput } from "@/lib/inquiry-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CareersExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");

  const [activeJobModal, setActiveJobModal] = useState<OpenJobPosition | null>(null);
  const [isApplying, setIsApplying] = useState(false);

  // Application form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("United States");
  const [primarySkill, setPrimarySkill] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("5-8 years");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof JobApplicationInput, string>>>({});
  const [applicationSuccess, setApplicationSuccess] = useState<{
    id: string;
    jobTitle: string;
    applicantName: string;
  } | null>(null);

  const categories = ["All", "SAP & Workday", "Software Engineering", "Cloud & Infrastructure", "AI & Data", "Cybersecurity", "Quality Assurance"];
  const locations = ["All", "United States", "India", "Canada", "Remote"];
  const employmentTypes = ["All", "Full-time", "Contract", "Contract-to-Hire"];

  const filteredJobs = useMemo(() => {
    return jobOpportunities.filter((job) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.requirements.some((r) => r.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "All" ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesType = selectedType === "All" || job.type === selectedType;

      return matchesSearch && matchesCategory && matchesLocation && matchesType;
    });
  }, [searchTerm, selectedCategory, selectedLocation, selectedType]);

  async function handleApplicationSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormErrors({});

    const formData = {
      jobId: activeJobModal?.id || "general-pool",
      jobTitle: activeJobModal?.title || "General Technical Resume Submission",
      fullName,
      email,
      phone,
      country,
      primarySkill: primarySkill || (activeJobModal ? activeJobModal.category : "Enterprise IT"),
      experienceLevel,
      portfolioUrl,
      coverNote,
      consent,
    };

    const result = jobApplicationSchema.safeParse(formData);

    if (!result.success) {
      const errs: Partial<Record<keyof JobApplicationInput, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof JobApplicationInput;
        if (field && !errs[field]) {
          errs[field] = issue.message;
        }
      }
      setFormErrors(errs);
      return;
    }

    if (!resumeFile && !portfolioUrl) {
      setFormErrors((prev) => ({
        ...prev,
        portfolioUrl: "Please attach a resume file or provide a LinkedIn/portfolio profile URL.",
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const confirmationId = `APP-${Date.now().toString(36).toUpperCase()}`;

      setApplicationSuccess({
        id: confirmationId,
        jobTitle: activeJobModal?.title || "Technical Candidate Network",
        applicantName: result.data.fullName,
      });

      // Clear fields
      setFullName("");
      setEmail("");
      setPhone("");
      setPrimarySkill("");
      setCoverNote("");
      setPortfolioUrl("");
      setResumeFile(null);
      setConsent(false);
      setIsApplying(false);
    } catch {
      setFormErrors((prev) => ({
        ...prev,
        coverNote: "Failed to transmit application. Please try again or reach out to careers@configusa.com.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="rounded-sm border border-border bg-card p-5 sm:p-7 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          {/* Keyword Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by role title, technology (e.g. SAP, Workday, AWS), or skill..."
              className="h-11 bg-background pl-10 text-sm"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="w-full sm:w-48">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="flex h-11 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="All">All Locations</option>
              <option value="United States">United States</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Type Dropdown */}
          <div className="w-full sm:w-44">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="flex h-11 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="All">All Engagements</option>
              <option value="Full-time">Full-time</option>
              <option value="Contract">Contract</option>
              <option value="Contract-to-Hire">Contract-to-Hire</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-2 border-t border-border/60">
          <span className="flex items-center gap-1 text-xs font-semibold text-slate-brand mr-1">
            <Filter className="h-3.5 w-3.5" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Confirmation message banner if an application was recently submitted */}
      {applicationSuccess && (
        <div className="rounded-sm border border-emerald-500/50 bg-emerald-50/60 p-5 dark:bg-emerald-950/20">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                Application Transmitted Successfully (Ref #{applicationSuccess.id})
              </p>
              <p className="mt-1 text-xs text-emerald-800 dark:text-emerald-300">
                Thank you, {applicationSuccess.applicantName}. Your credentials for{" "}
                <strong>{applicationSuccess.jobTitle}</strong> have been submitted to ConfigUSA's technical recruiting team.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Showing <strong>{filteredJobs.length}</strong> available position{filteredJobs.length === 1 ? "" : "s"}
        </span>
        <span>Updated across US, India, and Canada delivery centers</span>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length === 0 ? (
        <div className="rounded-sm border border-dashed border-border p-12 text-center bg-card">
          <Briefcase className="mx-auto h-8 w-8 text-muted-foreground" />
          <h4 className="mt-3 text-base font-semibold text-primary">No specific openings match your filter criteria</h4>
          <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
            Try adjusting your search keywords or category filters, or submit a general resume below to join our talent network.
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSelectedLocation("All");
              setSelectedType("All");
            }}
            className="mt-4 text-xs"
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 sm:p-7 transition-all duration-300 hover:border-gold hover:shadow-xl border-t-4 border-t-primary/20 hover:border-t-gold relative overflow-hidden"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary border border-primary/15 px-3 py-1 text-xs font-semibold">
                    <Briefcase className="h-3 w-3 text-gold shrink-0" />
                    {job.category}
                  </span>
                  <span className="rounded-full bg-gold/15 text-[#8f753c] border border-gold/30 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider">
                    {job.type}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-primary group-hover:text-gold transition-colors leading-snug">
                  {job.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {job.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary/80 px-2.5 py-1 text-foreground font-medium border border-border/60">
                    <MapPin className="h-3.5 w-3.5 text-gold shrink-0" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary/80 px-2.5 py-1 text-foreground font-medium border border-border/60">
                    <Clock className="h-3.5 w-3.5 text-gold shrink-0" />
                    {job.experience}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono font-medium">Requisition: {job.id}</span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveJobModal(job);
                    setIsApplying(false);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground group-hover:bg-gold group-hover:text-primary transition-all shadow-sm"
                >
                  <span>View Details & Apply</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* General Resume Submission Section */}
      <div id="submit-resume" className="rounded-sm border border-gold/40 bg-card p-6 sm:p-9 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">Talent Community</p>
            <h3 className="mt-1 font-display text-2xl font-bold text-primary">
              Submit Your Resume to the ConfigUSA Talent Network
            </h3>
            <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
              Don't see an exact match right now? Our technical recruiters constantly match top consultants with enterprise projects.
            </p>
          </div>
          <FileText className="h-8 w-8 text-gold shrink-0 hidden sm:block" />
        </div>

        <form onSubmit={handleApplicationSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="gen-name" className="text-xs font-medium text-foreground">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="gen-name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                className="mt-1 h-10 bg-background text-sm"
              />
              {formErrors.fullName && <p className="mt-1 text-xs text-destructive">{formErrors.fullName}</p>}
            </div>

            <div>
              <Label htmlFor="gen-email" className="text-xs font-medium text-foreground">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="gen-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="mt-1 h-10 bg-background text-sm"
              />
              {formErrors.email && <p className="mt-1 text-xs text-destructive">{formErrors.email}</p>}
            </div>

            <div>
              <Label htmlFor="gen-phone" className="text-xs font-medium text-foreground">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="gen-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="mt-1 h-10 bg-background text-sm"
              />
              {formErrors.phone && <p className="mt-1 text-xs text-destructive">{formErrors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="gen-skill" className="text-xs font-medium text-foreground">
                Primary Technology Focus <span className="text-destructive">*</span>
              </Label>
              <Input
                id="gen-skill"
                value={primarySkill}
                onChange={(e) => setPrimarySkill(e.target.value)}
                placeholder="e.g. SAP FICO, Workday Integration, AWS DevOps"
                className="mt-1 h-10 bg-background text-sm"
              />
              {formErrors.primarySkill && <p className="mt-1 text-xs text-destructive">{formErrors.primarySkill}</p>}
            </div>

            <div>
              <Label htmlFor="gen-country" className="text-xs font-medium text-foreground">
                Country of Residence <span className="text-destructive">*</span>
              </Label>
              <select
                id="gen-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="United States">United States</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="gen-exp" className="text-xs font-medium text-foreground">
                Years of Relevant Experience <span className="text-destructive">*</span>
              </Label>
              <select
                id="gen-exp"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="mt-1 flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5-8 years">5-8 years</option>
                <option value="8-12 years">8-12 years</option>
                <option value="12+ years">12+ years (Principal / Architect)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="gen-linkedin" className="text-xs font-medium text-foreground">
                LinkedIn Profile / Online Portfolio (Optional)
              </Label>
              <Input
                id="gen-linkedin"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile"
                className="mt-1 h-10 bg-background text-sm"
              />
              {formErrors.portfolioUrl && <p className="mt-1 text-xs text-destructive">{formErrors.portfolioUrl}</p>}
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="gen-file" className="text-xs font-medium text-foreground">
                Upload Resume (PDF, DOC, DOCX up to 5 MB)
              </Label>
              <div className="mt-1 flex items-center gap-3">
                <input
                  id="gen-file"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) {
                      if (f.size > 5 * 1024 * 1024) {
                        alert("File exceeds 5MB size limit.");
                        e.target.value = "";
                        return;
                      }
                      setResumeFile(f);
                    }
                  }}
                  className="text-xs file:mr-3 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-xs file:font-semibold file:text-primary hover:file:bg-secondary/80"
                />
                {resumeFile && (
                  <span className="text-xs text-emerald-600 font-medium">
                    Attached: {resumeFile.name} ({(resumeFile.size / 1024).toFixed(0)} KB)
                  </span>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="gen-note" className="text-xs font-medium text-foreground">
                Brief Introduction & Career Objectives
              </Label>
              <Textarea
                id="gen-note"
                rows={3}
                value={coverNote}
                onChange={(e) => setCoverNote(e.target.value)}
                placeholder="Highlight your key achievements, preferred engagement model (contract vs. permanent), and availability..."
                className="mt-1 bg-background text-sm"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 accent-primary h-4 w-4"
              />
              <span>
                I agree to allow ConfigUSA's technical recruitment team to retain my resume and contact me regarding prospective consulting or full-time engagements in accordance with the{" "}
                <a href="/privacy" className="underline font-medium text-foreground">Privacy Policy</a>.
              </span>
            </label>
            {formErrors.consent && <p className="mt-1 text-xs text-destructive">{formErrors.consent}</p>}
          </div>

          <div className="pt-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-primary px-7 h-11 text-sm font-semibold shadow-sm hover:bg-slate-brand"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Profile...
                </>
              ) : (
                <>
                  Submit Resume & Profile
                  <Upload className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>

      {/* Job Details Modal */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm border border-border bg-card p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setActiveJobModal(null);
                setIsApplying(false);
              }}
              className="absolute right-4 top-4 rounded-sm p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {!isApplying ? (
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-sm bg-secondary px-2.5 py-1 text-xs font-semibold text-slate-brand">
                    {activeJobModal.category}
                  </span>
                  <span className="text-xs font-semibold text-gold">
                    {activeJobModal.type}
                  </span>
                </div>

                <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
                  {activeJobModal.title}
                </h2>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground border-b border-border pb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-gold shrink-0" />
                    {activeJobModal.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-gold shrink-0" />
                    {activeJobModal.experience} Experience Required
                  </span>
                  <span className="font-mono text-muted-foreground">Requisition: {activeJobModal.id}</span>
                </div>

                <div className="mt-5 space-y-5 text-sm text-foreground/90">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-brand">Role Overview</h4>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{activeJobModal.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-brand">Key Responsibilities</h4>
                    <ul className="mt-2 space-y-2">
                      {activeJobModal.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-brand">Candidate Requirements</h4>
                    <ul className="mt-2 space-y-2">
                      {activeJobModal.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                  <span className="text-xs text-muted-foreground">
                    Equal Opportunity Employer · ConfigUSA ensures compliance across all international programs.
                  </span>
                  <Button
                    type="button"
                    onClick={() => setIsApplying(true)}
                    className="rounded-lg bg-primary px-6 h-11 text-sm font-semibold shadow-sm hover:bg-slate-brand"
                  >
                    Apply Now for this Role
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => setIsApplying(false)}
                  className="mb-4 text-xs font-semibold text-slate-brand hover:underline"
                >
                  ← Back to Job Description
                </button>

                <h3 className="font-display text-2xl font-bold text-primary">
                  Apply for: {activeJobModal.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Provide your contact details and resume to initiate consideration for Requisition #{activeJobModal.id}.
                </p>

                <form onSubmit={handleApplicationSubmit} className="mt-5 space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <Label className="text-xs font-medium">Full Name *</Label>
                      <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full legal name"
                        className="mt-1 h-10 text-sm"
                      />
                      {formErrors.fullName && <p className="mt-1 text-xs text-destructive">{formErrors.fullName}</p>}
                    </div>

                    <div>
                      <Label className="text-xs font-medium">Email Address *</Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="mt-1 h-10 text-sm"
                      />
                      {formErrors.email && <p className="mt-1 text-xs text-destructive">{formErrors.email}</p>}
                    </div>

                    <div>
                      <Label className="text-xs font-medium">Phone Number *</Label>
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="mt-1 h-10 text-sm"
                      />
                      {formErrors.phone && <p className="mt-1 text-xs text-destructive">{formErrors.phone}</p>}
                    </div>

                    <div>
                      <Label className="text-xs font-medium">Years of Experience *</Label>
                      <select
                        value={experienceLevel}
                        onChange={(e) => setExperienceLevel(e.target.value)}
                        className="mt-1 flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-8 years">5-8 years</option>
                        <option value="8-12 years">8-12 years</option>
                        <option value="12+ years">12+ years</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="text-xs font-medium">Resume File (PDF / DOCX up to 5 MB) *</Label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) setResumeFile(f);
                        }}
                        className="mt-1 block text-xs file:mr-3 file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-xs file:font-semibold file:text-primary"
                      />
                      {resumeFile && (
                        <p className="mt-1 text-xs text-emerald-600 font-medium">Attached: {resumeFile.name}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="text-xs font-medium">LinkedIn / Portfolio URL (Optional)</Label>
                      <Input
                        value={portfolioUrl}
                        onChange={(e) => setPortfolioUrl(e.target.value)}
                        placeholder="https://linkedin.com/in/..."
                        className="mt-1 h-10 text-sm"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="text-xs font-medium">Cover Note</Label>
                      <Textarea
                        rows={3}
                        value={coverNote}
                        onChange={(e) => setCoverNote(e.target.value)}
                        placeholder="Highlight your fit for this role..."
                        className="mt-1 text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 accent-primary h-4 w-4"
                      />
                      <span>
                        I certify the information provided is accurate and consent to verification by ConfigUSA.
                      </span>
                    </label>
                    {formErrors.consent && <p className="mt-1 text-xs text-destructive">{formErrors.consent}</p>}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-lg bg-primary px-7 h-11 text-sm font-semibold shadow-sm hover:bg-slate-brand"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsApplying(false)}
                      className="rounded-lg h-11 text-sm shadow-sm"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

