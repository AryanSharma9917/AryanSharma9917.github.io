import type { ReactNode } from 'react';

export type ProjectVisualId = 'kubepilot' | 'codewise' | 'monitoring' | 'incidentzero' | 'auth' | 'pipeline' | 'servicesync';

const meta: Record<ProjectVisualId, [string, string]> = {
  kubepilot: ['KubePilot', 'KUBERNETES OPERATIONS'],
  codewise: ['Codewise CLI', 'DEVELOPER TOOLING'],
  monitoring: ['System Monitoring', 'OBSERVABILITY'],
  incidentzero: ['IncidentZero', 'INCIDENT INVESTIGATION'],
  auth: ['Go Auth API', 'IDENTITY & ACCESS'],
  pipeline: ['Go CI/CD', 'DELIVERY PIPELINE'],
  servicesync: ['ServiceSync', 'SERVICE ORCHESTRATION'],
};

function Frame({ id, children }: { id: ProjectVisualId; children: ReactNode }) {
  return <>
    <rect className="pv-panel" x="20" y="20" width="920" height="520" rx="22" />
    <circle className="pv-dot pv-dot-hot" cx="47" cy="48" r="4" />
    <circle className="pv-dot" cx="62" cy="48" r="4" /><circle className="pv-dot" cx="77" cy="48" r="4" />
    <text className="pv-title" x="98" y="54">{meta[id][0]}</text>
    <text className="pv-eyebrow" x="912" y="53" textAnchor="end">{meta[id][1]}</text>
    <line className="pv-rule" x1="20" y1="76" x2="940" y2="76" />{children}
  </>;
}

const Status = ({ x, y, label, warn = false }: { x: number; y: number; label: string; warn?: boolean }) => <g>
  <circle className={warn ? 'pv-warn' : 'pv-status'} cx={x} cy={y - 4} r="5" />
  <text className="pv-copy pv-copy-bright" x={x + 15} y={y}>{label}</text>
</g>;

function KubePilot() {
  return <Frame id="kubepilot">
    <rect className="pv-well" x="42" y="98" width="158" height="420" rx="14" />
    <rect className="pv-accent-soft" x="55" y="151" width="132" height="38" rx="9" />
    <rect className="pv-accent" x="67" y="165" width="10" height="10" rx="3" /><text className="pv-copy pv-copy-bright" x="87" y="174">Overview</text>
    {['Workloads', 'Evidence', 'Runbooks', 'Incidents'].map((label, i) => <g key={label} transform={`translate(0 ${i * 47})`}><rect className="pv-icon" x="67" y="213" width="10" height="10" rx="3" /><text className="pv-copy" x="87" y="222">{label}</text></g>)}
    <Status x={70} y={485} label="sample cluster" />
    <text className="pv-heading" x="226" y="119">Good morning, operator</text><text className="pv-copy" x="226" y="141">example-cluster · sample workspace</text>
    <rect className="pv-pill" x="805" y="101" width="109" height="28" rx="14" /><Status x={821} y={119} label="CONNECTED" />
    {[['03', 'WORKLOADS'], ['02', 'HEALTHY'], ['01', 'TO REVIEW']].map(([value, label], i) => <g key={label} transform={`translate(${i * 162} 0)`}><rect className="pv-card" x="226" y="163" width="146" height="92" rx="13" /><text className="pv-metric" x="244" y="202">{value}</text><text className="pv-micro" x="244" y="230">{label}</text></g>)}
    <rect className="pv-card" x="718" y="163" width="196" height="92" rx="13" /><text className="pv-micro" x="737" y="186">RESOURCE VIEW</text><rect className="pv-track" x="737" y="205" width="153" height="7" rx="4" /><rect className="pv-accent" x="737" y="205" width="101" height="7" rx="4" /><text className="pv-copy pv-copy-bright" x="737" y="237">sample allocation</text>
    <rect className="pv-card" x="226" y="276" width="430" height="222" rx="14" /><text className="pv-label" x="246" y="306">ACTIVE WORKLOADS</text>
    {[['checkout-api', 'Running', '8m'], ['payments-worker', 'Degraded', '14m'], ['catalog-api', 'Running', '21m']].map(([name, state, age], i) => <g key={name} transform={`translate(0 ${i * 52})`}><line className="pv-rule" x1="246" y1="329" x2="636" y2="329" /><Status x={250} y={357} label={name} warn={state === 'Degraded'} /><text className={state === 'Running' ? 'pv-micro' : 'pv-micro pv-amber'} x="535" y="353">{state}</text><text className="pv-micro" x="615" y="353" textAnchor="end">{age}</text></g>)}
    <rect className="pv-card" x="676" y="276" width="238" height="222" rx="14" /><text className="pv-label" x="696" y="306">COPILOT INSIGHT</text><rect className="pv-accent-soft" x="696" y="326" width="198" height="66" rx="10" /><text className="pv-copy pv-copy-bright" x="711" y="350">Memory pressure detected</text><text className="pv-micro" x="711" y="370">payments-worker · pod/7fd2</text><text className="pv-micro" x="696" y="420">EVIDENCE</text><text className="pv-copy" x="757" y="420">5 signals</text><text className="pv-micro" x="696" y="447">RUNBOOK</text><text className="pv-copy" x="757" y="447">RB-204</text><rect className="pv-button" x="696" y="461" width="198" height="24" rx="7" /><text className="pv-button-copy" x="795" y="477" textAnchor="middle">OPEN DIAGNOSIS →</text>
  </Frame>;
}

