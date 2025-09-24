# Permissions

Configure detailed access control and permissions for users and roles.

## Overview

Permissions provide granular control over what users can see and do within Trend Vision One Endpoint Security. They can be assigned directly to users or through roles.

## Permission Categories

### System Permissions
- **User Management** - Create, modify, delete user accounts
- **System Configuration** - Modify global settings
- **License Management** - View and manage licenses
- **Backup/Restore** - System backup and recovery operations

### Policy Permissions
- **Policy Creation** - Create new security policies
- **Policy Modification** - Edit existing policies
- **Policy Deployment** - Deploy policies to endpoints
- **Policy Deletion** - Remove policies from system

### Security Permissions
- **Event Viewing** - Access security events and logs
- **Quarantine Management** - Manage quarantined items
- **Threat Response** - Respond to security incidents
- **Scan Control** - Initiate and control scans

### Reporting Permissions
- **Report Generation** - Create and run reports
- **Report Scheduling** - Set up automated reports
- **Report Export** - Export report data
- **Dashboard Access** - View security dashboards

## Permission Management

### Assigning Permissions
1. Navigate to Administration > User Management > Permissions
2. Select user or role
3. Choose permission categories
4. Set specific permissions within each category
5. Apply changes

### Permission Inheritance
- **Role-Based** - Permissions inherited from assigned roles
- **Direct Assignment** - Permissions assigned directly to users
- **Cumulative** - Users receive all permissions from all sources
- **Override** - Direct permissions can override role permissions

## Advanced Permission Features

### Conditional Permissions
- **Time-Based** - Permissions active during specific hours
- **Location-Based** - Permissions based on network location
- **Context-Aware** - Permissions based on current system state

### Permission Auditing
- **Access Logging** - Track permission usage
- **Change History** - Monitor permission modifications
- **Compliance Reporting** - Generate permission audit reports
- **Alert Configuration** - Notify on permission changes

## Security Considerations

### Best Practices
- **Least Privilege** - Grant minimum necessary permissions
- **Regular Review** - Periodically audit user permissions
- **Separation of Duties** - Divide critical functions among users
- **Documentation** - Maintain records of permission assignments

### Common Pitfalls
- **Over-Privileging** - Granting excessive permissions
- **Orphaned Permissions** - Permissions without clear ownership
- **Inconsistent Assignment** - Different permissions for similar roles
- **Lack of Monitoring** - Not tracking permission usage

## Permission Matrix

| Function | Admin | Analyst | Help Desk | Read-Only |
|----------|-------|---------|-----------|-----------|
| User Management | ✓ | ✗ | ✗ | ✗ |
| Policy Creation | ✓ | ✓ | ✗ | ✗ |
| Event Viewing | ✓ | ✓ | ✓ | ✓ |
| Quarantine Management | ✓ | ✓ | ✗ | ✗ |
| Report Generation | ✓ | ✓ | ✓ | ✓ |
| System Configuration | ✓ | ✗ | ✗ | ✗ |

## Troubleshooting Permissions

### Common Issues
- **Access Denied** - User lacks required permissions
- **Partial Access** - Some features unavailable
- **Permission Conflicts** - Conflicting role assignments
- **Inheritance Problems** - Permissions not properly inherited

### Resolution Steps
1. Verify user role assignments
2. Check direct permission grants
3. Review permission inheritance
4. Test with known working configuration
5. Contact administrator if needed

## Related Topics

- [User Accounts](./user-accounts) - Create and manage user accounts
- [User Roles](./user-roles) - Configure role-based access control