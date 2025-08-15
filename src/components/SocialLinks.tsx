
import { Mail, Github, Linkedin, FileText } from 'lucide-react'
import { SITE } from '@/content'

export default function SocialLinks() {
  const links = [
    { href: SITE.email, label: 'Email', icon: Mail },
    { href: SITE.links.github, label: 'GitHub', icon: Github },
    { href: SITE.links.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: SITE.links.cv, label: 'CV (PDF)', icon: FileText },
  ].filter(({ href }) => !!href)

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-sm"
        >
          <Icon size={18} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  )
}
