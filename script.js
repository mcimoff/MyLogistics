import RoleManager from './roleManager.js';
import { Roles } from './roles.js';

const userRole = Roles.USER; // Supongamos que el rol del usuario es 'user'
const roleManager = new RoleManager(userRole);

console.log('¿Puede editar?', roleManager.hasPermission('edit')); // true
console.log('¿Puede borrar?', roleManager.hasPermission('delete')); // falses