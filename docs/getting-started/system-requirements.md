# System Requirements

Ensure your environment meets these requirements before installing Trend Vision One Endpoint Security.

## Management Server Requirements

### Hardware Requirements
- **CPU**: 2.4 GHz dual-core processor (minimum), 3.0 GHz quad-core (recommended)
- **Memory**: 4 GB RAM (minimum), 8 GB RAM (recommended)
- **Storage**: 40 GB available disk space (minimum), 100 GB (recommended)
- **Network**: 100 Mbps network connection

### Software Requirements
- **Operating System**: 
  - Windows Server 2019 or later
  - Windows Server 2016 (with latest updates)
- **Database**: 
  - Microsoft SQL Server 2017 or later
  - MySQL 8.0 or later
- **Web Browser**: 
  - Chrome 90+, Firefox 88+, Edge 90+, Safari 14+

## Endpoint Agent Requirements

### Windows Endpoints
- **Operating Systems**:
  - Windows 11 (all editions)
  - Windows 10 (version 1909 or later)
  - Windows Server 2022
  - Windows Server 2019
  - Windows Server 2016
- **Hardware**: 
  - 1 GB RAM minimum, 2 GB recommended
  - 2 GB available disk space
  - 1 GHz processor

### macOS Endpoints
- **Operating Systems**:
  - macOS 12 (Monterey) or later
  - macOS 11 (Big Sur)
  - macOS 10.15 (Catalina)
- **Hardware**:
  - 1 GB RAM minimum, 2 GB recommended
  - 1 GB available disk space
  - Intel or Apple Silicon processor

### Linux Endpoints
- **Supported Distributions**:
  - Ubuntu 20.04 LTS, 22.04 LTS
  - Red Hat Enterprise Linux 8, 9
  - CentOS 8, 9
  - SUSE Linux Enterprise 15
- **Hardware**:
  - 512 MB RAM minimum, 1 GB recommended
  - 1 GB available disk space
  - x86_64 processor

## Network Requirements

### Firewall Ports
- **HTTPS**: Port 443 (outbound)
- **HTTP**: Port 80 (outbound, for updates)
- **Management**: Port 4343 (bidirectional)
- **Agent Communication**: Port 4118 (inbound to server)

### Internet Connectivity
- Access to Trend Micro update servers
- Cloud-based threat intelligence services
- License validation services

### Bandwidth Requirements
- **Initial Deployment**: 10 Mbps per 100 endpoints
- **Ongoing Operations**: 1 Mbps per 100 endpoints
- **Update Distribution**: 5 Mbps per 100 endpoints

## Browser Requirements

### Supported Browsers
- **Google Chrome**: Version 90 or later
- **Mozilla Firefox**: Version 88 or later
- **Microsoft Edge**: Version 90 or later
- **Safari**: Version 14 or later

### Browser Settings
- JavaScript must be enabled
- Cookies must be enabled
- Pop-up blockers configured to allow console
- TLS 1.2 or higher required

## Additional Requirements

### Virtualization Support
- **VMware vSphere**: 6.7 or later
- **Microsoft Hyper-V**: Windows Server 2016 or later
- **Citrix XenServer**: 7.0 or later
- **KVM**: RHEL 8 or Ubuntu 20.04 host

### Cloud Platform Support
- **Amazon Web Services**: EC2 instances
- **Microsoft Azure**: Virtual machines
- **Google Cloud Platform**: Compute Engine
- **Private Cloud**: OpenStack, CloudStack

## Performance Considerations

### Sizing Guidelines
- **Small Environment**: Up to 500 endpoints
- **Medium Environment**: 500-2,000 endpoints  
- **Large Environment**: 2,000-10,000 endpoints
- **Enterprise Environment**: 10,000+ endpoints

### Resource Scaling
- Add 1 GB RAM per 1,000 additional endpoints
- Add 10 GB storage per 1,000 additional endpoints
- Consider load balancing for 5,000+ endpoints
- Plan for database clustering at enterprise scale

## Compatibility Notes

### Antivirus Exclusions
Configure exclusions in existing antivirus software for:
- Trend Micro installation directories
- Agent communication ports
- Database files and logs
- Temporary scan directories

### Third-Party Software
- Compatible with most endpoint management tools
- Supports integration with SIEM systems
- Works with network access control (NAC) solutions
- Compatible with backup and imaging software

## Pre-Installation Checklist

- [ ] Verify hardware meets minimum requirements
- [ ] Confirm operating system compatibility
- [ ] Check network connectivity and firewall rules
- [ ] Obtain necessary licenses and credentials
- [ ] Plan deployment strategy and timeline
- [ ] Configure antivirus exclusions if needed
- [ ] Backup existing security configurations

## Next Steps

Once you've verified all requirements are met:
1. Proceed to the [Installation Guide](./installation)
2. Follow the [Quick Start](./quick-start) tutorial
3. Configure your first policies in [Administration](../administration/)

For assistance with requirements verification, see our [Troubleshooting](../troubleshooting/) section.