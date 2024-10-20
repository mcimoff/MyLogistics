import { Roles, Permissions } from './roles.js';

class RoleManager {
    constructor(userRole) {
        this.userRole = userRole;
    }

    hasPermission(action) {
        const allowedActions = Permissions[this.userRole] || [];
        return allowedActions.includes(action);
    }

    static getAllRoles() {
        return Object.values(Roles);
    }
}

export default RoleManager;