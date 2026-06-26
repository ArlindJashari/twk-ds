const C = {
  workspace: '#00746e',
  team: '#1aaa5b',
  accent: '#1aaa5b',
  gold: '#c9920a',
  coral: '#d4623c',
}

/* Per-card accent — multicolor, same cool tone. */
export const TONE = {
  study: '#4f6bed', // blue-indigo
  story: '#8268e6', // violet
  directory: '#2fa37a', // green
}

function lighten(hex) {
  // mix accent toward white for the soft gradient highlight
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  const m = (v) => Math.round(v + (255 - v) * 0.32)
  return `rgb(${m(r)},${m(g)},${m(b)})`
}

function Skel({ className = '', style }) {
  return <div className={`skeleton-shimmer rounded-full ${className}`} style={style} aria-hidden="true" />
}

function Solid({ color, className = '', style }) {
  return (
    <div className={`rounded-[4px] ${className}`} style={{ backgroundColor: color, ...style }} aria-hidden="true" />
  )
}

function Panel({ className = '', style, children }) {
  return (
    <div
      className={[
        'absolute rounded-[11px] border border-black/[0.07] bg-white',
        'shadow-[0_10px_28px_rgba(0,0,0,0.09),0_1px_3px_rgba(0,0,0,0.05)]',
        className,
      ].join(' ')}
      style={style}
    >
      {children}
    </div>
  )
}

/* ── Editorial scene (tinted to a card accent) ──────────────────────────── */

function ToneScene({ accent, children }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-content" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(180deg,${accent}12 0%,${accent}06 32%,${accent}00 58%)` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(110% 64% at 50% -4%, ${accent}0d, transparent 58%)` }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 300, height: 176 }}>
        {children}
      </div>
    </div>
  )
}

function Tile({ size = 30, radius = 9, children, className = '', style }) {
  return (
    <div
      className={`grid place-items-center border border-line-subtle bg-surface shadow-pop ${className}`}
      style={{ width: size, height: size, borderRadius: radius, ...style }}
    >
      {children}
    </div>
  )
}

function BrandLogo({ s = 18 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.8c.55 3.1 1.3 3.85 4.4 4.4-3.1.55-3.85 1.3-4.4 4.4-.55-3.1-1.3-3.85-4.4-4.4 3.1-.55 3.85-1.3 4.4-4.4Z" fill="#fff" />
      <path d="M12.4 9.6c.22 1.25.52 1.55 1.77 1.77-1.25.22-1.55.52-1.77 1.77-.22-1.25-.52-1.55-1.77-1.77 1.25-.22 1.55-.52 1.77-1.77Z" fill="#fff" opacity="0.85" />
    </svg>
  )
}

function BrandHub({ accent, size = 46 }) {
  const ring = size + 18
  return (
    <div className="relative grid place-items-center" style={{ width: ring, height: ring }}>
      <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle,${accent}3d,transparent 68%)`, filter: 'blur(4px)' }} />
      <div className="absolute inset-0 rounded-full border border-dashed" style={{ borderColor: `${accent}73` }} />
      <div
        className="relative grid place-items-center rounded-[13px]"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(150deg,${lighten(accent)},${accent})`,
          boxShadow: `0 8px 18px ${accent}55, inset 0 1px 0 rgba(255,255,255,0.45)`,
        }}
      >
        <BrandLogo s={Math.round(size * 0.42)} />
      </div>
    </div>
  )
}

function MiniCard({ icon, tint, title, line, className = '', style }) {
  return (
    <div
      className={`rounded-[10px] border border-black/[0.05] bg-white p-[9px] shadow-[0_8px_18px_rgba(40,40,80,0.12)] ${className}`}
      style={style}
    >
      <div className="flex items-center gap-[6px]">
        <span className="grid size-[18px] shrink-0 place-items-center rounded-[6px]" style={{ background: `${tint}1f` }}>
          {icon}
        </span>
        <span className="text-[9px] font-semibold leading-none text-ink">{title}</span>
      </div>
      <p className="mt-[7px] text-[8px] leading-[1.4] text-sub">{line}</p>
    </div>
  )
}

/* ── Glyphs ─────────────────────────────────────────────────────────────── */

function MailGlyph({ s = 13 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2.5" y="4" width="11" height="8" rx="1.6" stroke="#ea4335" strokeWidth="1.2" />
      <path d="M3 5l5 3.4L13 5" stroke="#ea4335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SheetGlyph({ s = 13 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3" y="2.5" width="10" height="11" rx="1.6" stroke="#0f9d58" strokeWidth="1.2" />
      <path d="M3 6.5h10M3 10h10M6.5 3v10" stroke="#0f9d58" strokeWidth="1.1" />
    </svg>
  )
}

