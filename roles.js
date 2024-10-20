const Roles = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest'
};

const Permissions = {
    [Roles.ADMIN]: ['create', 'edit', 'delete', 'view'],
    [Roles.USER]: ['edit', 'view'],
    [Roles.GUEST]: ['view']
};

export { Roles, Permissions };