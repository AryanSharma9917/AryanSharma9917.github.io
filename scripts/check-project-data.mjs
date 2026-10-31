import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/data/projects.ts', import.meta.url), 'utf8');
const dataSource = source.slice(source.indexOf('export const projects'));
const expectedOrder = ['kubepilot', 'codewise', 'monitoring', 'incidentzero', 'auth', 'pipeline', 'servicesync'];
const ids = [...dataSource.matchAll(/\bid:\s*'([^']+)'/g)].map(match => match[1]);

if (JSON.stringify(ids) !== JSON.stringify(expectedOrder)) {
  throw new Error(`Project order mismatch. Expected ${expectedOrder.join(', ')}, received ${ids.join(', ')}`);
}

for (const requiredField of ['overview:', 'problem:', 'solution:', 'capabilities:', 'workflow:', 'stack:', 'limitations:', 'media:']) {
  const occurrences = dataSource.split(requiredField).length - 1;
  if (occurrences !== expectedOrder.length) throw new Error(`Expected ${expectedOrder.length} ${requiredField} fields, found ${occurrences}`);
}

const insecureLinks = [...dataSource.matchAll(/href:\s*'([^']+)'/g)].map(match => match[1]).filter(href => !href.startsWith('https://'));
if (insecureLinks.length) throw new Error(`Non-HTTPS project links found: ${insecureLinks.join(', ')}`);

console.log(`Validated ${ids.length} ordered project case studies and their required fields.`);