function ChatGlyph({ s = 13, c = '#6b5ce7' }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 6.5A3 3 0 0 1 6 3.5h4a3 3 0 0 1 3 3v1.5a3 3 0 0 1-3 3H7l-3 2v-2A3 3 0 0 1 3 8V6.5Z" stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function FrameGlyph({ s = 13, c = C.accent }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M5 2v12M11 2v12M2 5h12M2 11h12" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function ListGlyph({ s = 13, c = C.gold }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 4.5h2M3 8h2M3 11.5h2M7 4.5h6M7 8h6M7 11.5h4" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function DocGlyph({ s = 13, c = TONE.story }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4.5 2.5h4.2L11.5 5.3V13a.6.6 0 0 1-.6.6H4.5a.6.6 0 0 1-.6-.6V3.1a.6.6 0 0 1 .6-.6Z" stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8.5 2.5v3h3" stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function FlaskGlyph({ s = 13, c = TONE.study }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 2.5h4v3l2.4 4.6A1.4 1.4 0 0 1 11.2 13H4.8a1.4 1.4 0 0 1-1.2-2.9L6 5.5v-3Z" stroke={c} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5.5 3h5" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function FolderGlyph({ s = 13, c = TONE.directory }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 5A1 1 0 0 1 3.5 4h2.4l1.1 1.3h5.5a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5Z" stroke={c} strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

function UserGlyph({ s = 11, c = TONE.story }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="6" r="2.4" stroke={c} strokeWidth="1.3" />
      <path d="M3.5 13a4.5 4.5 0 0 1 9 0" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function CheckGlyph({ s = 8, c = '#fff' }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 8.5l3 3 5-6.5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StarGlyph({ s = 9, c = '#fff' }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2c.45 2.4 1.1 3.05 3.5 3.5C9.1 5.95 8.45 6.6 8 9c-.45-2.4-1.1-3.05-3.5-3.5C6.9 5.05 7.55 4.4 8 2Z" fill={c} />
    </svg>
  )
}

function UploadGlyph({ s = 18, c = TONE.directory }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 10.5V3M8 3 5.4 5.6M8 3l2.6 2.6" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2" stroke={c} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function SendGlyph({ s = 13, c = '#fff' }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h8M7.5 4.5 11 8l-3.5 3.5" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FileGlyph({ s = 14, c = TONE.directory }) {
  const tint = `${c}26`
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4.5 2h4l3 3v8.4a.6.6 0 0 1-.6.6H4.5a.6.6 0 0 1-.6-.6V2.6A.6.6 0 0 1 4.5 2Z" fill={tint} stroke={c} strokeWidth="1" strokeLinejoin="round" />
      <path d="M8.5 2v3h3" stroke={c} strokeWidth="1" strokeLinejoin="round" />
      <path d="M5.6 9.5h4.8M5.6 11.4h3.2" stroke={c} strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

/* ── Product (Linear-style) UI primitives ──────────────────────────────── */

/** Segmented progress circle — Linear status icon. `p` = 0..1 filled. */
function StatusRing({ c, s = 13, p = 0.55 }) {
  const r = 5.2
  const cx = 8
  const a = -90 + p * 360
  const rad = (a * Math.PI) / 180
  const x = cx + r * Math.cos(rad)
  const y = cx + r * Math.sin(rad)
  const large = p > 0.5 ? 1 : 0
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx={cx} cy={cx} r={r} stroke={c} strokeWidth="1.4" opacity="0.45" />
      {p > 0 && p < 1 && (
        <path d={`M${cx} ${cx} L${cx} ${cx - r} A${r} ${r} 0 ${large} 1 ${x} ${y} Z`} fill={c} />
      )}
      {p >= 1 && <circle cx={cx} cy={cx} r={r - 0.4} fill={c} />}
    </svg>
  )
}

/** Linear priority bars. */
function PriorityBars({ s = 13, c = 'currentColor' }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="9" width="3" height="5" rx="1" fill={c} />
      <rect x="6.5" y="6" width="3" height="8" rx="1" fill={c} />
      <rect x="11" y="3" width="3" height="11" rx="1" fill={c} opacity="0.35" />
    </svg>
  )
}

function Avatar({ c, initials = 'AJ', s = 16 }) {
  return (
    <span
      className="inline-grid shrink-0 place-items-center rounded-full font-semibold text-white"
      style={{ width: s, height: s, fontSize: s * 0.42, background: `linear-gradient(150deg,${lighten(c)},${c})` }}
    >
      {initials}
    </span>
  )
}

/** Linear property / label pill — subtle bg, leading icon or dot. */
function Pill({ children, lead, c = 'var(--color-sub)', soft }) {
  return (
    <span
      className="inline-flex items-center gap-[4px] rounded-[5px] px-[5px] py-[2px] text-[7.5px] font-medium leading-none"
      style={{ background: soft || 'var(--color-well)', color: c }}
    >
      {lead}
      {children}
    </span>
  )
}

function Dot({ c, s = 6 }) {
  return <span className="shrink-0 rounded-full" style={{ width: s, height: s, background: c }} />
}

/* ── Editorial card illustrations (recolored) ───────────────────────────── */

/** Usability study — browser window with a prototype + a floating study panel. */
export function StudyIllustration() {
  const a = TONE.study
  return (
    <ToneScene accent={a}>
      <div className="absolute left-[26px] top-[24px] w-[208px] rotate-[-3deg] rounded-[10px] border border-line-subtle bg-surface shadow-pop transition-transform duration-500 ease-out will-change-transform animate-[intro-study-browser_1.1s_ease-out_0.15s_1] group-hover:-translate-y-[3px] group-hover:rotate-[-1.5deg] motion-reduce:animate-none">
        <div className="flex items-center gap-[10px] border-b border-black/[0.05] px-[10px] py-[7px]">
          <div className="flex gap-[4px]">
            <span className="size-[5px] rounded-full bg-[#ec6a5e]" />
            <span className="size-[5px] rounded-full bg-[#f4bf4f]" />
            <span className="size-[5px] rounded-full bg-[#61c554]" />
          </div>
          <div className="flex h-[14px] flex-1 items-center gap-[4px] rounded-full bg-well px-[6px]">
            <FrameGlyph s={9} c={a} />
            <Skel className="h-[3px] w-[54px]" />
          </div>
        </div>
        <div className="px-[8px] py-[7px]">
          {[
            { p: 0, w: '64%', ini: 'AJ' },
            { p: 0.55, w: '52%', ini: 'KM' },
            { p: 1, w: '70%', ini: 'RC' },
            { p: 0.3, w: '46%', ini: 'AJ' },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-[7px] rounded-[5px] px-[5px] py-[4px]">
              <StatusRing c={a} s={11} p={r.p} />
              <span className="text-[7px] font-medium tracking-tight text-faint">SUR-{12 + i}</span>
              <Skel className="h-[3.5px]" style={{ width: r.w }} />
              <Avatar c={a} initials={r.ini} s={12} />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute right-[14px] top-[34px] w-[98px] rotate-[2.5deg] rounded-[10px] border border-dashed bg-surface/95 p-[9px] shadow-pop backdrop-blur-sm transition-transform duration-500 ease-out will-change-transform animate-[intro-study-panel_1.1s_ease-out_0.3s_1] group-hover:-translate-y-[7px] group-hover:rotate-[1deg] motion-reduce:animate-none"
        style={{ borderColor: `${a}80` }}
      >
        <div className="flex items-center gap-[5px]">
          <Tile size={16} radius={5} style={{ background: a, boxShadow: 'none' }}><BrandLogo s={9} /></Tile>
          <span className="text-[8.5px] font-semibold text-ink">Study</span>
        </div>
        <Skel className="mt-[7px] h-[26px] w-full rounded-[6px]" />
        <div className="mt-[7px] flex items-center gap-[3px] rounded-[6px] border border-black/[0.06] bg-well px-[5px] py-[4px]">
          <span className="text-[7px] text-sub">Test this flow</span>
          <span className="anim-caret h-[8px] w-[1px] animate-[caret-blink_1.1s_step-end_infinite] bg-ink" />
        </div>
        <div className="anim-pop mt-[6px] flex size-[14px] items-center justify-center rounded-full text-[10px] leading-none text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90" style={{ background: a }}>+</div>
      </div>
    </ToneScene>
  )
}

/** User story — a clean AI-drafted story ticket with acceptance criteria. */
export function StoryIllustration() {
  const a = TONE.story
  const crit = [
    { label: 'Given', w: '88%' },
    { label: 'When', w: '64%' },
    { label: 'Then', w: '78%' },
  ]
  return (
    <ToneScene accent={a}>
      <div className="absolute left-[58px] top-[16px] h-[114px] w-[188px] rotate-[3deg] rounded-[10px] border border-line-subtle bg-surface/70 shadow-panel transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-[2px] group-hover:rotate-[4.5deg]" />
      <div className="absolute left-[40px] top-[20px] w-[220px] rounded-[10px] border border-line-subtle bg-surface p-[13px] shadow-pop transition-transform duration-500 ease-out will-change-transform animate-[intro-story-card_1s_ease-out_0.2s_1] group-hover:-translate-y-[3px] motion-reduce:animate-none">
        <div className="flex items-center gap-[6px]">
          <StatusRing c={a} s={13} p={0.55} />
          <span className="text-[8px] font-medium tracking-tight text-faint">SUR-128</span>
          <span className="ml-auto flex items-center gap-[3px] rounded-[5px] px-[5px] py-[2px] text-[7px] font-semibold text-white transition-transform duration-300 group-hover:scale-110" style={{ background: a }}>
            <StarGlyph s={8} />AI
          </span>
        </div>

        <p className="mt-[8px] text-[10px] font-semibold leading-tight text-ink">Refine checkout flow</p>

        <div className="mt-[7px] flex flex-wrap items-center gap-[4px]">
          <Pill lead={<StatusRing c={a} s={9} p={0.55} />} c="var(--color-body)">In Progress</Pill>
          <Pill lead={<Dot c={a} />} soft={`${a}14`} c={a}>checkout-flow</Pill>
          <Pill lead={<PriorityBars s={9} c="var(--color-faint)" />} c="var(--color-body)">Medium</Pill>
        </div>

        <div className="mt-[9px] space-y-[6px] border-t border-line-subtle pt-[8px]">
          {crit.map(({ label, w }, i) => (
            <div key={label} className="flex items-center gap-[7px]">
              <span
                className="inline-grid shrink-0 origin-center place-items-center [animation:pop-check_0.5s_ease_both] group-hover:[animation:pop-check-hover_0.5s_ease_both] motion-reduce:[animation:none]"
                style={{ animationDelay: `${i * 140}ms` }}
              >
                <StatusRing c={a} s={12} p={1} />
              </span>
              <span className="w-[28px] shrink-0 text-[7.5px] font-medium text-body">{label}</span>
              <Skel className="h-[3.5px]" style={{ width: w }} />
            </div>
          ))}
        </div>
      </div>
    </ToneScene>
  )
}

/** Directory — upload feature docs, then ask anything across the index. */
export function DirectoryIllustration() {
  const a = TONE.directory
  const docs = ['firebase_events', 'feature_flags']
  return (
    <ToneScene accent={a}>
      {/* Linear-style directory surface */}
      <div className="absolute inset-x-[26px] top-[16px] overflow-hidden rounded-[10px] border border-line-subtle bg-surface shadow-pop transition-transform duration-500 ease-out will-change-transform animate-[intro-story-card_1s_ease-out_0.2s_1] group-hover:-translate-y-[2px] motion-reduce:animate-none">
        <div className="flex items-center gap-[6px] border-b border-line-subtle px-[11px] py-[8px]">
          <span className="grid size-[18px] shrink-0 place-items-center rounded-[6px]" style={{ background: `${a}1f` }}>
            <FolderGlyph s={11} c={a} />
          </span>
          <span className="text-[9px] font-semibold text-ink">Directory</span>
          <span className="ml-auto"><Pill lead={<Dot c={a} />} soft={`${a}14`} c={a}>24 indexed</Pill></span>
        </div>

        <div className="space-y-[1px] px-[7px] py-[6px]">
          {docs.map((name) => (
            <div key={name} className="flex items-center gap-[7px] rounded-[5px] px-[5px] py-[4px]">
              <FileGlyph s={12} c={a} />
              <span className="text-[7.5px] font-medium text-body">{name}</span>
              <span className="ml-auto"><Dot c={a} s={5} /></span>
            </div>
          ))}
          {/* dashed upload slot — chip lands here */}
          <div
            className="flex items-center gap-[6px] rounded-[6px] border border-dashed px-[7px] py-[5px] transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            style={{ borderColor: `${a}66` }}
          >
            <UploadGlyph s={12} c={`${a}cc`} />
            <span className="text-[7px] font-medium" style={{ color: `${a}cc` }}>Upload docs</span>
          </div>
        </div>

        <div className="flex items-center gap-[6px] border-t border-line-subtle px-[9px] py-[7px]">
          <StarGlyph s={9} c={a} />
          <span className="text-[8px] text-sub">Ask anything</span>
          <span className="anim-caret h-[9px] w-[1px] animate-[caret-blink_1.1s_step-end_infinite] bg-ink" />
          <span className="ml-auto grid size-[20px] place-items-center rounded-full transition-transform duration-300 group-hover:scale-110" style={{ background: a }}>
            <SendGlyph s={11} />
          </span>
        </div>
      </div>

      {/* file chip dropping into the upload slot */}
      <div className="absolute left-[88px] top-[96px] flex rotate-[-4deg] items-center gap-[6px] rounded-[8px] border border-line-subtle bg-surface px-[8px] py-[6px] shadow-pop transition-transform duration-[600ms] ease-[cubic-bezier(0.34,1.3,0.64,1)] will-change-transform animate-[intro-chip_1.7s_ease-in-out_0.25s_1] group-hover:-translate-y-[34px] group-hover:rotate-0 motion-reduce:animate-none">
        <FileGlyph s={13} c={a} />
        <span className="text-[8px] font-medium text-ink">feature_spec.pdf</span>
      </div>
    </ToneScene>
  )
}

/* ── Reference-style illustrations (faint icon grid + center tile) ──────── */

function Gi({ d, s = 16 }) {
  const paths = Array.isArray(d) ? d : [d]
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {paths.map((p) => (
        <path key={p} d={p} stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  )
}

const GRID_ICONS = [
  ['M2.5 4.5h11v2h-11z', 'M3.5 6.5h9v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z'],
  ['M6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4', 'M2.5 13a3.5 3.5 0 0 1 7 0', 'M10.5 4.2a2 2 0 0 1 0 3.6'],
  'M3 6.5A3 3 0 0 1 6 3.5h4a3 3 0 0 1 3 3v1.5a3 3 0 0 1-3 3H7l-3 2v-2A3 3 0 0 1 3 8z',
  'M8 2a6 6 0 1 0 0 12V2z',
  ['M3 5h6M11 5h2M3 11h2M9 11h4', 'M9 4v2M5 10v2'],
  'M5 4l7 4-7 4z',
  ['M4 5h8', 'M6 5V4h4v1', 'M5 5l.6 8a1 1 0 0 0 1 1h2.8a1 1 0 0 0 1-1L11 5'],
  ['M2 4l4-1 4 1 4-1v9l-4 1-4-1-4 1z', 'M6 3v9M10 4v9'],
  'M4 13V8M8 13V4M12 13v-3',
  'M4 2v12M4 3h7l-1.4 2.2L11 7.4H4',
  ['M8 3l5 3-5 3-5-3z', 'M3 9l5 3 5-3'],
  'M2 8h3l2-4 3 8 2-4h2',
  ['M3 3h4v4H3z', 'M9 3h4v4H9z', 'M3 9h4v4H3z', 'M9 9h4v4H9z'],
  ['M5 5h7v7H5z', 'M3 3h7v2M3 3v7h2'],
  ['M3 3h10v10H3z', 'M8 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3', 'M5.5 11a2.5 2.5 0 0 1 5 0'],
  ['M4.5 4a1.5 1.5 0 1 0 0-1 1.5 1.5 0 0 0 0 1', 'M4.5 13a1.5 1.5 0 1 0 0-1 1.5 1.5 0 0 0 0 1', 'M11.5 4a1.5 1.5 0 1 0 0-1 1.5 1.5 0 0 0 0 1', 'M4.5 5v6M4.5 8h4a3 3 0 0 0 3-3V5'],
]

function GridScene({ accent, glyph }) {
  const cells = Array.from({ length: 35 })
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white to-well" aria-hidden="true">
      <div className="absolute inset-0 grid place-items-center">
        <div
          className="grid grid-cols-7 gap-x-[24px] gap-y-[18px] text-faint"
          style={{
            opacity: 0.16,
            maskImage: 'radial-gradient(circle at 50% 50%, transparent 13%, black 32%, black 56%, transparent 86%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 13%, black 32%, black 56%, transparent 86%)',
          }}
        >
          {cells.map((_, i) => (
            <Gi key={i} d={GRID_ICONS[i % GRID_ICONS.length]} />
          ))}
        </div>
      </div>
      <div
        className="absolute left-1/2 top-1/2 grid size-[44px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[11px] border"
        style={{
          background: `${accent}1a`,
          borderColor: `${accent}33`,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05),0 1px 1px rgba(0,0,0,0.04)',
        }}
      >
        {glyph}
      </div>
    </div>
  )
}

export function StudyGridIllustration() {
  return <GridScene accent={TONE.study} glyph={<FlaskGlyph s={20} c={TONE.study} />} />
}

export function StoryGridIllustration() {
  return <GridScene accent={TONE.story} glyph={<DocGlyph s={20} c={TONE.story} />} />
}

export function DirectoryGridIllustration() {
  return <GridScene accent={TONE.directory} glyph={<FolderGlyph s={20} c={TONE.directory} />} />
}

/* ── Soft illustration style (light cards, blue accent) ─────────────────── */

const BLUE = '#3f7df6'
const BLUE_DK = '#2f6ae0'

function SoftScene({ children }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-white to-[#f8fafd]" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(60,90,160,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(60,90,160,0.06) 1px,transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 82% 82% at 50% 46%, black 28%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(ellipse 82% 82% at 50% 46%, black 28%, transparent 82%)',
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 300, height: 176 }}>
        {children}
      </div>
    </div>
  )
}

function SparkGlyph({ s = 12, c = BLUE }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 2c.45 2.4 1.1 3.05 3.5 3.5C9.1 5.95 8.45 6.6 8 9c-.45-2.4-1.1-3.05-3.5-3.5C6.9 5.05 7.55 4.4 8 2Z" fill={c} />
    </svg>
  )
}

function BarsGlyph({ s = 14, c = '#e0992f' }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 13V8M8 13V4M12 13v-3" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function DbGlyph({ s = 14, c = BLUE }) {
  return (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <ellipse cx="8" cy="4" rx="4.5" ry="1.7" stroke={c} strokeWidth="1.3" />
      <path d="M3.5 4v8c0 .9 2 1.7 4.5 1.7s4.5-.8 4.5-1.7V4" stroke={c} strokeWidth="1.3" />
      <path d="M3.5 8c0 .9 2 1.7 4.5 1.7s4.5-.8 4.5-1.7" stroke={c} strokeWidth="1.3" />
    </svg>
  )
}

/** User story — text-generation editor with a formatting toolbar. */
export function StoryGenIllustration() {
  return (
    <SoftScene>
      <div className="absolute left-[42px] top-[20px] w-[204px] rounded-[12px] border border-black/[0.06] bg-white shadow-[0_14px_34px_rgba(40,60,110,0.12)]">
        <div className="flex items-center gap-[6px] border-b border-black/[0.05] px-[10px] py-[7px]">
          <span className="flex items-center gap-[3px] rounded-[6px] border border-black/[0.08] px-[6px] py-[2px] text-[7.5px] font-medium text-ink">
            <SparkGlyph s={9} />Generate
          </span>
          <div className="ml-auto flex items-center gap-[6px] text-faint">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 13l3-9 3 9M4 10h4M11 6v7M9.5 11l1.5 2 1.5-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M3 8h10M3 12h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
          </div>
        </div>
        <div className="space-y-[6px] p-[12px]">
          <p className="text-[9px] font-semibold text-ink">Dear partners,</p>
          <Skel className="h-[4px] w-full" />
          <div className="flex items-center rounded-[3px] px-[3px] py-[2px]" style={{ background: `${BLUE}24` }}>
            <span className="text-[7.5px] font-medium" style={{ color: BLUE_DK }}>25% increase in conversions</span>
          </div>
          <Skel className="h-[4px] w-[82%]" />
          <Skel className="h-[4px] w-[64%]" />
        </div>
      </div>

      <div className="absolute bottom-[26px] left-[60px] flex items-center gap-[8px] rounded-[8px] px-[9px] py-[6px] text-white shadow-[0_8px_20px_rgba(20,24,40,0.28)]" style={{ background: '#1d1f24' }}>
        <span className="text-[9px] font-semibold">B</span>
        <span className="text-[9px] font-semibold italic">I</span>
        <span className="text-[9px] font-semibold underline">U</span>
        <span className="h-[10px] w-[1px] bg-white/25" />
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M3 8h7M3 12h10" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" /></svg>
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M3 4h10M5 8h6M3 12h10" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" /></svg>
      </div>
    </SoftScene>
  )
}

/** Usability study — automated analysis: magnifier + document + insight gauge. */
export function StudyAnalysisIllustration() {
  return (
    <SoftScene>
      <svg className="absolute inset-0 size-full" viewBox="0 0 300 176" fill="none" aria-hidden="true">
        <circle cx="150" cy="84" r="62" stroke={`${BLUE}26`} strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
        <path d="M150 22 A62 62 0 0 1 206 118" stroke={BLUE} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
        <path d="M150 22 A62 62 0 0 0 96 52" stroke={`${BLUE}66`} strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* document stack */}
      <div className="absolute left-[118px] top-[40px] h-[84px] w-[70px] rounded-[7px] border border-black/[0.06] bg-white shadow-[0_10px_24px_rgba(40,60,110,0.12)]" style={{ transform: 'rotate(4deg)' }} />
      <div className="absolute left-[112px] top-[44px] h-[84px] w-[70px] space-y-[6px] rounded-[7px] border border-black/[0.06] bg-white p-[10px] shadow-[0_12px_26px_rgba(40,60,110,0.14)]" style={{ transform: 'rotate(-3deg)' }}>
        <Skel className="h-[4px] w-full" />
        <Skel className="h-[4px] w-[78%]" />
        <Solid color={BLUE} className="h-[4px] w-[54%] rounded-full" style={{ opacity: 0.8 }} />
        <Skel className="h-[4px] w-[88%]" />
        <Skel className="h-[4px] w-[60%]" />
      </div>

      {/* magnifier */}
      <svg className="absolute" style={{ left: 150, top: 84 }} width="74" height="74" viewBox="0 0 74 74" fill="none" aria-hidden="true">
        <circle cx="28" cy="28" r="20" fill="#fff" fillOpacity="0.55" stroke={BLUE} strokeWidth="3.5" />
        <circle cx="28" cy="28" r="20" stroke="#fff" strokeWidth="1.2" />
        <path d="M43 43l14 14" stroke={BLUE_DK} strokeWidth="5" strokeLinecap="round" />
      </svg>
    </SoftScene>
  )
}

/** Directory — centralized storage: a cloud gathering connected app sources. */
export function DirectoryCloudIllustration() {
  return (
    <SoftScene>
      <svg className="absolute inset-0 size-full" viewBox="0 0 300 176" fill="none" aria-hidden="true">
        <g filter="url(#cloudShadow)">
          <circle cx="116" cy="96" r="24" fill="#fff" />
          <circle cx="150" cy="78" r="30" fill="#fff" />
          <circle cx="186" cy="96" r="24" fill="#fff" />
          <rect x="98" y="88" width="104" height="26" rx="13" fill="#fff" />
        </g>
        <defs>
          <filter id="cloudShadow" x="70" y="40" width="160" height="110" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#2f4f8f" floodOpacity="0.14" />
          </filter>
        </defs>
      </svg>

      <Tile size={34} radius={10} className="absolute left-[100px] top-[74px]"><BarsGlyph s={15} /></Tile>
      <div
        className="absolute left-[133px] top-[60px] grid size-[40px] place-items-center rounded-[12px]"
        style={{ background: `linear-gradient(150deg,#5e93ff,${BLUE_DK})`, boxShadow: `0 10px 22px ${BLUE}66, inset 0 1px 0 rgba(255,255,255,0.4)` }}
      >
        <SparkGlyph s={18} c="#fff" />
      </div>
      <Tile size={34} radius={10} className="absolute left-[166px] top-[74px]"><DbGlyph s={15} /></Tile>
    </SoftScene>
  )
}

/* ── Minimal 3D style (neutral, floating tiles, soft glow) ──────────────── */

function FlatScene({ children, glow }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: 'linear-gradient(180deg,#f2f3f6,#fafbfc)' }} aria-hidden="true">
      {glow}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 300, height: 176 }}>
        {children}
      </div>
    </div>
  )
}

