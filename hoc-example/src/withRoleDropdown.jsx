
const withRoleDropdown=(WrappedComponent)=>{
    return function RoleDropdownComponent({role,...props}){
        const dropdownData={
            admin:[
                { label: 'Group 1', items: ['Manage Users', 'Manage Orders'] },
                { label: 'Group 2', items: ['Settings', 'Reports'] },
            ],
            vendor: ['Inventory', 'Orders', 'Profile'],
            franchise: ['View Orders', 'Manage Franchise'],
        }
        const roleDropdownItems=dropdownData[role] || [];
        return (
            <WrappedComponent 
            dropdownItems={roleDropdownItems}
            role={role}
            {...props}
            />
        )
    }

    





    
}

export default withRoleDropdown