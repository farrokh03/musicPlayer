import { useEffect, useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";
type Flow = "login" | "signup" | "recovery";
type IconName =
  | "arrow"
  | "back"
  | "camera"
  | "check"
  | "eye"
  | "eyeOff"
  | "lock"
  | "mail"
  | "search"
  | "user";

const heroImage =
  "https://images.unsplash.com/photo-1543868519-fc5437bc63fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=88&w=1600";

const artistImages = [
  "https://images.unsplash.com/photo-1684849937426-0db26ea13c76?crop=faces&fit=crop&w=300&h=300&q=85",
  "https://images.unsplash.com/flagged/photo-1557600585-402cc2b927ae?crop=faces&fit=crop&w=300&h=300&q=85",
  "https://images.unsplash.com/photo-1554976677-8ce909377e37?crop=faces&fit=crop&w=300&h=300&q=85",
  "https://images.unsplash.com/photo-1648556873591-4b378146bd1c?crop=faces&fit=crop&w=300&h=300&q=85",
  "https://images.unsplash.com/photo-1648373051839-1e6849202ee7?crop=faces&fit=crop&w=300&h=300&q=85",
  "https://images.unsplash.com/photo-1652138785922-e5dde36bbf92?crop=faces&fit=crop&w=300&h=300&q=85",
];

const genres = [
  ["Alternative", "ALT"],
  ["Electronic", "SYN"],
  ["Indie", "IND"],
  ["Hip-Hop", "808"],
  ["Pop", "POP"],
  ["Rock", "AMP"],
  ["Jazz", "JAZ"],
  ["R&B", "RNB"],
  ["Classical", "CLS"],
  ["Ambient", "AMB"],
  ["Techno", "4/4"],
  ["Metal", "MTL"],
];

const artists = [
  { name: "Mara Vale", genre: "Alternative", image: artistImages[0] },
  { name: "Niko Sain", genre: "Electronic", image: artistImages[3] },
  { name: "The Violets", genre: "Indie Rock", image: artistImages[1] },
  { name: "Ari Lenn", genre: "R&B", image: artistImages[4] },
  { name: "Noir Avenue", genre: "Ambient", image: artistImages[2] },
  { name: "Kite Theory", genre: "Art Pop", image: artistImages[5] },
];

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    back: (
      <>
        <path d="m15 18-6-6 6-6" />
      </>
    ),
    camera: (
      <>
        <path d="M14.5 5 13 3H7L5.5 5H3v14h18V5Z" />
        <circle cx="12" cy="12" r="3.5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    eyeOff: (
      <>
        <path d="m3 3 18 18" />
        <path d="M10.6 6.2A11 11 0 0 1 12 6c6.5 0 10 6 10 6a16 16 0 0 1-2.1 2.8M6.5 6.5C3.6 8.2 2 12 2 12s3.5 6 10 6c1.1 0 2.1-.2 3-.5" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  };
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? "brand--compact" : ""}`}>
      <span className="brand-mark">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>CRIMSON</span>
    </div>
  );
}

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled,
  loading,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
}) {
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <span className="spinner" /> : children}
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  optional,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  icon?: IconName;
  optional?: boolean;
  error?: string;
}) {
  const [visible, setVisible] = useState(false);
  const password = type === "password";
  return (
    <label className={`field ${error ? "field--error" : ""}`}>
      <span className="field-label">
        {label} {optional && <em>Optional</em>}
      </span>
      <span className="field-control">
        {icon && (
          <span className="field-icon">
            <Icon name={icon} />
          </span>
        )}
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type={password && visible ? "text" : type}
          aria-invalid={Boolean(error)}
        />
        {password && (
          <button
            className="icon-button"
            type="button"
            onClick={() => setVisible(!visible)}
            aria-label={visible ? "Hide password" : "Show password"}
          >
            <Icon name={visible ? "eyeOff" : "eye"} />
          </button>
        )}
      </span>
      {error && <span className="field-error">{error}</span>}
    </label>
  );
}

function Checkbox({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  children: ReactNode;
}) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="checkbox-box">
        {checked && <Icon name="check" size={13} />}
      </span>
      <span>{children}</span>
    </label>
  );
}

function StepHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="step-header">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Progress({ step, total }: { step: number; total: number }) {
  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>
          Step {step} of {total}
        </span>
        <span>{Math.round((step / total) * 100)}%</span>
      </div>
      <div className="progress">
        <span style={{ width: `${(step / total) * 100}%` }} />
      </div>
    </div>
  );
}

function Otp({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  const digits = [...value.padEnd(6, " ")].slice(0, 6);
  return (
    <div
      className="otp"
      onClick={() => document.getElementById("otp-input")?.focus()}
    >
      <input
        id="otp-input"
        aria-label="Six digit verification code"
        inputMode="numeric"
        maxLength={6}
        value={value}
        onChange={(event) => setValue(event.target.value.replace(/\D/g, ""))}
      />
      {digits.map((digit, index) => (
        <span key={index} className={digit.trim() ? "filled" : ""}>
          {digit}
        </span>
      ))}
    </div>
  );
}

function SocialButtons({ verb = "Continue" }: { verb?: string }) {
  return (
    <>
      <div className="divider">
        <span>or</span>
      </div>
      <div className="social-row">
        <Button variant="secondary">
          <b className="social-icon">G</b>
          {verb} with Google
        </Button>
        <Button variant="secondary">
          <b className="apple">●</b>
          {verb} with Apple
        </Button>
      </div>
    </>
  );
}

function SuccessVisual() {
  return (
    <div className="success-visual">
      <span className="success-orbit success-orbit--one" />
      <span className="success-orbit success-orbit--two" />
      <span className="success-check">
        <Icon name="check" size={30} />
      </span>
    </div>
  );
}

function LoginFlow({
  goSignup,
  goRecovery,
}: {
  goSignup: () => void;
  goRecovery: () => void;
}) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = (event: FormEvent) => {
    event.preventDefault();
    if (!email.includes("@"))
      return setError("Enter a valid email address to continue.");
    if (password.length < 6)
      return setError("Password must contain at least 6 characters.");
    setError("");
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 700);
  };

  if (step === 2)
    return (
      <div className="step-content animate-in">
        <Back onClick={() => setStep(1)} />
        <Progress step={2} total={3} />
        <StepHeader
          eyebrow="Security check"
          title="Verify your identity"
          description={
            <>
              We sent a six-digit code to{" "}
              <strong>{email || "a•••@example.com"}</strong>
            </>
          }
        />
        <Otp value={otp} setValue={setOtp} />
        <Countdown />
        <Button onClick={() => setStep(3)} disabled={otp.length !== 6}>
          Verify & sign in <Icon name="arrow" />
        </Button>
        <Button variant="ghost">Change email address</Button>
      </div>
    );

  if (step === 3)
    return (
      <div className="step-content success-screen animate-in">
        <SuccessVisual />
        <StepHeader
          title="Welcome back, Alex."
          description="Your collection is right where you left it. The next track is waiting."
        />
        <div className="user-pill">
          <span className="avatar">AM</span>
          <span>
            <strong>Alex Morgan</strong>
            <small>{email}</small>
          </span>
        </div>
        <Button>
          Continue to CRIMSON <Icon name="arrow" />
        </Button>
      </div>
    );

  return (
    <form className="step-content animate-in" onSubmit={signIn}>
      <StepHeader
        title="Welcome back"
        description="Sign in to return to your sound."
      />
      <Field
        label="Email or username"
        value={email}
        onChange={setEmail}
        placeholder="alex@example.com"
        icon="mail"
        error={error && !email.includes("@") ? error : ""}
      />
      <Field
        label="Password"
        value={password}
        onChange={setPassword}
        placeholder="Enter your password"
        type="password"
        icon="lock"
        error={error && email.includes("@") ? error : ""}
      />
      <div className="inline-row">
        <Checkbox checked={remember} onChange={setRemember}>
          Remember me
        </Checkbox>
        <button type="button" className="text-button" onClick={goRecovery}>
          Forgot password?
        </button>
      </div>
      <Button type="submit" loading={loading}>
        Sign in <Icon name="arrow" />
      </Button>
      <SocialButtons />
      <p className="switch-copy">
        New to CRIMSON?{" "}
        <button type="button" onClick={goSignup}>
          Create an account
        </button>
      </p>
    </form>
  );
}

function Back({
  onClick,
  label = "Back",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <button type="button" className="back-button" onClick={onClick}>
      <Icon name="back" />
      {label}
    </button>
  );
}

function Countdown() {
  const [seconds, setSeconds] = useState(24);
  useEffect(() => {
    if (seconds <= 0) return;
    const timer = window.setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [seconds]);
  return (
    <p className="countdown">
      {seconds ? (
        <>
          Resend code in <strong>0:{String(seconds).padStart(2, "0")}</strong>
        </>
      ) : (
        <button onClick={() => setSeconds(30)}>Resend code</button>
      )}
    </p>
  );
}

function SignupFlow({ goLogin }: { goLogin: () => void }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([
    "Alternative",
    "Electronic",
  ]);
  const [followed, setFollowed] = useState<string[]>([
    "Mara Vale",
    "Niko Sain",
  ]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const nextAccount = (event: FormEvent) => {
    event.preventDefault();
    if (
      !name ||
      !email.includes("@") ||
      password.length < 8 ||
      password !== confirm ||
      !terms
    ) {
      setError("Check all required fields and accept the membership terms.");
      return;
    }
    setError("");
    setStep(2);
  };
  const toggleGenre = (genre: string) =>
    setSelectedGenres((current) =>
      current.includes(genre)
        ? current.filter((item) => item !== genre)
        : [...current, genre],
    );
  const toggleArtist = (name: string) =>
    setFollowed((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  const filteredArtists = artists.filter(
    (artist) =>
      artist.name.toLowerCase().includes(query.toLowerCase()) ||
      artist.genre.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div
      className={`step-content ${step >= 4 ? "step-content--wide" : ""} animate-in`}
      key={step}
    >
      {step > 1 && step < 6 && <Back onClick={() => setStep(step - 1)} />}
      {step < 6 && <Progress step={step} total={6} />}
      {step === 1 && (
        <form className="form-stack" onSubmit={nextAccount}>
          <StepHeader
            title="Create your account"
            description="A new world of sound starts here."
          />
          <Field
            label="Full name"
            value={name}
            onChange={setName}
            placeholder="Alex Morgan"
            icon="user"
          />
          <Field
            label="Email address"
            value={email}
            onChange={setEmail}
            placeholder="alex@example.com"
            icon="mail"
          />
          <div className="field-grid">
            <Field
              label="Password"
              value={password}
              onChange={setPassword}
              placeholder="8+ characters"
              type="password"
              icon="lock"
            />
            <Field
              label="Confirm password"
              value={confirm}
              onChange={setConfirm}
              placeholder="Repeat password"
              type="password"
              icon="lock"
            />
          </div>
          <PasswordStrength password={password} />
          <Checkbox checked={terms} onChange={setTerms}>
            I agree to the <button type="button">Terms</button> and{" "}
            <button type="button">Privacy Policy</button>.
          </Checkbox>
          {error && <div className="alert alert--error">{error}</div>}
          <Button type="submit">
            Continue <Icon name="arrow" />
          </Button>
          <SocialButtons verb="Sign up" />
          <p className="switch-copy">
            Already a member?{" "}
            <button type="button" onClick={goLogin}>
              Sign in
            </button>
          </p>
        </form>
      )}
      {step === 2 && (
        <>
          <StepHeader
            eyebrow="Check your inbox"
            title="Verify your email"
            description={
              <>
                Enter the code we sent to{" "}
                <strong>{email || "alex@example.com"}</strong>. It expires in 10
                minutes.
              </>
            }
          />
          <Otp value={otp} setValue={setOtp} />
          <Countdown />
          <Button onClick={() => setStep(3)} disabled={otp.length !== 6}>
            Verify email <Icon name="arrow" />
          </Button>
        </>
      )}
      {step === 3 && (
        <>
          <StepHeader
            eyebrow="Make it yours"
            title="Personalize your profile"
            description="This helps artists and listeners recognize you."
          />
          <ProfileUploader name={name} />
          <Field
            label="Username"
            value={username}
            onChange={setUsername}
            placeholder="@yourname"
            icon="user"
          />
          <div className="field-grid">
            <Field
              label="Date of birth"
              value={birth}
              onChange={setBirth}
              placeholder="MM / DD / YYYY"
              optional
            />
            <label className="field">
              <span className="field-label">Country or region</span>
              <span className="field-control">
                <select
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                >
                  <option value="">Select region</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>France</option>
                  <option>Japan</option>
                  <option>Brazil</option>
                </select>
              </span>
            </label>
          </div>
          <label className="field">
            <span className="field-label">
              Short bio <em>Optional</em>
            </span>
            <span className="field-control field-control--textarea">
              <textarea
                value={bio}
                onChange={(event) => setBio(event.target.value)}
                placeholder="Tell the community what moves you..."
                maxLength={120}
              />
            </span>
            <span className="character-count">{bio.length}/120</span>
          </label>
          <Button onClick={() => setStep(4)}>
            Continue <Icon name="arrow" />
          </Button>
        </>
      )}
      {step === 4 && (
        <>
          <StepHeader
            eyebrow="Shape your signal"
            title="What moves you?"
            description="Choose at least three genres. We'll tune your first mixes around your taste."
          />
          <div className="selection-meta">
            <span>{selectedGenres.length} selected</span>
            <span className={selectedGenres.length >= 3 ? "valid" : ""}>
              {selectedGenres.length >= 3
                ? "Ready to continue"
                : `${3 - selectedGenres.length} more required`}
            </span>
          </div>
          <div className="genre-grid">
            {genres.map(([genre, code], index) => (
              <button
                key={genre}
                type="button"
                className={`genre-card genre-card--${(index % 4) + 1} ${selectedGenres.includes(genre) ? "selected" : ""}`}
                onClick={() => toggleGenre(genre)}
              >
                <span className="genre-art">
                  <i />
                  <i />
                  <i />
                </span>
                <span>
                  <strong>{genre}</strong>
                  <small>{code}</small>
                </span>
                <span className="selection-check">
                  <Icon name="check" size={14} />
                </span>
              </button>
            ))}
          </div>
          <Button
            onClick={() => setStep(5)}
            disabled={selectedGenres.length < 3}
          >
            Continue with {selectedGenres.length} genres <Icon name="arrow" />
          </Button>
        </>
      )}
      {step === 5 && (
        <>
          <StepHeader
            eyebrow="Build your circle"
            title="Choose favorite artists"
            description="Follow artists to hear new releases and shape your recommendations."
          />
          <label className="search-box">
            <Icon name="search" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search artists or genres"
            />
          </label>
          <div className="filter-row">
            <button className="active">For you</button>
            <button>Trending</button>
            <button>New voices</button>
          </div>
          <div className="artist-grid">
            {filteredArtists.map((artist) => {
              const isFollowed = followed.includes(artist.name);
              return (
                <button
                  key={artist.name}
                  type="button"
                  className={`artist-card ${isFollowed ? "selected" : ""}`}
                  onClick={() => toggleArtist(artist.name)}
                >
                  <img src={artist.image} alt="" />
                  <span>
                    <strong>{artist.name}</strong>
                    <small>{artist.genre}</small>
                  </span>
                  <span className="follow-button">
                    {isFollowed ? "Following" : "Follow"}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="action-row">
            <Button variant="ghost" onClick={() => setStep(6)}>
              Skip for now
            </Button>
            <Button onClick={() => setStep(6)}>
              Continue with {followed.length} <Icon name="arrow" />
            </Button>
          </div>
        </>
      )}
      {step === 6 && (
        <div className="completion">
          <div className="visualizer visualizer--large">
            {[7, 12, 20, 30, 18, 37, 25, 15, 9, 22, 32, 17, 11].map(
              (height, index) => (
                <i key={index} style={{ height }} />
              ),
            )}
          </div>
          <span className="eyebrow">Account created</span>
          <h1>Welcome to CRIMSON{name ? `, ${name.split(" ")[0]}` : ""}.</h1>
          <p>
            Your sound profile is ready. A listening experience tuned to you is
            already taking shape.
          </p>
          <div className="summary-panel">
            <span>
              <small>Your genres</small>
              <strong>{selectedGenres.slice(0, 4).join(" · ")}</strong>
            </span>
            <span>
              <small>Following</small>
              <strong>{followed.length} emerging artists</strong>
            </span>
          </div>
          <Button>
            Start listening <Icon name="arrow" />
          </Button>
        </div>
      )}
    </div>
  );
}

function PasswordStrength({ password }: { password: string }) {
  const strength =
    password.length === 0
      ? 0
      : password.length < 6
        ? 1
        : password.length < 10
          ? 2
          : 3;
  const labels = ["", "Weak", "Good", "Strong"];
  return (
    <div className={`strength strength--${strength}`}>
      <span>
        <i />
        <i />
        <i />
      </span>
      <small>
        {labels[strength]}
        {strength > 0 && " password"}
      </small>
    </div>
  );
}

function ProfileUploader({ name }: { name: string }) {
  return (
    <button type="button" className="profile-upload">
      <span className="profile-preview">
        {name ? (
          name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")
        ) : (
          <Icon name="user" size={28} />
        )}
        <i>
          <Icon name="camera" size={15} />
        </i>
      </span>
      <span>
        <strong>Add a profile photo</strong>
        <small>JPG or PNG, up to 5MB</small>
      </span>
      <span className="upload-cta">Upload</span>
    </button>
  );
}

function RecoveryFlow({ goLogin }: { goLogin: () => void }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const titles = [
    "Find your account",
    "Verify it’s you",
    "Create a new password",
    "Confirm new password",
  ];
  return (
    <div className="step-content animate-in" key={step}>
      {step < 5 && (
        <Back onClick={() => (step === 1 ? goLogin() : setStep(step - 1))} />
      )}
      {step < 5 && <Progress step={step} total={4} />}
      {step === 1 && (
        <>
          <StepHeader
            eyebrow="Password recovery"
            title={titles[0]}
            description="Enter the email connected to your CRIMSON account."
          />
          <Field
            label="Email address"
            value={email}
            onChange={setEmail}
            placeholder="alex@example.com"
            icon="mail"
            error={error}
          />
          <Button
            onClick={() =>
              email.includes("@")
                ? setStep(2)
                : setError("We need a valid email to locate your account.")
            }
          >
            Send verification code <Icon name="arrow" />
          </Button>
          <div className="secure-note">
            <Icon name="lock" />
            <span>
              <strong>Private by design</strong>
              <small>We’ll only use this to confirm your account.</small>
            </span>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <StepHeader
            eyebrow="Check your inbox"
            title={titles[1]}
            description={
              <>
                Enter the six-digit code sent to <strong>{email}</strong>.
              </>
            }
          />
          <Otp value={otp} setValue={setOtp} />
          <Countdown />
          <Button onClick={() => setStep(3)} disabled={otp.length !== 6}>
            Verify code <Icon name="arrow" />
          </Button>
        </>
      )}
      {step === 3 && (
        <>
          <StepHeader
            eyebrow="Secure your account"
            title={titles[2]}
            description="Use at least 8 characters with a number or symbol."
          />
          <Field
            label="New password"
            value={password}
            onChange={setPassword}
            placeholder="Enter a strong password"
            type="password"
            icon="lock"
          />
          <PasswordStrength password={password} />
          <Button
            onClick={() =>
              password.length >= 8
                ? setStep(4)
                : setError("Use at least 8 characters.")
            }
          >
            Continue <Icon name="arrow" />
          </Button>
          {error && <div className="alert alert--error">{error}</div>}
        </>
      )}
      {step === 4 && (
        <>
          <StepHeader
            eyebrow="One last step"
            title={titles[3]}
            description="Re-enter your new password to make sure it matches."
          />
          <Field
            label="Confirm new password"
            value={confirm}
            onChange={setConfirm}
            placeholder="Repeat your new password"
            type="password"
            icon="lock"
            error={error}
          />
          <Button
            onClick={() =>
              confirm === password
                ? setStep(5)
                : setError("Passwords don’t match. Try again.")
            }
          >
            Update password <Icon name="arrow" />
          </Button>
        </>
      )}
      {step === 5 && (
        <div className="success-screen">
          <SuccessVisual />
          <StepHeader
            title="Password updated"
            description="Your account is secure and your new password is ready to use."
          />
          <Button onClick={goLogin}>
            Return to sign in <Icon name="arrow" />
          </Button>
        </div>
      )}
    </div>
  );
}

function HeroPanel() {
  return (
    <aside className="hero-panel">
      <img
        className="hero-image"
        src={heroImage}
        alt="Artist illuminated by crimson stage light"
      />
      <div className="hero-overlay" />
      <div className="hero-top">
        <Brand />
        <span className="edition">MEMBERS EDITION</span>
      </div>
      <div className="hero-copy">
        <div className="visualizer">
          {[8, 18, 11, 32, 22, 42, 27, 15, 34, 19, 9].map((height, index) => (
            <i key={index} style={{ height }} />
          ))}
        </div>
        <p className="hero-kicker">A world tuned to you</p>
        <h2>
          Your sound.
          <br />
          Your world.
        </h2>
        <p>
          Discover music. Connect with artists.
          <br />
          Experience sound differently.
        </p>
      </div>
      <div className="now-playing">
        <span className="cover">CV</span>
        <span>
          <small>CURATED FOR YOU</small>
          <strong>Crimson After Dark</strong>
        </span>
        <span className="playing-bars">
          <i />
          <i />
          <i />
        </span>
      </div>
      <span className="photo-credit">
        Photo by Kirill Balobanov on Unsplash
      </span>
    </aside>
  );
}

export default function Auth() {
  const [flow, setFlow] = useState<Flow>("login");
  const flowLabel = useMemo(
    () =>
      flow === "recovery"
        ? "Recover account"
        : flow === "login"
          ? "Sign in"
          : "Create account",
    [flow],
  );
  const switchFlow = (next: Flow) => setFlow(next);
  return (
    <main className="auth-shell">
      <HeroPanel />
      <section className="auth-panel">
        <div className="mobile-brand">
          <Brand compact />
        </div>
        {flow !== "recovery" && (
          <nav className="auth-tabs" aria-label="Authentication">
            <button
              className={flow === "login" ? "active" : ""}
              onClick={() => switchFlow("login")}
            >
              Sign in
            </button>
            <button
              className={flow === "signup" ? "active" : ""}
              onClick={() => switchFlow("signup")}
            >
              Create account
            </button>
          </nav>
        )}
        <div className="form-stage" aria-label={flowLabel}>
          {flow === "login" && (
            <LoginFlow
              goSignup={() => switchFlow("signup")}
              goRecovery={() => switchFlow("recovery")}
            />
          )}
          {flow === "signup" && (
            <SignupFlow goLogin={() => switchFlow("login")} />
          )}
          {flow === "recovery" && (
            <RecoveryFlow goLogin={() => switchFlow("login")} />
          )}
        </div>
        <footer>
          <span>© 2025 CRIMSON</span>
          <span>
            <button>Privacy</button>
            <button>Terms</button>
            <button>Help</button>
          </span>
        </footer>
      </section>
    </main>
  );
}
