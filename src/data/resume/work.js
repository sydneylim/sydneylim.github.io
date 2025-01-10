/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Hewlett Packard Enterprise',
    position: 'Cloud Developer I',
    url: 'https://www.hpe.com/us/en/greenlake.html',
    startDate: '2024-11',
    summary: '',
    highlights: [
      'Working in the core development team of Morpheus, a hybrid-cloud management platform.',
      'Practicing full-stack software development, primarily using Groovy on Grails.',
    ],
  },
  {
    name: 'Morpheus Data',
    position: 'Software Engineer',
    url: 'https://www.morpheusdata.com/',
    startDate: '2024-02',
    endDate: '2024-10',
    summary: 'Acquired by HPE in November 2024.',
    highlights: [
      'Worked in the core development team to develop Morpheus, a hybrid-cloud management platform.',
      'Practiced full-stack software development, primarily using Groovy on Grails.',
    ],
  },
  {
    name: 'Invoca',
    position: 'Software Engineering Intern',
    url: 'https://www.invoca.com/',
    startDate: '2022-06',
    endDate: '2022-09',
    summary: '',
    highlights: [
      'Worked with a small team on full-stack software development using Ruby on Rails and React.js.',
      'Practiced agile software development skills through pair programming, standups, retrospectives, and backlog refinement.',
    ],
  },
  {
    name: 'Jones Lang LaSalle',
    position: 'Data Loss Prevention Intern',
    url: 'https://www.us.jll.com/',
    startDate: '2021-08',
    endDate: '2021-09',
    summary: '',
    highlights: [
      'Worked on a data loss prevention project to pinpoint sources of and minimize internal threats.',
      'Implemented a robotic process automation (RPA) script to automate data extraction in Python.',
      'Utilized Microsoft Power BI, Tableau, and SQL to compile, cleanse, analyze, and present the data.',
    ],
  },
  {
    name: 'Bertram Labs',
    position: 'Data Science Intern',
    url: 'https://www.bertramlabs.com/',
    startDate: '2019-06',
    endDate: '2019-09',
    summary: '',
    highlights: [
      'Designed a database in MySQL/PostgreSQL. Utilized Microsoft Power BI to cleanse a user database.',
      'Designed and presented a prototype UI for the database in a pre-production environment.',
      'Researched natural language processing and data warehouses (Amazon AWS, Microsoft Azure, Google BigQuery).',
    ],
  },
];

export default work;
