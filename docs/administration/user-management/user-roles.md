# User Roles

Configure role-based access control to manage user permissions efficiently.

## Overview

User roles provide a way to group permissions and assign them to users based on their job responsibilities. This simplifies permission management and ensures consistent access control.

## Built-in Roles

### Administrator
- Full system access
- User and policy management
- System configuration
- All security features

### Security Analyst
- View security events and reports
- Manage quarantine
- Configure scan settings
- Limited administrative access

### Help Desk
- View endpoint status
- Perform basic troubleshooting
- Access user information
- Limited configuration access

### Read-Only User
- View dashboards and reports
- Access documentation
- No configuration changes
- No administrative access

## Custom Roles

### Creating Custom Roles
1. Navigate to Administration > User Management > User Roles
2. Click "Create Role"
3. Define role properties:
   - Role name
   - Description
   - Permission set
4. Save the role

### Permission Categories
- **System Administration** - User management, system settings
- **Policy Management** - Create and deploy policies
- **Security Operations** - Monitor threats, manage events
- **Reporting** - Generate and view reports
- **Endpoint Management** - Manage agents and endpoints

## Role Assignment

### Assigning Roles to Users
- Single role assignment
- Multiple role assignment
- Role inheritance
- Temporary role elevation

### Role-Based Restrictions
- Feature access control
- Data visibility limits
- Action permissions
- Administrative boundaries

## Best Practices

- Follow principle of least privilege
- Create roles based on job functions
- Regularly review role assignments
- Document role purposes and permissions
- Test roles before deployment

## Related Topics

- [User Accounts](./user-accounts) - Create and manage user accounts
- [Permissions](./permissions) - Detailed permission configuration