function Codewise() {
  return <Frame id="codewise">
    <rect className="pv-well" x="42" y="99" width="646" height="419" rx="14" /><text className="pv-micro" x="62" y="126">aryan@dev ~/platform</text><line className="pv-rule" x1="42" y1="145" x2="688" y2="145" />
    <text className="pv-terminal" x="62" y="181"><tspan className="pv-amber">$</tspan> codewise doctor</text>
    {['✓ Docker daemon       healthy', '✓ Kubernetes context  kind-dev', '✓ Helm                 v3.15.2'].map((line, i) => <text key={line} className="pv-terminal pv-muted" x="62" y={213 + i * 26}>{line}</text>)}
    <text className="pv-terminal" x="62" y="310"><tspan className="pv-amber">$</tspan> codewise deploy run --env dev</text><text className="pv-terminal pv-muted" x="62" y="342">→ building image  api:sample</text><text className="pv-terminal pv-muted" x="62" y="368">→ applying chart  ./deploy/helm</text><rect className="pv-track" x="62" y="395" width="371" height="7" rx="4" /><rect className="pv-accent" x="62" y="395" width="303" height="7" rx="4" /><text className="pv-terminal pv-muted" x="62" y="439">deployment/api ready</text><text className="pv-terminal" x="62" y="480"><tspan className="pv-amber">$ _</tspan></text>
    <rect className="pv-card" x="710" y="99" width="204" height="419" rx="14" /><text className="pv-label" x="730" y="129">TOOLCHAIN</text>
    {['Docker', 'Kubernetes', 'Helm'].map((label, i) => <g key={label} transform={`translate(0 ${i * 67})`}><rect className="pv-icon-box" x="730" y="153" width="42" height="42" rx="10" /><path className="pv-accent-stroke" d="M741 174h20M751 164v20" /><text className="pv-copy pv-copy-bright" x="786" y="170">{label}</text><text className="pv-micro" x="786" y="188">ready</text></g>)}
    <rect className="pv-accent-soft" x="730" y="381" width="164" height="104" rx="11" /><text className="pv-micro" x="747" y="407">SAMPLE RUN</text><text className="pv-heading" x="747" y="438">Passed</text><text className="pv-copy" x="747" y="463">dev · completed</text>
  </Frame>;
}

