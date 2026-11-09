export interface Project {
  name: string;
  href: string;
  linkLabel?: string;
  summary: string;
  body: string[];
}

export const projects: Project[] = [
  {
    name: 'CiteLoom',
    href: 'https://github.com/sageil/citeloom',
    summary: 'Research over your own documents, with every answer tied to evidence you can inspect.',
    body: [
      'I built CiteLoom to make AI-assisted research easier to trust.',
      'It gives people a private place to work with their own documents while keeping every answer connected to evidence they can inspect.',
    ],
  },
  {
    name: 'RepoChord',
    href: 'https://github.com/sageil/RepoChord',
    summary: 'Isolated agents per repository, results brought back for review, integration kept human.',
    body: [
      'RepoChord grew out of the coordination problem that appears when one change crosses several repositories.',
      'It divides the work among isolated repository agents, brings their results back for review, and keeps integration under human control.',
    ],
  },
  {
    name: 'KodaCode',
    href: 'https://kodacode.dev',
    linkLabel: 'Visit kodacode.dev',
    summary: 'A new generation of Agentic Orchestration app.',
    body: [
      'A new generation of Agentic Orchestration app.',
      'AI-powered software engineering platform that turns AI coding agents into a coordinated development team while cutting your tokens bill.',
    ],
  },
  {
    name: 'CrewAI Development',
    href: 'https://github.com/sageil/crewai-docker-image',
    summary: 'Agent experiments in Docker, with the container as an isolation boundary.',
    body: [
      'I created CrewAI Development to remove the setup work that gets in the way of experimenting with agent systems.',
      'It packages CrewAI, its development tools, and a ready-to-use editor into Docker, treating the container as an isolation boundary rather than only a deployment format.',
      'Agent execution stays inside the environment, while access to host files and services is controlled through explicit mounts and network configuration.',
    ],
  },
];
