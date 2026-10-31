import { ArrowUpRight, GitPullRequest } from 'lucide-react';
import type { CSSProperties } from 'react';

const contributions = [
  { repo: 'keptn/lifecycle-toolkit', title: 'Expose step and aggregation fields for KeptnMetric', href: 'https://github.com/keptn/lifecycle-toolkit/pull/2556' },
  { repo: 'cnoe-io/idpbuilder', title: 'Bump the Go toolchain to 1.22', href: 'https://github.com/cnoe-io/idpbuilder/pull/360' },
  { repo: 'cnoe-io/argocd-api', title: 'Update the Go version', href: 'https://github.com/cnoe-io/argocd-api/pull/3' },
  { repo: 'kubernetes-sigs/hydrophone', title: 'Update project documentation', href: 'https://github.com/kubernetes-sigs/hydrophone/pull/124' },
];

export function OpenSourceSection() {
  return <section className="section" id="opensource">
    <div className="section-head" data-reveal><p className="eyebrow">04 / COMMUNITY</p><h2>Open source<span className="accent">.</span></h2><p>Selected upstream pull requests authored from my GitHub account. Each item below is verified as merged.</p></div>
    <div className="contribution-grid">{contributions.map((item, index) => <a className="contribution-card" data-reveal style={{ '--reveal-order': index % 2 } as CSSProperties} key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
      <div className="contribution-top"><GitPullRequest size={18} aria-hidden="true" /><span>Merged</span></div><small>{item.repo}</small><h3>{item.title}</h3><span className="contribution-link">View pull request <ArrowUpRight size={14} aria-hidden="true" /></span>
    </a>)}</div>
  </section>;
}
