
import SidebarItems from "./sidebar-items/sidebarItems";

const SideBarNew = () => {

    const items = [
        {
            label: 'Home',
            href: '/'

        },

        {
            label: 'Notification',
            href: '/'
        }
    ];
    return (
        <div>
            {items.map((item) => (
                <SidebarItems
                key = {item.href}
                href = {item.href}
                label = {item.label}
                />
            ))}
                
           

        </div>
    );
}

export default SideBarNew;