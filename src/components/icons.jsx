import {
  Inbox,
  Focus,
  GitPullRequest,
  Box,
  Layers,
  MoreHorizontal,
  Circle,
  Files,
  Plus,
  CircleHelp,
  Search,
  SquarePen,
  ChevronDown as LucideChevronDown,
  ChevronRight as LucideChevronRight,
  Menu,
  X,
  Star,
  Bell,
  Link,
  GripVertical,
  Send,
  History,
  ArrowLeft,
  ListFilter,
  SlidersHorizontal,
  PanelRight,
  Home,
  FlaskConical,
  LineChart,
  Users,
  Library,
  LayoutTemplate,
  FileText,
  Folder,
  Sparkles,
  Database,
  Settings,
  UserRound,
  Code,
  Shield,
  Plug,
  Tag,
  Clock,
  Triangle,
  Rocket,
  List,
  LayoutGrid,
  ArrowDownNarrowWide,
  Paperclip,
  Calendar,
  CalendarPlus,
  FilePlus,
  Maximize2,
} from 'lucide-react'

const STROKE = 1.5

function createIcon(IconComponent) {
  return function AppIcon({ size = 16, strokeWidth = STROKE, className, ...props }) {
    return (
      <IconComponent
        size={size}
        strokeWidth={strokeWidth}
        absoluteStrokeWidth
        className={['block shrink-0', className].filter(Boolean).join(' ')}
        aria-hidden
        {...props}
      />
    )
  }
}