function Monitoring() {
  return <Frame id="monitoring">
    <text className="pv-heading" x="43" y="118">Service overview</text><rect className="pv-pill" x="800" y="99" width="114" height="28" rx="14" /><Status x={817} y={117} label="ALL SYSTEMS" />
    {[['Online', 'STATUS'], ['Active', 'CHECKS'], ['Normal', 'LATENCY']].map(([value, label], i) => <g key={label} transform={`translate(${i * 297} 0)`}><rect className="pv-card" x="42" y="147" width="276" height="91" rx="13" /><text className="pv-metric-sm" x="61" y="185">{value}</text><text className="pv-micro" x="61" y="215">{label}</text></g>)}
    <rect className="pv-card" x="42" y="258" width="572" height="240" rx="14" /><text className="pv-label" x="62" y="289">RESPONSE TIME · 24H</text>{[0, 1, 2].map(i => <line key={i} className="pv-grid-line" x1="62" y1={337 + i * 54} x2="594" y2={337 + i * 54} />)}<path className="pv-chart-fill" d="M62 431C108 403 133 419 173 372s70 25 106-21 65 31 107-25 74 26 115-11 51 25 93-16v166H62Z" /><path className="pv-chart" d="M62 431C108 403 133 419 173 372s70 25 106-21 65 31 107-25 74 26 115-11 51 25 93-16" /><circle className="pv-accent" cx="594" cy="299" r="5" />
    <rect className="pv-card" x="634" y="258" width="280" height="240" rx="14" /><text className="pv-label" x="654" y="289">SERVICE HEALTH</text>{['api-gateway', 'auth-service', 'event-worker'].map((label, i) => <g key={label} transform={`translate(0 ${i * 55})`}><Status x={660} y={330} label={label} warn={i === 2} /><text className="pv-micro" x="890" y="330" textAnchor="end">{i === 2 ? 'review' : 'online'}</text><line className="pv-rule" x1="654" y1="349" x2="894" y2="349" /></g>)}<text className="pv-micro pv-amber" x="654" y="478">SAMPLE ALERT · LATENCY</text>
  </Frame>;
}

function IncidentZero() {
  return <Frame id="incidentzero">
    <rect className="pv-accent-soft" x="42" y="99" width="872" height="53" rx="11" /><Status x={64} y={129} label="CrashLoopBackOff · payments-api-7f9d" warn /><text className="pv-micro" x="81" y="143">production / checkout · opened 8 minutes ago</text>
    {['Evidence', 'Diagnosis', 'Patch', 'Validation'].map((stage, i) => <g key={stage} transform={`translate(${i * 213} 0)`}><circle className={i < 2 ? 'pv-accent' : 'pv-icon'} cx="67" cy="190" r="10" />{i < 3 && <line className={i === 0 ? 'pv-accent-stroke' : 'pv-rule'} x1="80" y1="190" x2="256" y2="190" />}<text className={i === 1 ? 'pv-copy pv-copy-bright' : 'pv-copy'} x="52" y="220">{stage}</text></g>)}
    <rect className="pv-card" x="42" y="249" width="278" height="249" rx="14" /><text className="pv-label" x="62" y="280">EVIDENCE</text>{['Pod events · 14', 'Container logs · 228', 'Metrics · 6 signals'].map((label, i) => <g key={label} transform={`translate(0 ${i * 47})`}><rect className="pv-icon-box" x="62" y="305" width="30" height="30" rx="8" /><path className="pv-accent-stroke" d="M70 320h14" /><text className="pv-copy pv-copy-bright" x="104" y="324">{label}</text></g>)}
    <rect className="pv-card" x="340" y="249" width="356" height="249" rx="14" /><text className="pv-label" x="360" y="280">DIAGNOSIS</text><text className="pv-heading" x="360" y="320">Memory limit regression</text><text className="pv-copy" x="360" y="348">Container OOMKilled after config rollout.</text><rect className="pv-well" x="360" y="372" width="316" height="87" rx="10" /><text className="pv-terminal pv-muted" x="376" y="399">resources:</text><text className="pv-terminal" x="392" y="423">memory: <tspan className="pv-amber">256Mi → 512Mi</tspan></text><text className="pv-micro" x="360" y="482">CONFIDENCE · HIGH</text>
    <rect className="pv-card" x="716" y="249" width="198" height="249" rx="14" /><text className="pv-label" x="736" y="280">VALIDATION</text>{['Policy check', 'Dry run', 'Health probe'].map((label, i) => <g key={label} transform={`translate(0 ${i * 47})`}><Status x={743} y={320} label={label} warn={i === 2} /></g>)}<rect className="pv-button" x="736" y="442" width="158" height="37" rx="9" /><text className="pv-button-copy" x="815" y="465" textAnchor="middle">REVIEW PATCH</text>
  </Frame>;
}

