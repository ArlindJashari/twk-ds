import { getDesignSystemCopy } from './designSystemI18n.js'

const VARIANTS = {
  en: {
    issue: {
      newIssue: 'New issue',
      issueTitle: 'Issue title',
      createIssue: 'Create issue',
      team: 'SUR',
      teamInitials: 'S',
    },
    study: {
      newIssue: 'New study',
      issueTitle: 'Study title',
      createIssue: 'Create study',
      team: 'USC',
      teamInitials: 'U',
    },
    project: {
      newIssue: 'New project',
      issueTitle: 'Project name',
      createIssue: 'Create project',
      team: 'SUR',
      teamInitials: 'S',
    },
  },
  ar: {
    issue: {
      newIssue: 'مهمة جديدة',
      issueTitle: 'عنوان المهمة',
      createIssue: 'إنشاء مهمة',
      team: 'SUR',
      teamInitials: 'S',
    },
    study: {
      newIssue: 'دراسة جديدة',
      issueTitle: 'عنوان الدراسة',
      createIssue: 'إنشاء دراسة',
      team: 'USC',
      teamInitials: 'U',
    },
    project: {
      newIssue: 'مشروع جديد',
      issueTitle: 'اسم المشروع',
      createIssue: 'إنشاء مشروع',
      team: 'SUR',
      teamInitials: 'S',
    },
  },
}

export function getCreateComposerCopy(type = 'issue', locale = 'en') {
  const shared = getDesignSystemCopy(locale).sections.issues
  const variant = VARIANTS[locale]?.[type] ?? VARIANTS.en[type] ?? VARIANTS.en.issue
  return { ...shared, ...variant }
}
