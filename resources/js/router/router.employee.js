import CreateEmployee from '../components/employee/CreateEmployee'
import Employees from '../components/employee/Employees'
import UpdateEmployee from '../components/employee/UpdateEmployee'

export default [
    {
        name: 'create-employee',
        path: '/employee/create',
        component: CreateEmployee
    },
    {
        name: 'employees',
        path: '/employee',
        component: Employees
    },
    {
        name: 'update-employee',
        path: '/employee/:id',
        component: UpdateEmployee
    },

]