function Auth() {
  return <Frame id="auth">
    <rect className="pv-well" x="42" y="99" width="222" height="419" rx="14" /><text className="pv-label" x="62" y="130">ENDPOINTS</text>{['POST  /login', 'POST  /refresh', 'GET   /session', 'GET   /roles', 'POST  /logout'].map((label, i) => <g key={label} transform={`translate(0 ${i * 54})`}>{i === 0 && <rect className="pv-accent-soft" x="55" y="151" width="196" height="39" rx="8" />}<text className={i === 0 ? 'pv-terminal pv-amber' : 'pv-terminal pv-muted'} x="67" y="176">{label}</text></g>)}
    <rect className="pv-card" x="284" y="99" width="630" height="238" rx="14" /><text className="pv-label" x="304" y="130">REQUEST</text><rect className="pv-pill" x="304" y="151" width="51" height="25" rx="7" /><text className="pv-micro pv-amber" x="329" y="168" textAnchor="middle">POST</text><text className="pv-terminal" x="368" y="169">/v1/auth/login</text><line className="pv-rule" x1="304" y1="193" x2="894" y2="193" /><text className="pv-terminal pv-muted" x="304" y="225">{'{'}</text><text className="pv-terminal" x="324" y="251"><tspan className="pv-amber">"email"</tspan>: "operator@platform.dev",</text><text className="pv-terminal" x="324" y="277"><tspan className="pv-amber">"scope"</tspan>: ["deploy:read", "audit:read"]</text><text className="pv-terminal pv-muted" x="304" y="303">{'}'}</text>
    <rect className="pv-card" x="284" y="357" width="392" height="161" rx="14" /><text className="pv-label" x="304" y="388">SECURITY CONTEXT</text>{['RBAC · operator', 'JWT · rotating', 'Audit · enabled'].map((label, i) => <g key={label} transform={`translate(${i * 119} 0)`}><rect className="pv-pill" x="304" y="414" width="108" height="31" rx="8" /><text className="pv-micro pv-copy-bright" x="358" y="434" textAnchor="middle">{label}</text></g>)}<text className="pv-micro" x="304" y="482">SESSION EXPIRES IN</text><text className="pv-copy pv-amber" x="427" y="482">14:32</text>
    <rect className="pv-accent-soft" x="696" y="357" width="218" height="161" rx="14" /><Status x={719} y={389} label="200 OK" /><text className="pv-metric-sm" x="716" y="446">Authorized</text><text className="pv-micro" x="716" y="472">SIGNED RESPONSE</text>
  </Frame>;
}

function Pipeline() {
  const stages = [['01', 'Source', 'Ready'], ['02', 'Build', 'Complete'], ['03', 'Test', 'Passed'], ['04', 'Deploy', 'Synced']];
  return <Frame id="pipeline"><text className="pv-heading" x="42" y="118">Pipeline #184</text><text className="pv-copy" x="42" y="140">main · 7c91a2f · triggered by push</text><rect className="pv-pill" x="810" y="101" width="104" height="28" rx="14" /><Status x={827} y={119} label="SUCCEEDED" />
    {stages.map(([number, label, time], i) => <g key={label} transform={`translate(${i * 220} 0)`}><rect className="pv-card" x="42" y="170" width="198" height="116" rx="14" /><circle className={i === 3 ? 'pv-accent' : 'pv-status'} cx="67" cy="195" r="8" /><text className="pv-micro" x="87" y="199">STAGE {number}</text><text className="pv-heading" x="62" y="239">{label}</text><text className="pv-micro" x="62" y="264">{time}</text>{i < 3 && <path className="pv-accent-stroke" d="M244 228h14l-5-5m5 5-5 5" />}</g>)}
    <rect className="pv-card" x="42" y="312" width="872" height="186" rx="14" /><text className="pv-label" x="62" y="343">DEPLOYMENT TOPOLOGY</text>{[['GitHub', 'main'], ['OpenShift', 'build + test'], ['Argo CD', 'sync healthy'], ['Production', '3 / 3 ready']].map(([label, sub], i) => <g key={label} transform={`translate(${i * 224} 0)`}><rect className={i === 3 ? 'pv-accent-soft' : 'pv-icon-box'} x="62" y="373" width="154" height="67" rx="11" /><text className="pv-copy pv-copy-bright" x="139" y="401" textAnchor="middle">{label}</text><text className={i === 3 ? 'pv-micro pv-amber' : 'pv-micro'} x="139" y="420" textAnchor="middle">{sub}</text>{i < 3 && <path className="pv-flow" d="M216 406h70m-10-6 10 6-10 6" />}</g>)}<text className="pv-micro" x="62" y="472">GITOPS SYNC · HEALTHY</text>
  </Frame>;
}

