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
    summary: 'One agent per repository, with every result coming back to you before anything is integrated.',
    body: [
      'RepoChord grew out of the coordination problem that appears when one change crosses several repositories.',
      'It divides the work among isolated repository agents, brings their results back for review, and keeps integration under human control.',
    ],
  },
  {
    name: 'KodaCode',
    href: 'https://kodacode.dev',
    linkLabel: 'Visit kodacode.dev',
    summary: 'Coordinates coding agents on one change, and shows what each change costs in tokens.',
    body: [
      'The first version of KodaCode was a simple CLI I used to introduce my team at MCAP to agentic coding.',
      'Today it coordinates several coding agents on one change, lets you choose which model does which job, sends each model only what it needs to read, and shows what you are spending as you work.',
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