function AppTile({ size = 30, radius = 9, from, to, children, className = '', style }) {
  return (
    <div
      className={`grid place-items-center ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: `linear-gradient(150deg,${from},${to})`,
        boxShadow: '0 7px 16px rgba(40,40,80,0.18), inset 0 1px 0 rgba(255,255,255,0.4)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

const TILE = {
  blue: ['#5b8def', '#3f6fe0'],
  green: ['#43b06a', '#2f9457'],
  violet: ['#9b7cf0', '#7c5be0'],
  amber: ['#eab04a', '#d8902c'],
  teal: ['#2bb0a6', '#0e9389'],
  dark: ['#3c4049', '#23252b'],
}

/** Usability study — quantified findings as an ascending metric chart. */
export function StudyMetricsIllustration() {
  const a = TONE.study
  const bars = [
    { h: 36, l: '+3%', x: 60 },
    { h: 54, l: '+12%', x: 120 },
    { h: 76, l: '+24%', x: 180 },
    { h: 100, l: '+50%', x: 240 },
  ]
  const top = (b) => 158 - b.h
  return (
    <FlatScene>
      <svg className="absolute inset-0 size-full" viewBox="0 0 300 176" fill="none" aria-hidden="true">
        <path
          d={`M${bars[0].x} ${top(bars[0])} C ${bars[0].x + 30} ${top(bars[0]) - 6}, ${bars[1].x - 30} ${top(bars[1]) + 4}, ${bars[1].x} ${top(bars[1])} S ${bars[2].x - 30} ${top(bars[2])}, ${bars[2].x} ${top(bars[2])} S ${bars[3].x - 30} ${top(bars[3])}, ${bars[3].x} ${top(bars[3])}`}
          stroke={`${a}99`}
          strokeWidth="1.5"
          strokeDasharray="2 4"
          strokeLinecap="round"
        />
        {bars.map((b) => (
          <circle key={b.l} cx={b.x} cy={top(b)} r="2.6" fill={a} stroke="#fff" strokeWidth="1.4" />
        ))}
      </svg>

      {bars.map((b) => (
        <div key={b.l} className="absolute bottom-[18px]" style={{ left: b.x - 23 }}>
          <span
            className="absolute -top-[16px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-[6px] py-[2px] text-[7.5px] font-semibold shadow-[0_3px_8px_rgba(40,40,80,0.12)]"
            style={{ color: a }}
          >
            {b.l}
          </span>
          <div
            className="w-[46px] rounded-[8px] border border-black/[0.05] bg-white shadow-[0_8px_18px_rgba(40,40,80,0.10)]"
            style={{ height: b.h }}
          />
        </div>
      ))}
    </FlatScene>
  )
}

/** User story — a user-centered hub with orbiting source apps. */
export function StoryOrbitIllustration() {
  const a = TONE.story
  const glow = (
    <>
      <div className="absolute left-[6px] top-1/2 size-[130px] -translate-y-1/2 rounded-full" style={{ background: 'radial-gradient(circle,#a78bfa4d,transparent 64%)', filter: 'blur(10px)' }} />
      <div className="absolute right-[6px] top-1/2 size-[130px] -translate-y-1/2 rounded-full" style={{ background: 'radial-gradient(circle,#93b4fb4d,transparent 64%)', filter: 'blur(10px)' }} />
    </>
  )
  return (
    <FlatScene glow={glow}>
      <svg className="absolute inset-0 size-full" viewBox="0 0 300 176" fill="none" aria-hidden="true">
        <ellipse cx="150" cy="88" rx="118" ry="50" stroke="#c8cad8" strokeWidth="1" opacity="0.55" />
        <ellipse cx="150" cy="88" rx="78" ry="30" stroke="#c8cad8" strokeWidth="1" opacity="0.7" />
      </svg>

      <AppTile size={30} className="absolute left-[64px] top-[40px]" from={TILE.blue[0]} to={TILE.blue[1]}><SendGlyph s={14} /></AppTile>
      <AppTile size={30} className="absolute right-[64px] top-[44px]" from={TILE.green[0]} to={TILE.green[1]}><DocGlyph s={14} c="#fff" /></AppTile>
      <AppTile size={28} className="absolute left-[80px] top-[112px]" from={TILE.amber[0]} to={TILE.amber[1]}><ChatGlyph s={13} c="#fff" /></AppTile>
      <AppTile size={28} radius={8} className="absolute right-[78px] top-[110px]" from={TILE.dark[0]} to={TILE.dark[1]}><FrameGlyph s={13} c="#fff" /></AppTile>

      <div
        className="absolute left-1/2 top-[88px] grid size-[42px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
        style={{ background: `linear-gradient(150deg,#7d8df0,${a})`, boxShadow: `0 10px 22px ${a}66, inset 0 1px 0 rgba(255,255,255,0.45)` }}
      >
        <UserGlyph s={18} c="#fff" />
      </div>
    </FlatScene>
  )
}

/** Directory — a grid of connected feature & integration sources. */
export function DirectoryFloorIllustration() {
  const floorMask = 'radial-gradient(ellipse 58% 64% at 50% 28%, black, transparent 76%)'
  return (
    <FlatScene>
      <div
        className="absolute left-1/2 top-[92px] -translate-x-1/2"
        style={{ width: 280, height: 150, transform: 'perspective(440px) rotateX(56deg)', transformOrigin: '50% 0' }}
      >
        <div
          className="size-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(60,70,110,0.13) 1px,transparent 1px),linear-gradient(90deg,rgba(60,70,110,0.13) 1px,transparent 1px)',
            backgroundSize: '30px 30px',
            maskImage: floorMask,
            WebkitMaskImage: floorMask,
          }}
        />
      </div>

      <div className="absolute left-1/2 top-[66px] flex -translate-x-1/2 items-end gap-[11px]">
        <AppTile size={32} from={TILE.green[0]} to={TILE.green[1]}><BarsGlyph s={15} c="#fff" /></AppTile>
        <AppTile size={32} from={TILE.amber[0]} to={TILE.amber[1]}><DocGlyph s={15} c="#fff" /></AppTile>
        <div className="relative -translate-y-[6px]">
          <AppTile size={36} radius={10} from={TILE.violet[0]} to={TILE.violet[1]}><FrameGlyph s={17} c="#fff" /></AppTile>
          <svg className="absolute -bottom-[8px] -right-[6px]" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 2l9 5-4 1.4L6.5 13 3 2Z" fill="#fff" stroke="#1d1f24" strokeWidth="1" strokeLinejoin="round" />
          </svg>
        </div>
        <AppTile size={32} from={TILE.blue[0]} to={TILE.blue[1]}><DbGlyph s={15} c="#fff" /></AppTile>
        <AppTile size={32} from={TILE.teal[0]} to={TILE.teal[1]}><FolderGlyph s={15} c="#fff" /></AppTile>
      </div>
    </FlatScene>
  )
}

export function PinnedEmptyIllustration() {
  return (
    <div className="relative h-[96px] w-[220px]" aria-hidden="true">
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 210,
          height: 88,
          transform: 'translate(-50%, -42%) perspective(660px) rotateX(48deg) rotateZ(18deg)',
        }}
      >
        <Panel className="left-[8px] top-[28px] h-[52px] w-[84px] p-7 opacity-[0.55]">
          <Solid color={C.accent} className="size-[16px] rounded-[4px]" />
          <Skel className="mt-5 h-[4px] w-full" />
        </Panel>
        <Panel className="left-[72px] top-[4px] h-[56px] w-[90px] p-7 opacity-[0.78]">
          <Solid color={C.team} className="size-[16px] rounded-full" />
          <Skel className="mt-5 h-[4px] w-[80%]" />
        </Panel>
        <Panel className="left-[138px] top-[22px] h-[52px] w-[84px] p-7">
          <Solid color={C.workspace} className="size-[16px] rounded-[4px]" />
          <Skel className="mt-5 h-[4px] w-[70%]" />
        </Panel>
      </div>
    </div>
  )
}