function createFilledIcon(children, viewBox = '0 0 16 16') {
  return function FilledIcon({ size = 16, className, ...props }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="currentColor"
        aria-hidden
        focusable="false"
        className={['shrink-0', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </svg>
    )
  }
}

const caretBase = { width: 12, height: 12, viewBox: '0 0 12 12', 'aria-hidden': true, focusable: false }

export const CaretRight = ({ size = 12, ...rest }) => (
  <svg {...caretBase} width={size} height={size} fill="currentColor" {...rest}><path d="M4 2.5 8 6 4 9.5z" /></svg>
)

export const CaretDown = ({ size = 12, ...rest }) => (
  <svg {...caretBase} width={size} height={size} fill="currentColor" {...rest}><path d="M2.5 4 6 8 9.5 4z" /></svg>
)

export const InboxIcon = createIcon(Inbox)
export const MyIssuesIcon = createIcon(Focus)
export const ReviewsIcon = createIcon(GitPullRequest)
export const ProjectsIcon = createIcon(Box)
export const ViewsIcon = createIcon(Layers)
export const MoreIcon = createIcon(MoreHorizontal)
export const IssueCircleIcon = createIcon(Circle)
export const ImportIcon = createIcon(Files)
export const PlusIcon = createIcon(Plus)
export const HelpIcon = createIcon(CircleHelp)

export const TawakkalnaHelpIcon = createFilledIcon(
  <path d="M7.569 9.75c-.332 0-.614-.27-.578-.6.021-.188.061-.372.136-.62q.158-.51.447-.82a3.4 3.4 0 0 1 .703-.577q.284-.182.507-.396.229-.219.358-.486a1.4 1.4 0 0 0 .13-.606 1.2 1.2 0 0 0-.171-.653 1.2 1.2 0 0 0-.466-.429 1.36 1.36 0 0 0-.647-.152q-.33 0-.628.148a1.23 1.23 0 0 0-.587.622c-.123.295-.367.555-.686.555h-.472c-.337 0-.616-.28-.55-.611q.103-.513.363-.905a2.55 2.55 0 0 1 1.08-.915A3.6 3.6 0 0 1 7.998 3q.888 0 1.563.32.68.319 1.057.91.382.586.382 1.392 0 .543-.172.972a2.4 2.4 0 0 1-.48.763 3.5 3.5 0 0 1-.74.595 3.2 3.2 0 0 0-.62.496 1.7 1.7 0 0 0-.353.605l-.034.106c-.1.316-.35.591-.682.591zM8.75 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />,
)

export function SidebarHelpIcon({ className = '' }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
      focusable="false"
      className={['block shrink-0 text-nav', className].filter(Boolean).join(' ')}
    >
      <path d="M7.569 9.75c-.332 0-.614-.27-.578-.6.021-.188.061-.372.136-.62q.158-.51.447-.82a3.4 3.4 0 0 1 .703-.577q.284-.182.507-.396.229-.219.358-.486a1.4 1.4 0 0 0 .13-.606 1.2 1.2 0 0 0-.171-.653 1.2 1.2 0 0 0-.466-.429 1.36 1.36 0 0 0-.647-.152q-.33 0-.628.148a1.23 1.23 0 0 0-.587.622c-.123.295-.367.555-.686.555h-.472c-.337 0-.616-.28-.55-.611q.103-.513.363-.905a2.55 2.55 0 0 1 1.08-.915A3.6 3.6 0 0 1 7.998 3q.888 0 1.563.32.68.319 1.057.91.382.586.382 1.392 0 .543-.172.972a2.4 2.4 0 0 1-.48.763 3.5 3.5 0 0 1-.74.595 3.2 3.2 0 0 0-.62.496 1.7 1.7 0 0 0-.353.605l-.034.106c-.1.316-.35.591-.682.591zM8.75 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  )
}
export const SearchIcon = createIcon(Search)
export const ComposeIcon = createIcon(SquarePen)
export const ChevronDown = createIcon(LucideChevronDown)
export const ChevronRight = createIcon(LucideChevronRight)
export const MenuIcon = createIcon(Menu)
export const CloseIcon = createIcon(X)
export const DotsIcon = createIcon(MoreHorizontal)
export const StarIcon = createIcon(Star)
export const BellIcon = createIcon(Bell)
export const LinkIcon = createIcon(Link)
export const DragHandleIcon = createIcon(GripVertical)
export const LayersIcon = createIcon(Layers)
export const SortIcon = createIcon(ArrowDownNarrowWide)
export const DisplayOptionsIcon = createIcon(LayoutGrid)
export const UserAvatarIcon = createIcon(UserRound)
export const PaperPlaneIcon = createIcon(Send)
export const HistoryIcon = createIcon(History)
export const BackIcon = createIcon(ArrowLeft)
export const StackIcon = createIcon(List)
export const FilterIcon = createIcon(ListFilter)
export const SlidersIcon = createIcon(SlidersHorizontal)
export const PanelSidebarIcon = createIcon(PanelRight)

export const PaperclipIcon = createIcon(Paperclip)
export const CalendarIcon = createIcon(Calendar)
export const CalendarPlusIcon = createIcon(CalendarPlus)
export const FilePlusIcon = createIcon(FilePlus)
export const MaximizeIcon = createIcon(Maximize2)

export const TawakkalnaSearchInputIcon = createFilledIcon(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M7 2C9.76142 2 12 4.23858 12 7C12 8.11012 11.6375 9.13519 11.0254 9.96484L13.7803 12.7197L13.832 12.7764C14.0723 13.0709 14.0549 13.5057 13.7803 13.7803C13.5057 14.0549 13.0709 14.0723 12.7764 13.832L12.7197 13.7803L9.96484 11.0254C9.13519 11.6375 8.11012 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5Z"
  />,
)

export const TawakkalnaToolbarFilterIcon = createFilledIcon(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M14.25 3a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5ZM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8Zm2.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
  />,
)

export const TawakkalnaToolbarDisplayIcon = createFilledIcon(
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2.5C8.11933 2.5 9.06613 3.23584 9.38477 4.25H14.75C15.1642 4.25 15.5 4.58579 15.5 5C15.5 5.41421 15.1642 5.75 14.75 5.75H9.38477C9.06613 6.76416 8.11933 7.5 7 7.5C5.88067 7.5 4.93387 6.76416 4.61523 5.75H2.25C1.83579 5.75 1.5 5.41421 1.5 5C1.5 4.58579 1.83579 4.25 2.25 4.25H4.61523C4.93387 3.23584 5.88067 2.5 7 2.5ZM7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6C7.55228 6 8 5.55228 8 5C8 4.44772 7.55228 4 7 4Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 13.5C8.88067 13.5 7.93387 12.7642 7.61523 11.75H2.25C1.83579 11.75 1.5 11.4142 1.5 11C1.5 10.5858 1.83579 10.25 2.25 10.25H7.61523C7.93387 9.23584 8.88067 8.5 10 8.5C11.1193 8.5 12.0661 9.23584 12.3848 10.25H14.75C15.1642 10.25 15.5 10.5858 15.5 11C15.5 11.4142 15.1642 11.75 14.75 11.75H12.3848C12.0661 12.7642 11.1193 13.5 10 13.5ZM10 12C10.5523 12 11 11.5523 11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11C9 11.5523 9.44772 12 10 12Z"
    />
  </>,
)

export const TawakkalnaToolbarSidebarIcon = createFilledIcon(
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 2C2.45508 2 1 3.45508 1 5.25V10.75C1 12.5449 2.45508 14 4.25 14H11.75C13.5449 14 15 12.5449 15 10.75V5.25C15 3.45508 13.5449 2 11.75 2H4.25ZM2.5 5.5C2.5 4.39543 3.39543 3.5 4.5 3.5H11.5C12.6046 3.5 13.5 4.39543 13.5 5.5V10.5C13.5 11.6046 12.6046 12.5 11.5 12.5H4.5C3.39543 12.5 2.5 11.6046 2.5 10.5V5.5Z"
    />
    <rect x="10" y="5" width="1.5" height="6" rx="0.75" />
  </>,
)

export const TawakkalnaCustomViewIcon = createFilledIcon(
  <>
    <path d="M6.932 2.214a2.77 2.77 0 0 1 2.282.066l5.066 2.467c.944.46.964 1.812.034 2.3L9.287 9.683a2.77 2.77 0 0 1-2.574 0L1.686 7.047c-.93-.488-.91-1.84.034-2.3L6.786 2.28zm1.62 1.457a1.26 1.26 0 0 0-.97-.057l-.133.057-4.61 2.243 4.576 2.398c.367.193.803.193 1.17 0l4.574-2.398z" />
    <path d="M13.905 10.077c.367-.173.82-.044 1.01.288s.048.74-.32.912L9.5 13.67a3.56 3.56 0 0 1-2.998 0l-5.097-2.392-.066-.034c-.318-.188-.432-.567-.253-.878s.588-.444.941-.317l.07.029 5.096 2.391.195.078c.461.156.978.13 1.420-.078z" />
  </>,
)

export const TawakkalnaAddViewIcon = createFilledIcon(
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.97358 1.34476C7.57022 0.885624 8.41055 0.885024 9.00788 1.3433L14.5499 5.59521C15.15 6.05565 15.15 6.94435 14.5499 7.40478L9.00788 11.6567C8.41055 12.115 7.57022 12.1144 6.97358 11.6552L1.44875 7.40374C0.850417 6.94331 0.850415 6.05669 1.44875 5.59625L6.97358 1.34476ZM8 3.25C8.41421 3.25 8.75 3.58579 8.75 4V5.75H10.5C10.9142 5.75 11.25 6.08579 11.25 6.5C11.25 6.91421 10.9142 7.25 10.5 7.25H8.75V9C8.75 9.41421 8.41421 9.75 8 9.75C7.58579 9.75 7.25 9.41421 7.25 9V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H7.25V4C7.25 3.58579 7.58579 3.25 8 3.25Z"
    />
    <path d="M1.15024 9.79849C1.39408 9.46375 1.84872 9.40113 2.16572 9.65862L6.50981 12.9949C7.29068 13.6292 8.37801 13.6292 9.15888 12.9949L13.8344 9.65862C14.1513 9.40113 14.606 9.46375 14.8498 9.79849C15.0937 10.1332 15.0344 10.6133 14.7174 10.8708L10.0419 14.2071C8.74045 15.2643 6.92824 15.2643 5.62678 14.2071L1.28269 10.8708C0.965698 10.6133 0.906397 10.1332 1.15024 9.79849Z" />
  </>,
)
export const PreferencesIcon = createIcon(SlidersHorizontal)
export const ProfileIcon = createIcon(UserRound)
export const NotificationsIcon = createIcon(Bell)
export const CodeReviewsIcon = createIcon(Code)
export const SecurityIcon = createIcon(Shield)
export const ConnectedAccountsIcon = createIcon(Plug)
export const AgentIcon = createIcon(Send)
export const LabelsIcon = createIcon(Tag)
export const SLAsIcon = createIcon(Clock)
export const StatusIcon = createIcon(Circle)
export const UpdatesIcon = createIcon(LineChart)
export const SparkleIcon = createIcon(Sparkles)
export const InitiativesIcon = createIcon(Triangle)
export const DocumentsIcon = createIcon(FileText)
export const CustomerRequestsIcon = createIcon(UserRound)
export const ReleasesIcon = createIcon(Rocket)
export const TeamSettingsIcon = createIcon(Settings)

export const HomeIcon = createIcon(Home)
export const UsabilityIcon = createIcon(FlaskConical)
export const StudiesIcon = createIcon(LineChart)
export const PersonasIcon = createIcon(Users)
export const LibraryIcon = createIcon(Library)
export const TemplatesIcon = createIcon(LayoutTemplate)
export const StoriesIcon = createIcon(FileText)
export const DirectoryIcon = createIcon(Folder)
export const FeaturesIcon = createIcon(Sparkles)
export const FirebaseIcon = createIcon(Database)
export const UsersIcon = createIcon(Users)
export const SettingsIcon = createIcon(Settings)

export const SlackIcon = (props) => (
  <svg width={props.size ?? 16} height={props.size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M9 4a2 2 0 0 0-2 2v2H5a2 2 0 0 0 0 4h2v2a2 2 0 0 0 4 0v-2h2a2 2 0 0 0 0-4H9V6a2 2 0 0 0-2-2z" transform="translate(2 2) scale(0.85)" />
  </svg>
)

export function ProjectsEmptyIcon({ size = 120, className = '', ...props }) {
  return (
    <Box
      size={size}
      strokeWidth={1.2}
      absoluteStrokeWidth
      className={className}
      aria-hidden
      style={{ opacity: 0.35 }}
      {...props}
    />
  )
}

export function TeamMark({ size = 48, className = '' }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-[10px] bg-team ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <UserRound size={size * 0.5} strokeWidth={1.8} absoluteStrokeWidth className="text-white" />
    </span>
  )
}

export function WorkspaceAvatar({ size = 20, initials = 'SU', className = '' }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-lg bg-workspace text-[11px] font-normal text-white ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {initials}
    </span>
  )
}

export function UserAvatar({ size = 20, initials = 'AJ', className = '' }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-lg bg-user-avatar text-[11px] font-normal text-white ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {initials}
    </span>
  )
}