function ServiceSync() {
  return <Frame id="servicesync"><rect className="pv-well" x="42" y="99" width="370" height="419" rx="14" /><text className="pv-label" x="62" y="130">services.yaml</text><text className="pv-terminal pv-muted" x="62" y="169">services:</text>{[['gateway', 'v2.4.1'], ['auth', 'v1.8.0'], ['worker', 'v3.2.2']].map(([name, version], i) => <g key={name} transform={`translate(0 ${i * 70})`}><text className="pv-terminal" x="80" y="199">- name: <tspan className="pv-amber">{name}</tspan></text><text className="pv-terminal pv-muted" x="96" y="226">version: {version}</text></g>)}<line className="pv-rule" x1="62" y1="408" x2="392" y2="408" /><text className="pv-micro" x="62" y="438">3 SERVICES · CONFIG VALID</text><rect className="pv-button" x="62" y="460" width="330" height="37" rx="9" /><text className="pv-button-copy" x="227" y="483" textAnchor="middle">SYNC CONFIGURATION</text>
    <text className="pv-label" x="459" y="130">SERVICE MAP</text><rect className="pv-card" x="459" y="158" width="194" height="80" rx="13" /><text className="pv-copy pv-copy-bright" x="556" y="191" textAnchor="middle">gateway</text><text className="pv-micro" x="556" y="213" textAnchor="middle">v2.4.1</text><path className="pv-flow" d="M556 238v52m-6-10 6 10 6-10" /><rect className="pv-card" x="459" y="290" width="194" height="80" rx="13" /><text className="pv-copy pv-copy-bright" x="556" y="323" textAnchor="middle">auth</text><text className="pv-micro" x="556" y="345" textAnchor="middle">v1.8.0</text><path className="pv-flow" d="M653 330h71m-10-6 10 6-10 6" /><rect className="pv-accent-soft" x="724" y="290" width="190" height="80" rx="13" /><text className="pv-copy pv-copy-bright" x="819" y="323" textAnchor="middle">worker</text><text className="pv-micro pv-amber" x="819" y="345" textAnchor="middle">v3.2.2</text><rect className="pv-card" x="459" y="411" width="455" height="87" rx="13" /><Status x={484} y={443} label="Versions aligned" /><text className="pv-micro" x="484" y="473">NO GIT SUBMODULES · DECLARATIVE CONFIG</text>
  </Frame>;
}

const visuals: Record<ProjectVisualId, () => ReactNode> = { kubepilot: KubePilot, codewise: Codewise, monitoring: Monitoring, incidentzero: IncidentZero, auth: Auth, pipeline: Pipeline, servicesync: ServiceSync };

export function ProjectVisual({ id, featured = false }: { id: ProjectVisualId; featured?: boolean }) {
  const Visual = visuals[id];
  return <div className={`project-visual${featured ? ' project-visual-featured' : ''}`} aria-hidden="true"><svg viewBox="0 0 960 560" focusable="false"><Visual /></svg><span className="visual-disclaimer">Concept preview</span><span className="visual-sheen" /></div>;
}
