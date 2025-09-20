const mainUrl = 'https://docs.trendmicro.com';

const enterpriseDropdownLinks = {
  type: 'dropdown',
  position: 'left',
  label: 'Enterprise',
  items: [
    {
      label: 'Apex Central',
      href: `${mainUrl}/apex-central`,
    },
    {
      label: 'Apex One as a Service',
      href: `${mainUrl}/apex-central-as-a-service`,
    },
    {
      label: 'Deep Discovery Inspector',
      href: `${mainUrl}/deep-discovery-inspector`,
    },
    {
      label: 'Trend Vision One',
      href: `${mainUrl}/trend-vision-one`,
    },
    {
      label: 'View all enterprise products...',
      href: `${mainUrl}/enterprise`,
    },
  ]
}

export default enterpriseDropdownLinks
