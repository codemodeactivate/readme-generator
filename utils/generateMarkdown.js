// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue)](${renderLicenseLink(license)})`;
  }

  //https://img.shields.io/badge/License-$license-blue
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Academic Free license v3.0':
      return 'https://opensource.org/license/afl-3-0-php/';
    case 'Apache license 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'Artistic License 2.0':
      return 'https://opensource.org/license/artistic-license-2-0-php/';
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt'
    case 'BSD 2-clause "Simplified" license':
      return 'https://choosealicense.com/licenses/bsd-2-clause/'
    case 'BSD 3-clause "New" or "Revised" license':
      return 'https://choosealicense.com/licenses/bsd-3-clause/'
    case 'BSD 3-clause Clear license':
      return 'https://spdx.org/licenses/BSD-3-Clause-Clear.html'
    case 'Creative Commons license family':
      return 'https://creativecommons.org/licenses/'
    case 'Create Commons Zero v1.0 Universal':
      return 'https://creativecommons.org/publicdomain/zero/1.0/'
    case 'Create Commons Attribution 4.0':
      return 'https://creativecommons.org/licenses/by/4.0/'
    case  'Creative Commons Attribution Share Alike 4.0':
      return 'https://creativecommons.org/licenses/by-sa/4.0/'
    case 'Do What The F*ck You Want To Public License':
      return 'http://www.wtfpl.net/'
    case 'Educational Community License v2.0':
      return 'https://opensource.org/license/ecl-2-0/'
    case 'Eclipse Public License 1.0':
      return 'https://www.eclipse.org/legal/epl-v10.html'
    case 'Eclipse Public License 2.0':
      return 'https://www.eclipse.org/legal/epl-2.0/'
    case 'European Union Public License 1.1':
      return 'https://spdx.org/licenses/EUPL-1.1.html'
    case 'GNU Affero General Public License v3.0':
      return 'https://www.gnu.org/licenses/agpl-3.0.en.html'
    case 'https://www.gnu.org/licenses/gpl-family/':
      return 'https://www.gnu.org/licenses/gpl-family/'
    case 'GNU General Public License v2.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
    case 'GNU General Public License v3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    case 'GNU Lesser General Public License family':
      return 'https://www.gnu.org/licenses/lgpl-family/'
    case 'GNU Lesser General Public License v2.1':
      return 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html'
    case 'GNU Lesser General Public License v3.0':
      return 'https://www.gnu.org/licenses/lgpl-3.0.en.html'
    case 'ISC':
      return 'https://www.isc.org/licenses/'
    case 'LaTeX Project Public License v1.3c':
      return 'https://www.latex-project.org/lppl/lppl-1-3c/'
    case 'Microsoft Public License':
      return 'https://opensource.org/licenses/MS-PL'
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
    case 'Mozilla Public License 2.0':
      return 'https://www.mozilla.org/en-US/MPL/2.0/'
    case 'Open Software License 3.0':
      return 'https://opensource.org/licenses/OSL-3.0'
    case 'PostgreSQL License':
      return 'https://www.postgresql.org/about/licence/'
    case 'SIL Open Font License 1.1':
      return 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=ofl'
    case 'University of Illinois/NCSA Open Source License':
      return 'https://spdx.org/licenses/NCSA.html'
    case 'The Unlicense':
      return 'https://unlicense.org/'
    case 'zLib License':
      return 'https://opensource.org/license/zlib-license-php/'
    default:
      break;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
